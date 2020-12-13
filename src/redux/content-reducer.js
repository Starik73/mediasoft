const SET_PAGE = "SET_PAGE";
const SET_ACTIVE_BUTTON = "SET_ACTIVE_BUTTON";
const UNSET_ACTIVE_BUTTON = "UNSET_ACTIVE_BUTTON";

let initialState = {
    products: [
        { id: 1, name: 'Первый товар', img: 'item1', price: 1999.50, rating: 1, article: 1111111 },
        { id: 2, name: 'Второй товар', img: 'item2', price: 2999.50, rating: 2, article: 2222222 },
        { id: 3, name: 'Третий товар', img: 'item3', price: 2999.50, rating: 3, article: 3333333 },
        { id: 4, name: 'Четвертый товар', img: 'item4', price: 1999.50, rating: 1, article: 1111111 },
        { id: 5, name: 'Пятый товар', img: 'item5', price: 2999.50, rating: 2, article: 2222222 },
        { id: 6, name: 'Шестой товар', img: 'item6', price: 2999.50, rating: 3, article: 3333333 },
        { id: 7, name: 'Повтор Четвертый', img: 'item4', price: 1999.50, rating: 1, article: 1111111 },
        { id: 8, name: 'Повтор Пятый', img: 'item5', price: 2999.50, rating: 2, article: 2222222 },
        { id: 9, name: 'Повтор Шестой', img: 'item6', price: 2999.50, rating: 3, article: 3333333 },
    ],
    activeButton: [],
    currentPage: 1,
    pageSize: 4,
};

const handlersPage = {
    [SET_PAGE]: (state, action) =>
        ({ ...state, currentPage: action.currentPage }),
};
const handlersButton = {
    [SET_ACTIVE_BUTTON]: (state, action) =>
        ({ ...state, activeButton: [...state.activeButton, action.id] }),
    [UNSET_ACTIVE_BUTTON]: (state, action) =>
        ({ ...state, activeButton: [...state.activeButton.filter((button) => button !== action.id),] }),
}

export const ContentReducer = (state = initialState, action) => {
    if (handlersPage[action.type]) {
        return handlersPage[action.type](state, action);
    } else if (handlersButton[action.type]) {
        return handlersButton[action.type](state, action);
    }
    return state
};

export const setCurrentPageAction = (currentPage) => ({ type: SET_PAGE, currentPage })
export const setActiveButtonAction = (id) => ({ type: SET_ACTIVE_BUTTON, id })
export const unsetActiveButtonAction = (id) => ({ type: UNSET_ACTIVE_BUTTON, id })