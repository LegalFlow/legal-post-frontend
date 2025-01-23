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
  // 필요한 다른 필드들도 추가할 수 있습니다
}

const API_URL = process.env.WORDPRESS_API_URL

export async function getAllPosts(): Promise<WordPressPost[]> {
  const res = await fetch(`${API_URL}/wp/v2/posts`)
  const posts = await res.json()
  return posts
}

// 단일 포스트 가져오기
export async function getPost(slug: string): Promise<WordPressPost | undefined> {
  const posts = await getAllPosts()
  const post = posts.find((post) => post.slug === slug)
  return post
}

// 필요한 경우 다른 API 함수들도 추가할 수 있습니다