import blogData from "../assets/blogs/blogs-data.json"

const getBlogMetadata = async blog_identifier =>
  blogData.find(({ identifier }) => identifier === blog_identifier);

const fetchBlogContent = async blog_identifier => {
  const blogPath = `/sadmadlad/src/assets/blogs/${blog_identifier}.md`;
  const blogModule = await import(blogPath);
  const response = await fetch(blogModule.default);
  const blogContent = await response.text();
  return blogContent;
};

const getBlog = async blog_identifier => {
  const blogData = await getBlogMetadata(blog_identifier)
  if (blogData === undefined) return { blogFound: false, blog: undefined };

  const blogContent = await fetchBlogContent(blog_identifier);
  return { blogFound: true, blog: blogContent };
};

export { getBlog };
