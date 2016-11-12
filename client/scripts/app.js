var app = {};
app.init = function() {};
app.server = 'https://api.parse.com/1/classes/messages';


var message = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};

app.send = function() {
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function() {
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(message) {
  $('#chats').append(`<div onclick='app.handleUsernameClick()' class='message ${message.roomname} username' >
                        <h4>${message.username}</h4>
                        <p>${message.text}</p>
                      </div>`);

};

app.renderRoom = function(room) {
  $('#roomSelect').append(`<p>${room}</p>`);
};

app.handleUsernameClick = function() {
  alert('cats');

};






//get 
//post - 
//put - update
//delete