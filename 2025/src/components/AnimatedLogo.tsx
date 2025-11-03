"use client";

import { useState } from "react";
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
const ANIMATION_DURATION = 1200;

export function AnimatedLogo({
    width,
    height,
    alt,
    fetchPriority,
}: Props) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (isAnimating) return; // 連打防止

        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, ANIMATION_DURATION);
    };


    return (
        <div
            onClick={handleClick}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                flexShrink: 0,
            }}
        >
            {/* static logo */}
            {!isAnimating && (
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

            {/* sprite animation*/}
            {isAnimating && (
                <div
                    className="sprite-animation"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        backgroundImage: `url(${spriteSrc.src})`,
                        backgroundSize: `${width}px ${(SPRITE_HEIGHT / SPRITE_WIDTH) * width}px`,
                        animation: `sprite-animate ${ANIMATION_DURATION}ms steps(${FRAME_COUNT}) 1`,
                    }}
                />
            )}

            <style jsx>{`
        @keyframes sprite-animate {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 100%;
          }
        }
      `}</style>
        </div>
    );
}

