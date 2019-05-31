import Message from './../models/message.model';

class Messages {
    getAll(req, res) {
        Message.find({})
            .then(messages => {
                if(!messages) {
                    res.json({
                        error: "No message have created yet."
                    });
                }
                res.json({
                    data: messages
                });
            }).catch(err => {
                res.json({
                    error: "The server accountered a problem, try again later."
                })
            })
    }

    getOne(req, res) {
        Message.findOne({})
            .then(response => {
                if(!response) {
                    res.json({
                        error: "The Message was not found"
                    });
                }
                res.json({
                    data: response
                });
            }).catch(err => {
                res.json({
                    error: "The server accountered a problem, try again later."
                })
            })
    }

    send(req, res) {
        const message = new Message({
            name: req.body.name,
            phone: req.body.phone,
            district: req.body.district,
        })

        message.save().then(result => {
            res.json({
                data: result
            })
        }).catch(error => {
            res.json({
                error: "The server accountered a problem, try again later."
            });
        })
    }
}

export default Messages;