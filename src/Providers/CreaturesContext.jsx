import React, { useContext, useState } from 'react';
import initialCreatures from '../data/creatures.json';

export const CreaturesContext = React.createContext();

export const CreaturesProvider = ({ children }) => {
  const [creatures, setCreatures] = useState(initialCreatures);
  const [ratings, setRatings] = useState({});
  const [favorites, setFavorites] = useState({});

  const addCreature = (newCreature) => {
    setCreatures((currentValue) => [...currentValue, newCreature]);
  };

  const setRating = (id, value) => {
    setRatings((currentValue) => ({ ...currentValue, [id]: value }));
  };

  const toggleFav = (id) => {
    setFavorites((currentValue) => ({
      ...currentValue,
      [id]: !currentValue[id]
    }));
  };

  const updateCreature = (updatedCreature) => {
    setCreatures((currentValue) =>
      currentValue.map((creature) =>
        creature.name === updatedCreature.name ? updatedCreature : creature
      )
    );
  };

  return (
    <CreaturesContext.Provider
      value={{
        ratings,
        setRating,
        favorites,
        toggleFav,
        creatures,
        addCreature,
        updateCreature
      }}
    >
      {children}
    </CreaturesContext.Provider>
  );
};

export const useCreaturesContext = () => useContext(CreaturesContext);
