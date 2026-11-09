import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Joins class names; when two Tailwind classes clash, the later one wins.
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))
