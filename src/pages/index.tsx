import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Home(): ReactNode {
  return (
    <Layout>
      <main>
        <BrowserOnly fallback={<a href="/docs/intro">Click to go to Docs</a>}>
          {() => {
            window.location.href = "/docs/intro";
            return <h1>loading</h1>;
          }}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
