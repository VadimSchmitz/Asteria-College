<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">{{ pageTitle ? pageTitle : 'Pagina niet gevonden' }}</h1>
                    </div>

                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <b-link to="/">Home</b-link>
                            </li>
                            <li class="breadcrumb-item active">{{ pageTitle ? pageTitle : 'Pagina niet gevonden' }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <b-container fluid="true">
                <b-row cols="12">
                    <b-col cols="12">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </b-col>
                </b-row>
            </b-container>
        </section>

    </div>
    <!-- /.content-wrapper -->
</template>


<script>
    export default {
        name: 'ContentSection',
        props: {
            ['pageTitle']: {
                type: String,
                default: 'Dashboard'
            }
        },
    }
</script>
