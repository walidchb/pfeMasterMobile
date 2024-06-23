import {UPDATE_USER} from '../actions/userActions';

const defaultState = {
  id: 1,
  nom: 'admin',
  email: 'admin@admin.com',
  tel: '+212612345678',
  birthday: '1997-07-30',
};



const userReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return oldState;
    default:
      return oldState;
  }
};

export default userReducer;
