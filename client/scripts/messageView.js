var MessageView = {

  $username: $('.username'),
  // $usernameLink: $('div.username'),

  initialize: function () {
    console.log('MessageView init triggered!');
    $('#chats').on('click', 'a', MessageView.handleUsernameClick);
  },

  /*
  var message = {
    username: 'Mel Brooks',
    text: 'Never underestimate the power of the Schwartz!',
    roomname: 'lobby'
  };
  */

  // create an underscore template object.
  // TODO: handle clicks on username <a> tags to add friend
  render: _.template(`
      <div id="<%= objectId %>" class="chat" roomname='<%= roomname %>'>
        <div class="username"><a href='#'><%= username %></a></div>
        <div class="message-text"><%= text %></div>
      </div>
    `),

  handleUsernameClick: function (event) {
    event.preventDefault();
    Friends.toggleStatus(event.target.text);
  }
};