<template>
    <div class = "container">
        <NavBar />
        <AddLocator />
    </div>

</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import AddLocator from "@/components/AddLocator.vue";

    export default {
        name: "Locator",
        components: {
            NavBar, 
            AddLocator,
        },
    }
</script>
