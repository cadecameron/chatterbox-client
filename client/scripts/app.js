var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    App.startSpinner();
    App.fetch(App.stopSpinner);
    RoomsView.initialize();
    FormView.initialize();
    MessagesView.initialize();
    MessageView.initialize();
  },

  fetch: function(callback = () => {}) {
    Parse.readAll((data) => {
      console.log(data); // examine the response from the server request
      callback();
      Messages.processResults(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
