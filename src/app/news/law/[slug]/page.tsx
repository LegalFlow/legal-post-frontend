import { getPostBySlug } from '../../../../lib/wordpress';
import { Metadata } from 'next';
import Image from 'next/image';

// 서버 컴포넌트에 revalidate 추가
export const revalidate = 10;

type Props = {
  params: Promise<{ slug: string }>;
}

export default async function LawNewsDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <Image 
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          width={800}
          height={400}
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

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: '법률 뉴스',
      description: '포스트를 찾을 수 없습니다.'
    };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160)
  };
}