const express = require("express");
const router = express.Router();

//@route		GET api/contacts
//@desc		Get all users contacts
//@access 	Private
router.get("/", (req, res) => {
	res.send("get all contacts");
});

//@route		POST api/contacts
//@desc		Add new contact
//@access 	Private
router.post("/", (req, res) => {
	res.send("add contact");
});

//@route		PUT api/contacts
//@desc		update contact
//@access 	Private
router.put("/:id", (req, res) => {
	res.send("update contact");
});

//@route		DELETE api/contacts
//@desc		update contact
//@access 	Private
router.delete("/:id", (req, res) => {
	res.send("delete contact");
});

module.exports = router;
