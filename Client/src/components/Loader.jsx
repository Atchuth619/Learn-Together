const Loader = () => {
  return (
    <div className="loader-wrapper text-center mt-10">
      <div className="radar">
        <div className="beam"></div>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Loader;