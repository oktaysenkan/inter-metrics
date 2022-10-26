// https://rsms.me/inter/dynmetrics/
const a = -0.0223;
const b = 0.185;
const c = -0.1745;
const l = 1.4;

export const calculateTracking = (fontSize: number) => {
  const tracking = a + b * Math.pow(Math.E, c * fontSize);

  return tracking;
};

export const calculateLeading = (fontSize: number) => {
  const leading = fontSize * l;

  return leading;
};

export const textStyle = (fontSize: number) => {
  const style = {
    fontSize,
    letterSpacing: calculateTracking(fontSize),
    lineHeight: calculateLeading(fontSize),
  };

  return style;
};
