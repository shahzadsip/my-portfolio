// This file runs ONCE per client load
// Outside React = allowed to be impure

const SYMBOLS = [
  '<', '>', '/', '{', '}', '(', ')', '[', ']',
  ';', '#', '%', '&', '=', '+', '-', '*', '!', '?'
]

const COLORS = [
  '#8b5cf6',
  '#22d3ee',
  '#38bdf8',
  '#34d399',
  '#facc15',
  '#f472b6',
  '#f97316'
]

export type FloatingItem = {
  id: number
  char: string
  left: number
  top: number
  size: number
  color: string
  duration: number
  delay: number
}

export const floatingSymbolsData: FloatingItem[] = Array.from(
  { length: 120 },
  (_, i) => ({
    id: i,
    char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 10 + 18,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    duration: Math.random() * 5 + 6,
    delay: Math.random() * 10
  })
)
 