<template>
  <div>
    <div class="header">
      <h3>Clinic Locator</h3>
    </div>
    <div class="content">
      <NavBar class="nav-bar" />
      <div id="map"></div>
    </div>
    <AddLocator />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AddLocator from "@/components/AddLocator.vue";

(g => {
        var h, a, k, p = "The Google Maps JavaScript API",
          c = "google",
          l = "importLibrary",
          q = "__ib__",
          m = document,
          b = window;
        b = b[c] || (b[c] = {});
        var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {
          await (a = m.createElement("script"));
          e.set("libraries", [...r] + "");
          for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
          e.set("callback", c + ".maps." + q);
          a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
          d[q] = f;
          a.onerror = () => h = n(Error(p + " could not load."));
          a.nonce = m.querySelector("script[nonce]")?.nonce || "";
          m.head.append(a)
        }));
        d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
      })({
        key: "AIzaSyAFqtZlHGJ9dE6Kk3XDU8Qm5rgOYjlkxaI",
        v: "beta"
      });

export default {
  name: 'Locator',
  components: {
    NavBar,
    AddLocator
  },
  data() {
    return {
      properties: [
        // ... (your properties array)
      ]
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const { LatLng } = await google.maps.importLibrary("core");

        const center = new LatLng(1.3521, 103.8198);
        const map = new Map(document.getElementById("map"), {
          zoom: 11,
          center,
          mapId: "ClinicMap", 
        });

        const properties = [
          {
            name: "Clinic A",
            position: new LatLng(1.3521, 103.8198),
            operationHours: "Mon - Fri: 9 AM to 5 PM",
          },
          {
            name: "Clinic B",
            position: new LatLng(1.3615, 103.7637),
            operationHours: "Mon - Sat: 8 AM to 6 PM",
          },
          // Add more properties as needed
        ];

        const infoWindow = new google.maps.InfoWindow();

        for (const property of properties) {
          const marker = new AdvancedMarkerElement({
            map,
            position: property.position,
            title: property.name,
          });

          marker.addEventListener("gmp-click", () => {
            infoWindow.setContent(`<div><strong>${property.name}</strong><br>Operation Hours: ${property.operationHours}</div>`);
            infoWindow.open(map, marker);
          });
        }
      } catch (error) {
        console.error("Error loading Google Maps library:", error);
      }
    }
  }
}
</script>

<style scoped>
.content {
  display: flex; /* Establishes a flex container */
  align-items: flex-start; /* Aligns flex items to the top */
}

.nav-bar {
  width: 90px; /* Fixed width for the NavBar */
  height: 100%; 
  margin-right: 400px;/* Adjust height as needed, perhaps the full height of the container */
  /* Additional styling as needed */
}

#map {
  height: 400px; 
  width: 400px;
}

</style>