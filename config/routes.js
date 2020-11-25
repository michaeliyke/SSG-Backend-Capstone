/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /': {
    action: 'home'
  },
  'GET /help': {
    action: 'help'
  },
  'GET /contact': {
    action: 'contact'
  },
  'GET /login': {
    action: 'access/view-login'
  },
  'GET /signup': {
    action: 'access/view-signup'
  },
  '/profile': {
    controller: 'UserController',
    action: 'render' //render is a method that lives within UserController
  },
  '/chat': {
    view: 'chatroom'
  },
  'POST /postMessage': {
    controller: 'ChatMessageController',
    action: 'postMessage'
  }
};
