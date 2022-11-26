import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getAllPages(nameImg, page = '1') {
  const getRequest = axios.create({
    params: {
      key: '30999598-dc54c9ae8f4c38c0174094b65',
      image_type: 'photo',
      per_page: 12,
      orientation: 'horizontal',
      safesearch: 'true',
      q: nameImg,
      page,
    },
  });

  const response = await getRequest.get();
  return response.data;
}
