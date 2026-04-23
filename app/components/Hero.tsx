import { MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id='home'
      className='scroll-mt-20 relative border-b border-white/10 2xl:scroll-mt-24'
    >
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-5 py-10 sm:px-6 sm:py-20 md:px-10 md:py-24 2xl:px-16 2xl:py-36'>
        <div className='max-w-3xl 2xl:max-w-4xl'>
          <h1 className='text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl 2xl:whitespace-nowrap 2xl:text-[5.5rem]'>
            Hi, I&apos;m Stefanija Duracoska
          </h1>

          <div className='mt-5 max-w-xs text-sm leading-7 text-neutral-200 sm:mt-6 sm:max-w-sm sm:text-base 2xl:mt-10 2xl:max-w-2xl 2xl:text-xl'>
            <p>
              Full-Stack Software Engineer building modern web applications with
              TypeScript, React and Node.js.
            </p>

            <p className='mt-3 text-neutral-300 2xl:mt-4'>
              Focused on clean frontend experiences and scalable backend
              systems.
            </p>
          </div>

          <div className='mt-4 flex items-center gap-2 text-xs text-neutral-400 2xl:mt-6 2xl:text-sm'>
            <MapPin size={13} className='shrink-0 2xl:h-4 2xl:w-4' />
            <span>Based in Macedonia</span>
          </div>

          <div className='mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap 2xl:mt-14 2xl:gap-5'>
            <a
              href='/Duracoska-Stefanija-Resume.pdf'
              download
              className='inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition duration-300 hover:scale-[1.03] sm:w-auto 2xl:px-8 2xl:py-4 2xl:text-base'
            >
              Download Resume
            </a>

            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-medium text-white transition duration-300 hover:bg-white/10 sm:w-auto 2xl:px-8 2xl:py-4 2xl:text-base'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
