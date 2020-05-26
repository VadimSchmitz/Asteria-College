<template>
    <div class="callout callout-danger calendar-pl-custom">
        <create-or-edit :updatable='event' :id="(event.id === 0) ? null : event.id" :key='showModal' v-show="showModal"></create-or-edit>
                <Fullcalendar :editable="!isLoading" :events="events"
                        :firstDay="1"
                        :header="{
                            right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
                            center: 'title',
                            left: 'prev next today',
                        }"
                        :plugins="calendarPlugins"
                        :select-mirror="true"
                        @eventClick="showEvent"
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
</template>

<script>
    import Vue from "vue";
    import Fullcalendar from "@fullcalendar/vue";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import TimeGridPlugin from "@fullcalendar/timegrid";
    import InteractionPlugin from "@fullcalendar/interaction";
    import ListPlugin from "@fullcalendar/list";
    import CalendarEvent from "./partials/Event";
    import Event from "../../../../core/models/Event";
    const CalendarEventClass = Vue.extend(CalendarEvent);

    export default {
        name: 'Calendar',
        components: {
            Fullcalendar,
            CreateOrEdit: () => import(  /* webpackChunkName: "create-or-edit-component" */  './partials/Create')
        },

        data() {
            return {
                calendarPlugins: [
                    dayGridPlugin,
                    InteractionPlugin,
                    TimeGridPlugin,
                    ListPlugin
                ],
                events: [Event],
                event: new Event(),
                showModal: false,
                isLoading: false,
                addingMode: true,
                indexToUpdate: "",
                eventsObj: {}
            };
        },

        async mounted() {
            this.isLoading = true;
            await this.getEvents();
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
            async eventManipulation(info) {
                // let event = {
                //     id: info.event.id,
                //     start_date: moment(info.event.start).format(),
                //     end_date: moment(info.event.end).format(),
                //     event_name: info.event.title,
                //     assignment: info.event.assignment
                // };
                const manipulatedEvent = new Event(info.event);

                await this.updateEvent(manipulatedEvent);
            },

            async updateEvent(manipulatedEvent) {
                await axios.put("/calendar/" + manipulatedEvent.id, manipulatedEvent)
                    .then(resp => this.getEvents())
                    .catch(err => console.log("Unable to update event!", err.response.data));
            },

            // newEventOk() {
            //     if (this.addingMode) {
            //         this.addNewEvent();
            //     } else {
            //         this.updateEvent(this.newEvent);
            //     }
            // },
            // newEventCancel() {
            //     this.resetForm();
            // },
            dateSelect(info) {
                //this.addingMode = true;


                console.log("selected " + info.startStr + " to " + info.endStr);

                this.event.start_date = info.startStr;
                this.event.end_date = info.endStr;

                this.showModal = true;
                //this.$bvModal.show("newEventModal");
            },

            // addNewEvent() {
            //     axios .post("/calendar", {
            //             ...this.newEvent,
            //             id: undefined,
            //             start_date: moment(this.newEvent.start_date).format(),
            //             end_date: moment(this.newEvent.end_date).format()
            //         })
            //         .then(data => {
            //             this.getEvents(); // update our list of events
            //             this.resetForm(); // clear newEvent properties (e.g. title, start_date, end_date and event_time)
            //         })
            //         .catch(err =>
            //             console.log("Unable to add new event!", err.response.data)
            //         );
            // },
            showEvent(arg) {
                //this.addingMode = false;

                const event = this.events.find(event => event.id === +arg.event.id);

                this.event = new Event(event);

                this.showModal = true;

                //this.$bvModal.show("newEventModal");
            },

            // removeEvent() {
            //     axios
            //         .delete("/calendar/" + this.newEvent.id)
            //         .then(resp => {
            //             this.resetForm();
            //             this.getEvents();
            //             this.addingMode = !this.addingMode;
            //             this.$bvModal.hide("newEventModal");
            //         })
            //         .catch(err =>
            //             console.log("Unable to delete event!", err.response.data)
            //         );
            // },
            async getEvents() {
                await axios.get("/calendar").then(resp => {
                        this.events = resp.data.data;
                        this.isLoading = false;
                        this.showModal = false;
                    }).catch(err => console.log(err.response.data));
            },
            // resetForm() {
            //     Object.keys(this.newEvent).forEach(key => {
            //         return (this.newEvent[key] = "");
            //     });
            // }
        },
        watch: {
            indexToUpdate() {
                return this.indexToUpdate;
            }
        }
    };
</script>

