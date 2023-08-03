import { useState } from "react"
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from "react-syntax-highlighter"

import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

import testBlog from "../assets/blogs/test-blog.md"

export default function BlogPage() {
  const { identifier } = useParams()
  const [markdown, setMarkdown] = useState('')

  import(testBlog).then(res => {
    fetch(res.default)
      .then(response => response.text())
      .then(text => setMarkdown(text))
  })

  console.log(identifier)

  return (
    <article className="markdown">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        children={markdown}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={anOldHope}
                language={match[1]}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
      />
    </article>
  )
}
