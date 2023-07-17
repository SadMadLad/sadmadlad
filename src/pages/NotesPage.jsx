// NotesPage
import Section from "../components/NotesPage/Section"
// Assets
import Notes from "../assets/notes.yml"
// Shared
import NavBar from "../components/shared/NavBar"
import SharedHero from "../components/shared/SharedHero"

export default function NotesPage() {
  const sortedNotes = Notes.sort((a, b) => a.title > b.title)

  return (
    <div className="flex flex-col items-center pb-6">
      <NavBar />
      <SharedHero title="Notes" heroCaption="This page has some notes, tips and some resources that I learnt about on my way."/>
      <div className="w-full md:w-3/4 flex flex-col gap-2.5">
        {sortedNotes.map((notesSection, index) => <Section key={index} title={notesSection.title} notes={notesSection.notes} />)}
      </div>
    </div>
  )
}
