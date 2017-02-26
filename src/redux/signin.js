//=============================//
//      Action Types
//=============================//
const REQUEST = 'Request';
const SUCCESS = 'Success';
const FAILED  = 'Failed';

//=============================//
//      Action Creators
//=============================//
export function loginRequest() {
	return {
		type: REQUEST
	};
}

export function loginRequestSuccess(json) {
	return {
		type: SUCCESS,
		payload: json
	};
}

export function loginRequestFailed(error) {
	return {
		type: FAILED,
		error: error.message
	};
}

//=============================//
//      Reducer
//=============================//
const INITIAL_STATE = {
	error: '',
	loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST:
			return {
				...state,
				loading: true,
				error: ''
			};
		case SUCCESS:
			return {
				...state,
				loading: false,
				error: ''
			};
		case FAILED:
			return {
				...state,
				loading: false,
				error: ''
			};
		default:
      return state;
  }
};

//=============================//
//4: Load Data
//=============================//
const userInfo = {
	trainee_id: 1,
	full_name: 'test',
	email: 'test@gmail.com',
	birthday: '1986-01-20',
	token: 'abcxyzwendsjkfjdsklfjkds'
};
export function login(userCredentials) {
	if (userCredentials.username === 'test@gmail.com' && userCredentials.password === '123456') {
		loginRequestSuccess(userInfo);
	} else {
		loginRequestFailed();
	}
}
