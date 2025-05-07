import { BlogPosts } from 'app/components/posts'
import { ArrowIcon, FaIcon } from 'app/components/icons'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Elias Greig-Vistnes
      </h1>
      <div className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/TheN4meless0ne"
        >
          <FaIcon icon="fa-solid fa-location-dot" />
          <p className="ml-2 h-7">Sandnes, Norway</p>
        </a>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/TheN4meless0ne"
        >
          <FaIcon icon="fa-solid fa-graduation-cap" />
          <p className="ml-2 h-7">Vågen Upper Secondary</p>
        </a>
      </div>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
