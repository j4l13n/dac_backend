import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now
    },
    district: {
        type: String
    },
    location: {
        type: String
    },
    province: {
        type: String
    },
    sector: {
        type: String
    },
    cell: {
        type: String
    },
    gender: {
        type: String
    },
    owner: {
        type: String,
        ref: 'User',
        required: true
    }
});

const Subscriber = mongoose.model("subscribers", SubscriberSchema);

export default Subscriber;