// ko.applyBindings(new AppViewModel());




var anotherObservableArray = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
]);




// var locationData = ko.observableArray([
// 	{
// 	 tag: "Museum",
// 	 name: "London Dungeon",
// 	 location: {
// 	   lat: 51.5025036,
// 	   lng: -0.1188513
// 	 },
// 	 showItem: ko.observable(true),
// 	 info : '<div>thing</div>'
// 	}, {
// 	 tag: "Government",
// 	 name: "Palace of Westminster",
// 	 location: {
// 	   lat: 51.4994747,
// 	   lng: -0.1249188
// 	 },
// 	 showItem: ko.observable(true),
// 	 info : '<div>thing</div>'
// 	}, {
// 	 tag: "Museum",
// 	 name: "Imperial War Museun",
// 	 location: {
// 	   lat: 51.4958298,
// 	   lng: -0.108777
// 	 },
// 	 showItem: ko.observable(true),
// 	 info : '<div>thing</div>'
// 	}, {
// 	 tag: "Government",
// 	 name: "Buckingham Palace",
// 	 location: {
// 	   lat: 51.5013641,
// 	   lng: -0.1419852
// 	 },
// 	 showItem: ko.observable(true),
// 	 info : '<div>thing</div>'
// 	}, {
// 	 tag: "Entertainment",
// 	 name: "Shakespear's Globe Theatre",
// 	 location: {
// 	   lat: 51.5080892,
// 	   lng: -0.0972754
// 	 },
// 	 showItem: ko.observable(true),
// 	 info : '<div>thing</div>'
// 	}, {
// 	 tag: "Landmarks",
// 	 name: "Monument",
// 	 location: {
// 	   lat: 51.5101626,
// 	   lng: -0.0860095
// 	 },
// 	 showItem: ko.observable(true),
// 	 info : '<div>thing</div>'
// 	}
// ]);
// ko.applyBindings(new locationData(), document.getElementById("menu-items"));

// console.log(locationData.length);


// function menuItemsViewModel() {

// 	showItem: ko.observable(true)

// }


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



function WebmailViewModel() {
    // Data
    var self = this;
    // self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];

		var locations = [];

    $.each(data, function(i, item) {
    	// console.log(item);
    	locations.push(item.name);
    	console.log(locations);
    });

    self.locations = locations;

// <ul data-bind="foreach: folders" id="menu-items">
//     <li data-bind="text: $data"></li>
// </ul>


    // <div id="test">
    //     <p>First name: <strong data-bind="text: firstName" id="test-2"></strong></p>
    //     <p>Last name: <strong data-bind="text: lastName"></strong></p>
    // </div>



    // <ul data-bind="foreach: locations" id="menu-items">
    //     <li data-bind="text: $data"></li>
    // </ul>


      //  <ul data-bind="foreach: locationData" id="location-items">
      //     <li data-bind="text: $data.name, visible: $data.showItem"></li>
      // </ul>



};

// ko.applyBindings(new WebmailViewModel());
// ko.applyBindings(new WebmailViewModel(), document.getElementById("menu-items"));




function AppViewModel() {
    // this.firstName = "Bert";
    // this.lastName = "Bertington";
    console.log('AppViewModel');

    var self = this;
    self.firstName = "Bert";
    self.lastName = "Bertington";

	  self.records = ko.observableArray([]);

	  $.getJSON("/view/template-test.html", function(data) {
	      // self.records(data);
	      // console.log(data.responseText);
	      console.log(data);
	  });
	  // console.log(self.records['responseText']);
	  // console.log(self.records);

	  console.log('AppViewModel End');

}

// Activates knockout.js
// ko.applyBindings(new AppViewModel(), document.getElementById("test-2"));
// ko.applyBindings(new AppViewModel());
// ko.applyBindings(new AppViewModel(), document.getElementById("test"));

// console.log('view model');

