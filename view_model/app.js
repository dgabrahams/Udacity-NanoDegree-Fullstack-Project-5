'use strict';

//Main viewModel object
var viewModel = {
	  //performs actions when a menu item is clicked
    highlightMarker: function(data, event) {
		  for (var i = 0; i < viewModel.markers.length; i++) {
		    var marker = viewModel.markers[i];
		    //toggles highlight and controls marker + windowinfo state
        if ( data.name.toLowerCase() == marker.title.toLowerCase() ) {
            viewModel.toggleHighlightClass(i, true);
            viewModel.filterInfoWindows(marker.title);
            // viewModel.locationData()[i].infoWindow.open(map, marker);
            // marker.setVisible(true);
        } else {
            viewModel.toggleHighlightClass(i, false);
            // viewModel.locationData()[i].infoWindow.close();
            // marker.setVisible(false);
        }
		  }
    },
    //toggles the highlight class on menu items
    toggleHighlightClass: function(item, value) {
        if (value == true) {
        	viewModel.locationData()[parseInt(item)].highlighted(true);
        } else {
        	viewModel.locationData()[parseInt(item)].highlighted(false);
        }
    },
    //Uses AJAX to obtain the infoWindow content for a marker
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
          	alert('Sorry, there was an issue connecting to Wikipedia. Please check your connection, and reload the page.');
          },
        });
    },
    //tests and matches search string against items in the menu
    runFilter: function(data) {
    	var input = viewModel.searchValue();
			var value = this.isLetterString(input);

			viewModel.closeAllWindowInfo();

	    //filter results against the input string 
	    if ( value == true ) {
	        for (var i = 0; i < viewModel.markers.length; i++) {
	            var marker = viewModel.markers[i];

	            //take the number of letters in the input string, and then test that against the substring of the name it is currently analysing.
	            // var res = marker.title.substring(0, inputLength);

	            //seach marker.title for the index of value found in search input
	            var res = marker.title.toLowerCase().indexOf(input.toLowerCase());

							//if its a match add to the final output. if not, remove.
            	if ( res == -1 ) {
            		marker.setVisible(false);
                viewModel.locationData()[i].showItem(false);
	            } else {
	                marker.setVisible(true);
	                viewModel.locationData()[i].showItem(true);
	            }
	        }
	    } else if(typeof value == 'undefined') {
	    	viewModel.resetFilter();
	    } 
    },
    //validates the data from input field before using it
    isLetterString: function(str) {
		  var value;
		  for (var i = 0; i < str.length; i++) {
		    value = str[i].match(/[a-z\s]/i);
		    if (value == null) {
		      //var i = str.length;
		      value = false;
		    } else {
		      value = true;
		    }
		  }
		  return value;
    },
		//resets all markers and menu items
    resetFilter: function() {
	    	//reset search value in DOM and viewModel to empty
        viewModel.searchValue('');
        for (var i = 0; i < viewModel.markers.length; i++) {
            var marker = viewModel.markers[i];
            marker.setVisible(true);
            marker.setAnimation(null);
            viewModel.locationData()[i].showItem(true);
            viewModel.locationData()[i].infoWindow.close();
            viewModel.toggleHighlightClass(i, false);
        }
    },
		//closes all infowindows
    closeAllWindowInfo: function() {
	    	//reset search value in DOM and viewModel to empty
        // viewModel.searchValue('');
        for (var i = 0; i < viewModel.markers.length; i++) {
            var marker = viewModel.markers[i];
            marker.setVisible(true);
            marker.setAnimation(null);
            // viewModel.locationData()[i].showItem(true);
            viewModel.locationData()[i].infoWindow.close();
            viewModel.toggleHighlightClass(i, false);
        }
    },
		//controls if infoWindows are displayed. Also controls marker animations
		filterInfoWindows: function(markerTitle) {
	    for (var i = 0; i < viewModel.markers.length; i++) {
	        var marker = viewModel.markers[i];
	        if ( marker.title.toLowerCase() != markerTitle.toLowerCase() ) {
	            viewModel.locationData()[i].infoWindow.close();
							marker.setAnimation(null);
	        } else {
	            viewModel.locationData()[i].infoWindow.open(map, marker);
							if (marker.getAnimation() !== null) {
							  marker.setAnimation(null);
							} else {
							  marker.setAnimation(google.maps.Animation.BOUNCE);
							}
	        }
	    }
		},
    //data array containing active markers for interaction programatically
		markers: [],
		//observable holds dynamic value of input field
		searchValue: ko.observable(''),
    //data array contiining menu items and marker windows
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
			}
		])
};

ko.applyBindings(viewModel);


//Adds information window to google maps when a marker is clicked on.
function addInfoWindow(marker, message, index) {
    var infoWindow = new google.maps.InfoWindow({
        content: message
    });
    viewModel.locationData()[index]['infoWindow'] = infoWindow;
    
    google.maps.event.addListener(marker, 'click', function (event) {
        viewModel.filterInfoWindows(marker.title);
    });

}


//callback function to setup Google Maps
function initMap() {
    var myOptions = {
     zoom: 12,
     mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), myOptions);
    var marker;

    $.each(viewModel.locationData(), function(i, item) {
        marker = new google.maps.Marker({
            position: item.location,
            title: item.name,
            map: map,
            animation: google.maps.Animation.DROP,
            draggable: false
        });
        marker.setMap(map);
        viewModel.getInfoWindowContent(marker, item.infoTitle, i);
        map.setCenter(marker.getPosition());
        viewModel.markers.push(marker);
    });

		var mapOverlay = new google.maps.OverlayView();
		mapOverlay.draw = function() {
		  //this assigns an id to the markerlayer Pane, so it can be referenced by CSS
		  this.getPanes().markerLayer.id = 'markerLayer';
		};
		mapOverlay.setMap(map);
 }


//handles errors generated by Google Maps when loading
function googleMapsError() {
	alert('Sorry, Google Maps did not load correctly. Please check your connection, and reload the page.');
}
