<template>
    <div class="container">
        <div class="row justify-content-center">
            <div>
                <b-modal
                        :title="addingMode ? 'create a new event' : 'edit an event'"
                        @cancel="newEventCancel"
                        @close="newEventCancel"
                        @ok="newEventOk"
                        id="newEventModal"
                >
                    <input
                            class="form-control"
                            id="title"
                            placeholder="title"
                            type="text"
                            v-model="newEvent.event_name"
                    />
                    <input
                            class="form-control"
                            id="assignment"
                            placeholder="assignment"
                            type="text"
                            v-model="newEvent.assignment"
                    />
                    <VueCtkDateTimePicker
                            format="YYYY-MM-DDTHH:mm:ssZ"
                            id="start_date"
                            v-model="newEvent.start_date"
                    />
                    <VueCtkDateTimePicker
                            format="YYYY-MM-DDTHH:mm:ssZ"
                            id="end_date"
                            v-model="newEvent.end_date"
                    />
                    <template v-slot:modal-footer="{ok, cancel}">
                        <b-button @click="removeEvent" size="m" v-if="!addingMode" variant="danger">Delete</b-button>
                        <b-button @click="cancel()" size="m" variant="secondary">Cancel</b-button>
                        <b-button @click="ok()" size="m" variant="success">Save</b-button>
                    </template>
                </b-modal>
            </div>
            <div class="col-md-8">
                <Fullcalendar
                        :editable="!isLoading"
                        :events="events"
                        :firstDay="1"
                        :header="{
        right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
        center: 'title',
        left: 'prev next today',
        }"
                        :plugins="calendarPlugins"
                        :select-mirror="true"
                        @eventClick="showEvent"
                        @eventDestroy="eventDestroy"
                        @eventDrop="eventManipulation"
                        @eventRender="eventRender"
                        @eventResize="eventManipulation"
                        @select="dateSelect"
                        contentHeight="auto"
                        draggable="true"
                        height="parent"
                        hiddenDays="[]"
                        locale="nl"
                        maxTime="17:00:00"
                        minTime="08:00:00"
                        ref="fullCalendar"
                        selectable="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import Fullcalendar from "@fullcalendar/vue";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import TimeGridPlugin from "@fullcalendar/timegrid";
    import InteractionPlugin from "@fullcalendar/interaction";
    import ListPlugin from "@fullcalendar/list";
    import axios from "axios";
    import moment from "moment";
    import CalendarEvent from "../../layouts/components/CalendarEvent";

    const CalendarEventClass = Vue.extend(CalendarEvent);

    export default {
        components: {
            Fullcalendar
        },

        data() {
            return {
                calendarPlugins: [
                    dayGridPlugin,
                    InteractionPlugin,
                    TimeGridPlugin,
                    ListPlugin
                ],
                events: "",
                newEvent: {
                    event_name: "",
                    start_date: "",
                    end_date: "",
                    assignment: ""
                },
                isLoading: false,
                addingMode: true,
                indexToUpdate: "",
                eventsObj: {}
            };
        },

        created() {
            this.getEvents();
        },
        methods: {
            //FullCalendar Render event
            eventRender(info) {
                //create our component instance
                const event = new CalendarEventClass({
                    propsData: {
                        event: info.event
                    }
                });
                event.$mount();
                //assign created component to our eventObj with uuid as key (to destroy in future)
                this.eventsObj[event._uid] = event;

                //set data-vue="{id}"
                //append our compiled component to .fc-event
                info.el.setAttribute("data-vue-id", event._uid);
                info.el.appendChild(event.$el);
            },
            //we need to destroy out component when element is removed from calendar
            eventDestroy(info) {
                //get uuid
                let id = parseInt(info.el.getAttribute("data-vue-id"));

                if (this.eventsObj[id]) {
                    //if exist destroy
                    this.eventsObj[id].$destroy(true);
                }
            },
            eventManipulation(info) {
                let event = {
                    id: info.event.id,
                    start_date: moment(info.event.start).format(),
                    end_date: moment(info.event.end).format(),
                    event_name: info.event.title,
                    assignment: info.event.assignment
                };
                this.updateEvent(event);
            },
            updateEvent(event) {
                axios
                    .put("/calendar/" + event.id, {
                        ...event
                    })
                    .then(resp => {
                        this.getEvents();
                    })
                    .catch(err =>
                        console.log("Unable to update event!", err.response.data)
                    );
            },
            newEventOk() {
                if (this.addingMode) {
                    this.addNewEvent();
                } else {
                    this.updateEvent(this.newEvent);
                }
            },
            newEventCancel() {
                this.resetForm();
            },
            dateSelect(info) {
                this.addingMode = true;
                console.log("selected " + info.startStr + " to " + info.endStr);
                this.newEvent.start_date = info.startStr;
                this.newEvent.end_date = info.endStr;
                this.$bvModal.show("newEventModal");
            },
            addNewEvent() {
                axios
                    .post("/calendar", {
                        ...this.newEvent,
                        id: undefined,
                        start_date: moment(this.newEvent.start_date).format(),
                        end_date: moment(this.newEvent.end_date).format()
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
                const {id, title, assignment, start, end} = this.events.find(
                    event => event.id === +arg.event.id
                );
                this.newEvent = {
                    id: id,
                    assignment: assignment,
                    event_name: title,
                    start_date: start,
                    end_date: end
                };
                this.$bvModal.show("newEventModal");
            },
            removeEvent() {
                axios
                    .delete("/calendar/" + this.newEvent.id)
                    .then(resp => {
                        this.resetForm();
                        this.getEvents();
                        this.addingMode = !this.addingMode;
                        this.$bvModal.hide("newEventModal");
                    })
                    .catch(err =>
                        console.log("Unable to delete event!", err.response.data)
                    );
            },
            getEvents() {
                this.isLoading = true;
                axios
                    .get("/calendar")
                    .then(resp => {
                        this.events = resp.data.data;
                        this.isLoading = false;
                    })
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
