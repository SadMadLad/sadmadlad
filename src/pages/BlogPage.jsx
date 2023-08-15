import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion"

import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs"
import SyntaxHighlighter from "react-syntax-highlighter"

import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

import { getBlog } from "../helpers/BlogHelpers"

// /sadmadlad/src/assets/blogs/image.jpeg - Image Path

export default function BlogPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const { identifier } = useParams()

  const [blogExists, setBlogExists] = useState(false)
  const [markdown, setMarkdown] = useState("")


  useEffect(() => {
    const fetchBlog = async (blog_identifier) => {
      const { blogFound, blog } = await getBlog(blog_identifier)
      if (blogFound) { setMarkdown(blog) }
      setBlogExists(blogFound)
    }

    fetchBlog(identifier)
  }, [identifier])


  return (
    <>
      {
        blogExists ?
          <article className="markdown">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              children={markdown}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, "")}
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
            <motion.div
              className="bg-accent h-2 w-full fixed bottom-20 text-center"
              style={{ scaleX }}
            />
          </article>
          : <div>Not Found</div>
      }
    </>
  )
}
