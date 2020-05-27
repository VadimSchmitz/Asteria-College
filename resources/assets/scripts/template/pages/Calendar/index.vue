<template>
    <b-row>
        <b-col cols="12">
            <calendar-component></calendar-component>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'Calendar',
        components: {
            CalendarComponent: () => import(  /* webpackChunkName: "calendar-component" */  './../../layouts/components/Calendar'),
        }
    }
</script>
