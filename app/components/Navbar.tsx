import { navItems } from '../utils';

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <a
          href='#home'
          className='text-sm font-semibold tracking-[0.2em] text-white uppercase'
        >
          Stefanija
        </a>

        <nav className='hidden items-center gap-6 md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm text-neutral-300 transition hover:text-white'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href='#contact'
          className='rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10'
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
};
