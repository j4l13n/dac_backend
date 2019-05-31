import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CallResponseSchema = new Schema({
    questionOne: {
        type: Boolean
    },
    questionTwo: {
        type: Boolean
    },
    questionThree: {
        type: Boolean
    },
    questionFour: {
        type: Boolean
    },
    questionFive: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    },
    caller: {
        type: String
    }
});

const CallResponse = mongoose.model("callReponses", CallResponseSchema);

export default CallResponse;