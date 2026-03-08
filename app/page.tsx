import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Navbar,
  Reveal,
} from './components';

export default function Home() {
  return (
    <main className='min-h-screen bg-neutral-950 text-white'>
      <Navbar />

      <Hero />

      <Reveal>
        <About />
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
    </main>
  );
}
