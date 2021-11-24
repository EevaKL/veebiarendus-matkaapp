function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(58.058096, 27.059987),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function kontakt() {
    const nimiElemet = document.getElementById("nimi").value
    const emailElemet = document.getElementById("email").value
    const teadeElemet = document.getElementById("teade").value
    console.log(email + ' ' + teade)
}


