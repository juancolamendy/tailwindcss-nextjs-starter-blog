import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';
import { Tag } from '../Tag';

const PostFooter = ({tags, prev, next}) => {
  return(
  <section role="post-footer">
    <div className="divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
      {tags && (
        <div className="py-4 xl:py-8">
          <h2 className="text-xs uppercase tracking-wide text-gray-500">
            Tags
          </h2>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
      )}
      {(next || prev) && (
        <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
          {prev && (
            <div>
              <h2 className="text-xs uppercase tracking-wide text-gray-500">
                Previous Article
              </h2>
              <div className="text-primary-500 hover:text-primary-600">
                <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
              </div>
            </div>
          )}
          {next && (
            <div>
              <h2 className="text-xs uppercase tracking-wide text-gray-500">
                Next Article
              </h2>
              <div className="text-primary-500 hover:text-primary-600">
                <Link href={`/blog/${next.slug}`}>{next.title}</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    <div className="pt-4 xl:pt-8">
      <Link
        href="/"
        className="text-primary-500 hover:text-primary-600"
      >
        &larr; Back to the blog
      </Link>
    </div>
  </section>
  );
}

PostFooter.propTypes = {
  tags: PropTypes.array,
  prev: PropTypes.object,
  next: PropTypes.object,
};

export default PostFooter;
