import JavaScript from "/JavaScript.png"
import Python from "/Python.png"
import Html from "/Html.png"
import Cpp from "/Cpp.png"
import Ruby from "/Ruby.png"
import Css from "/Css.png"

export default function ProgrammingLanguages() {
  return (
    <section className="px-8 bg-darklite min-w-full py-14 flex gap-10 lg:justify-center overflow-x-auto no-scrollbar">
      <img src={JavaScript} />
      <img src={Python} />
      <img src={Cpp} />
      <img src={Ruby} />
      <img src={Html} />
      <img src={Css} />
    </section>
  )
}
