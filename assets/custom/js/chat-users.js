
function loadUsers() {
  // Load existing users
  io.socket.get('/user', function(users, response) {
    renderChatUsers(users);
  });

  // Listen for new & updated users
  io.socket.on('user', function(body) {
    io.socket.get('/user', function(users, response) {
      renderChatUsers(users);
    });
  });
}

function renderChatUsers(data) {
  const template = $.templates('#usersTemplate');
  let htmlOutput = template.render(data);
  $('#users-content').html(htmlOutput);
}

