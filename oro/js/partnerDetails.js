
// to add partners dynamically from the sample data 
function addPartners() {
    sampleData.map((obj, index) => {
        console.log(obj, index)
        document.getElementById('partnersBufferId').innerHTML +=
            '<div id=' + index +
            ' class=" row   pt-3 pb-2 partnersBufferDefiner" style="background-color:white;;border-bottom: 1px solid rgb(199, 199, 199);margin-right:0px;margin-left:0px;cursor: pointer; " ><div class="ps-4 pe-2 col partnerBufferBlock1"><span style="font-size:16px;font-weight:700">' +
            obj
                .name +
            '</span><br /><span style="font-size:12px;">' + obj.pId +
            '</span>  <span style="font-size:12px;"> | ' + obj.mob +
            '</span><br /><span style="font-size:18px;color:' +
            (obj.statusType == "active" ? 'green' :
                (obj.statusType == "inactive" ? 'red' : '#F0B859;')) +
            '">&bull;</span> <span style="font-size:12px;font-weight:700"> ' + (obj.statusType ==
                "active" ? 'VISIT ' : '') + obj
                .status +
            '</span></div><div class="col-sm-2 partnerBufferArrow" ><span class="pt-3 pb-5"><br><img class="partnerBufferArrowImg" src="assets/arrow.png" alt=""></span></div></div>';
    })
}

addPartners();


// to update Mobile number in the Call button dynamically
var cardPos = 0, cardIndex = 0;

var tel = 'tel:' + sampleData[0].mob.toString();

document.getElementById('telephoneAnchor').href = tel;



// to update search results (kindly ignore optimization in the search, as it was done only for demo)
var duplicateData = sampleData;
var textfieldData;

function handleValueChange() {
    textfieldData = document.getElementById('searchInput').value;
    console.log(textfieldData);

    sampleData = [];
    duplicateData.map((e, i) => {
        console.log(e.name)

        if (textfieldData.toLowerCase() === e.name.substr(0, textfieldData.length).toLowerCase()) {
            console.log('yes')
            sampleData.push(e);
        } else {
            console.log('no')
        }
    })


    document.getElementById('partnersBufferId').innerHTML = "<span></span>";
    document.getElementById('searchInput').focus();
    addPartners();
}


// handles left card movement
function cardLeft() {

    cardPos <= 0 ? 0 : cardPos--;

    console.log('left')

    document.getElementById('field1').innerHTML = cardPos + 1;
    document.getElementById('field2').innerHTML = sampleData[cardIndex].Latlng[cardPos].lat;
    document.getElementById('field3').innerHTML = sampleData[cardIndex].Latlng[cardPos].lng;
    document.getElementById('field4').innerHTML = sampleData[cardIndex].Latlng[cardPos].time;

}

// handles right card movement
function cardRight() {
    cardPos >= 3 ? 3 : cardPos++;
    console.log('right')

    document.getElementById('field1').innerHTML = cardPos + 1;
    document.getElementById('field2').innerHTML = sampleData[cardIndex].Latlng[cardPos].lat;
    document.getElementById('field3').innerHTML = sampleData[cardIndex].Latlng[cardPos].lng;
    document.getElementById('field4').innerHTML = sampleData[cardIndex].Latlng[cardPos].time;
}

// handles scroll triggers
function scrolltoTop() {

    $('body, html, #partnersBuffer').scrollTop(0);
}

// nav_bar open and close
function nav_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function nav_close() {
    document.getElementById("mySidebar").style.display = "none";
}


// Elements update on startup (initializes with the 1st sample data values)
document.getElementById('partnerName').innerHTML = sampleData[0].name;
document.getElementById('partnerId').innerHTML = sampleData[0].pId;
document.getElementById('partnerMob').innerHTML = sampleData[0].mob;
document.getElementById('partnerStatus').innerHTML = '<span style="font-size:18px;line-height:3px;color:' +
    (sampleData[0].statusType == "active" ? 'green' :
        (sampleData[0].statusType == "active" == "inactive" ? 'red' : '#F0B859;')) +
    '">&bull;&nbsp;</span>' + sampleData[0].status;

