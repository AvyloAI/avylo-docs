import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { customComponents } from '@/components/mdx';
import { createMetadata } from '@/lib/metadata';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const data = page.data as any;
  const MDX = data.body;

  return (
    <DocsPage
      toc={data.toc}
      full={data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      <DocsTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
        {data.title}
      </DocsTitle>
      {data.description && (
        <DocsDescription className="text-base text-muted-foreground sm:text-lg">
          {data.description}
        </DocsDescription>
      )}
      <DocsBody>
        <MDX components={customComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const data = page.data as any;
  return createMetadata({
    title: data.title,
    description: data.description,
  });
}
