import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    create_on: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model("messages", MessageSchema);

export default Message;