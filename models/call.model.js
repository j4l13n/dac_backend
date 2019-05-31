import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CallSchema = new Schema({
    call_uuid: {
        type: String,
        required: true
    },
    caller: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Call = mongoose.model("calls", CallSchema);

export default Call;