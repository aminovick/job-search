const nextElementList = (list, value) => {
  const currentValue = list.indexOf(value);
  const nextValueIndex = (currentValue + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;
};
export default nextElementList;
