import blogData from "../assets/blogs/blogs-data.json"

const getBlogData = (blog_identifier) => blogData.find(({ identifier }) => identifier == blog_identifier)

export { getBlogData }
