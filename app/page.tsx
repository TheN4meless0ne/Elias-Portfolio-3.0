import { Documents } from 'app/components/posts'
import { ArrowIcon, FaIcon } from 'app/components/icons'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Elias Greig-Vistnes
        <br />
        <a
          className="text-neutral-500 dark:text-neutral-400 transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cegal.com/"
        >
          <p >IT trainee, Cegal Norway</p>
        </a>
      </h1>
      <div className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.sandnes.kommune.no/"
        >
          <FaIcon icon="fa-solid fa-location-dot" />
          <p className="ml-2 h-7">Sandnes, Norway</p>
        </a>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.vaagen.vgs.no/hovedmeny/utdanningstilbud/informasjonsteknologi-og-medieproduksjon/"
        >
          <FaIcon icon="fa-solid fa-graduation-cap" />
          <p className="ml-2 h-7">Vågen Upper Secondary</p>
        </a>
      </div>

      <p className="mb-4">
        {`Hello! My name is Elias, I am an IT trainee at Cegal Norway.`}
        <br />
        {`I enjoy working on programs and applications as well as modding videogames.`}
      </p>

      <div className="my-8">
        <Documents />
      </div>
    </section>
  )
}