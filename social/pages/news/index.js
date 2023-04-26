// our-domaine.com/news
import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage(){
    return (
    <Fragment>
      <h1>Home page!</h1>
       <ul>
       <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            Article on Next.js
            </Link>
          </li>
          <li>Extra Place Holder</li>
       </ul>
      </Fragment>);
  }
  
  export default NewsPage;