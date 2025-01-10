const SVGBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    >
      <path
        fill="#2d2d2d"
        d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,112C672,128,768,192,864,224C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default SVGBackground;
