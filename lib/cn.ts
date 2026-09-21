import { clsx, type ClassValue } from 'clsx'

/** Join class names, dropping falsy values. */
export const cn = (...inputs: ClassValue[]) => clsx(inputs)
