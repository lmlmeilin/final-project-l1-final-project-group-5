<template>
<div class="locator-page">
    <NavBar />
    <div class="content">
        <div class="header">
            <h3>Clinic Locator</h3>
        </div>
    <div id="map"></div>
    <AddLocator />
  </div>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AddLocator from "@/components/AddLocator.vue";
import myMarkerImage from "@/assets/UserLoc.png";

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
    AddLocator,
    myMarkerImage,
  },
  data() {
    return {
      properties: [
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
          zoom: 12,
          center,
          mapId: "ClinicMap", 
        });

        const properties = [
          {
            name: "University Health Centre",
            position: new LatLng(1.2993, 103.7730),
            operationHours: "Mon - Fri: 8:30AM to 5PM",
          },

          {
            name: "Orchard Clinic (Orchard)",
            position: new LatLng(1.3042, 103.8348),
            operationHours: "Mon, Tue, Thurs, Fri: 9AM to 5PM, Wed: 9AM to 1PM",
          },

          {
            name: "Central 24-Hr Clinic (clementi)",
            position: new LatLng(1.3137, 103.7654),
            operationHours: "Open 24 Hours",
          },

         {
            name: "Orchard Clinic (Parkway Parade)",
            position: new LatLng(1.3014, 103.9053),
            operationHours: "Mon - Sun: 9AM to 6PM",
          },

          {
            name: "Pandan Clinic",
            position: new LatLng(1.3207, 103.7484),
            operationHours: "Mon - Fri: 8:30AM to 4:30PM, Sat: 8:30AM to 12:30PM",
          },

          {
            name: "OneCare Clinic Bedok MRT",
            position: new LatLng(1.3238, 103.9301),
            operationHours: "Mon - Fri: 8AM to 9PM, Sat: 8AM to 12PM",
          },




        ];

        const infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "My Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        const locationMarker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "Your Location",
          icon:{
            url:myMarkerImage,
          }
        });

        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      },
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
});


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
.locator-page{
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    min-height: 100vh;
    overflow: hidden;
}

.header{
    font-size: 25px;
    background-color: #3cb26d;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    margin: 0;
    width: 1200px;
    height:60px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 35px;
}

#map {
  height: 400px; 
  width: 400px;
  margin-bottom: 20px;
}
</style>

<style>
.custom-map-control-button {
  background-color: white;   
  color: black;      
  margin: 10px;         
  border-radius: 5px;       
  font-size: 16px;   
  font-weight: bold;      
}
</style>