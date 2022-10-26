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

const round = (number: number, decimal: number) => {
  const p = Math.pow(10, decimal);

  return Math.round((number + Number.EPSILON) * p) / p;
};

export const textStyle = (fontSize: number) => {
  const style = {
    fontSize,
    letterSpacing: round(calculateTracking(fontSize), 3),
    lineHeight: round(calculateLeading(fontSize), 1),
  };

  return style;
};
