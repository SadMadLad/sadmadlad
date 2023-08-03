// Assets
import CommandLines from "../../assets/command_lines.yml"
// Node Imports
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs"

// List of all the Command Lines
export default function Main() {
  const sortedCommandLines = CommandLines.sort((a, b) => a.command > b.command)

  return (
    <main className="px-5">
      <ul className="list-disc flex flex-col gap-4">
        {sortedCommandLines.map((commandLineData, index) =>
          <li key={index}>
            <SyntaxHighlighter wrapLines={true} style={atomOneDarkReasonable} language="vim" children={commandLineData.command}></SyntaxHighlighter>
            <p className="mt-1" dangerouslySetInnerHTML={{ __html: commandLineData.description }}></p>
          </li>
        )}
      </ul>
    </main>
  )
}
