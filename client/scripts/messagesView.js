var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    //MessageView.initialize();
  },

  // create function that iterates through entire results array, and passes each message object to renderMessage function
  render: function (resultsArray) {
    // clear the current chat list
    $('#chats').html('');
    // iterate through the results array, and call renderMessage for each message object
    for (let i = resultsArray.length - 1; i >= 0; i--) {
      if (resultsArray[i].text !== '') {
        MessagesView.renderMessage(resultsArray[i]);
      }
    }
  },

  renderMessage: function (message) {
    /*
      var message = {
        username: 'Mel Brooks',
        text: 'Never underestimate the power of the Schwartz!',
        roomname: 'lobby'
      };
    */

    // take in a message object, send it to messageView function for templating, and append returned HTML string to $chats
    var htmlString = MessageView.render(message);
    console.log(message.text);
    this.$chats.prepend(htmlString);
  },

  //filter by rooms function
  filterMessagesByRoomName: function (roomName) {
  // Select all .chat in the #chats, and run the filter function over each of them
    $('.chat').filter(function () {
      // Use toggle to hide the .class if the roomname attribute doesn't match roomName

      if ($(this).is(`[roomname='${roomName}']`)) {
        $(this).toggle(true);
      } else {
        $(this).toggle(false);
      }
    });
  },

  // create a fuction that toggles users who are friends
  toggleFriend: function (userName) {
    console.log('Friend toggle function triggered!');
    $('.username').each(function () {
      // Use toggle to hide the .class if the roomname attribute doesn't match roomName
      console.log($(this).text());
      if ($(this).text() === userName) {
        $(this).toggleClass('friend');
      }
    });
  }
};