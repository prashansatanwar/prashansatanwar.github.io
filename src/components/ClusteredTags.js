import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/skills';

function getSizeClass(fSz) {
    switch (fSz) {
        case 10: return 'text-md sm:text-xl md:text-4xl font-bold text-accent2';
        case 9: return 'text-base sm:text-lg md:text-3xl font-semibold text-accent2';
        case 8: return 'text-base sm:text-lg md:text-2xl font-semibold text-accent2';
        case 7: return 'text-base sm:text-lg md:text-xl font-semibold text-accent3';
        case 6: return 'text-xs sm:text-md md:text-lg font-medium text-accent3';
        case 5: return 'text-xs sm:text-md md:text-lg font-medium text-accent3';
        case 4: return 'text-xs sm:text-md md:text-md font-base';
        case 3: return 'text-xs sm:text-md md:text-md font-base';
        case 2: return 'text-xs md:text-sm font-normal';
        case 1: return 'text-xs font-normal';
        default: return '';
    }
}

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function checkOverlap(tag, positionedTags) {
    for (let existing of positionedTags) {
        const overlapX = tag.x < existing.x + existing.width + 5 && tag.x + tag.width + 5 > existing.x;
        const overlapY = tag.y < existing.y + existing.height + 5 && tag.y + tag.height + 5 > existing.y;
        if (overlapX && overlapY) return true;
    }
    return false;
}

function ClusteredTags({ containerWidth = 700, containerHeight = 500 }) {
    const [positionedTags, setPositionedTags] = useState([]);
    const tempRefs = useRef([]);

    useEffect(() => {

        const measuredTags = skills.map((skill, index) => {
            const sizeClass = getSizeClass(Number(skill.fSz));
            const span = document.createElement('span');
            span.style.position = 'absolute';
            span.style.visibility = 'hidden';
            span.className = sizeClass;
            span.innerText = skill.text;
            document.body.appendChild(span);
            const rect = span.getBoundingClientRect();
            document.body.removeChild(span);

            return { text: skill.text, width: rect.width, height: rect.height, sizeClass };
        });

        const positioned = [];
        measuredTags.forEach(tag => {
            let x, y, attempts = 0;
            do {
                x = getRandomInRange(0, containerWidth - tag.width);
                y = getRandomInRange(0, containerHeight - tag.height);
                attempts++;
            } while (checkOverlap({ x, y, width: tag.width, height: tag.height }, positioned) && attempts < 100);
            positioned.push({ ...tag, x, y });
        });

        setPositionedTags(positioned);
    }, [containerWidth, containerHeight]);

     const [hoveredTag, setHoveredTag] = useState(null);

  return (
    <>
      <div style={{ width: containerWidth, height: containerHeight }} className="relative mx-auto">
        {positionedTags.map(tag => {
          const isHovered = hoveredTag === tag.text;
          const tx = `${(Math.random() * 20 - 10).toFixed(2)}px`;
          const ty = `${(Math.random() * 20 - 10).toFixed(2)}px`;
          
          const duration = `${(Math.random() * 3 + 2).toFixed(2)}s`;
          
          const delay = `${(Math.random() * 2).toFixed(2)}s`;
          
          return (
            <span
            key={tag.text}
            className={`absolute whitespace-nowrap sm:transition-all sm:duration-300 drift ${tag.sizeClass} cursor-default`}
            style={{
              left: tag.x,
              top: tag.y,
              '--tx': tx,
              '--ty': ty,
              animationDuration: duration,
              animationDelay: delay,
              transform: `translate(0,0) scale(${isHovered ? 1.05 : 1})`,
            }}
            >
              {tag.text}
            </span>
          );
        })}

      </div>
    </>
  );
}

export default ClusteredTags;
