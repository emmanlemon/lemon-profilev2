'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { LuX, LuExternalLink } from 'react-icons/lu'
import type { Project } from '@/data/projects'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6"
        >
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="card relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-b-none rounded-t-3xl sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="glass absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-fg transition hover:text-accent"
            >
              <LuX className="h-4 w-4" />
            </button>

            <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-border bg-black/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
              />
            </div>

            <div className="p-6 md:p-8">
              <span className="eyebrow">
                {project.company} &middot; {project.role}
              </span>
              <h3
                id="project-modal-title"
                className="mt-4 text-2xl font-semibold md:text-3xl"
              >
                {project.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                {project.details}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-8"
                >
                  Visit project <LuExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
