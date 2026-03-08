import { navItems } from '../utils';
import { Mail, Linkedin } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl'>
      <div className='flex w-full items-center gap-12 px-10 py-5 xl:px-16 2xl:px-24'>
        <a
          href='#home'
          className='text-lg font-semibold tracking-[0.08em] text-white hover:text-neutral-300'
        >
          Stefanija Duracoska
        </a>

        <nav className='flex items-center gap-8'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-xl font-medium text-neutral-400 transition duration-300 hover:text-white'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='ml-auto flex items-center gap-7'>
          <a
            href='mailto:sduracoska@gmail.com'
            className='text-neutral-400 transition duration-300 hover:text-white hover:scale-110'
            aria-label='Send Email'
          >
            <Mail size={24} />
          </a>

          <a
            href='https://www.linkedin.com/in/stefanija-duracoska-0a38bb256/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-400 transition duration-300 hover:text-white hover:scale-110'
            aria-label='LinkedIn'
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};
