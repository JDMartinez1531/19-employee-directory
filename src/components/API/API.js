import axios from "axios";

export const API = "https://hn.algolia.com/api/v3";

export const fetchData = async (query) => {
	const url = `${API}/search?query=${query}`;

	return await axios.get(url);
};

fetchData("react");

// import axios from "axios";

// export const url = "https://randomuser.me/api/?results=200&nat=us"

// export const getUserData = async () => {

// 	return axios.get(url);
// 		};
