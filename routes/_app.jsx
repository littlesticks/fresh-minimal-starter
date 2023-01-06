import { Head } from "$fresh/runtime.ts";

export default function App({ Component }) {
  return (
    <>
      <Head>
        {/* Enter your top level head items */}
      </Head>
      <Component />
    </>
  );
}