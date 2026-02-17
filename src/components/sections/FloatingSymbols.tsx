

'use client'

import { floatingSymbolsData } from "@/utils/floatingSymbolsData"



export default function FloatingSymbols() {
  return (
    <div className="floating-symbols-container">
      {floatingSymbolsData.map(item => (
        <span
          key={item.id}
          className="floating-symbol"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            color: item.color,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  )
}
