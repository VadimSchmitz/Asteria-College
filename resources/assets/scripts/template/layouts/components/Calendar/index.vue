<template>
    <div class="callout callout-danger calendar-pl-custom">
        <create-or-edit :id="(event.id === 0) ? null : event.id" :key='showModal' v-if="showModal"></create-or-edit>
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
            Fullcalendar: () => import(  /* webpackChunkName: "fullcalendar-component" */  '@fullcalendar/vue'),
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
                eventsObj: {}
            };
        },

        async mounted() {
            await this.getEvents();
        },

        methods: {
            //FullCalendar Render event
            eventRender(info) {
                //create our component instance
                console.log(info.event)
                const event = new CalendarEventClass({
                    propsData: {
                        event: info.event
                    }
                });
                event.$mount();
                //assign created component to our eventObj with uuid as key (to destroy in future)
                this.eventsObj[event._uid] = event;

                //append our compiled component to .fc-event
                info.el.setAttribute("data-vue-id", event._uid);
                info.el.appendChild(event.$el);
            },
            async eventManipulation(info) {
                const manipulatedEvent = new Event(info.event);

                await this.updateEvent(manipulatedEvent);
            },
            async addEvent() {
                await axios.post("calendar", this.event).then(response => this.getEvents())
                    .catch(e => console.log(e));
            },
            async updateEvent(manipulatedEvent = this.event) {
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
            async dateSelect(info) {
                this.event = new Event({
                    start_date: info.startStr,
                    end_date: info.endStr
                });
                return this.showModal = true;
            },

            showEvent(arg) {
                const event = this.events.find(event => event.id === +arg.event.id);

                this.event = new Event(event);

                this.showModal = true;
            },

            async getEvents() {
                this.isLoading = true;

                return await axios.get("/calendar").then(resp => {
                        this.event = new Event();
                        this.events = resp.data.data;
                        this.isLoading = false;
                        this.showModal = false;
                    }).catch(err => console.log(err.response.data));
            },
        }
    };
</script>

