const litsreduxcer = 0
export const reduxcer = (state = litsreduxcer, action) => {
    switch (action.type) {
        case "hieu":
            state = state + 1
            return state
        default:
            return state
    }
}