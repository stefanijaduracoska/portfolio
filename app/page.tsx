import {
  Hero,
  Skills,
  Projects,
  Experience,
  Contact,
  Navbar,
  Reveal,
} from './components';

export default function Home() {
  return (
    <main className='relative isolate min-h-screen bg-[#020617] text-white'>
      <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(115deg,#020617_0%,#06101d_45%,#120f24_100%)]' />

        <div className='absolute inset-[-10%] animate-mist-1 bg-[radial-gradient(ellipse_at_72%_38%,rgba(88,28,135,0.20),transparent_42%)] blur-[120px]' />

        <div className='absolute inset-[-10%] animate-mist-2 bg-[radial-gradient(ellipse_at_82%_72%,rgba(49,46,129,0.12),transparent_40%)] blur-[140px]' />
      </div>

      <div className='relative z-10'>
        <Navbar />
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </div>
    </main>
  );
}
