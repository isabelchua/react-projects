const bcryptjs = require("bcryptjs");
const bcrypt = require("bcryptjs/dist/bcrypt");
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const res = require("express/lib/response");

const User = require("../models/User");

//@route		POST api/users
//@desc		Register a user
//@access	Public
router.post(
	"/",
	[check("name", "Name is required").not().isEmpty()],
	[check("email", "Please input a valid email").isEmail()],
	[
		check(
			"password",
			"Please enter a password with 5 or more characters"
		).isLength({ min: 5 })
	],
	async (req, res) => {
		//res.send(req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		//res.send("passed");

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: "User already exists" });
			}
			user = new User({
				name,
				email,
				password
			});

			const salt = await bcryptjs.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();
		} catch (err) {}
	}
);

module.exports = router;
