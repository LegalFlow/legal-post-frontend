import { getPostBySlug } from '../../../../lib/wordpress';

export const revalidate = 10;

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function PoliticsNewsDetailPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <img 
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          className="w-full h-64 object-cover mb-8 rounded-lg"
        />
      )}
      <h1 
        className="text-4xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div className="text-sm text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString('ko-KR')}
      </div>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}