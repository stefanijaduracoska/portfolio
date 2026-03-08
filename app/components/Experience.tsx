import { experience } from '../utils/experience';

export const Experience = () => {
  return (
    <section id='experience' className='border-t border-white/10 py-24'>
      <div className='mx-auto w-full max-w-410 px-6 md:px-10 xl:px-16'>
        <div className='mb-14 max-w-4xl'>
          <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
            Experience
          </p>

          <h2 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            Work Experience
          </h2>
        </div>

        <div className='grid grid-cols-[32px_1fr] gap-6 md:gap-10'>
          <div className='flex flex-col items-center'>
            <div className='mt-2 h-5 w-5 rounded-full bg-white' />
            <div className='mt-2 h-full w-px bg-white/15' />
          </div>

          <article className='pb-2'>
            <h3 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
              {experience.role}
            </h3>

            <div className='mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xl text-neutral-400'>
              <span>{experience.company}</span>
              <span className='hidden text-neutral-600 sm:inline'>•</span>
              <span>{experience.period}</span>
            </div>

            <p className='mt-3 text-base text-neutral-500 sm:text-lg'>
              {experience.location}
            </p>

            <ul className='mt-8 space-y-5 text-2xl leading-9 text-neutral-300'>
              {experience.highlights.map((item) => (
                <li key={item} className='flex gap-4'>
                  <span className='mt-3 h-2 w-2 shrink-0 rounded-full bg-neutral-300' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
