function volumeOfLakes(latitude) {
  let result = 0;
  let previousLatitude = latitude[0];
  for (let i = 1; i < latitude.length; i++) {
    const currentLatitude = latitude[i];
    if (currentLatitude === previousLatitude) {
      previousLatitude = currentLatitude;
      console.log({ previousLatitude });
    } else if (currentLatitude < previousLatitude) {
      result = result + (previousLatitude - currentLatitude);
      console.log({ result });
    } else {
      previousLatitude = currentLatitude;
      console.log({ previousLatitude });
    }
  }
  return result;
}
const input = [1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2];
const volume = volumeOfLakes(input);

console.log({ volume });
