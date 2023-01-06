import { Head } from "$fresh/runtime.ts";
import Layout from "../layouts/Page.jsx";
import { homeStyles } from "../styles/homeStyles.js";
import { Button } from "../components/Button.jsx";
import GithubIcon from "../icons/GitHubIcon.jsx";

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
        <p>A minimal starter repo for the Fresh framework for Deno. It doesn't use Tailwind but has all of the layouts and SEO boilerplate already setup for you.</p>
        <Button href="https://github.com/littlesticks/fresh-minimal-starter">View Source <span class="btn__icon"><GithubIcon /></span></Button>
      </div>
    </Layout>
  );
}
