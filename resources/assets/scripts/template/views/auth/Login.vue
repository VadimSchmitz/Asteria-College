<template>
    <section>
        <div class="lockscreen-logo">
            <a href=""><b>Admin</b>LTE</a>
        </div>
        <!-- User name -->
        <div class="lockscreen-name">John Doe</div>

        <!-- START LOCK SCREEN ITEM -->
        <div class="lockscreen-item">
            <!-- lockscreen image -->
            <div class="lockscreen-image">
                <img src="assets/img/user1-128x128.jpg" alt="User Image">
            </div>
            <!-- /.lockscreen-image -->

            <!-- lockscreen credentials (contains the form) -->
            <form class="lockscreen-credentials">
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="password">

                    <div class="input-group-append">
                            <button type="button" class="btn"><i class="fas fa-arrow-right text-muted"></i></button>
                    </div>
                </div>
            </form>
            <!-- /.lockscreen credentials -->

        </div>
        <!-- /.lockscreen-item -->
        <div class="help-block text-center">
           Klik hier om naar het dashboard te navigeren
        </div>
        <div class="text-center">
            <router-link to="dashboard"><a href="#ß">Klik hier, hier hier hier</a></router-link>
        </div>
        <div class="lockscreen-footer text-center">
            Copyright © 2014-2019 <b><a href="http://adminlte.io" class="text-black">AdminLTE.io</a></b><br>
            All rights reserved
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>
