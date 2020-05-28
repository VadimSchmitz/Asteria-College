<template>
    <div class="row">

        <div class="col-lg-3 col-6">
            <b-link to="/users">
                <div class="info-box bg-info">
                <span class="info-box-icon">
                    <i class="fas fa-users"></i>
                </span>
                    <div class="info-box-content">
                        <span class="info-box-text">Geregistreerde accounts</span>
                        <span class="info-box-number">20</span>
                    </div>
                </div>
            </b-link>
        </div>


        <div class="col-lg-3 col-6">
            <b-link to="/classes">
                <div class="info-box bg-danger">
                <span class="info-box-icon">
                    <i class="fas fa-school"></i>
                </span>
                    <div class="info-box-content">
                        <span class="info-box-text">Klassen</span>
                        <span class="info-box-number">5</span>
                    </div>
                </div>
            </b-link>
        </div>


        <div class="col-lg-3 col-6">
            <b-link to="/students">
                <div class="info-box bg-success">
                <span class="info-box-icon">
                    <i class="fas fa-user-graduate"></i>
                </span>
                    <div class="info-box-content">
                        <span class="info-box-text">Studenten</span>
                        <span class="info-box-number">344</span>
                    </div>
                </div>
            </b-link>
        </div>


        <div class="col-lg-3 col-6">
            <b-link to="/reports">
                <div class="info-box bg-warning">
                <span class="info-box-icon">
                    <i class="fas fa-pen-nib"></i>
                </span>
                    <div class="info-box-content">
                        <span class="info-box-text">Geschreven reports</span>
                        <span class="info-box-number">50</span>
                    </div>
                </div>
            </b-link>
        </div>


        <b-col cols="12">
            <div class="callout callout-info">
                <p>Asteria College</p>
                Welkom
            </div>
        </b-col>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard'
    }
</script>
