import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleMetadata = () => {
        setIsVideoReady(true);
        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) {
        handleMetadata();
      } else {
        video.load();
        video.addEventListener("loadedmetadata", handleMetadata);
      }

      // Safety fallback: if metadata doesn't load in 3 seconds, try anyway
      const timer = setTimeout(() => {
        if (!isVideoReady) setIsVideoReady(true);
      }, 3000);

      return () => {
        video.removeEventListener("loadedmetadata", handleMetadata);
        clearTimeout(timer);
      };
    }
  }, []);

  useGSAP(() => {
    if (!isMobile && videoRef.current) {
      const video = videoRef.current;

      // Animación del clip-path independiente para que sea más rápida
      gsap.to(".video-box", {
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "top top",
          end: "+=600",
          scrub: true,
        },
        clipPath: "circle(100% at 50% 50%)",
        ease: "power2.inOut",
      });

      // Pinning y scrubbing del video usando onUpdate (más fiable)
      ScrollTrigger.create({
        trigger: ".vd-pin-section",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = self.progress * video.duration;
          }
        },
      });
    }
  }, { dependencies: [isVideoReady], revertOnUpdate: true });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile ? "circle(100% at 50% 50%)" : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          ref={videoRef}
          src="/videos/pinvideo.mp4"
          playsInline
          muted
          preload="auto"
          className="size-full absolute inset-0 object-cover"
        />

        <div className="abs-center md:scale-100 scale-200">
          <Image src="/images/circle-text.svg" alt="" width={500} height={500} className="spin-circle" />
          <div className="play-btn">
            <Image src="/images/play.svg" alt="" width={500} height={500} className="size-[3vw] ml-[.5vw]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
