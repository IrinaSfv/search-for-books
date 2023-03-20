export const setSortOptionValue = (state, { payload }) => {
    return {
      ...state,
      sortOptionValue: payload,
    };
  };