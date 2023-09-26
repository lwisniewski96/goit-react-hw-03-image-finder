import axios from 'axios';

const API_KEY = '37030220-55e5b35e4370d44ae057df5d9';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;

export const fetchImages = async (query, page) => {
  try {
    const { data } = await axios.get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
