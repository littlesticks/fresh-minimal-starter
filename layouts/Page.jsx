import BaseLayout from "./Base.jsx";

export default function PageLayout({ seo, children }) {
  return (
    <BaseLayout seo={seo}>
      {children}
    </BaseLayout>
  );
}
