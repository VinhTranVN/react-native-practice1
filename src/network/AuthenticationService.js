const BASE_URL = 'http://fixiesvn.azurewebsites.net/api/';

export default class AuthenticationService {
  //Return an promise
  static signin(userCredentials) {
		const url = `${BASE_URL}trainees/login`;
    return AuthenticationService.postData(url, userCredentials);
  }

  static signup(userInfo) {
		const url = `${BASE_URL}trainees/register`;
    return AuthenticationService.postData(url, userInfo);
  }

	static postData(url, body) {
		let defaulHeaders = new Headers();
		defaulHeaders.append('Content-Type', 'application/json');
		defaulHeaders.append('charset', 'utf-8');

		var myInit = {
			method: 'POST',
			headers: defaulHeaders,
			body: body
		};
		let request = new Request(url);
		return fetch(request, myInit)
      .then(response => {
        if(response.ok) {
          return response;
        }
        let errorMessage = 'Network response was not ok.'
        if(response.json().hasOwnProperty('message')) {
          errorMessage = response['message'];
        }
        throw new Error(errorMessage);
      })
      .catch(error => {
        console.log('[NetWork Service]: There has been a problem with your fetch operation: ' + error.message);
        return error;
    });
	}
}
