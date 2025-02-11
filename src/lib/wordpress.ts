import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL
});

const WORDPRESS_API_URL = 'https://legal-post.com/wp-json/wp/v2';

// WordPress Post 타입 정의
interface WordPressPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

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

// 단일 카테고리의 포스트 가져오기
export async function getCategoryPosts(categoryId: number, page: number = 1, perPage: number = 10) {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed`,
      { next: { revalidate: 10 } } // 10초마다 재검증으로 변경
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();
    return {
      posts,
      totalPages: Number(response.headers.get('X-WP-TotalPages') || 1),
      total: Number(response.headers.get('X-WP-Total') || 0)
    };
  } catch (error) {
    console.error('Error fetching category posts:', error);
    return { posts: [], totalPages: 1, total: 0 };
  }
}

// 특정 포스트 가져오기
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

// getPostBySlug 함수에 타입 추가
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 10 } }  // revalidate 옵션 추가
    );
    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
