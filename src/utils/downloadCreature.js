const downloadCreature = (creature) => {
  if (!creature) {
    return;
  }

  const dataCreature = {
    ...creature,
    date: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(dataCreature, null, 2)], {
    type: 'application/json'
  });

  const link = document.createElement('a');

  link.href = URL.createObjectURL(blob);
  link.download = `${creature.name}.json`;

  link.click();
  URL.revokeObjectURL(link.href);
};

export default downloadCreature;
