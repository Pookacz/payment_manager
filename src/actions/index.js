export const addItem = (index, title, cost, costType) => ({
  type: "ADD_ITEM",
  payload: index,
});

export const removeItem = (index) => ({
  type: "REMOVE_ITEM",
  payload: index,
});

