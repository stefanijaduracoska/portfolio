import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id='contact' className='border-t border-white/10 px-6 py-24'>
      <div className='mx-auto w-full max-w-410 px-6 md:px-10 xl:px-16'>
        <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
          Contact
        </p>

        <div className='grid gap-16 md:grid-cols-[1fr_1fr] md:items-start'>
          <div>
            <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl'>
              Let&apos;s work together
            </h2>

            <p className='mt-6 max-w-lg text-base leading-8 text-neutral-300 sm:text-lg'>
              If you&apos;re hiring, building something interesting, or just
              want to talk about tech, I&apos;d love to hear from you.
            </p>

            <p className='mt-4 text-sm font-medium text-violet-300'>
              Currently open to full-time opportunities.
            </p>
          </div>

          <div className='grid gap-4'>
            <a
              href='mailto:sduracoska@gmail.com'
              className='group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10'
            >
              <div className='flex items-center gap-3'>
                <Mail className='text-violet-300' size={20} />
                <div>
                  <p className='text-sm uppercase tracking-[0.2em] text-neutral-500'>
                    Email
                  </p>
                  <p className='text-base text-white group-hover:text-violet-200'>
                    sduracoska@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href='https://www.linkedin.com/in/stefanija-duracoska-0a38bb256/'
              target='_blank'
              rel='noreferrer'
              className='group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10'
            >
              <div className='flex items-center gap-3'>
                <Linkedin className='text-violet-300' size={20} />
                <div>
                  <p className='text-sm uppercase tracking-[0.2em] text-neutral-500'>
                    LinkedIn
                  </p>
                  <p className='text-base text-white group-hover:text-violet-200'>
                    linkedin.com/in/stefanija-duracoska
                  </p>
                </div>
              </div>
            </a>

            <a
              href='https://github.com/stefanijAaA'
              target='_blank'
              rel='noreferrer'
              className='group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10'
            >
              <div className='flex items-center gap-3'>
                <Github className='text-violet-300' size={20} />
                <div>
                  <p className='text-sm uppercase tracking-[0.2em] text-neutral-500'>
                    GitHub
                  </p>
                  <p className='text-base text-white group-hover:text-violet-200'>
                    github.com/stefanija
                  </p>
                </div>
              </div>
            </a>

            <a
              href='tel:+38978810920'
              className='group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10'
            >
              <div className='flex items-center gap-3'>
                <Phone className='text-violet-300' size={20} />
                <div>
                  <p className='text-sm uppercase tracking-[0.2em] text-neutral-500'>
                    Phone
                  </p>
                  <p className='text-base text-white group-hover:text-violet-200'>
                    +389 78 810 920
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
