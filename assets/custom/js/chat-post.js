const {log} = console;
function activateChat() {
  const postField = $('#post-field');
  const postButton = $('#post-btn');
  const postErr = $('#post-err');

  // Bind to click event
  postButton.click(postMessage);

  // Bind to enter key event
  postField.keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      postMessage();
    }
  });

  function postMessage() {
    if (postField.val() == "") {
      alert("Please type a message!");
    } else {
      let text = postField.val();
      io.socket.post('/postMessage', {
        message: text
      }, function(resData, jwRes) {
        if (jwRes.statusCode != 200) {
          postErr.html("<p>" + resData.message + "</p>")
          postErr.show();
        } else {
          log(resData)
          postField.val(''); // clear input field
        }
      });
    }
  }
}
