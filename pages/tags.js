import { PageSEO } from '../components/SEO';
import { Tag } from '../components/Tag';
import { Breadcrumb } from '../components/Post';

import { getAllTags } from '../lib/tags'; 

import siteMetadata from '../data/siteMetadata';
import { tagsBreadcrum } from '../data/breadcrums';

const breadcrum = [...tagsBreadcrum];

export async function getStaticProps() {
  const tags = await getAllTags();
  return { props: { tags } }
}

const Tags = ({ tags }) => {
  return (<>
    <PageSEO title={`Tags - ${siteMetadata.site.name}`} description="Tags - Things we blog about" />
    <Breadcrumb list={breadcrum} />
    <main className="mb-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
              Tags
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">
            {tags.length === 0 && 'No tags found.'}
            {tags.map( t => {
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  </>);
};

export default Tags;
