import ScrollDown from './ScrollDown';

const Header = ({ onSurpriseClick, onScrollDown }) => {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-5 w-full relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple/15 via-transparent to-transparent opacity-100"></div>
      <h1>
        Feliz Aniversario Mi Gordita
      </h1>
      <div className="subtitle">
        Cada instante a tu lado es un sueño hecho realidad
      </div>
      <button
        onClick={onSurpriseClick}
        className="btn-surprise"
      >
        <span className="flex items-center gap-3">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z"/>
          </svg>
          Descubre tu Sorpresa
        </span>
      </button>

      <ScrollDown onClick={onScrollDown} />
    </header>
  );
};

export default Header;
