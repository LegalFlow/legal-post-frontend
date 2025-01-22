import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL
});

export async function getPosts() {
  try {
    const response = await api.get('/wp/v2/posts', {
      params: {
        _embed: true,  // 관련 데이터(이미지 등) 포함
        per_page: 10   // 페이지당 포스트 수
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string) {
  try {
    const response = await api.get(`/wp/v2/posts`, {
      params: {
        slug,
        _embed: true
      }
    });
    return response.data[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
