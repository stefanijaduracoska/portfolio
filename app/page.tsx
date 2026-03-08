import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Navbar,
} from './components';

export default function Home() {
  return (
    <main className='min-h-screen bg-neutral-950 text-white'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
