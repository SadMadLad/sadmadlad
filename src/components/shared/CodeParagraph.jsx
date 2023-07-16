// My Components
import CodeSnippet from './CodeSnippet'

// A Component to render paragraph alongwith a description.
export default function CodeParagraph({ paragraph }) {
  const { has_code_snippet, text, code_snippet } = paragraph
  
  return <div>
    <p dangerouslySetInnerHTML={{ __html: text }}></p>
    { has_code_snippet && <CodeSnippet codeSnippet={code_snippet} /> }
  </div>
}
