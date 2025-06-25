import React, { useRef, useCallback } from 'react';

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = useCallback((index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle from the center of the card
    const rawAngle = Math.atan2(y, x) * (180 / Math.PI);
    const angle = (rawAngle + 360) % 360;

    card.style.setProperty('--start', angle + 60);
  }, []);

  const handleMouseLeave = useCallback((index) => () => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.removeProperty('--start');
    }
  }, []);

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onMouseLeave={handleMouseLeave(index)}
      className="card card-border timeline-card rounded-xl p-10 relative mb-5 break-inside-avoid-column"
    >
      <div className="glow absolute inset-0 z-0" />
      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img key={i} src="/port/images/star.png" alt="star" className="size-5" />
          ))}
        </div>
        <div className="mb-5">
          <p className="text-white-50 text-lg">{card.review}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
