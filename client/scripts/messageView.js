var MessageView = {

      /*
      var message = {
        username: 'Mel Brooks',
        text: 'Never underestimate the power of the Schwartz!',
        roomname: 'lobby'
      };
    */

  render: _.template(`
      <div class="chat" roomname="<% roomnam %>">
        <div class="username"><%= username %></div>
        <div><%= text %></div>
      </div>
    `)

  // function that takes in an message object, and
};