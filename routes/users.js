const expres = require("express");
const router = expres.Router();
const { addGuest, getGuests } = require("../database/index");

router.post("/addGuest", (req, res) => {
  const fName = req.query.fName;
  const lName = req.query.lName;
  const number = req.query.number;
  const phone = req.query.phone;

  addGuest(fName, lName, number, phone).then((result) => {
    if (result.ok) {
      res.send("Successfuly added a guest !");
    } else {
      res.send("Could not add to database.");
    }
  });
});

router.get("/getGuests", (req, res) => {
    
  getGuests()
    .then((result) => {
        console.log(result)
        res.send(result);
    })
    .catch(() => {
      res.send("error");
    });
});

module.exports = { userRouter: router };
