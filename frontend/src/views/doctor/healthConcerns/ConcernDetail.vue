<template>
  <div>
      <div class="main__content">
          <h1>
            Detail of health concern <b>{{ concern.name }}</b>
          </h1>

          <div class="info__basic wrapper">
              <div class="first__row" style="width: 500px;">
                  <h5>
                      <b>Patient</b>
                      :
                      <span
                          class="redirect__profile"
                          @click="showUserProfile(concern.patient.user.id, 'patient')"
                      >
                          {{ concern.patient.user.first_name }} {{ concern.patient.user.last_name }}
                      </span>
                  </h5>

                  <h5>
                      <b>Doctor</b>
                      :
                      <span
                          class="redirect__profile"
                          @click="showUserProfile(concern.doctor.user.id, 'doctor')"
                      >
                          {{ concern.doctor.user.first_name }} {{ concern.doctor.user.last_name }}
                      </span>
                  </h5>

                  <h5><b>State</b>: {{ getState(concern.state) }}</h5>

                  <h5><b>Description</b>: {{ concern.description.length ? concern.description : '-' }}</h5>
              </div>

              <div
                  v-if="(userRole === 'admin' || userRole === 'doctor') && concern.state !== 'ED'"
                  class="submit__row"
                  style="margin-top: 1em; margin-right: 4em;"
              >
                  <vs-button border @click="redirectToExamination(concern.id)" style="width: 170px;">
                      Examine
                  </vs-button>

                  <vs-button class="buttons" @click="redirectToNewRequest(concern.id)" style="width: 170px;">
                      New examination request
                  </vs-button>

                  <vs-button
                      danger
                      class="buttons"
                      @click="reassign(concern)"
                      style="width: 170px;"
                  >
                      Assign to another doctor
                  </vs-button>
              </div>
          </div>
      </div>

      <div class="main__content">
          <h5>
              Previous examinations
          </h5>

          <vs-card-group>
              <vs-card v-for="examination in examinations" v-bind:key="examination.id"  @click="showExaminationDialog(examination)">
                  <template #title>
                      <h3>{{ getDate(examination.date_of_examination) }}</h3>
                  </template>

                  <template #img>
                      <img src="../../../assets/examination.svg" alt="" width="200px;height=150px;">
                  </template>

                  <template #text>
                      <p/>
                  </template>

                  <template #interactions>
                      <vs-button class="btn-chat" shadow primary icon @click="showExaminationDialog(examination)">
                          <box-icon style="fill: #000; margin-right: 0.5em;" name='message-square-detail'/>
                          <span class="span">
                              Show actions and description
                          </span>
                      </vs-button>
                  </template>
              </vs-card>

              <vs-card
                  @click="redirectToExamination(id)"
                  v-if="userRole !== 'patient'"
              >
                  <template #title>
                      <h3>Examine</h3>
                  </template>

                  <template #img>
                      <img src="../../../assets/new-examination-request.svg" alt="" style="width:200px;height:150px;">
                  </template>

                 <template #text>
                      <p>
                          Click here to create new examination.
                      </p>
                  </template>
              </vs-card>

               <vs-card v-if="!examinations.length && userRole === 'patient'" style="cursor: default !important;">
                  <template #img>
                    <img src="../../../assets/empty.svg" alt="" style="width:200px;height:150px;">
                  </template>

                  <template #text>
                      <p style="text-align: center; margin-top: 1em;">
                          <b>No examinations</b>
                      </p>
                  </template>
              </vs-card>
        </vs-card-group>
      </div>

      <div class="main__content">
          <h5>
              Doctor's reports for this health concern
          </h5>

          <vs-card-group>
              <vs-card v-for="report in reports" v-bind:key="report.id" @click="showReportDialog(report)">
                  <template #img>
                    <img v-if="report.photo === null" src="../../../assets/missing-image.svg" alt="">
                    <img v-else :src="report.photo" alt="">
                  </template>

                  <template #text>
                      <p style="margin-top: 1em;">
                          {{ report.description }}
                      </p>
                  </template>

                  <template #interactions>
                      <vs-button class="btn-chat" shadow primary icon @click="showReportDialog(report)">
                          <box-icon style="fill: #000; margin-right: 0.5em;" name='message-square-detail'/>
                          <span class="span">
                              <b>Show more details</b>
                          </span>
                      </vs-button>
                  </template>
              </vs-card>

              <vs-card v-if="!reports.length" style="cursor: default !important;">
                  <template #img>
                    <img src="../../../assets/empty.svg" alt="" style="width:200px;height:150px;">
                  </template>

                  <template #text>
                      <p style="text-align: center; margin-top: 1em;">
                          <b>No reports</b>
                      </p>
                  </template>
              </vs-card>
        </vs-card-group>
      </div>
    
      <vs-dialog
          width="500px"
          v-model="activeAssign"
      >
          <template #header>
              <h5>
                  Select new manager of <b>{{ toReassign.name }}</b>
              </h5>
          </template>

          <select
              v-model="newDoc"
              class="popup__center"
          >
              <option
                  v-for="doctor in availableWithoutCurrent"
                  :key="doctor.user.id"
                  :label="doctor.user.first_name"
                  :value="doctor.user.id"
              >
                  {{ doctor.user.first_name }}
              </option>
          </select>

          <template #footer>
              <div class="popup__right">
                  <vs-button
                      success
                      @click="finishReassign()"
                  >
                      Save
                  </vs-button>
              </div>
          </template>
      </vs-dialog>

        <vs-dialog
            width="500px"
            v-model="activeExaminationDetail"
        >
            <template #header>
                <h5>
                    Examination date: {{ getDate(detailExamination.date_of_examination) }}
                </h5>
            </template>

            <div style="padding-left: 1em;">
                <h6>Brief description of examination:</h6>

                <p> {{ detailExamination.description }} </p>

                <h6>Actions performed during this examination:</h6>

                <div
                    v-for="(action, index) in detailExamination.actions"
                    v-bind:key="index"
                >
                    <div>
                        <span>{{ index+1 }}. <b>{{ action }}</b></span>
                    </div>
                </div>
            </div>
        </vs-dialog>

        <vs-dialog
            :width="detailReport.photo === null ? '500px' : '800px'"
            v-model="activeReportDetail"
        >
            <div style="padding: 1.5em;">
              <h6><b>Date</b>: {{ detailReport.date_of_created }}</h6>

              <br>

              <p><b>Description</b>: {{ detailReport.description }}</p>

              <br>

              <h6><b>Attached file</b>: <span v-if="detailReport.photo === null">No attached files</span></h6>

              <img v-if="detailReport.photo !== null" :src="detailReport.photo" alt="" width="700">
            </div>

        </vs-dialog>
  </div>
