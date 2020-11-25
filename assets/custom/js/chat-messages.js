
function loadMessages() {
  console.log("LoadMessages is called");
  // Load existing chat messages
  io.socket.get('/chatMessage', function(messages, response) {
    renderChatMessages(messages);
  });

  // Listen for new chat messages
  io.socket.on('chatmessage', function(body) {
    renderChatMessages(body.data);
  });
}

function renderChatMessages(data) {
  const chatContent = $('#chat-content');
  const template = $.templates('#chatTemplate');
  let htmlOutput = template.render(data);
  chatContent.append(htmlOutput);
  // automatically scroll downwards
  const scrollHeight = chatContent.prop("scrollHeight");
  chatContent.animate({
    scrollTop: scrollHeight
  }, "slow");
}

