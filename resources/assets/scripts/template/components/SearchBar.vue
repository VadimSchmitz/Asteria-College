<template>
    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
            <input :placeholder="this.placeholder" aria-label="Search" class="form-control form-control-navbar"
                   type="search">
            <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                    <i v-bind:class="this.icon"></i>
                </button>
            </div>
        </div>
    </form>
    <!-- END SEARCH FORM -->
</template>

<script>
    export default {
        name: 'SearchBar',
        props: {
            ['placeholder']: {
                type: String,
                default: 'Typ hier...'
            },
            ['icon']: {
                type: String,
                default: 'fas fa-search'
            }
        }
    }
</script>