</template>

<script>
import HealthConcernsService from "@/services/healthConcernsService";
import ExaminationsService from "@/services/examinationsService";
import DoctorsService from "@/services/doctorsService";
import DoctorsReportsService from "@/services/doctorsReportsService";

import DateUtils from "@/utils/dateUtils";
import NotificationsUtils from "@/utils/notificationsUtils";
import StateUtils from "@/utils/stateUtils";

import { mapState } from "vuex";

export default {
  name: "ConcernDetail",

  props: {
    id: String,
  },

  data:() => ({
      activeAssign: false,

      activeExaminationDetail: false,
      detailExamination: {},

      activeReportDetail: false,
      detailReport: {},

      toReassign: {},
      newDoc: -1,

      concern: {},
      availableDoctors: [],
      examinations: [],
      reports: [],
  }),

  computed: {
      ...mapState([
          'user',
          'userRole',
      ]),

      availableWithoutCurrent() {
          return this.availableDoctors.filter((doctor) => doctor.user.id !== this.user.id);
      }
  },

  async created() {
      HealthConcernsService.get(this.id)
      .then(response => {
          this.concern = response.data;
      })

      DoctorsService.getAll()
      .then(response => {
          this.availableDoctors = response.data;
      })

      ExaminationsService.getByConcern(this.id)
      .then(response => {
          this.examinations = response.data;
      })

      DoctorsReportsService.getByConcern(this.id)
      .then(response => {
          this.reports = response.data;
      })
  },

  methods: {
      getDate(date) {
          return DateUtils.getDateForFrontend(date);
      },

      getState(rawState) {
          return StateUtils.getExaminationState(rawState);
      },

      redirectToNewRequest(healthConcernId) {
          this.$router.push({ name: 'newExaminationRequest', params: { id: healthConcernId }});
      },

      redirectToExamination(healthConcernId) {
          this.$router.push({ name: 'examine', params: { id: healthConcernId }});
      },

      showUserProfile(userId, role) {
          this.$router.push({ name: 'profile', params: {id: userId, role: role.replace(/ /g, '-').toLowerCase() }})
      },

      reassign(concern) {
          this.activeAssign = true;
          this.toReassign = concern;
          this.newDoc = concern.doctor.id;
      },

      showExaminationDialog(examination) {
          this.detailExamination = {...examination};
          this.activeExaminationDetail = true;
      },

      showReportDialog(report) {
          this.detailReport = {...report};
          this.activeReportDetail = true;
      },

      async finishReassign() {
          let newConcern = {...this.toReassign}
          newConcern.doctor = this.newDoc;
          newConcern.patient = this.toReassign.patient.user.id;

          HealthConcernsService.update(this.toReassign.id, newConcern)
          .then(response => {
              console.log(response);
              NotificationsUtils.successPopup('Manager of ' + newConcern.name + ' successfully changed.', this.$vs);
              if(this.userRole !== 'admin') {
                this.$router.back();
              }

              HealthConcernsService.get(this.id)
              .then(response => {
                  this.concern = response.data;
              })
          })
          .catch(e => {
              NotificationsUtils.failPopup(e, this.$vs);
          });
      }
  }
}
</script>

<style scoped>
    .info__basic {
        padding-bottom: 2em;
        padding-top: 1em;
    }

    .redirect__profile:hover {
        cursor: pointer;
        font-weight: 600;
        text-decoration: underline;
    }

    .popup__center {
        font-family: 'Roboto', sans-serif;
        border-radius:10px;
        border:1px solid #f9fcfd;
        background-color: #eef5f8;
        display: block;
        padding-bottom: 1em;
        width: 40%;
        margin: 2em auto 5em;
    }

    box-icon {
        fill: #fbfbfb;
    }
</style>