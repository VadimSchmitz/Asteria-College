<template>
    <div>
        {{event.extendedProps.assignment}}
    </div>
</template>

<script>
    export default {
        name: 'Event',
        props: {
            event: {
                type: Object,
                required: true
            }
        },
        methods: {
            clickHandler(type) {
                this.$emit(type, this.event)
            }
        }
    }
</script>
