import { Head } from "$fresh/runtime.ts";

export default function App({ Component }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component />
    </>
  );
}