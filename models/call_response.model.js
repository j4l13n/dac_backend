import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CallResponseSchema = new Schema({
    answerOne: {
        type: Boolean
    },
    answerTwo: {
        type: Boolean
    },
    answerThree: {
        type: Boolean
    },
    answerFour: {
        type: Boolean
    },
    answerFive: {
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