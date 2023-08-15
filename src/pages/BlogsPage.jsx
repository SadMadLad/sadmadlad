import { Link } from "react-router-dom"

import BlogsData from "../assets/blogs/blogs-data.json"

export default function BlogsPage() {
  console.log(BlogsData)

  return (
    <ul>
      { BlogsData.map( ({identifier, date, title}) => <li key={identifier}>
        <Link to={`/blog/${identifier}`}>{title}, {date}</Link>
      </li> )}
    </ul>
  )
}
