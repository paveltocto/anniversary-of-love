const ScrollDown = ({ onClick }) => {
  return (
    <div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-pink-light text-6xl animate-bounce-custom cursor-pointer z-20 opacity-80 transition-all duration-400 hover:opacity-100 hover:scale-110"
      onClick={onClick}
    >
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </div>
  );
};

export default ScrollDown;