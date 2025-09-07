export const useSelectedPosition = (
  rangeRepr: { min: string; max: string },
  range: { min: number; max: number }
) => {
  const selectedLeftPosition =
    ((Number(rangeRepr.min) - range.min || 1) / (range.max - range.min)) * 100;
  const selectedRightPosition =
    100 -
    ((Number(rangeRepr.max) - range.min || range.max - range.min) /
      (range.max - range.min)) *
      100;

  return [selectedLeftPosition, selectedRightPosition];
};
