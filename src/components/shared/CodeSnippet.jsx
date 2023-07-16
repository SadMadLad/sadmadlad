// Node Imports
import SyntaxHighlighter from "react-syntax-highlighter"
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// To render highlighted code
export default function CodeSnippet({ codeSnippet }) {
  return <div className="my-2.5"> 
    <SyntaxHighlighter wrapLines={true} style={anOldHope} language={codeSnippet.language} children={codeSnippet.code}></SyntaxHighlighter>
  </div>
}
