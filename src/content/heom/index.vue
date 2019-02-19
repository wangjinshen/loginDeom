<template>
    <div class="app">
        this is home
    </div>
</template>
<script>
export default {
    name:"hoem",
    created(){
        if( !this.$cookie.get("token")){
            this.$router.push("/login")
        }
    }
}
</script>
<style scoped lang="">

</style>