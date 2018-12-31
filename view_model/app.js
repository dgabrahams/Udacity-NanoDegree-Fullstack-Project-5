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
    wikiURL: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=',
    generateLinks: function() {
		  for (i = 0; i < viewModel.locationData().length; i++) {
		  	viewModel.locationData()[i].infoTitle = viewModel.wikiURL + viewModel.locationData()[i].infoTitle;
		  }
    },
    getInfoWindowContent: function() {

	    	// xhr = new XMLHttpRequest();

        $.ajax({
          url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Monument_to_the_Great_Fire_of_London',
          type: 'GET',
          dataType: 'json',
					// xhrFields: {
					// 	withCredentials: true
					// },
          // crossDomain: true,
          // headers: {"Access-Control-Allow-Origin": "*"},
          headers: {
          	// "Origin": "http://localhost:8000/",
          	"Content-Type": "application/json; charset=UTF-8",
          },
          success: function() { alert('hello!'); },
          error: function() { alert('boo!'); },
          // beforeSend: setHeader
        });

	      function setHeader(xhr) {
	        xhr.setRequestHeader('Access-Control-Allow-Origin', 'x-requested-with');
	        // xhr.setRequestHeader('passkey', 'Bar');
	      }
// xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
// xhr.setRequestHeader("Origin", "http://www.yourpage.com");
			// $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Monument_to_the_Great_Fire_of_London", function(data) { 
			//     // Now use this data to update your view models, 
			//     // and Knockout will update your UI automatically 
			//     console.log(data);
			// })

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
			 info : '<div>thing London Dungeon</div>',
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}, {
			 tag: "Government",
			 name: "Palace of Westminster",
			 location: {
			   lat: 51.4994747,
			   lng: -0.1249188
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Palace of Westminster</div>',
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}, {
			 tag: "Museum",
			 name: "Imperial War Museum",
			 location: {
			   lat: 51.4958298,
			   lng: -0.108777
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Imperial War Museum</div>',
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}, {
			 tag: "Government",
			 name: "Buckingham Palace",
			 location: {
			   lat: 51.5013641,
			   lng: -0.1419852
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Buckingham Palace</div>',
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}, {
			 tag: "Entertainment",
			 name: "Shakespear's Globe Theatre",
			 location: {
			   lat: 51.5080892,
			   lng: -0.0972754
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Shakespears Globe Theatre</div>',
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}, {
			 tag: "Landmarks",
			 name: "Monument",
			 location: {
			   lat: 51.5101626,
			   lng: -0.0860095
			 },
			 showItem: ko.observable(true),
			 highlighted: ko.observable(false),
			 info : '<div>thing Monument</div>',
			 infoTitle: 'Monument_to_the_Great_Fire_of_London'
			}
		])
};

viewModel.generateLinks();

ko.applyBindings(viewModel);
// ko.applyBindings(new viewModel.locationData(), document.getElementById("menu-items"));
