export function setSearchQuery(query) {
    return {
      type: 'SET_QUERY',
      payload: query,
    };
}