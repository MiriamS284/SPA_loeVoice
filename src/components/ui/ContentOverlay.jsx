const ContentOverlay = ({ backgroundImage, children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="bg-cover bg-center flex-grow"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div>

        <div className="relative z-10 p-4 text-white max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentOverlay;
