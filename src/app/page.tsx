const projects = [
  {
    number: "01",
    title: "Regulatory Applications Analysis",
    description:
      "A Python project analysing synthetic regulatory application data to identify SLA breaches, processing delays, workload patterns and early-warning risk.",
    technologies: ["Python", "Pandas", "Jupyter", "Machine Learning"],
    github:
      "https://github.com/HelloMelo44/regulatory-applications-analysis",
  },
  {
    number: "02",
    title: "Regulatory Applications SQL Analytics Database",
    description:
      "A PostgreSQL analytics database for synthetic regulatory applications data, including table design, CSV import, SLA reporting queries, reusable views and documentation.",
    technologies: ["PostgreSQL", "SQL", "pgAdmin", "Reporting Views"],
    github:
      "https://github.com/HelloMelo44/regulatory-applications-sql",
  },
  {
    number: "03",
    title: "Portfolio Management Data Model",
    description:
      "A Spring Boot and JPA project modelling customers, advisors, portfolios, investment products, appointments and financial transactions.",
    technologies: ["Java", "Spring Boot", "JPA", "Maven"],
    github: "https://github.com/HelloMelo44/wells-fargo-task-2",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ece7dd]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-16 [@media(max-height:700px)]:min-h-0">
        <header className="flex flex-col gap-5 border-b border-white/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]">
            Tlamelo Mokgatlhane
          </p>

          <nav className="flex w-full flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium sm:w-auto">
            <a href="#about" className="transition hover:text-[#c5a46d]">
              About
            </a>

            <a href="#projects" className="transition hover:text-[#c5a46d]">
              Work
            </a>

            <a href="#contact" className="transition hover:text-[#c5a46d]">
              Contact
            </a>

            <a
              href="https://github.com/HelloMelo44"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
            >
              GitHub
            </a>
          </nav>
        </header>

        <div className="py-16 sm:py-20 lg:py-28 [@media(max-height:700px)]:py-14">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c5a46d]">
            Database · Applications · Analytics · Software
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight min-[420px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl [@media(max-height:700px)]:text-6xl">
            Building things. Improving others. Keeping both simple.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
            My work sits across enterprise applications, databases, reporting and
            software development. This is where I keep some of what I have
            built, learned and occasionally had to fix.
          </p>

          <div className="mt-10">
            <a
              href="#projects"
              className="inline-flex items-center border-b border-white pb-1 font-semibold transition hover:opacity-60"
            >
              See what I&apos;ve been working on ↓
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/15 pt-5 text-sm text-white/50">
          <p>Gaborone, Botswana</p>
          <p>Portfolio in progress. Naturally.</p>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/15 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c5a46d]">
              About
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Building practical systems around real operational needs.
            </h2>

            <div className="mt-10 grid gap-8 text-lg leading-8 text-white/60 md:grid-cols-2">
              <p>
                I am a database and applications professional with experience
                across enterprise systems, SQL databases, reporting, service
                management and operational support.
              </p>

              <p>
                I am expanding that foundation through practical projects in
                Python, data analytics, software engineering, automation and
                data engineering.
              </p>

              <p>
                My work sits between technology and operations, with a focus on
                how systems support people, processes and decision-making.
              </p>

              <p>
                I value clear documentation, maintainable solutions and
                technology that remains useful beyond the initial implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-white/15 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c5a46d]">
                Things I&apos;ve built
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                A growing collection of projects, experiments and ideas that
                made it past the notebook stage.
              </h2>
            </div>
          </div>

          <div>
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid gap-6 border-b border-white/15 py-12 transition hover:bg-white/[0.035] lg:grid-cols-[1fr_2fr]"
              >
                <div>
                  <p className="text-sm font-semibold text-[#c5a46d]">
                    {project.number}
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/50">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex border-b border-white pb-1 font-semibold transition hover:opacity-60"
                  >
                    View project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/15 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c5a46d]">
              Elsewhere
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              A few other places I exist online.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              For projects, questions or anything that does not fit neatly into
              a LinkedIn connection request, email usually works best.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-lg font-semibold">
              <a
                href="mailto:tlamelo.mokgatlhane@gmail.com"
                className="border-b border-white pb-1 transition hover:text-[#c5a46d]"
              >
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/tlamelo-mokgatlhane-a93832157"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white pb-1 transition hover:text-[#c5a46d]"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/HelloMelo44"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white pb-1 transition hover:text-[#c5a46d]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-24 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tlamelo Mokgatlhane</p>
          <p>Built with Next.js and TypeScript.</p>
        </footer>
      </section>
    </main>
  );
}