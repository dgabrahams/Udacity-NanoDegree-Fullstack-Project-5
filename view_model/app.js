var viewModel = {
    highlightMarker: function(data, event) {
		  for (i = 0; i < markers.length; i++) {
		    var marker = markers[i];
        if ( data.name.toLowerCase() == marker.title.toLowerCase() ) {
            marker.setVisible(true);
            viewModel.toggleHighlightClass(i, true);
            viewModel.locationData()[i].infoWindow.open(map, marker);
        } else {
            marker.setVisible(false);
            viewModel.toggleHighlightClass(i, false);
            viewModel.locationData()[i].infoWindow.close();
        }
		  }
    },
    toggleHighlightClass: function(item, value) {
        if (value == true) {
        	viewModel.locationData()[parseInt(item)].highlighted(true);
        } else {
        	viewModel.locationData()[parseInt(item)].highlighted(false);
        }
    },
    getInfoWindowContent: function(marker, title, index) {
        $.ajax({
          url: '/json/'+String(title),
          type: 'GET',
          indexValue: index,
          marker: marker,
          title: title,
          dataType: 'json',
          success: function(data, textStatus, jqXHR) {
          	var result = data.query.pages;
          	var wikiURL = 'https://en.wikipedia.org/wiki/';
          	var resultAttribution = '<a href="'+wikiURL+this.title+'" target="_blank">Wikipedia</a>';
          	var fullContent;
          	for (var property in result) {
          		fullContent = result[property].extract.substring(0, 150)+'...'+resultAttribution;
          		addInfoWindow(this.marker, fullContent, this.indexValue);
          	}         	
          },
          error: function(request, status, error) { 
          	console.log(request.responseText);
          },
        });
    },
		locationData: ko.observableArray([
			{
			 tag: "Museum",
			 name: "London Dungeon",
			 location: {
			   lat: 51.5025036,
			   lng: -0.1188513
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 infoTitle: 'London_Dungeon'
			}, {
			 tag: "Government",
			 name: "Palace of Westminster",
			 location: {
			   lat: 51.4994747,
			   lng: -0.1249188
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 infoTitle: 'Palace_of_Westminster'
			}, {
			 tag: "Museum",
			 name: "Imperial War Museum",
			 location: {
			   lat: 51.4958298,
			   lng: -0.108777
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 infoTitle: 'Imperial_War_Museum'
			}, {
			 tag: "Government",
			 name: "Buckingham Palace",
			 location: {
			   lat: 51.5013641,
			   lng: -0.1419852
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 infoTitle: 'Buckingham_Palace'
			}, {
			 tag: "Entertainment",
			 name: "Shakespear's Globe Theatre",
			 location: {
			   lat: 51.5080892,
			   lng: -0.0972754
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 infoTitle: 'Shakespeare%27s_Globe'
			}, {
			 tag: "Landmarks",
			 name: "Monument",
			 location: {
			   lat: 51.5101626,
			   lng: -0.0860095
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}, {
			 tag: "Landmarks",
			 name: "Monument 2",
			 location: {
			   lat: 51.5013641,
			   lng: -0.1419852
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}
		])
};

ko.applyBindings(viewModel);


//Stores active markers for interaction with them in Google Maps.
var markers = [];


//Adds information window to google maps when a marker is clicked on.
function addInfoWindow(marker, message, index) {
    var infoWindow = new google.maps.InfoWindow({
        content: message
    });
    viewModel.locationData()[index]['infoWindow'] = infoWindow;
    
    google.maps.event.addListener(marker, 'click', function () {
        filterInfoWindows(marker.title);
    });

}


// function initialize() {
function initMap() {

    var myLatlng = new google.maps.LatLng(51.5076898,-0.1218453);
    var myOptions = {
     zoom: 12,
     mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map'), myOptions);
    var marker;

    $.each(viewModel.locationData(), function(i, item) {
        marker = new google.maps.Marker({
            position: item.location,
            title: item.name,
            map: map
        });
        marker.setMap(map);
        viewModel.getInfoWindowContent(marker, item.infoTitle, i);
        map.setCenter(marker.getPosition());
        markers.push(marker);
    });

 }


function isLetterString(str) {
  var value;
  for (i = 0; i < str.length; i++) {
    value = str[i].match(/[a-z]/i);
    // console.log(value);
    if (value == null) {
      i = str.length;
      value = false;
    } else {
      value = true;
    }
  }
  return value;
}


$(document).ready(function() {

    //filter funtionality
    document.getElementById("input_filter").addEventListener("keyup", function() {
        runFilter();
    }, false);

});


function runFilter() {

    var input = document.getElementById("input_filter");
    var value = isLetterString(input.value);

    //filter results against the input string 
    if ( value == true ) {
        var inputLength = input.value.length;

        for (i = 0; i < markers.length; i++) {
            var marker = markers[i];

            //take the number of letters in the input string, and then test that against the substring of the name it is currently analysing.
            //compare the two, if its a match add to the final output. if not, remove.
            var res = marker.title.substring(0, inputLength);

            if ( res.toLowerCase() == input.value.toLowerCase() ) {
            } else {
                marker.setVisible(false);
                viewModel.locationData()[i].showItem(false);
            }




        }
    } else {
        // Set all items to display
        for (i = 0; i < markers.length; i++) {
            markers[i].setVisible(true);
            viewModel.locationData()[i].showItem(true);
        }
    }

}

function resetFilter() {
        var input = document.getElementById("input_filter");
        input.value = '';

        for (i = 0; i < markers.length; i++) {
            var marker = markers[i];
            marker.setVisible(true);
            viewModel.locationData()[i].showItem(true);
            viewModel.locationData()[i].infoWindow.close();
            viewModel.toggleHighlightClass(i, false);
        }
}

function filterInfoWindows(markerTitle) {
    // console.log('markerTitle: '+markerTitle);
    for (i = 0; i < markers.length; i++) {
        var marker = markers[i];
        // console.log('filterInfoWindows i: '+i);
        if ( marker.title.toLowerCase() != markerTitle.toLowerCase() ) {
            viewModel.locationData()[i].infoWindow.close();
        } else {
            viewModel.locationData()[i].infoWindow.open(map, marker);
            // infoWindow.open(map, marker);
        }
    }
}




//animate marker
//add attribution to the source of the infowindow content
//add readme

