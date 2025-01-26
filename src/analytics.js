import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize("G-HCJNF6VD2D");
};

// Log a pageview
export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
