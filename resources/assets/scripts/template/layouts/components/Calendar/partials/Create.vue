<template>
    <div class='card'>
        <div class="card-header" :key="event.id" :v-text="addingMode ? 'create a new event' : 'edit an event'"></div>
        <div class="card-body">
            <input class="form-control" placeholder="title" type="text" v-model="event.event_name"/>
            <input class="form-control" placeholder="assignment" type="text" v-model="event.assignment"/>
            <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ssZ" id="start_date" v-model="event.start_date"/>
            <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ssZ" id="end_date" v-model="event.end_date"/>

            <template>
                <b-button @click="removeEvent" size="m" v-if="!addingMode" variant="danger">Verwijderen</b-button>
                <b-button @click="$parent.showModal = false" size="m" variant="secondary">Annuleren</b-button>
                <b-button @click="addEvent" size="m" variant="success" v-if="addingMode">Toevoegen</b-button>
                <b-button @click="updateEvent" size="m" variant="success" v-else>Wijzigen</b-button>
            </template>
        </div>
    </div>
</template>


<script>
    import moment from "moment";
    import Event from "../../../../../core/models/Event";

    export default {
        name: 'Create',

        components: {},

        props: {
            id: {type: Number, required: false},
            updatable: {
                type: Object,
                required: false
            }
        },

        computed: {
            addingMode() {
                return !this.id
            }
        },

        mounted() {
            if (this.id)
                this.event = new Event(this.updatable)
        },

        data() {
            return {
                event: new Event()
            }
        },

        methods: {
            async updateEvent() {
                await this.$parent.updateEvent(this.event);
            },

            cancel() {
                this.$parent.showModal = false;
            },

            dateSelect(info) {
                // this.addingMode = true;

                console.log("selected " + info.startStr + " to " + info.endStr);
                this.event.start_date = info.startStr;
                this.event.end_date = info.endStr;
            },
            async addEvent() {
                await axios.post("calendar", this.event).then(response => this.$parent.getEvents())
                    .catch(e => console.log(e));
            },
            async removeEvent() {
                await axios.delete("calendar/" + this.event.id).then(resp => this.$parent.getEvents())
                    .catch(e => console.log(e));

            }
        }
    };
</script>
