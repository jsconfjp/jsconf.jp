"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import staticLogoSrc from "@/../public/logo/buggie_bugchan_logo.png";
import spriteSrc from "@/../public/logo/jsconf_bugchan_v5_minified.png";

type Props = {
    width: number;
    height: number;
    alt: string;
    fetchPriority?: "high" | "low" | "auto";
};

const FRAME_COUNT = 29;
const SPRITE_WIDTH = 400;
const SPRITE_HEIGHT = 11600;
const ANIMATION_DURATION = 1500;

export function AnimatedLogo({
    width,
    height,
    alt,
    fetchPriority,
}: Props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isSpriteLoaded, setIsSpriteLoaded] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    // detect when sprite sheet has fully loaded
    useEffect(() => {
        const img = new window.Image();
        img.onload = () => {
            setIsSpriteLoaded(true);
        };
        img.src = spriteSrc.src;
    }, []);

    const handleClick = () => {
        if (isAnimating || !isSpriteLoaded) return;

        setClickCount(clickCount + 1);
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, ANIMATION_DURATION);
    };

    const isReverse = clickCount % 3 === 0;


    return (
        <div
            className="logo-container"
            onClick={handleClick}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                flexShrink: 0,
                cursor: isSpriteLoaded ? "pointer" : "default",
            }}
        >
            {/* show static logo only if sprite hasn't loaded yet */}
            {!isSpriteLoaded && (
                <Image
                    src={staticLogoSrc}
                    fetchPriority={fetchPriority}
                    alt={alt}
                    width={width}
                    height={height}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        objectFit: "contain",
                    }}
                />
            )}

            {/* after sprite is loaded, show sprite at frame 0 (idle) / animating */}
            {isSpriteLoaded && (
                <div
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        backgroundImage: `url(${spriteSrc.src})`,
                        backgroundSize: `${width}px ${(SPRITE_HEIGHT / SPRITE_WIDTH) * width}px`,
                        animation: isAnimating
                            ? `sprite-animate ${ANIMATION_DURATION}ms steps(${FRAME_COUNT - 1}) 1 ${isReverse ? "reverse" : "normal"}`
                            : "none",
                    }}
                />
            )}

            <style jsx>{`
        .logo-container {
          transition: transform 0.2s ease-out;
        }
        
        .logo-container:hover {
          transform: scale(1.05);
        }
        
        @keyframes sprite-animate {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 -${((FRAME_COUNT - 1) * height)}px;
          }
        }
      `}</style>
        </div>
    );
}

