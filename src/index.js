/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for(let i = 0; i < preferences.length; i++)
  {
      if (preferences[i] != i + 1) {
          let first = preferences[i];
          if (first <= preferences.length)
              if (preferences[first - 1] != first) {
                  let second = preferences[first - 1];
                  if (preferences[second - 1] != second && preferences[second - 1] === i + 1)
                  {
                      count++;
                  }
              }
      }
          
  }
  return count/3;
};
