var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
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
    $chats.prepend(htmlString);

  }

};