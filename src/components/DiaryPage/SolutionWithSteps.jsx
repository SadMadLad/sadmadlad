// My Component
import CodeParagraph from '../shared/CodeParagraph'

// To render those solutions that have multiple steps
export default function SolutionWithSteps({ solution }) {
  const { has_intro, has_outro, steps } = solution

  return <div>
    {has_intro && <CodeParagraph paragraph={solution.intro} />}
    <ul className="list-decimal m-2">
      {steps.map((step, index) => <li key={index}><CodeParagraph paragraph={step} /></li>)}
    </ul>
    {has_outro && <CodeParagraph paragraph={solution.outro} />}
  </div>
}
