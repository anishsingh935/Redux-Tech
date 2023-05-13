export const increaseValue = (value) => {
    return (dispatch) => dispatch({
        type: "Increment",
        payload: value
    })
}

export const decreaseValue = (value) => {
    return (dispatch) => dispatch({
        type: "Decrement",
        payload: value
    })
}