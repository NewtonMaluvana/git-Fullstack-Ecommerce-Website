const Round = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};
export default Round;
