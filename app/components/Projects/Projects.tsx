import { projects } from '../../utils/projects';
import { ProjectCard } from './components';

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

            <p className='mt-4 text-lg leading-8 text-neutral-400'>
              A curated selection of products and systems I&apos;ve contributed
              to across frontend, full-stack and platform-focused work.
            </p>
          </div>

          <p className='text-base text-neutral-500 md:pb-2'>
            Scroll to explore
          </p>
        </div>

        <div className='overflow-x-auto overflow-y-visible py-4 [scrollbar-width:none]'>
          <div className='flex w-max snap-x snap-mandatory gap-6'>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
