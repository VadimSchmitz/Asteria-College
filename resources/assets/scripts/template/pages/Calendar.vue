<template>
    <div class="container">
        <div class="row justify-content-center">

            <div>
                <b-modal id="newEventModal" title="placeholder" @ok="newEventOk" @cancel="newEventCancel" @close="newEventCancel">
                    <p class="my-4">fill in yo</p>
                    <input type="text" id="end_date" class="form-control" v-model="newEvent.event_name">
                    <VueCtkDateTimePicker v-model="newEvent.start_date"  format="YYYY-MM-DDTHH:mm:ssZ"/>
                    <VueCtkDateTimePicker v-model="newEvent.end_date"  format="YYYY-MM-DDTHH:mm:ssZ"/>
                </b-modal>
            </div>

            <div class="col-md-8">
                <Fullcalendar @eventClick="showEvent"
                              @dateClick="dateClick"
                              @select="dateSelect"
                              locale="nl"
                              theme-system="lux"

                              selectable="true"
                              :select-mirror="true"
                              :plugins="calendarPlugins"
                              :events="events"
                              :header="{
                                  right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
                                  center: 'title',
                                  left: 'prev next today',
                              }"

                />
            </div>
        </div>
    </div>
</template>

<script>
    import Fullcalendar from "@fullcalendar/vue";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import TimeGridPlugin from "@fullcalendar/timegrid";
    import InteractionPlugin from "@fullcalendar/interaction";
    import ListPlugin from "@fullcalendar/list";
    import axios from "axios";

    export default {

        components: {
            Fullcalendar
        },

        data() {
            return {
                calendarPlugins: [dayGridPlugin, InteractionPlugin, TimeGridPlugin, ListPlugin],
                events: "",
                newEvent: {
                    event_name: "",
                    start_date: "",
                    end_date: "",
                },
                addingMode: true,
                indexToUpdate: ""
            };
        },

        created() {
            this.getEvents();
        },
        methods: {

            newEventOk(){
                this.addNewEvent()
            },

            newEventCancel(){
                this.resetForm();
            },

            dateSelect(info){
                    console.log('selected ' + info.startStr + ' to ' + info.endStr);
                    this.newEvent.start_date = info.startStr
                    this.newEvent.end_date = info.endStr
                    this.$bvModal.show('newEventModal')

            },

            dateClick(info){
                if (info.dateStr){
                    console.log('Date: ' + info.dateStr);
                }
            },

            addNewEvent() {
                axios
                    .post("/api/calendar", {
                        ...this.newEvent,
                    })
                    .then(data => {
                        this.getEvents(); // update our list of events
                        this.resetForm(); // clear newEvent properties (e.g. title, start_date, end_date and event_time)
                    })
                    .catch(err =>
                        console.log("Unable to add new event!", err.response.data)
                    );
            },
            showEvent(arg) {
                this.addingMode = false;
                const { id, title, start_date, end_date} = this.events.find(
                    event => event.id === +arg.event.id
                );
                this.indexToUpdate = id;
                this.newEvent = {
                    event_name: title,
                    start_date: start_date,
                    end_date: end_date,
                };
            },

            updateEvent() {
                axios
                    .put("/api/calendar/" + this.indexToUpdate, {
                        ...this.newEvent
                    })
                    .then(resp => {
                        this.resetForm();
                        this.getEvents();
                        this.addingMode = !this.addingMode;
                    })
                    .catch(err =>
                        console.log("Unable to update event!", err.response.data)
                    );
            },
            deleteEvent() {
                axios
                    .delete("/api/calendar/" + this.indexToUpdate)
                    .then(resp => {
                        this.resetForm();
                        this.getEvents();
                        this.addingMode = !this.addingMode;
                    })
                    .catch(err =>
                        console.log("Unable to delete event!", err.response.data)
                    );
            },
            getEvents() {
                axios
                    .get("/api/calendar")
                    .then(resp => (this.events = resp.data.data))
                    .catch(err => console.log(err.response.data));
            },
            resetForm() {
                Object.keys(this.newEvent).forEach(key => {
                    return (this.newEvent[key] = "");
                });
            }
        },
        watch: {
            indexToUpdate() {
                return this.indexToUpdate;
            }
        }
    };
</script>

<style lang="css">
    @import "~@fullcalendar/core/main.css";
    @import "~@fullcalendar/daygrid/main.css";
    @import "~@fullcalendar/timegrid/main.css";
    .fc-title {
        color: #fff;
    }
    .fc-title:hover {
        cursor: pointer;
    }
</style>
