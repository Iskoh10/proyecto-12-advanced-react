const statsGenerator = (mainAttribute) => {
  const attributes = [
    'fuerza',
    'defensa',
    'velocidad',
    'inteligencia',
    'agilidad'
  ];
  const stats = {};
  const otherAttributes = attributes.filter(
    (attribute) => attribute !== mainAttribute.toLowerCase()
  );

  const maxPoint = Math.floor(Math.random() * 26) + 35;
  stats[mainAttribute.toLowerCase()] = maxPoint;

  let remainingPoints = 100 - maxPoint;

  for (let i = 0; i < otherAttributes.length; i++) {
    const attribute = otherAttributes[i];
    if (i === otherAttributes.length - 1) {
      stats[attribute] = remainingPoints;
    } else {
      const max = remainingPoints - (otherAttributes.length - i - 1);
      const value = Math.floor(Math.random() * (max + 1));
      stats[attribute] = value;
      remainingPoints -= value;
    }
  }
  return stats;
};

export default statsGenerator;
