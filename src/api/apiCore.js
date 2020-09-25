import axios from "axios";

// const fetchURL =
//   "http://bisparibe-env.eba-dgmzbqp5.ca-central-1.elasticbeanstalk.com/profiles";
// const fetchUrlSearch =
//   "http://bisparibe-env.eba-dgmzbqp5.ca-central-1.elasticbeanstalk.com/search/swa";
const api = "http://localhost:9191";
const fetchURL = "/profiles";
const fetchUrlSearch = "http://localhost:9191/search/swa";
const addUserURL = "http://localhost:9191/addProfile";
const loginUserURL = "http://localhost:9191/login";

export const fetchSkillerProfile = async () => {
  try {
    const result = await axios(fetchURL, {
      method: "GET",
    });
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

export function loginUser1(data) {
  return axios.post(loginUserURL, data);
}
export const loginUser = (data) => {
  return axios.post(loginUserURL, data).then((response) => {
    console.log(response.data);
    return response;
  });
};

export const fetchProfilesBySearch = async () => {
  try {
    const searchResults = await axios(fetchUrlSearch, {
      method: "GET",
    });
    console.log(searchResults.data);
    return searchResults.data;
  } catch (error) {
    return error;
  }
};

export const registerUser = (data) => {
  try {
    fetch(addUserURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  } catch (error) {}
};
