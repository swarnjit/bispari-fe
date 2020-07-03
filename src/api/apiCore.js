import axios from "axios";

const fetchURL = "http://localhost:5000/profiles";
const fetchUrlSearch = "http://localhost:5000/search/swa";

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
