// My Components
import TechCard from "./TechCard"
// Assets
import Frontend from "/technologies/Frontend.png"
import Backend from "/technologies/Backend.png"
import Ml from "/technologies/ML.png"
import Miscellaneous from "/technologies/Miscellaneous.png"

import React from "/technologies/React.png"
import Vite from "/technologies/Vite.png"
import Tailwind from "/technologies/Tailwind.png"
import Hotwired from "/technologies/Hotwired.png"

import NodeJS from "/technologies/NodeJS.png"
import PostgreSQL from "/technologies/PostgreSQL.png"
import MongoDB from "/technologies/MongoDB.png"
import RubyOnRails from "/technologies/RubyOnRails.png"

import TensorFlow from "/technologies/TensorFlow.png"
import PyTorch from "/technologies/PyTorch.png"
import Pandas from "/technologies/Pandas.png"

import Figma from "/technologies/Figma.png"
import Rust from "/technologies/Rust.png"
import Unity from "/technologies/Unity.png"
import BeautifulSoup4 from "/technologies/BeautifulSoup4.png"

// Frameworks that I have worked with
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
