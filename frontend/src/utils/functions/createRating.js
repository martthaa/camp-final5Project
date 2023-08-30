export const createRating = (stars) => {
  const arr = [];
  for (let i = 0; i < stars; i++) {
    arr.push("⭐");
  }
  return arr;
};
