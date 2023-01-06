import { Head } from "$fresh/runtime.ts";
import Layout from "../layouts/Page.jsx";
import { homeStyles } from "../styles/homeStyles.js";

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <style>
          {homeStyles}
        </style>
      </Head>
      <div class="home-hero__container">
        <h1>Fresh Minimal Starter</h1>
      </div>
    </Layout>
  );
}
