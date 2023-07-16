// Hero section for pages that have similar hero
export default function SharedHero({ title, heroCaption }) {
    return (
      <section className="flex flex-col gap-4 items-center my-20">
        <h1 className="font-black font-serif text-4xl">{title}</h1>
        <p className="text-xl text-center font-light w-full md:w-2/3">{heroCaption}</p>
      </section>
    )
  }
  