function _getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomColor(limit) {
  const colors = [];
  const seen = new Set();
  for (let i = 0; i < limit; i++) {
    let color = _getRandomColor();
    while (seen.has(color)) {
      color = _getRandomColor();
    }

    colors.push(color);
  }
  return colors;
}
