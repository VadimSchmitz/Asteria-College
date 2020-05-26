<template>
    <div class='card'>
        <div class="card-header" :key="$parent.event.id" :v-text="addingMode ? 'create a new event' : 'edit an event'"></div>
        <div class="card-body">
            <input class="form-control" placeholder="title" type="text" v-model="$parent.event.event_name"/>
            <input class="form-control" placeholder="assignment" type="text" v-model="$parent.event.assignment"/>
            <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ssZ" id="start_date" v-model="$parent.event.start_date"/>
            <VueCtkDateTimePicker format="YYYY-MM-DDTHH:mm:ssZ" id="end_date" v-model="$parent.event.end_date"/>

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

        methods: {
            async updateEvent() {
                await this.$parent.updateEvent();
            },
            async addEvent() {
                await this.$parent.addEvent();
            },
            async removeEvent() {
                await axios.delete("calendar/" + this.$parent.event.id).then(resp => this.$parent.getEvents())
                    .catch(e => console.log(e));
            }
        }
    };
</script>
