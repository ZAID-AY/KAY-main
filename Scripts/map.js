function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 34.6818803, lng: -1.9054614 },
  });
  directionsRenderer.setMap(map);
  var startAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById("depart")
  );
  var endAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById("arrivee")
  );

  function calculateAndDisplayRoute() {
    directionsService.route(
      {
        origin: document.getElementById("depart").value,
        destination: document.getElementById("arrivee").value,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      function (response, status) {
        console.log(response); // Check the response object in the browser console
        console.log(status); // Check the status in the browser console
  
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("La demande d'itinéraire a échoué en raison de " + status);
        }
      }
    );
  }
  }
  
  document.getElementById("search").addEventListener("click", function () {
    calculateAndDisplayRoute();
  });
  
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        var infoWindow = new google.maps.InfoWindow({
          content: "Vous êtes ici !",
        });
        infoWindow.setPosition(pos);
        infoWindow.open(map);
        map.setCenter(pos);
      });
      
    } else {
      alert("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  }
  
  document.getElementById("geolocation").addEventListener("click", function () {
    getCurrentLocation();
  });

  
  /* Markers */
  // Define an array of marker coordinates
  var markers = [
    // Bus 20
    { id: "1", lat: 34.689426, lng: -1.909806, name: "TEST" },
    { id: "1", lat: 34.687262, lng: -1.911979 },
    { id: "1", lat: 34.684445, lng: -1.915171 },
    { id: "1", lat: 34.679776, lng: -1.918353 },
    { id: "1", lat: 34.676483, lng: -1.919232 },
    { id: "1", lat: 34.687262, lng: -1.911979 },
    { id: "1", lat: 34.672189, lng: -1.918805 },
    { id: "1", lat: 34.668634, lng: -1.917668 },
    { id: "1", lat: 34.663563, lng: -1.918925 },
    { id: "1", lat: 34.660797, lng: -1.920360 },
    { id: "1", lat: 34.676483, lng: -1.919232 },
    { id: "1", lat: 34.657915, lng: -1.917094 },
    { id: "1", lat: 34.657429, lng:  -1.913066 },
    { id: "1", lat: 34.657163, lng: -1.909258 },
    { id: "1", lat: 34.656702, lng: -1.904634 },
    { id: "1", lat: 34.655916, lng: -1.900316 },
    { id: "1", lat: 34.656693, lng:  -1.898121 },
    { id: "1", lat: 34.660236, lng:  -1.898573 },
    { id: "1", lat: 34.663132, lng:  -1.898865 },
    { id: "1", lat: 34.664805, lng: -1.895742 },
    { id: "1", lat: 34.671218, lng: -1.906001 },
    
    // Bus 24
    
    { id: "2", lat: 34.692364, lng: -1.907452 },
    { id: "2", lat: 34.664308, lng: -1.896648 },
    { id: "2", lat: 34.663726, lng: -1.899292 },
    
    // Bus 25
    { id: "3", lat: 34.689426, lng: -1.909806 },
    { id: "3", lat: 34.687262, lng: -1.911979 },
    { id: "3", lat: 34.684445, lng: -1.915171 },
    { id: "3", lat: 34.679776, lng: -1.918353 },
    { id: "3", lat: 34.655845, lng:  -1.900226},
    { id: "3", lat: 34.656308, lng: -1.899829 },
  ];

  // Loop through the marker array and create a new marker for each set of coordinates
  var markerArray = [];
  for (var i = 0; i < markers.length; i++) {
    var marker = new google.maps.Marker({
      position: { lat: markers[i].lat, lng: markers[i].lng },
      map: map,
      visible: true,
      icon: "Assets/markerpng.png",
      id: markers[i].id,
      name: markers[i].name // Add the 'name' property to the marker
    });
    markerArray.push(marker);

    // Create an info window for each marker
    var infoWindow = new google.maps.InfoWindow();

    // Show the info window with the marker's name when hovering over the marker
    marker.addListener("mouseover", function () {
      infoWindow.setContent(this.name);
      infoWindow.open(map, this);
    });

    // Hide the info window when the mouse leaves the marker
    marker.addListener("mouseout", function () {
      infoWindow.close();
    });
  }

  // Create a polyline to connect the selected markers
  var polyline = new google.maps.Polyline({
    path: [],
    strokeColor: "#5967e3",
    strokeWeight: 3,
  });

  document.getElementById("places").addEventListener("change", function () {
    var selectedId = this.value;
    var selectedMarkers = markers.filter(function (marker) {
      return marker.id === selectedId;
    });
    polyline.setPath(selectedMarkers);
    polyline.setMap(map);
  });

  // Show markers based on combobox selection
  document.getElementById("places").addEventListener("change", function () {
    var selectedId = this.value;
    for (var i = 0; i < markerArray.length; i++) {
      if (markerArray[i].id === selectedId) {
        markerArray[i].setVisible(true);
      } else {
        markerArray[i].setVisible(false);
      }
    }
  });
}
