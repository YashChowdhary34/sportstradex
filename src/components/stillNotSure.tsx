"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "Testimonials",
    rating: 4.98,
    hasButton: true,
    buttonText: "Get Free Course!",
    image: null,
  },
  {
    id: 2,
    title: '"Made 3x what I paid"',
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Client NFL Winners",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: '"Made Over $1800"',
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: '"Tripled My Accounts"',
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: '"Best Decision Ever"',
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    title: '"Consistent Winners"',
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    title: '"Amazing Results"',
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 9,
    title: '"Life Changing"',
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 10,
    title: '"Incredible Service"',
    image: "/placeholder.svg?height=400&width=300",
  },
];

export function StillNotSure() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;
  const slidesToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return slidesToShow.mobile;
    if (window.innerWidth >= 1280) return slidesToShow.desktop;
    if (window.innerWidth >= 768) return slidesToShow.tablet;
    return slidesToShow.mobile;
  };

  const [visibleSlides, setVisibleSlides] = useState(slidesToShow.mobile);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = totalSlides - visibleSlides;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [maxIndex, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [maxIndex, isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index > maxIndex ? maxIndex : index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [maxIndex, isAnimating]
  );

  return (
    <section className="w-full bg-[#052e16] py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-white">
          Still <span className="text-green-400">Not Sure</span> ?
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleSlides)
              }%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={cn(
                  "flex-shrink-0 px-2",
                  visibleSlides === 1
                    ? "w-full"
                    : visibleSlides === 2
                    ? "w-1/2"
                    : visibleSlides === 3
                    ? "w-1/3"
                    : "w-1/4"
                )}
              >
                <div className="h-full bg-[#052e16] text-white rounded-lg overflow-hidden">
                  <div className="p-4 pb-0">
                    <h3 className="text-xl md:text-2xl font-bold">
                      {testimonial.title}
                    </h3>
                    {testimonial.id === 1 && (
                      <div className="flex flex-col items-start mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-green-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-gray-300 mt-1">
                          Rated {testimonial.rating}/5 Stars
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 pt-2">
                    {testimonial.image && (
                      <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-md">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  {testimonial.hasButton && (
                    <div className="p-4 pt-0">
                      <Button className="w-full bg-green-400 hover:bg-green-500 text-black font-bold transition-all duration-300">
                        {testimonial.buttonText}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 gap-1">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Button
              key={i}
              variant="outline"
              size="icon"
              className={cn(
                "h-2 w-2 p-0 rounded-full border-0",
                i === currentIndex
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/50"
              )}
              onClick={() => goToSlide(i)}
            >
              <span className="sr-only">Go to slide {i + 1}</span>
            </Button>
          ))}
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-[#052e16] border border-gray-700 text-white hover:bg-green-900"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-green-400 border-0 text-black hover:bg-green-500"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
