var Rooms = {

  add: function(newRoomName) {
    //add newRoomName to the drop down list
    RoomsView.renderRoom(newRoomName);
  },

  render: function(resultsArray) {
    //create room array
    var roomArray = [];
    //pull roomname property from each object
    for (let i = 0; i < resultsArray.length; i++) {
      var roomName = resultsArray[i].roomname;
      //push each roomname value into a room array
      if (roomArray.indexOf(roomName) === -1) {
        roomArray.push(roomName);
      }
    }
    //return room array
    RoomsView.render(roomArray);
  }
};