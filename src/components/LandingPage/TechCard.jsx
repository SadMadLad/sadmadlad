export default function TechCard({ heading, leadingIcon, description, techStacks }) {
  return (
    <li className="bg-darklite border-b-4 border-b-black border-opacity-40 p-8 flex flex-col gap-8 justify-between">
      <div className="flex flex-col items-center gap-6 w-48">
        <h5 className="text-4xl font-serif">{heading}</h5>
        <img src={leadingIcon} />
        <p className="text-center">{description}</p>
      </div>
      <ul className="flex justify-center gap-3">
        { techStacks.map(techStack => <img key={techStack} src={techStack} />) }
      </ul>
    </li>
  )
}
