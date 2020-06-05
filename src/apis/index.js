import axios from 'axios';
export * from './app';

export const apiRest = async (body, url, headers) => {
	return await axios.get(`http://www.mocky.io/v2/${url}`, body, headers);
};
