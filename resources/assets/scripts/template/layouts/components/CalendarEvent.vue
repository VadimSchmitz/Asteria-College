<template>
    <div>{{event.extendedProps.assignment}}</div>
</template>

<script>
    export default {
        name: 'Event',
        props: ['event'],
        methods: {
            clickHandler(type) {
                this.$emit(type, this.event)
            }
        }
    }
</script>
