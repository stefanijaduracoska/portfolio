import { FC } from 'react';
import { ProjectCardProps } from './types';
import { TechPills } from './TechPills';

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const visibleTech = project.primaryTech.slice(0, 2);
  const hiddenTech = [
    ...project.primaryTech.slice(2),
    ...project.secondaryTech,
  ];

  return (
    <article className='group relative flex min-h-80 w-90 shrink-0 snap-start flex-col overflow-visible rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)] p-8 origin-left transition-all duration-500 ease-out hover:scale-[1.015] hover:border-violet-400/30 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.04)_100%)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.42),0_0_30px_rgba(139,92,246,0.10)]'>
      <div className='pointer-events-none absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_55%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100' />

      <div className='relative mb-6 h-1 w-14 rounded-full bg-violet-400/60 transition-all duration-500 group-hover:w-20 group-hover:bg-violet-300/80' />

      <h3 className='relative text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-violet-100 md:text-3xl'>
        {project.title}
      </h3>

      <p className='relative mt-4 text-[17px] leading-7 text-neutral-300 transition-colors duration-300 group-hover:text-neutral-200'>
        {project.description}
      </p>

      <div className='relative mt-auto pt-8'>
        <TechPills visibleTech={visibleTech} hiddenTech={hiddenTech} />
      </div>
    </article>
  );
};
