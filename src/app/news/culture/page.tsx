import { getCategoryPosts } from '../../../lib/wordpress';
import { CATEGORY_IDS } from '../../../lib/constants';
import Link from 'next/link';

export const revalidate = 10;

export default async function CultureNewsPage() {
  const { posts, totalPages, total } = await getCategoryPosts(CATEGORY_IDS.NEWS_CULTURE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">문화 뉴스</h1>
      
      {total === 0 ? (
        <p className="text-gray-600">아직 작성된 글이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <Link href={`/news/culture/${post.slug}`} key={post.id}>
              <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <img 
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                )}
                <h2 className="text-xl font-bold mb-2">
                  {post.title.rendered}
                </h2>
                <div 
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                />
                <div className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('ko-KR')}
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}