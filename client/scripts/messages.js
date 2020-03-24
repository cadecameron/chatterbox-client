var Messages = {

  // function to process readAll results
  processResults: function (allMessagesObject) {
    
    // process object, and send to render
    var resultsArray = allMessagesObject.results;

    // walk through the results array, and sanitize all key/property pairs, add default values if values are blank/not valid, or key doesn't exist

    for (i = 0; i < resultsArray.length; i++) {

      for (var key in resultsArray[i]) { // for each key in the message object

        // look at the value of the key, and check for XSS scripting
        resultsArray[i][key] = Messages.sanitize(resultsArray[i][key]);
      }

      // check to make sure username, text and roomname are in the message object
      if (resultsArray[i].username === undefined || resultsArray[i].username === '') {
        resultsArray[i].username = 'anonymous';
      }
      if (resultsArray[i].roomname === undefined || resultsArray[i].roomname === '') {
        resultsArray[i].roomname = 'lobby';
      }
      if (resultsArray[i].text === undefined) {
        resultsArray[i].text = '';
      }
      if (resultsArray[i].objectId === undefined) {
        resultsArray[i].objectId = 'NA';
      }
    }
    MessagesView.render(resultsArray);
    Rooms.render(resultsArray);
  },

  // function that takes in a html string, and escapes all special characters
  sanitize: function(htmlString) {
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };

    var sanitizedString = String(htmlString).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });

    // return the sanitized string to the processResults function
    return sanitizedString;
  },

  // function to format valid messages object
  formatNewMessage: function (userName, roomName, text) {
    var message = {
      username: userName,
      roomname: roomName,
      text: text
    };
    return message;
  }
};
