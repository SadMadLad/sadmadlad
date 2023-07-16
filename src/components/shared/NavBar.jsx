// Navigation Bar
export default function NavBar() {
  return (
    <header className="mt-4 sm:mt-10 w-full lg:w-3/4 flex justify-between font-serif items-end border-b border-b-lite pb-3 sm:pb-6 px-3">
      <h1 className="text-xl sm:text-2xl lg:text-4xl">Muhammad Saad Azam</h1>

      <nav className="hidden sm:flex gap-6 lg:gap-10 text-xl lg:text-2xl">
        <a href="https://www.linkedin.com/in/saad-azam-9113011b8/">LinkedIn</a>
        <a href="https://github.com/SadMadLad">GitHub</a>
        <a href="https://www.kaggle.com/sadmadlad">Kaggle</a>
      </nav>
    </header>
  )
}
