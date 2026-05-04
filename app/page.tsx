import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, there!
      </h1>
      <p className="mb-4">
        {`I'm software engineer with a passion for building impactful products. I have experience in full-stack development, and I'm always eager to learn new technologies and improve my skills. Here are some of my recent projects and blog posts that showcase my work and insights in the tech industry.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
