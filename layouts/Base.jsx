import { Head } from "$fresh/runtime.ts";
import { site } from "../data/site.ts";
import { baseStyles } from "../styles/baseStyles.js";
import { componentStyles } from "../styles/componentStyles.js";

export default function BaseLayout({ seo, children }) {
  const title = seo?.title || site.title;
  const description = seo?.description || site.description;
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Base Styles */}
        <style>
          {baseStyles}
          {componentStyles}
        </style>
      </Head>
      {children}
    </>
  );
}
