const powerCalc = (candidate) => {
  const { fuerza, velocidad, defensa, agilidad, inteligencia } =
    candidate.stats;

  const damageCandidate = parseInt(
    (fuerza * 2 + velocidad - (defensa - agilidad)) * (inteligencia + 0.2)
  );

  return damageCandidate;
};

export default powerCalc;
