import { projects } from '../utils/projects';

export const Projects = () => {
  return (
    <section id='projects' className='border-t border-white/10 py-24'>
      <div className='mx-auto w-full max-w-410 px-6 md:px-10 xl:px-16'>
        <div className='mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-2xl'>
            <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
              Projects
            </p>

            <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl'>
              Things I&apos;ve worked on
            </h2>

            <p className='mt-4 text-base leading-8 text-neutral-400'>
              A curated selection of products and systems I&apos;ve contributed
              to across frontend, full-stack and platform-focused work.
            </p>
          </div>

          <p className='text-sm text-neutral-500 md:pb-2'>Scroll to explore</p>
        </div>

        <div className='overflow-x-auto pb-4 [scrollbar-width:none]'>
          <div className='flex w-max snap-x snap-mandatory gap-6 pr-12'>
            {projects.map((project) => (
              <article
                key={project.title}
                className='group flex min-h-80 w-90 shrink-0 snap-start flex-col rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)] p-8 transition duration-300 hover:border-violet-400/40 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_100%)] hover:shadow-[0_0_35px_rgba(139,92,246,0.14)]'
              >
                <div className='mb-6 h-1 w-14 rounded-full bg-violet-400/70 transition group-hover:w-20' />

                <h3 className='text-2xl md:text-3xl font-semibold leading-tight text-white'>
                  {project.title}
                </h3>

                <p className='mt-4 text-[17px] leading-7 text-neutral-300'>
                  {project.description}
                </p>

                <div className='mt-auto pt-8'>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-full border border-white/10 bg-black/20 px-3.5 py-1.5 text-sm text-neutral-300 transition group-hover:border-violet-400/30 group-hover:text-white'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
