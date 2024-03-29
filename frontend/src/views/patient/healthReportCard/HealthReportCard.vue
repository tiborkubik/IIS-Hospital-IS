<template>
    <div>
        <div class="main__content">
            <h1>My health report card</h1>

            <br>

            <p>This is your health report card. It provides you with an overview of your past and current medical difficulties. You can see all the examinations and doctor reports related to a given concern
              <br>
              by clicking on the name of a health concern or by clicking on 'Show more details'.
            </p>
        </div>

        <div class="main__content">
            <h5>
                General health information
            </h5>

            <br>

            <h6>
                <b>Main doctor: </b>

                <span
                    @click="redirectToDocProfile(currentPatient.main_doctor.user.id, 'doctor')"
                    class="redirect__profile"
                >
                    {{ currentPatient.main_doctor.user.first_name }} {{ currentPatient.main_doctor.user.last_name }}
                </span>
            </h6>

            <br>

            <h6>
              <b>Height:</b> {{ currentPatient.height }} cm
            </h6>

            <h6>
              <b>Weight:</b> {{ currentPatient.weight }} kg
            </h6>

            <br>

            <h6 v-if="currentPatient.taking_medications">
                <b>Medications:</b> {{ currentPatient.medications }}
            </h6>

            <h6 v-else>
                <b>No medications taken</b>
            </h6>

            <br>

            <div>
                <h6>
                    <b>Emergency contact person:</b>

                    <br>

                    <span v-if="currentPatient.ec_first_name.length || currentPatient.ec_last_name">
                        Name: {{ currentPatient.ec_first_name }} {{ currentPatient.ec_last_name }}
                    </span>

                    <br>

                    <span v-if="currentPatient.ec_relationship.length">
                        Relation: {{ currentPatient.ec_relationship }}
                    </span>

                    <br>

                    <span v-if="currentPatient.ec_contact_number.length">
                        Contact number: <b>{{ currentPatient.ec_contact_number }}</b>
                    </span>
                </h6>
            </div>
        </div>

        <div class="main__content">
            <h5>
                Filter your health concerns
            </h5>

          <form action="#" v-on:submit.prevent="getFiltered">
            <div class="wrapper">
                <div class="first__row">
                    <vs-select
                        v-model="filter.state"
                        label="State"
                        color="primary"
                    >
                        <vs-option
                            value="WT"
                            label="Waiting"
                        >
                            Waiting
                        </vs-option>

                        <vs-option
                            value="ON"
                            label="Ongoing"
                        >
                            Ongoing
                        </vs-option>

                        <vs-option
                            value="ED"
                            label="Ended"
                        >
                            Ended
                        </vs-option>
                    </vs-select>
                </div>

                <div class="submit__row" style="margin-top: 2em; margin-bottom: 4em;">
                    <vs-button
                        @click="clearFilter()"
                        style="padding: 3px 25px;"
                        border
                    >
                        Clear filter
                    </vs-button>

                    <vs-button
                        style="padding: 3px 42px;"
                    >
                        Apply filter
                    </vs-button>
                </div>
            </div>
          </form>
        </div>

        <div class="main__content">
            <h5>
                Your health concerns
            </h5>

            <br>

            <vs-table
                striped
                class="actions__table"
            >
                <template #header>
                    <vs-input
                        v-model="searchValue"
                        border
                        placeholder="Search"
                    />
                </template>

                <template #thead>
                    <vs-tr>
                        <vs-th>
                            Name of health concern
                        </vs-th>

                        <vs-th>
                            Description
                        </vs-th>

                        <vs-th>
                            State
                        </vs-th>

                        <vs-th>
                            Actions
                        </vs-th>
                    </vs-tr>
                </template>

                <template #tbody>
                    <vs-tr
                        :key="i"
                        v-for="(concern, i) in $vs.getPage($vs.getSearch(healthConcerns, searchValue), page, max)"
                        :data="concern"
                    >
                        <vs-td>
                            <span @click="redirectToConcernDetail(concern.id)" class="concern__name">
                                <b>{{ concern.name }}</b>
                            </span>
                        </vs-td>

                        <vs-td>
                            {{ concern.description.length ? concern.description : '-' }}
                        </vs-td>

                        <vs-td>
                            {{ getState(concern.state) }}
                        </vs-td>

                        <vs-td>
                            <vs-button
                              class="right__part"
                              border
                              @click="redirectToConcernDetail(concern.id)"
                            >
                                Show more details
                            </vs-button>
                        </vs-td>
                    </vs-tr>
                </template>

                <template #footer>
                    <vs-pagination
                        v-model="page"
                        :length="$vs.getLength(healthConcerns, max)"
                    />
                </template>
            </vs-table>
        </div>
    </div>
</template>

<script>
import HealthConcernsService from "@/services/healthConcernsService";
import PatientsService from "@/services/patientsService";

import StateUtils from "@/utils/stateUtils";

import { mapState } from "vuex";

export default {
    name: "HealthReportCard",

    data:() => ({
        page: 1,
        max: 5,
        searchValue: '',

        healthConcerns: [],

        currentPatient: {},

        filter: {
            state: -1,
        }
    }),

    computed: {
        ...mapState([
            'user',
            'userRole'
        ])
    },

    async created() {
        HealthConcernsService.getAllByPatient(this.user.id)
            .then(response => {
                this.healthConcerns = response.data;
            })

        PatientsService.get(this.user.patient)
            .then(response => {
                this.currentPatient = response.data;
              console.log(this.currentPatient)
            })
    },

    methods: {
        getState(rawState) {
            return StateUtils.getExaminationState(rawState);
        },

        redirectToConcernDetail(concernId) {
          console.log(concernId)
           this.$router.push({ name: 'healthConcernDetail', params: {id: concernId }});
        },

        redirectToDocProfile(userId, role) {
            this.$router.push({ name: 'profile', params: {id: userId, role: role.replace(/ /g, '-').toLowerCase() }});
        },

        async clearFilter() {
            this.filter.state = -1;

             HealthConcernsService.getAllByPatient(this.user.id)
                 .then(response => {
                    this.healthConcerns = response.data;
                 })
        },

        async getFiltered() {
            HealthConcernsService.getFilteredByPatient(this.user.id, this.filter)
                .then(response => {
                    this.healthConcerns = response.data;
                })
        }
    },
}
</script>

<style scoped>
    .actions__table {
        width: 80%;
        margin: 1em auto 0;
    }
</style>
