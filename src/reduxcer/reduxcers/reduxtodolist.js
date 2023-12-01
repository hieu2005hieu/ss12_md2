const initialState = [
      {
            name: "heiu",
            age: 20,
            id:1
        }
    
]
     
      


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let a = [...state,action.payload]
            return a;
        case "DELETE":
            let b = [...state].filter((item) => {
                return item.id != action.payload;
            })
            return b;
        case "EDIT":
            console.log(action)
            let index = state.findIndex((item) => {
                return item.id == action.payload.id
            })
            console.log(index)

            state[index] = action.payload
            return state
        default:
            return state
    }
}