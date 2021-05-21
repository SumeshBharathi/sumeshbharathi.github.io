
// Map service
var myLatLng = {
    lat: sampleData[0].Latlng[0].lat,
    lng: sampleData[0].Latlng[0].lng
}
var myLatLng2 = {
    lat: sampleData[0].Latlng[1].lat,
    lng: sampleData[0].Latlng[1].lng
}
var myLatLng3 = {
    lat: sampleData[0].Latlng[2].lat,
    lng: sampleData[0].Latlng[2].lng
}
var myLatLng4 = {
    lat: sampleData[0].Latlng[3].lat,
    lng: sampleData[0].Latlng[3].lng
}

function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: myLatLng2,
    });

    // markers
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "STOP 1",
        icon: 'assets/Pin1.png'
    });

    new google.maps.Marker({
        position: myLatLng2,
        map,
        title: "STOP 2",
        icon: 'assets/Pin2.png'
    });

    new google.maps.Marker({
        position: myLatLng3,
        map,
        title: "STOP 3",
        icon: 'assets/Pin3.png'
    });

    new google.maps.Marker({
        position: myLatLng4,
        map,
        title: "STOP 4",
        icon: 'assets/Pin4.png'
    });

    const flightPlanCoordinates = [myLatLng, myLatLng2, myLatLng3, myLatLng4];


    // draws line
    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#000000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    flightPath.setMap(map);
}