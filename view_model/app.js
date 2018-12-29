var viewModel = {
    myFunction: function(data, event) {
    	console.log('myFunction');
	    	console.log(data);
        if (event.shiftKey) {
            //do something different when user has shift key down
        } else {
            //do normal action
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
			 info : '<div>thing</div>'
			}, {
			 tag: "Government",
			 name: "Palace of Westminster",
			 location: {
			   lat: 51.4994747,
			   lng: -0.1249188
			 },
			 showItem: ko.observable(true),
			 info : '<div>thing</div>'
			}, {
			 tag: "Museum",
			 name: "Imperial War Museun",
			 location: {
			   lat: 51.4958298,
			   lng: -0.108777
			 },
			 showItem: ko.observable(true),
			 info : '<div>thing</div>'
			}, {
			 tag: "Government",
			 name: "Buckingham Palace",
			 location: {
			   lat: 51.5013641,
			   lng: -0.1419852
			 },
			 showItem: ko.observable(true),
			 info : '<div>thing</div>'
			}, {
			 tag: "Entertainment",
			 name: "Shakespear's Globe Theatre",
			 location: {
			   lat: 51.5080892,
			   lng: -0.0972754
			 },
			 showItem: ko.observable(true),
			 info : '<div>thing</div>'
			}, {
			 tag: "Landmarks",
			 name: "Monument",
			 location: {
			   lat: 51.5101626,
			   lng: -0.0860095
			 },
			 showItem: ko.observable(true),
			 info : '<div>thing</div>'
			}
		])
};
ko.applyBindings(viewModel);
// ko.applyBindings(new viewModel.locationData(), document.getElementById("menu-items"));
