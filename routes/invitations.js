const express = require("express");
const router = express.Router();

const { createInvitation, GetInviteInfo } = require("../database/index");

router.post("/createInvitation", (req, res) => {
  const { name, date, location, otherDetails, type, userId } = req.query;
  // console.log(name, date, location, otherDetails, type, userId)
  createInvitation(name, date, location, otherDetails, type, userId)
    .then((inviteId) => {
      console.log("Invite has been created with the id of ", inviteId);
      res.send(inviteId);
    })
    .catch(() => {
      throw Error;
    });
});
router.post("/getInviteInfo", (req, res) => {
  const { inviteId } = req.query;
  GetInviteInfo(inviteId)
    .then((info) => {
      res.send(info);
    })
    .catch(() => {
      throw Error;
    });
});

module.exports = { invitationsRouter: router };
