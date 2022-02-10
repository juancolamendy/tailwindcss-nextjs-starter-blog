import React from 'react';

import { Link } from '../../components/Link';
import headerNavLinks from '../../lib/utils/constants/headerNavLinks';

const SMNav = () => {
  return (
  <div className="hidden sm:block">
    {headerNavLinks.map((link) => (
      <Link
        key={link.title}
        href={link.href}
        className="font-light p-4 hover:opacity-60"
      >
        {link.title}
      </Link>
    ))}
  </div>
  );
};

export default SMNav;
