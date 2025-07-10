export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SUM': {
      const stat = action.payload;
      if (state.points > 0) {
        return {
          ...state,
          [stat]: (state[stat] ?? 0) + 1,
          points: state.points - 1
        };
      }
      return state;
    }

    case 'SUBS': {
      const stat = action.payload;
      if ((state[stat] ?? 0) > 0 && state.points < state.maxPoints) {
        return {
          ...state,
          [stat]: state[stat] - 1,
          points: state.points + 1
        };
      }
      return state;
    }
    default:
      return state;
  }
};
