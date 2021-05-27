const initialState = {
    payments: [
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
            costType: 'Electronic',
        },
        {
            id: 3,
            title: 'Book',
            cost: 20,
            costType: 'Entertainment'
        },
        {
            id: 4,
            title: 'Lidl',
            cost: 60,
            costType: 'Food'
        },
        {
            id: 5,
            title: 'Swimpool',
            cost: 20,
            costType: 'Entertainment'
        },
        {
            id: 6,
            title: 'Book',
            cost: 10,
            costType: 'Entertainment'
        },
    ],
    
}

const rootReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case('REMOVE_ITEM'):
        return{
            ...state,
            payments: [
                ...state.payments.filter( item => item.id !== action.payload)
            ]               
        };
            default:
                return state;
    }
};

export default rootReducer;