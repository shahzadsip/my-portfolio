"use client";

import { useState } from "react";
import Image from "next/image";
import { TProjectImage } from "@/utils/TProjects";

type TProps = {
    images:TProjectImage[]
}
export default function ImageGallery({ images }:TProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Show grid only if there are multiple images
  const showGrid = images.length > 1;

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img
          src={images[selectedIndex]?.url || "https://placehold.co/1200x600/6366f1/ffffff?text=No+Image"}
          alt={images[selectedIndex]?.alt || "Main image"}
        />
      </div>
      
      {showGrid && (
        <div className="thumbnail-grid">
          {images.map((img, index) => (
            <div 
              key={img.alt || index} 
              className="thumbnail"
              onClick={() => setSelectedIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              <Image 
                src={img.url} 
                alt={img.alt} 
                height={150} 
                width={250} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 