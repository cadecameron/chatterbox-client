var Rooms = {
  
  add: function(newRoomName) {
    RoomsView.renderRoom(newRoomName); //add newRoomName to the drop down list
  },

  render: function(resultsArray) {
    var roomArray = []; // create room array

    // pull roomname property from each object
    for (let i = 0; i < resultsArray.length; i++) {
      var roomName = resultsArray[i].roomname;

      // push each roomname value into a room array
      if (roomArray.indexOf(roomName) === -1) {
        roomArray.push(roomName);
      }
    }
    RoomsView.render(roomArray); // return room array
  }
};