import User from '../../mongooseModals/userModal';

export default function addUser(user) {
  console.log(user);
  const newUser = new User({
    name: user.name,
    gender: user.gender,
    biography: '',
    interests: [''],
    images: [''],
  });
  newUser.save();
  return user;
}
