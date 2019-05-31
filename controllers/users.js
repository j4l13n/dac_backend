import User from './../models/user.model';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from './../config/config';

class Users {
    create(req, res) {
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
            return res.status(400).json({ error: `Email with this ${req.body.email} already exists` });
            }
        });
    
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
    
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.is_admin = true;
            newUser.is_active = true;
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
        });
    }

    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        // Find user by email
        User.findOne({ email }).then(user => {
            // Check if user exists
            if (!user) {
                return res.status(404).json({ error: "Email not found" });
            }
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
        // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                    expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                    }
                );
                } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
                }
            });
        });
    }

    getAll(req, res) {
        User.find().then(users => {
            if(!users) {
                res.json({
                    error: "There is was an error, when fetching data"
                })
            }
            res.json({
                data: users
            });
        })
    }

    getOne() {
        const userId = req.params.id;
        User
            .findOne({_id: userId})
            .exec((err, userDetails) => {
                if(err) {
                    console.log(err);
                    res.status(500).json({message: err});
                }
                res.status(200).json({message: "Subscriber Detail fetched Successfully", data: userDetails});
            });
    }
}

const users = new Users;

export default users;