var viewModel = {
    highlightMarker: function(data, event) {

			// Clicking a location on the list displays unique information about
			// the location, and animates its associated map marker (e.g.
			// bouncing, color change.)

    	// console.log('highlightMarker');
	    // console.log(data);
			// console.log(markers);

		  for (i = 0; i < markers.length; i++) {
		    var marker = markers[i];

        if ( data.name.toLowerCase() == marker.title.toLowerCase() ) {
            // console.log('data.name == marker.title');
            marker.setVisible(true);
            google.maps.event.trigger(marker, 'click');
            viewModel.toggleHighlightClass(i, true);
        } else {
            // console.log('NOT data.name == marker.title');
            marker.setVisible(false);
            viewModel.locationData()[i].infoWindow.close();
            viewModel.toggleHighlightClass(i, false);
        }
		  }
    },
    currentProfit: ko.observable(150000),
    toggleHighlightClass: function(item, value) {
    	  // console.log('toggleHighlightClass');
        if (value == true) {
        	viewModel.locationData()[item].highlighted(true);
        } else {
        	viewModel.locationData()[item].highlighted(false);
        }
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
			 // highlighted: 'thing',
			 highlighted: ko.observable(false),
			 info : '<div>thing London Dungeon</div>'
			}, {
			 tag: "Government",
			 name: "Palace of Westminster",
			 location: {
			   lat: 51.4994747,
			   lng: -0.1249188
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Palace of Westminster</div>'
			}, {
			 tag: "Museum",
			 name: "Imperial War Museum",
			 location: {
			   lat: 51.4958298,
			   lng: -0.108777
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Imperial War Museum</div>'
			}, {
			 tag: "Government",
			 name: "Buckingham Palace",
			 location: {
			   lat: 51.5013641,
			   lng: -0.1419852
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Buckingham Palace</div>'
			}, {
			 tag: "Entertainment",
			 name: "Shakespear's Globe Theatre",
			 location: {
			   lat: 51.5080892,
			   lng: -0.0972754
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Shakespears Globe Theatre</div>'
			}, {
			 tag: "Landmarks",
			 name: "Monument",
			 location: {
			   lat: 51.5101626,
			   lng: -0.0860095
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Monument</div>'
			}
		])
};


// viewModel.highlightMenuItem = ko.pureComputed(function(item) {
// 		console.log(item);
//     return this.currentProfit() < 0 ? "profitWarning" : "profitPositive";
// }, viewModel);

// Causes the "profitPositive" class to be removed and "profitWarning" class to be added
// viewModel.currentProfit(-50);
// viewModel.currentProfit(50);



ko.applyBindings(viewModel);
// ko.applyBindings(new viewModel.locationData(), document.getElementById("menu-items"));
