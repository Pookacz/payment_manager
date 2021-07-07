const initialState = {
  budget: [
    {
      budget: 0,
    },
  ],
  costList: [
    {
      title: "Food",
    },
    {
      title: "Entertainment",
    },
    {
      title: "Accessories",
    },
    {
      title: "Subscription",
    },
    {
      title: "Bill",
    },
    {
      title: "Other",
    },
  ],

  payments: [],
  graph: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budget: [action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        payments: [
          ...state.payments.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
