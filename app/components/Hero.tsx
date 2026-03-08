import { MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section id='home' className='relative border-b border-white/10'>
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-7 py-24 md:px-10 2xl:px-16 2xl:py-36'>
        <div className='max-w-3xl 2xl:max-w-4xl'>
          <h1 className='whitespace-normal text-5xl font-semibold tracking-tight text-white 2xl:whitespace-nowrap 2xl:text-[5.5rem]'>
            Hi, I&apos;m Stefanija Duracoska
          </h1>

          <div className='mt-7 max-w-sm text-base leading-[1.7] text-neutral-200 2xl:mt-10 2xl:max-w-2xl 2xl:text-xl'>
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
            <MapPin size={13} className='2xl:h-4 2xl:w-4' />
            <span>Based in Macedonia</span>
          </div>

          <div className='mt-10 flex flex-wrap gap-3 2xl:mt-14 2xl:gap-5'>
            <a
              href='/Stefanija-Duracoska-Resume.pdf'
              download
              className='rounded-full bg-white px-5 py-3 text-xs font-medium text-black transition duration-300 hover:scale-[1.03] 2xl:px-8 2xl:py-4 2xl:text-base'
            >
              Download Resume
            </a>

            <a
              href='#contact'
              className='rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-medium text-white transition duration-300 hover:bg-white/10 2xl:px-8 2xl:py-4 2xl:text-base'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
