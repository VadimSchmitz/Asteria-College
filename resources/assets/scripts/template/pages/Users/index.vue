<template>
        <b-row>
            <b-col cols="12">
                <div class="callout callout-info">
                    <p>Gebruikers overzicht</p>
                </div>
            </b-col>

            <overview />

            <b-col cols="12" lg="6" xl="4">
                <div class="card card-outline card-cyan">
                    <div class="card-header">
                        <h3 class="card-title">Opties</h3>

                        <div class="card-tools">
                            <a class="btn btn-tool" data-toggle="tooltip" href="#" title="Previous"><i
                                    class="fas fa-chevron-left"></i></a>
                            <a class="btn btn-tool" data-toggle="tooltip" href="#" title="Next"><i
                                    class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
</template>

<script>
    export default {
        name: 'Users',
        components: {
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../layouts/components/Avatar'),
            Overview: () => import(  /* webpackChunkName: "user-overview-component" */  './components/Overview'),
        },
    }
</script>
