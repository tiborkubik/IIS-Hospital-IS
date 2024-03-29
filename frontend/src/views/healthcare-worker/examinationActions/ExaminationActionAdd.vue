<template>
    <div>
        <div class="main__content">
            <h4>
              Add new examination action
            </h4>

            <br>

            <p>
                In this module you can list all the medical actions that doctors can perform during their examination.<br>
                They are registered in forms created by doctors during the physical examination.
                These can include routine checkups, medical scans, blood sampling, etc.<br>
                It is necessary to specify whether the action is free of charge, or has to be paid for. According to this information, you will be able to manage payments covered by the insurance company.

            </p>

          <form action="#" v-on:submit.prevent="addNewExamination">
            <div class="wrapper">
                <div class="first__row">
                    <vs-input
                        v-model="newAction.name"
                        label="Type of action"
                        placeholder="Enter type of new action"
                        class="input__items"
                        primary
                    >
                        <template
                            #message-warn
                            v-if="newAction.name.length === 0"
                        >
                            Required
                        </template>

                        <template
                            #message-danger
                            v-if="newAction.name.length > 254"
                        >
                            Action name too long
                        </template>
                    </vs-input>
                </div>

                <div class="second__row">
                    <vs-select
                        v-model="newAction.action_manager_id"
                        class="input__items"
                        label="Action manager"
                        color="primary"
                        :key="availableWorkers.length"
                    >
                        <template
                            #message-warn
                            v-if="newAction.action_manager_id === -1"
                        >
                            Required
                        </template>

                        <vs-option
                            v-for="worker in availableWorkers"
                            :key="worker.user.id"
                            :label="getFullName(worker.user)"
                            :value="worker.user.id"
                        >
                            {{ worker.user.first_name }} {{ worker.user.last_name }}
                        </vs-option>
                    </vs-select>
                </div>

                <div class="third__row">
                    <vs-switch
                        v-model="newAction.is_action_paid"
                        class="switch"
                    >
                        <template #off>
                            Free
                        </template>

                        <template #on>
                            Paid for
                        </template>
                    </vs-switch>
                </div>

                <div class="submit__row">
                     <vs-button
                         :disabled="newAction.name.length === 0 ||
                                    newAction.action_manager_id === -1 ||
                                    newAction.name.length > 254"
                     >
                         Submit
                     </vs-button>
                </div>
            </div>
          </form>
        </div>

        <img src="@/assets/add-action.svg" alt="" class="background__img">
    </div>
</template>


<script>
import ExaminationActionsService from "@/services/examinationActionsService";
import HealthcareWorkersService from "@/services/healthcareWorkersService";

import NotificationsUtils from "@/utils/notificationsUtils";

export default {
    name: 'ExaminationActionAdd',    

    data:() => ({
        newAction: {
            name: '',
            is_action_paid: false,
            action_manager_id: -1,
        },
        availableWorkers: [],
    }),
    
    async created() {
        HealthcareWorkersService.getAll()
            .then(response => {
            this.availableWorkers = response.data;
            })
    },
    
    methods: {
        async addNewExamination() {
            const data = {
                name: this.newAction.name,
                is_action_paid: this.newAction.is_action_paid,
                action_manager: this.newAction.action_manager_id,
            };

            ExaminationActionsService.create(data)
                .then(response => {
                    console.log(response);
                    NotificationsUtils.successPopup('Examination action added to database.', this.$vs);
                    this.clearFields();
                })
                .catch(e => {
                    NotificationsUtils.failPopup(e, this.$vs);
                });
        },

        getFullName(usr) {
          return usr.first_name + ' ' + usr.last_name;
        },

        clearFields() {
            this.newAction = {
                name: '',
                is_action_paid: false,
                action_manager_id: -1,
            }
        }
    },
}
</script>

<style scoped>
    .switch {
        width: 80px;
        margin-left: 6px;
        margin-bottom: 2em;
    }

    .input__items {
        padding: 16px 0;
        margin-left: 6px;
    }

    .vs-button {
        float: right;
        padding: 5px 30px;
    }

    .background__img {
        position: absolute;
        right: 5em;
        bottom: 0;
        width: 30%;
    }
</style>