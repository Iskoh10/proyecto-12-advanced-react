const fetchApi = async ({
  setLoading,
  setCreature,
  onCreatureGenerated,
  setError,
  symbolAndTypeGenerator,
  statsGenerator,
  iconNames,
  typeNames,
  mainAttribute,
  name,
  atkName,
  defName,
  description
}) => {
  try {
    setLoading(true);

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    const results = data.results;
    const randomIndex = Math.floor(Math.random() * results.length);
    const randomBeast = results[randomIndex];

    const responseBeast = await fetch(randomBeast.url);
    const dataBeast = await responseBeast.json();
    const imgUrl = dataBeast.sprites.other.dream_world.front_default;
    const hpValue = dataBeast.stats[0].base_stat;

    const randomIdx = Math.floor(Math.random() * dataBeast.abilities.length);
    const ability = dataBeast.abilities[randomIdx];
    const assignedAbility = ability.ability.name;

    const generatedSymbol = symbolAndTypeGenerator(iconNames);
    const generatedType = symbolAndTypeGenerator(typeNames);
    const generatedStats = statsGenerator(mainAttribute);

    const newCreature = {
      imgUrl,
      assignedAbility,
      beastType: generatedType,
      symbol: generatedSymbol,
      name,
      atkName,
      defName,
      description,
      mainAttribute,
      stats: {
        ...generatedStats,
        vida: hpValue
      },
      download: true
    };

    setCreature(newCreature);
    onCreatureGenerated?.(newCreature);
  } catch (error) {
    setError('Hubo un problema con tu Criatura, intentalo de nuevo');
  } finally {
    setLoading(false);
  }
};

export default fetchApi;
