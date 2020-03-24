var FormView = {

  $form: $('form'),
  $messageField: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault(); // Stop the browser from submitting the form
    var userName;
    if (window.location.search) { // check if browser has access to global username, and if not assign default value
      userName = window.location.search.substring(10);
    } else {
      userName = 'anonymous';
    }
    var roomName = RoomsView.$select.val();
    var message = Messages.formatNewMessage(userName, roomName, FormView.$messageField.val());
    Parse.create(message, function() {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};
