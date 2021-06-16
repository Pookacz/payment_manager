export const addItem = (index) => ({
  type: "ADD_ITEM",
  payload: index,
});

export const removeItem = (index) => ({
  type: "REMOVE_ITEM",
  payload: index,
});

export const addBudget = (budget) => ({
  type: "ADD_BUDGET",
  payload: budget,
});

