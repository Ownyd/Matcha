import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  biography: String,
  interests: [String],
  images: [String],
});

const userModal = mongoose.model('User', userSchema);

export default userModal;
