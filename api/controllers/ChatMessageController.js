/**
 * ChatMessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const {log} = console;
module.exports = {

  postMessage: async (request, response) => {
    log("Request Comes here");
    // Make sure this is a socket request (not traditional HTTP)
    if (!request.isSocket) {
      log("Not a socket request");
      return response.badRequest();
    }

    try {
      let user = await User.findOne({
        email: 'johnnie86@gmail.com'
      });
      log(user)
      let msg = await ChatMessage.create({
        message: request.body.message,
        createdBy: user
      });
      if (!msg.id) {
        throw new Error('Message processing failed!');
      }
      msg.createdBy = user;
      ChatMessage.publishCreate(msg);
    } catch (err) {
      return response.serverError(err);
    }

    return response.ok();
  },

};

