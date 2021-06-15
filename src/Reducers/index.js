const initialState = {
    budget:[{
        budget: 0,
    }],
    costList: [
        {
            title: 'Food',
            cost: 0,
        },
        {
            title: 'Entertainment',
            cost: 0,
        },
        {
            title: 'Accessories',
            cost: 0,
        },
        {
            title: 'Subscription',
            cost: 0,
        },
        {
            title: 'Bill',
            cost: 0,
        },
        {
            title: 'Other',
            cost: 0,
        },
    ],
    
    payments: [
        {
            id: 1,
            title: 'Biedronka',
            cost: 40,
            costType: 'Food',
        },
        {
            id: 1,
            title: 'Biedronka',
            cost: 40,
            costType: 'Food',
        },
        {
            id: 2,
            title: 'Pendrive',
            cost: 30,
            costType: 'Entertainment',
        },
        {
            id: 3,
            title: 'Book',
            cost: 20,
            costType: 'Accessories'
        },
        {
            id: 4,
            title: 'Lidl',
            cost: 60,
            costType: 'Subscription'
        },
        {
            id: 5,
            title: 'Swimpool',
            cost: 20,
            costType: 'Bill'
        },
        {
            id: 6,
            title: 'Book',
            cost: 10,
            costType: 'Other'
        },
    ],
    
}

const rootReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case('ADD_ITEM'):
        return{
            ...state,
            payments:[...state.payments, action.payload]
        };
        case('ADD_BUDGET'):
        return{
            ...state,
            budget:[action.payload]
        };
        case('REMOVE_ITEM'):
        return{
            ...state,
            payments: [
                ...state.payments.filter( item => item.id !== action.payload)
            ]               
        };
        // case('SUM_COSTS'):
        // return{
        //     ...state,
        //     costList: [...state.costList.map(item => item.title === action.payload.title ? {...item, cost: action.payload.cost} : item)] 
        //     // costList: [...state.costList, action.payload.cost]
        // };
            default:
                return state;
    }
};

export default rootReducer;