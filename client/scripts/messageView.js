var MessageView = {

  $username: $('.username'),

  initialize: function () {
    console.log('MessageView init triggered!');
    $('#chats').on('click', 'a', MessageView.handleUsernameClick);
  },

  // create an underscore template object
  render: _.template(`
      <div id="<%= objectId %>" class="chat" roomname='<%= roomname %>'>
        <div class="username"><a href='#'><%= username %></a></div>
        <div class="message-text"><%= text %></div>
      </div>
    `),

  // function to add clicked user to friends list
  handleUsernameClick: function (event) {
    event.preventDefault();
    Friends.toggleStatus(event.target.text);
  }
};
