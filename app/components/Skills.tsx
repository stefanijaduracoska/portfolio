'use client';

import { useMemo, useState } from 'react';
import { techStack } from '../utils/techStack';

const activeTabStyles =
  'border-violet-400/40 bg-violet-400/10 text-white shadow-[0_0_30px_rgba(139,92,246,0.20)]';

const panelAccentStyles = 'border-violet-400/40 bg-violet-400/10';

const badgeAccent =
  'hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white';

export const Skills = () => {
  const [activeKey, setActiveKey] =
    useState<(typeof techStack)[number]['key']>('frontend');

  const activeGroup = useMemo(
    () => techStack.find((group) => group.key === activeKey) ?? techStack[0],
    [activeKey],
  );

  return (
    <section id='tech' className='border-t border-white/10 py-24'>
      <div className='mx-auto w-full max-w-410 px-6 md:px-10 xl:px-16'>
        <div className='mb-12 max-w-4xl'>
          <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
            Tech Stack
          </p>

          <h2 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            Skills & tools
          </h2>

          <p className='mt-5 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg'>
            A quick look at the technologies I work with most.
          </p>
        </div>

        <div className='mb-8 flex flex-wrap gap-3'>
          {techStack.map((group) => {
            const isActive = group.key === activeKey;

            return (
              <button
                key={group.key}
                type='button'
                onClick={() => setActiveKey(group.key)}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition duration-300 cursor-pointer ${
                  isActive
                    ? activeTabStyles
                    : 'border-white/10 bg-white/3 text-neutral-300 hover:border-white/20 hover:bg-white/5 hover:text-white'
                }`}
              >
                {group.title}
              </button>
            );
          })}
        </div>

        <div
          className={`relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 p-8 transition duration-500 sm:p-10 ${panelAccentStyles}`}
        >
          <div className='pointer-events-none absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-transparent' />

          <div className='pointer-events-none absolute inset-0 opacity-40 blur-3xl bg-linear-to-r from-violet-500/10 via-transparent to-violet-500/10 animate-[pulse_8s_ease-in-out_infinite]' />

          <div className='relative'>
            <div className='mb-8 flex items-center gap-3'>
              <span className='h-2.5 w-2.5 rounded-full bg-white/80' />
              <p className='text-sm uppercase tracking-[0.3em] text-neutral-300'>
                {activeGroup.title}
              </p>
            </div>

            <div className='flex flex-wrap gap-4'>
              {activeGroup.items.map((item) => (
                <span
                  key={`${activeGroup.key}-${item}`}
                  className={`rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-base font-medium text-white transition duration-300 sm:px-7 sm:py-4 sm:text-lg ${badgeAccent}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
