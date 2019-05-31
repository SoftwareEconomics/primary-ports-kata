const parseInput = rawInput => {
  const input = rawInput.split(",")
    .map(s => s.trim())
    .map(s => s.match(/\d/) ? parseInt(s, 10) : s);
  return input.length > 1 ? input : input[0];
};

const getVerticalAndFeatureNames = verticals => {
  const names = {};
  Object.values(verticals).forEach(vertical =>
    names[vertical.name] = vertical.features.map(feature => feature.name)
  );
  return names;
};

module.exports = {parseInput, getVerticalAndFeatureNames};
