import axios from "axios";

const fetchURL = "http://localhost:8082/api/v1/skiller-profile";

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
