var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $roomNameField: $('#roomNameField'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleRoomChange);
  },

  render: function(roomsArray) {

    // for each roomName found in results array, renderRoom (roomName)
    for (let i = 0; i < roomsArray.length; i++) {
      RoomsView.renderRoom(roomsArray[i]);
    }
  },

  renderRoom: function(roomName) {

    // take in a room name string, and add it to $('#rooms select') dropdown
    var htmlString = `<option value="${roomName}">${roomName}</options>`;
    this.$select.append(htmlString);
  },

  handleAddRoom: function(event) {
    event.preventDefault();
    Rooms.add(RoomsView.$roomNameField.val());
  },

  handleRoomChange: function(event) {
    console.log(event.target.value);
    MessagesView.filterMessagesByRoomName(event.target.value);
  }
};
