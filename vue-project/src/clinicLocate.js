async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { LatLng } = await google.maps.importLibrary("core");

  const center = new LatLng(1.3521, 103.8198);
  const map = new Map(document.getElementById("map"), {
    zoom: 11,
    center,
    mapId: "4504f8b37365c3d0",
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
}

initMap();
