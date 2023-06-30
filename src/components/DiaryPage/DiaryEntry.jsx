import { ChevronDownIcon } from "@heroicons/react/20/solid"

export default function DiaryEntry() {
  return (
    <div className="py-4 px-2">
      <div className="flex flex-row gap-2 items-center border-b border-b-lite pt-1 pb-2">
        <h5 className="font-bold text-lg">Complex Password Validation Devise</h5>
        <ChevronDownIcon className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-2.5 py-4">
        <div className="flex flex-col gap-0.5">
          <span><b>Type: </b><span>Bug</span></span>
          <span><b>Updated On: </b><span>28th June, 2023</span></span>
        </div>
        <div>
          <h6 className="font-semibold">Description:</h6>
          <p>Unable to apply complex validation (like using regex) for password in devise.</p>
        </div>
        <div>
          <h6 className="font-semibold">Solution: </h6>
          <p>Devise takes in the password as instance variable. <code className="bg-zinc-700">Devise</code></p>
        </div>
      </div>
    </div>
  )
}