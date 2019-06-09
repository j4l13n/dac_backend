import Subscribers from './../models/subscriber.model';

class Subscriber {
    getAll(req, res) {
        Subscribers.find({})
            .then(response => {
                if(!response) {
                    res.json({
                        error: "There was an error when fetching subscribers."
                    });
                }
                res.json({
                    data: response
                });
            }).catch(err => {
                console.log(err);
            })
    }

    getOne(req, res) {
        const subscriberId = req.params.id;
        Subscribers
            .findOne({_id: subscriberId})
            .exec((err, subscriberDetails) => {
                if(err) {
                    console.log(err);
                    res.status(500).json({message: err});
                }
                res.status(200).json({message: "Subscriber Detail fetched Successfully", data: subscriberDetails});
            });
    }

    create(req, res) {
        Subscribers.findOne({ phone: req.body.phone }).then(user => {
            if (user) {
            return res.status(400).json({ error: "User must have different phone numbers." });
            }
        }).catch(err => {
            console.log("Something went with finding if the user existed.")
        });

        const subscriber = new Subscribers({
            name: req.body.name,
            phone: req.body.phone,
            district: req.body.district,
            location: req.body.location,
            province: req.body.province,
            sector: req.body.sector,
            cell: req.body.cell,
            gender: req.body.gender,
            owner: req.body.owner,
            is_active: true
        })

        subscriber.save().then(result => {
            res.json({
                data: result
            })
        }).catch(error => {
            res.json({
                error: "There was an error when saving the subscriber." + error
            });
        })
    }

    update(req, res) {
        const subscriberId = req.params.id;
        Subscribers
            .findByIdAndUpdate(subscriberId, { $set: req.body }).exec((err, subscriberDetails) => {
                if (err) res.status(500).json({message: err})
                res.status(200).json({message: "Subscriber updated"})
            });
    }
}

const subscribers = new Subscriber();

export default subscribers;