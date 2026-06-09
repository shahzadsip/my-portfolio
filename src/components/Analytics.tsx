"use client";

import Script from "next/script";

export default function VisitorCounter() {
  return (
    <>
      {/* Optional backlink (can remove if you want clean UI) */}
      {/* <a href="https://www.counters-free.net/" target="_blank">
        free Counters
      </a> */}

        <div className="flex justify-center items-center">
      {/* Counter Image */}
      <a href="https://www.counter12.com">
        <img
          src="https://www.counter12.com/img-BZ48xDW9bzZC2d1a-3.gif"
          alt="visitor counter"
        />
      </a>

      {/* Counter Script */}
      <Script
        src="https://www.counter12.com/ad.js?id=BZ48xDW9bzZC2d1a"
        strategy="lazyOnload"
      />
    </div>
    </>
  );
}