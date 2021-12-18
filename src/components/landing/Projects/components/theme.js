export const breakpoints = ["288px", "608px", "1024px", "1504px"];

// breakpoints.xs = breakpoints[0];
// breakpoints.s = breakpoints[1];
// breakpoints.m = breakpoints[2];
// breakpoints.l = breakpoints[3];

const colors = {
  bg100: "#e6e6e6", // platinum
  bg200: "#ff5e5b", // sunset orange
  bg300: "#339989", // zomp / greenish
  bg400: "#39393a", // onyx
  bg500: "#1c1c1c", // eerie black
  text100: "#e6e6e6", // platinum
  text200: "#ff5e5b", // sunset orange
  text300: "#339989", // zomp / greenish
  text400: "#919194", // light onyx
  text500: "#39393a", // onyx
  text600: "#1c1c1c", // eerie black
  button100: "#ff5e5b", // sunset orange
  button200: "#339989", // zomp / greenish

  brand: "#2d2dff",
  link: "#2d2dff",
  text: "#545469",
  subText: "#777792",
  textTitle: "#1F1F2F",
  textInverse: "#9D9DAD",
  textTitleInverse: "#FFFFFF",
  error: "#EF5350",
  sectionBgInverse: "#1F1F2F",
  footerBg: "#131323",
  tileBg: "#F3F3FA",
  tileIcon: "#E6E6F1",
  borders: {
    default: "rgba(255, 255, 255, 0.8)",
  },
};

export const theme = {
  breakpoints,
  colors,
  space: [
    0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 120, 140, 180, 200, 300,
  ],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 56, 64, 72, 96, 120],
  fontWeights: [200, 400, 700],
  lineHeights: [
    "20px",
    "24px",
    "28px",
    "32px",
    "40px",
    "60px",
    "72px",
    "80px",
    "100px",
    "120px",
  ],
  fonts: {
    default: "Neue Haas Display, Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  borders: [0, `1px solid ${colors.subText}`],
  radii: ["4px", "8px", "16px", "32px", "50%"],
};
