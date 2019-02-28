import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const onSignIn = async () => {
  if (_values.username && _values.password) { 
    return fetch("http://localhost:3001/sessions/create", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: _values.username,
        password: _values.password
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.access_token){
         AsyncStorage.setItem(USER_KEY, responseData.access_token);
        _values.success = 1;
        alert("Login successfully!");
        return Promise.resolve(_values.success);
      } else{
        _values.success = 0;
        return Promise.resolve(_values.success);
      }
    });
  } else{
    alert("Please enter your username and password.");
  }
}

export const onSignUp = () => {
  if (_values.username && _values.password) { 
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: _values.username,
        password: _values.password
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      _values.username = "";
      _values.password = "";
      alert("You may login!");
    })
    .done();
  } else{
    alert("Please enter your username and password.");
  }
}

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const _values = { 
  username: '',
  password: '',
  success: '',
  region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
};

export const onRegionChange = (region) => {
     _values.region = region;
}