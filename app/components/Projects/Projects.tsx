'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../utils/projects';
import { ProjectCard } from './components';

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setShowLeft(el.scrollLeft > 4);
    setShowRight(el.scrollLeft < maxScrollLeft - 4);
  };

  const scrollByCard = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector(
      ':scope > div > *',
    ) as HTMLElement | null;
    const styles = firstCard ? window.getComputedStyle(firstCard) : null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;
    const gap = styles ? 0 : 12;

    el.scrollBy({
      left: dir === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateArrows();

    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);

    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  return (
    <section id='projects' className='border-t border-white/10 py-20 2xl:py-24'>
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-7 md:px-10 2xl:px-16'>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between 2xl:mb-12 2xl:gap-6'>
          <div className='max-w-xl 2xl:max-w-2xl'>
            <p className='mb-3 text-xs uppercase tracking-[0.28em] text-neutral-400 2xl:mb-4 2xl:text-sm 2xl:tracking-[0.3em]'>
              Projects
            </p>

            <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-4xl 2xl:text-5xl'>
              Things I&apos;ve worked on
            </h2>

            <p className='mt-4 text-sm leading-6 text-neutral-400 2xl:text-lg 2xl:leading-8'>
              A curated selection of products and systems I&apos;ve contributed
              to across frontend, full-stack and platform-focused work.
            </p>
          </div>
        </div>

        <div className='relative'>
          {showLeft && (
            <button
              type='button'
              aria-label='Scroll left'
              onClick={() => scrollByCard('left')}
              className='absolute left-0 top-1/2 z-10 hidden -translate-x-full -translate-y-1/2 lg:flex items-center justify-center text-white/70 transition hover:text-white'
            >
              <ChevronLeft className='h-10 w-10 -mr-2 2xl:h-12 2xl:w-12' />
            </button>
          )}

          {showRight && (
            <button
              type='button'
              aria-label='Scroll right'
              onClick={() => scrollByCard('right')}
              className='absolute right-0 top-1/2 z-10 hidden translate-x-full -translate-y-1/2 lg:flex items-center justify-center text-white/70 transition hover:text-white'
            >
              <ChevronRight className='h-10 w-10 -ml-2 2xl:h-12 2xl:w-12' />
            </button>
          )}

          <div
            ref={scrollRef}
            className='overflow-x-auto overflow-y-visible py-3 2xl:py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
          >
            <div className='flex w-max snap-x snap-mandatory gap-4 2xl:gap-6'>
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
