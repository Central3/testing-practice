export default function analyzeArray(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((acc, curr) => acc + curr, 0) / length;

  return { min, max, length, average };
}
