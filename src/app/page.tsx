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
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/15 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]">
            Tlamelo Mokgatlhane
          </p>

          <a
            href="https://github.com/HelloMelo44"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
          >
            GitHub
          </a>
        </header>

        <div className="py-20 sm:py-28 lg:py-32">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#c5a46d]">
            Database · Applications · Data · Software
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            I build and improve the systems behind the work.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
            I work across enterprise applications, databases, reporting and 
            process improvement, helping systems do what they were meant to 
            do in the first place.
          </p>

          <div className="mt-10">
            <a
              href="#projects"
              className="inline-flex items-center border-b border-white pb-1 font-semibold transition hover:opacity-60"
            >
              Selected work ↓
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
          I am a database and applications professional with experience across
          enterprise systems, SQL databases, reporting, service management and
          operational support.
        </p>

        <p>
          I am expanding that foundation through practical projects in Python,
          data analytics, software engineering, automation and data engineering.
        </p>

        <p>
          My work sits between technology and operations, with a focus on how
          systems support people, processes and decision-making.
        </p>

        <p>
          I value clear documentation, maintainable solutions and technology
          that remains useful beyond the initial implementation.
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
                Selected work
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Practical projects, not decorative ones.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                Work across analytics and software engineering, built around
                real operational problems rather than features looking for a
                reason to exist.
              </p>
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
    </main>
  );
}