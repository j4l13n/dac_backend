import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TreeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Tree = mongoose.model("trees", TreeSchema);

export default Tree;