'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LuArrowUpRight } from 'react-icons/lu'
import { SectionHeading } from '@/components/layout/SectionHeading'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import GlareHover from '@/components/reactbits/GlareHover'
import { ProjectModal } from '@/components/ui/ProjectModal'
import { projects, type Project } from '@/data/projects'

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <GlareHover
      width="100%"
      height="100%"
      background="rgb(var(--card) / 0.8)"
      borderRadius="1.5rem"
      borderColor="rgb(var(--border))"
      glareColor="#ffffff"
      glareOpacity={0.16}
      glareSize={260}
      transitionDuration={700}
      className="group h-full shadow-card backdrop-blur transition-colors duration-300 hover:!border-accent/40"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open details for ${project.title}`}
        className="flex h-full w-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl border-b border-border bg-black/20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {project.company} &middot; {project.role}
            </span>
            {project.featured && (
              <span className="chip border-accent/40 text-accent">
                Featured
              </span>
            )}
          </div>
          <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            View details
            <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </button>
    </GlareHover>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="Internal platforms, client products and team projects. Open a card for the full story."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <AnimatedContent
              key={project.id}
              distance={40}
              delay={0.08 * (i % 2)}
              className="h-full"
            >
              <ProjectCard
                project={project}
                onOpen={() => setSelected(project)}
              />
            </AnimatedContent>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
