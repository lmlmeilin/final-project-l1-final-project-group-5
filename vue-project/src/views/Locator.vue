<template>
    <div class = "container">
        <NavBar />
        <AddLocator />
    </div>

</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import AddLocator from "@/components/AddLocator.vue";
    import { initMap } from "/Users/xuehan/Desktop/final-project-l1-final-project-group-5/vue-project/src/clinicLocate.js";

    export default {
        name: "Locator",
        components: {
            NavBar, 
            AddLocator,
        },

        mounted() {
        initMap().catch(error => {
        console.error("Map initialization failed:", error);
    });
  },


    }
</script>
