import { useState } from "react"
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import testBlog from "../assets/blogs/test-blog.md"

export default function BlogPage() {
  const { name } = useParams()
  const [markdown, setMarkdown] = useState('')

  import(testBlog).then(res => {
    fetch(res.default)
    .then(response => response.text())
    .then(text => setMarkdown(text))
})

console.log(markdown)
  return (
    <div>
      <ReactMarkdown>{ markdown }</ReactMarkdown>
    </div>
  )
}
