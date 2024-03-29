<template>
    <div>
        <div class="main__content">
            <h1>{{ userData.user.first_name }} {{userData.user.last_name }}</h1>

            <h4><b>Role</b>: {{ (role.charAt(0).toUpperCase() + role.slice(1)).replace(/-/g, ' ') }}</h4>

            <div class="info__basic">
                <h5><b>Date of birth</b>: {{ formatDate(userData.user.date_of_birth) }}</h5>
                <h5><b>Age</b>: {{ getAge(userData.user.date_of_birth) }}</h5>
                <h5><b>Sex</b>: {{ getGender(userData.user.gender) }}</h5>
                <h5><b>Email address</b>: {{ userData.user.email ? userData.user.email : 'Email not stated' }}</h5>
                <h5><b>Phone number</b>:
                  {{ userData.user.phone_number ? userData.user.phone_number : 'Phone number not stated' }}</h5>
            </div>

            <div class="user__pic">
                <vs-card type="2">
                    <template #img>
                      <img v-if="(role === 'doctor') && (userData.user.gender === 'F')" src="@/assets/female_doctor_avtr.png" alt="" width="200" height="300">
                      <img v-else-if="(role === 'doctor') && (userData.user.gender !== 'F') " src="@/assets/male_doctor_avtr.png" alt="" width="200" height="300">
                      <img v-else-if="(role !== 'doctor') && (userData.user.gender === 'F')" src="@/assets/female_user1_sans_kruh.png" alt="" width="200" height="300">
                      <img v-else src="@/assets/male_usr_sans_kruh.png" alt="" width="200" height="300">
                  </template>

                    <template #interactions>
                        <vs-tooltip>
                            <vs-button @click="redirectToEdit(userData.user.id, role)">
                                <box-icon
                                    name='comment-edit'
                                    animation='tada-hover'
                                />
                            </vs-button>

                            <template #tooltip>
                                  Edit profile
                            </template>
                        </vs-tooltip>
                    </template>
                </vs-card>
            </div>
        </div>

        <div 
            class="main__content"
            v-if="role === 'doctor'"
        >
            <user-profile-doctor :doctor="userData"/>
        </div>

        <div 
            class="main__content"
            v-if="role === 'patient'"
        >
            <user-profile-patient :patient="userData"/>
        </div>

        <div 
            class="main__content"
            v-if="role === 'health-insurance-worker'"
        >
            <user-profile-hc-worker :worker="userData"/>
        </div>
    </div>
</template>


<script>
import PatientsService from "@/services/patientsService.js";
import DoctorsService from "@/services/doctorsService.js";
import HealthcareWorkersService from "@/services/healthcareWorkersService.js";

import UserProfileDoctor from "@/views/general/userProfile/UserProfileDoctor";
import UserProfileHcWorker from "@/views/general/userProfile/UserProfileHcWorker";
import UserProfilePatient from "@/views/general/userProfile/UserProfilePatient";

import StateUtils from "@/utils/stateUtils";

export default {
    name: 'UserProfile', 
    
    props: {
        id: String,
        role: String,
    },

    components: {
        UserProfileDoctor,
        UserProfileHcWorker,
        UserProfilePatient,
    },

    data:() => ({
        userData: {},
    }),

    async created() {
        if(this.role === 'patient') {
            PatientsService.get(this.id)
            .then(response => {
                this.userData = response.data;
            })
        }

        if(this.role === 'doctor') {
            DoctorsService.get(this.id)
            .then(response => {
                this.userData = response.data;
            })
        }

        if(this.role === 'health-insurance-worker') {
            HealthcareWorkersService.get(this.id)
            .then(response => {
                this.userData = response.data;
            })
        }

        if(this.role === 'admin') {
            DoctorsService.get(this.id)
            .then(response => {
                this.userData = response.data;
            })
        }
    },
    
    methods: {
        formatDate(date) {
            const day = date.slice(8, 10);
            const month = date.slice(5, 7);
            const year = date.slice(0, 4);
            return day + '. ' + month + '. ' + year;
        },

        getAge(dateString) {
            const today = new Date();
            const birthDate = new Date(dateString);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                  age--;
            }

            if(age === 0) {
                return m + ' months';
            }

            return age + ' years';
        },

        redirectToEdit(id, role) {
            this.$router.push({ name: 'edit-profile', params: { id: id, role: role }});
        },

        getGender(rawGender) {
            return StateUtils.getGenderState(rawGender);
        }
    },
}
</script>

<style scoped>
    box-icon {
        fill: #fbfbfb;
    }

    .user__pic {
        position: absolute;
        right: 9%;
        top: 5.5em;
        width: 20%;
    }

    .info__basic {
        padding-bottom: 2em;
        padding-top: 1em;
    }

    @media only screen and (max-width: 1200px) {
        .user__pic {
            display: none;
        }
    }   
</style>