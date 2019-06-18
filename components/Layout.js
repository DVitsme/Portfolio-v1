import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import nprogress from 'nprogress';

// Router.onRouteChangeStart = url => {
//   console.log(url);
// };
const handleRouteStart = url => {
  console.log('App is changing to: ', url);
  nprogress.start();
};
Router.events.on('routeChangeStart', handleRouteStart);

const handleRouteComplete = url => {
  nprogress.done();
};
Router.events.on('routeChangeComplete', handleRouteComplete);

const handleRouteError = url => {
  nprogress.done();
};
Router.events.on('routeChangeError', handleRouteComplete);

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>{title} - Derrick's Portfolio</title>
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hire Me</a>
      </Link>
    </header>
    {/* website title sent from props */}
    <h1>{title}</h1>
    {/* website content */}
    {children}

    <footer>&copy;{new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: #1c2a38;
      }
      header a {
        color: #fff;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: #ffe;
      }
      footer {
        padding: 1em;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
);
