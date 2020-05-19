<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Opties</h3>

            <div class="card-tools">
                <button class="btn btn-tool" data-card-widget="collapse" type="button"><i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
        <div class="card-body p-0" style="display: block;">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item active">
                    <a @click="$parent.toggleCreate" class="nav-link cursor-pointer">
                        Gebruiker aanmaken
                        <span class="badge bg-success float-right"><i class="far fa-plus"></i></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="$parent.toggleEdit">
                        Gebruikers wijzigen
                        <span class="badge bg-danger float-right"><i class="far fa-edit"></i></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Options'
    }
</script>
