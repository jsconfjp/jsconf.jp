"use client";

import { useState, useEffect, useRef, MouseEvent, MouseEventHandler } from "react";
import Image from "next/image";
import staticLogoSrc from "@/../public/logo/buggie_bugchan_logo.png";
import spriteSrc from "@/../public/logo/jsconf_bugchan_v5_minified.png";
import { useNowEffect } from "react-now-hook";

type Props = {
    width: number;
    height: number;
    alt: string;
    fetchPriority?: "high" | "low" | "auto";
};

const FRAME_COUNT = 29;
const SPRITE_WIDTH = 400;
const SPRITE_HEIGHT = 400;
const TOTAL_HEIGHT = SPRITE_HEIGHT * FRAME_COUNT;
const MS_TOTAL = 1500;
const MS_PER_FRAME = Math.round(MS_TOTAL/FRAME_COUNT);

export function AnimatedLogo({
    width,
    height,
    alt,
    fetchPriority,
}: Props) {
    const [isSpriteLoaded, setIsSpriteLoaded] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const spriteRef = useRef<HTMLDivElement>(null);

    const aniRef = useRef<{
        direction: 1 | -1,
        current: number,
        drag?: {
            from: { x: number, y: number },
            to?: { x: number, y: number, until: number, startFrame: number }
        },
    }>(null);

    // detect when sprite sheet has fully loaded
    useEffect(() => {
        const img = new window.Image();
        img.onload = () => {
            setIsSpriteLoaded(true);
        };
        img.src = spriteSrc.src;
    }, []);

    const handleClick = (event?: MouseEvent) => {
        if (aniRef.current) return;

        setClickCount(clickCount + 1);
        const direction = clickCount % 3 == 0 ? -1 : 1;
        aniRef.current = {
            current: direction === -1 ? FRAME_COUNT-1 : 1,
            direction,
            drag: event ? {
                from: { x: event.screenX, y: event.screenY }
            } : undefined
        }
    };

    const handleMove: EventListener = (event) => {
        const drag = aniRef.current?.drag
        if (!drag) {
            return;
        }
        drag.to = {
            x: (event as unknown as MouseEvent).screenX,
            y: (event as unknown as MouseEvent).screenY,
            until: Date.now() + 3000,
            startFrame: drag.to?.startFrame ?? aniRef.current?.current ?? 0,
        }
    }

    const handleUp = () => {
        if (!aniRef.current) return;
        aniRef.current.drag = undefined;
    }

    useEffect(() => {
        if (!spriteRef.current) {
            return
        }
        const root = spriteRef.current.getRootNode()
        root.addEventListener('mousemove', handleMove);
        root.addEventListener('mouseup', handleUp);
        return () => {
            root.removeEventListener('mousemove', handleMove)
            root.removeEventListener('mouseup', handleUp)
        }
    }, [spriteRef.current])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        // when focused, allow to animate the logo by pressing Enter or Space key
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
        }
    };

    useNowEffect(() => {
        if (!spriteRef.current) {
            return
        }
        const ani = aniRef.current;
        if (!ani) {
            return
        }
        const { drag, direction } = ani
        let target = ani.current;
        if (drag?.to) {
            const offset = Math.round((drag.to.x - drag.from.x) / 7);
            target = drag.to.startFrame + offset;
            ani.direction = offset > 0 ? +1 : -1;
            ani.current = target;
            if (drag.to.until < Date.now()) {
                drag.to = undefined;
            }
        } else if ((target % FRAME_COUNT) === 0) {
            aniRef.current = null;
        } else {
            ani.current = target + direction
        }
        spriteRef.current.style.backgroundPositionY = `${(target % FRAME_COUNT) * height}px`;
    }, MS_PER_FRAME, [])

    return (
        <div
            className="logo-container"
            onMouseDown={handleClick}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`${alt}. Click to animate.`}
            aria-busy={!isSpriteLoaded}
            style={{
                width: `${width+20}px`,
                height: `${height+20}px`,
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
                    ref={spriteRef}
                    role="img"
                    aria-label={alt}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        backgroundImage: `url(${spriteSrc.src})`,
                        backgroundSize: `${width}px ${(TOTAL_HEIGHT / SPRITE_WIDTH) * width}px`,
                    }}
                />
            )}

            <style jsx>{`
        .logo-container {
          flex-shrink: 0;
          transition: transform 0.2s ease-out;
          border: 2px solid rgba(0 0 0 / 0);
          padding: 10px;
          margin: -10px;
        }
        .logo-container:focus-visible {
          outline: none;
          border: 2px solid blue;
          border-radius: 50%;
        }
        
        .logo-container:hover {
          transform: scale(1.05);
        }
      `}</style>
        </div>
    );
}

