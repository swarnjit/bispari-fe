import axios from "axios";

const fetchURL =
  "http://bisparibe-env.eba-dgmzbqp5.ca-central-1.elasticbeanstalk.com/profiles";
const fetchUrlSearch =
  "http://bisparibe-env.eba-dgmzbqp5.ca-central-1.elasticbeanstalk.com/search/swa";

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
