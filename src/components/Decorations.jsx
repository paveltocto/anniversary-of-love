import { useEffect, useRef } from 'react';

const Decorations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const heartCount = 40;
    const flowerCount = 60;

    // Create hearts
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.classList.add('decoration-heart');
      heart.innerHTML = '❤';

      const colors = ['#ff8fab', '#ffb3c6', '#c77dff', '#e0bbe4'];
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      heart.style.position = 'absolute';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${Math.random() * 2 + 2.5}rem`;
      heart.style.opacity = '0';
      heart.style.animation = `fall ${10 + Math.random() * 15}s linear infinite`;
      heart.style.animationDelay = `${Math.random() * 15}s`;
      heart.style.zIndex = '2';

      container.appendChild(heart);
    }

    // Create flowers
    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement('div');
      flower.classList.add('decoration-flower');

      flower.style.position = 'absolute';
      flower.style.left = `${Math.random() * 100}%`;
      const size = 15 + Math.random() * 25;
      flower.style.width = `${size}px`;
      flower.style.height = `${size}px`;
      flower.style.background = 'linear-gradient(45deg, #ff8fab, #c77dff)';
      flower.style.borderRadius = '50% 50% 50% 0';
      flower.style.transform = `rotate(${Math.random() * 360}deg)`;
      flower.style.animation = `float ${15 + Math.random() * 25}s linear infinite`;
      flower.style.animationDelay = `${Math.random() * 10}s`;
      flower.style.opacity = '0';
      flower.style.zIndex = '1';
      flower.style.boxShadow = '0 0 10px rgba(199, 125, 255, 0.4)';

      container.appendChild(flower);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full overflow-hidden z-[1] pointer-events-none"
    />
  );
};

export default Decorations;