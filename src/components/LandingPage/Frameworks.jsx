import Frontend from "/Frontend.png"
import Backend from "/Backend.png"
import Ml from "/ML.png"
import Miscellaneous from "/Miscellaneous.png"

import React from "/React.png"
import Vite from "/Vite.png"
import Tailwind from "/Tailwind.png"
import Hotwired from "/Hotwired.png"

import NodeJS from "/NodeJS.png"
import PostgreSQL from "/PostgreSQL.png"
import MongoDB from "/MongoDB.png"
import RubyOnRails from "/RubyOnRails.png"

import TensorFlow from "/TensorFlow.png"
import PyTorch from "/PyTorch.png"
import Pandas from "/Pandas.png"

import Figma from "/Figma.png"
import Rust from "/Rust.png"
import Unity from "/Unity.png"
import BeautifulSoup4 from "/BeautifulSoup4.png"

import TechCard from "./TechCard"

export default function Frameworks() {
  const techCardsData = [
    { heading: 'Frontend', leadingIcon: Frontend, description: 'Experienced with many frontend technologies, ranging from CSS frameworks to JavaScript ones.', techStacks: [React, Vite, Tailwind, Hotwired] },
    { heading: 'Backend', leadingIcon: Backend, description: 'Have worked with different databases with different backend frameworks.', techStacks: [NodeJS, PostgreSQL, MongoDB, RubyOnRails] },
    { heading: 'ML', leadingIcon: Ml, description: 'Delved in the areas of machine learning and worked with related frameworks. Created NNs, Classifiers, GANs, Autoencoders etc.', techStacks: [TensorFlow, PyTorch, Pandas] },
    { heading: 'Miscellaneous', leadingIcon: Miscellaneous, description: 'Web Scraping as a hobby. Always enjoy and eager to learn new frameworks and programming languages.', techStacks: [Figma, Rust, Unity, BeautifulSoup4] }
  ]

  return (
    <>
      <h6 className="mt-20 text-2xl font-black text-center w-full md:w-2/3 px-4">Versatile skill set in different domains, and always interested in expanding it even more.</h6>
      <section className="px-8 mb-20 mt-16 w-full flex justify-start lg:justify-center gap-8 overflow-x-auto no-scrollbar">
        { techCardsData.map(({heading, leadingIcon, description, techStacks}) => <TechCard key={heading} heading={heading} leadingIcon={leadingIcon} description={description} techStacks={techStacks} />)}
      </section>
    </>
  )
}
