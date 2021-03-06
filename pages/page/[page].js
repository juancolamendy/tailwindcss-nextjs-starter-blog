import { PageSEO } from '../../components/SEO';

import { PostsPagedListView } from '../../components/PostsList';
import { Breadcrumb } from '../../components/Post';

import constant from '../../lib/utils/constants';
import { getAllFilesFrontMatter, getFiles } from '../../lib/mdx';

import siteMetadata from '../../data/siteMetadata';
import breadcrumBase from '../../data/breadcrums';

const buildBreadcrum = (currentPage) =>  ([
  ... breadcrumBase,
  {
    href: `/page/${currentPage}`,
    text: `Page: ${currentPage}`
  } 
]);

export async function getStaticPaths() {
  const posts = getFiles('blogs');
  const totalPages = Math.ceil(posts.length / constant.PostsPerPage);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getAllFilesFrontMatter('blogs');
  const pageNumber = parseInt(params.page);
  return { props: { posts, currentPage: pageNumber } };
}

const PostPage = ({ posts, currentPage }) => {
  return (
  <>
    <PageSEO title={`Page: ${currentPage} for ${siteMetadata.meta.title}`} description={`Page: ${currentPage} - Description: ${siteMetadata.meta.description}`} />
    <Breadcrumb list={buildBreadcrum(currentPage)} />
    <main className="mb-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <PostsPagedListView 
          title={`Blogs`}
          posts={posts}
          currentPage={currentPage}
        />
      </div>
    </main>
  </>
  );
};

export default PostPage;
