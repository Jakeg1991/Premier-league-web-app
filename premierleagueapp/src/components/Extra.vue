<template>
    <div>
        <h1>{{ intro }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Extra',
        props: {
            msg: String
        },
        data(){
            return {
                intro : "Extra"
            }
        },
        watch: {
            msg : {
                immediate: true, 
                handler(val, oldval) {
                    //
                }
            }
        }
    }
</script>