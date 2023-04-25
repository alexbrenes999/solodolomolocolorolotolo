import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    id: { type: String, required: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

export default model('User', userSchema);