document.getElementById('lat1').innerHTML = sampleData[0].Latlng[0].lat;
document.getElementById('long1').innerHTML = sampleData[0].Latlng[0].lng;
document.getElementById('time1').innerHTML = sampleData[0].Latlng[0].time;
document.getElementById('lat2').innerHTML = sampleData[0].Latlng[1].lat;
document.getElementById('long2').innerHTML = sampleData[0].Latlng[1].lng;
document.getElementById('time2').innerHTML = sampleData[0].Latlng[1].time;
document.getElementById('lat3').innerHTML = sampleData[0].Latlng[2].lat;
document.getElementById('long3').innerHTML = sampleData[0].Latlng[2].lng;
document.getElementById('time3').innerHTML = sampleData[0].Latlng[2].time;
document.getElementById('lat4').innerHTML = sampleData[0].Latlng[3].lat;
document.getElementById('long4').innerHTML = sampleData[0].Latlng[3].lng;
document.getElementById('time4').innerHTML = sampleData[0].Latlng[3].time;
document.getElementById(0).style.backgroundColor = "#FFF7EA";

document.getElementById('field1').innerHTML = 1;
document.getElementById('field2').innerHTML = sampleData[cardIndex].Latlng[0].lat;
document.getElementById('field3').innerHTML = sampleData[cardIndex].Latlng[0].lng;
document.getElementById('field4').innerHTML = sampleData[cardIndex].Latlng[0].time;



// implements onclick logic to perform dynamic updates

var lastIndex = -1;
var g = document.getElementById('partnersBufferId');

for (var i = 0, len = g.children.length; i < len; i++) {

    (function (index) {
        g.children[i].onclick = function () {

            cardIndex = index;
            cardPos = 0;

            // updates mob_no dynamically on buttons
            tel = "tel:" + sampleData[index].mob;
            document.getElementById('telephoneAnchor').href = tel;


            // scrolls to top when updates performed
            document.getElementById('partnerTopBlock').scrollIntoView({
                behavior: 'smooth'
            });

            // Lat and Lng updates
            myLatLng = {
                lat: sampleData[index].Latlng[0].lat,
                lng: sampleData[index].Latlng[0].lng
            }
            myLatLng2 = {
                lat: sampleData[index].Latlng[1].lat,
                lng: sampleData[index].Latlng[1].lng
            }
            myLatLng3 = {
                lat: sampleData[index].Latlng[2].lat,
                lng: sampleData[index].Latlng[2].lng
            }
            myLatLng4 = {
                lat: sampleData[index].Latlng[3].lat,
                lng: sampleData[index].Latlng[3].lng
            }

            // map refreshed
            initMap();

            // Elements update
            document.getElementById(index).style.backgroundColor = "#FFF7EA";
            lastIndex >= 0 ? document.getElementById(lastIndex).style.backgroundColor = "white" :
                document.getElementById(0).style.backgroundColor = "white";

            lastIndex = index;

            document.getElementById('partnerName').innerHTML = sampleData[index].name;
            document.getElementById('partnerId').innerHTML = sampleData[index].pId;
            document.getElementById('partnerMob').innerHTML = sampleData[index].mob;

            // status flag update
            document.getElementById('partnerStatus').innerHTML =
                '<span style="font-size:18px;line-height:3px;color:' +
                (sampleData[index].statusType == "active" ? 'green' :
                    (sampleData[index].statusType == "inactive" ? 'red' : '#F0B859;')) +
                '">&bull;&nbsp;</span>' + sampleData[index].status;


            // elements update
            document.getElementById('lat1').innerHTML = sampleData[index].Latlng[0].lat;
            document.getElementById('long1').innerHTML = sampleData[index].Latlng[0].lng;
            document.getElementById('time1').innerHTML = sampleData[index].Latlng[0].time;
            document.getElementById('lat2').innerHTML = sampleData[index].Latlng[1].lat;
            document.getElementById('long2').innerHTML = sampleData[index].Latlng[1].lng;
            document.getElementById('time2').innerHTML = sampleData[index].Latlng[1].time;
            document.getElementById('lat3').innerHTML = sampleData[index].Latlng[2].lat;
            document.getElementById('long3').innerHTML = sampleData[index].Latlng[2].lng;
            document.getElementById('time3').innerHTML = sampleData[index].Latlng[2].time;
            document.getElementById('lat4').innerHTML = sampleData[index].Latlng[3].lat;
            document.getElementById('long4').innerHTML = sampleData[index].Latlng[3].lng;
            document.getElementById('time4').innerHTML = sampleData[index].Latlng[3].time;

            document.getElementById('field1').innerHTML = 1;
            document.getElementById('field2').innerHTML = sampleData[cardIndex].Latlng[0].lat;
            document.getElementById('field3').innerHTML = sampleData[cardIndex].Latlng[0].lng;
            document.getElementById('field4').innerHTML = sampleData[cardIndex].Latlng[0].time;

        }
    })(i);

}