import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { ReactNode } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header>
      <div className="container">
        <h1 className="heroTitle">{siteConfig.tagline}</h1>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <>
      <Redirect to="/docs/introduction/overview" />
      {/* <Layout title={`Private Cloud Infrastructure`} description="Description will go into a meta tag in <head />"> */}
      {/* <main> */}
      {/* <HomepageHeader /> */}
      {/* </main> */}
      {/* </Layout> */}
    </>
  );
}
