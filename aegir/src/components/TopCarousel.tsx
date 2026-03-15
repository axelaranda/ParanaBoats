"use client"
import React from "react"

export interface TopCarouselProps {
  images: string[]
}

const TopCarousel: React.FC<TopCarouselProps> = ({ images }) => {
  const duplicated = [...images, ...images]

  return (
    <div className="mt-2
      sm:mt-30  
      md:mt-34
      lg:mt-38
      mb-4
      sm:mb-20  
      md:mb-24   
      lg:mb-36
      w-full overflow-hidden">
      <div className="flex w-max
      animate-[scroll_50s_linear_infinite] 
      sm:animate-[scroll_55s_linear_infinite] 
      md:animate-[scroll_60s_linear_infinite] 
      lg:animate-[scroll_65s_linear_infinite]
      hover:[animation-play-state:paused]">

        {duplicated.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-64 w-auto object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}

export default TopCarousel


