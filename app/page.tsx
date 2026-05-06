import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hey, there!
      </h1>
      <p className="mb-4">
        {`This is my personal blog where I share my thoughts on software development,
        programming languages, and the tech industry. I also write about my personal
        experiences and insights on being a software engineer and a human being. Feel free to reach out to me on `}
        <a
          href="https://www.linkedin.com/in/rogmxp"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
        {`!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
