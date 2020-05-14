<template>
    <section class="col-12">
        <div class="callout callout-info">
            <p>boeken aanmaak pagina</p>

        </div>

        <div>
            <form method="POST" action="/EditBooks">
            <div>

                <div>
                <label>Vak</label>
                <div class="control">
                    <input name="name" type="text" placeholder="Vak...">
                </div>

<!--                    @error('name')-->
<!--                    <p>{{ $message }}</p>-->
<!--                    @enderror-->
            </div>

            <div>
                <label>Niveau</label>
                <div class="control">
                    <input level="level"
                           type="text" placeholder="Niveau...">
                </div>

                <label>Kleur</label>
                <div class="control">
                    <input type="color" >
                </div>


                <div>
                    <button type="submit">Opslaan</button>
                </div>

            </div>
            </div>
            </form>
        </div>



    </section>

</template>

<script>
    export default {
        name: 'Courses',
        data() {
            return {
                courses: null,
                coursesLoading: false
            }
        },
        methods: {
            get() {
                this.coursesLoading = true;

                axios.get(`/courses`)
                    .then(response => {
                        // Timeout only to show loading screen
                        setTimeout(() => {
                            this.coursesLoading = false;
                            this.courses = response.data;
                        }, 3000);
                    }).catch(error => console.error(error));
            }
        }
    }


</script>