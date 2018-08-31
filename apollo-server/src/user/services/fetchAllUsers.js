import User from '../../mongooseModals/userModal';

export default function addUser() {
  return User.find();
}
