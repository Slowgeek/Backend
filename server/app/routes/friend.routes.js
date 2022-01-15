const friendcontroller = require("../controllers/friend.controller");
const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //use middleware in array *
  app.post(
    "/user/friend/create",
    [authJwt.verifyToken],
    friendcontroller.createFriend
  );
  app.put(
    "/user/friend/update",
    [authJwt.verifyToken],
    friendcontroller.updateRequestStatus
  );
  app.get(
    "/user/friend/list/:status",
    [authJwt.verifyToken],
    friendcontroller.getFriendRequestList
  );
  app.delete(
    "/user/friend/remove",
    [authJwt.verifyToken],
    friendcontroller.removeFriend
  );
};
