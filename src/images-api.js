import axios from 'axios';

export default async function fetchImages(query, page, setImages) {
  axios.defaults.baseURL = 'https://api.unsplash.com/';

  try {
    const response = await axios.get('search/photos', {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: 'Client-ID APw1XjPS_-vW7M4xSyKbntTnrrpV7z26xauqoNJ9Jdk',
        'Accept-Version': 'v1',
      },
    });

    setImages(response.data.results);
  } catch (error) {
    console.log(error);
  }
}
