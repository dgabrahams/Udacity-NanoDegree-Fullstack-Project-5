var viewModel = {
    highlightMarker: function(data, event) {
		  for (i = 0; i < markers.length; i++) {
		    var marker = markers[i];

        if ( data.name.toLowerCase() == marker.title.toLowerCase() ) {
            marker.setVisible(true);
            google.maps.event.trigger(marker, 'click');
            viewModel.toggleHighlightClass(i, true);
        } else {
            marker.setVisible(false);
            viewModel.locationData()[i].infoWindow.close();
            viewModel.toggleHighlightClass(i, false);
        }
		  }
    },
    toggleHighlightClass: function(item, value) {
        if (value == true) {
        	viewModel.locationData()[item].highlighted(true);
        } else {
        	viewModel.locationData()[item].highlighted(false);
        }
    },
    getInfoWindowContent: function(marker, title, index) {
        $.ajax({
          url: '/json/'+String(title),
          type: 'GET',
          indexValue: index,
          marker: marker,
          dataType: 'json',
          success: function(data, textStatus, jqXHR) {
          	// console.log(this.indexValue);
          	// console.log(data);
          	// console.log(textStatus);
          	// console.log(jqXHR);
          	var result = data.query.pages;
          	// console.log(result);
          	for (var property in result) {
          		// console.log(property);
          		// console.log(result[property].extract);
          		// console.log(property.pageid);
          		// console.log(result[property].extract.substring(0, 250)+'...');
          		addInfoWindow(this.marker, result[property].extract.substring(0, 150)+'...', this.indexValue);
          	}
          	// addInfoWindow(this.marker, data, this.indexValue);          	
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
			 // info : '<div>thing London Dungeon</div>',
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
			 // info : '<div>thing Palace of Westminster</div>',
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
			 // info : '<div>thing Imperial War Museum</div>',
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
			 // info : '<div>thing Buckingham Palace</div>',
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
			 // info : '<div>thing Shakespears Globe Theatre</div>',
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
			 // info : '<div>thing Monument</div>',
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}
		])
};

ko.applyBindings(viewModel);
// ko.applyBindings(new viewModel.locationData(), document.getElementById("menu-items"));
