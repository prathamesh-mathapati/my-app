import { all_action } from '../redux/type'
const initialState = { nam: 0 }
export const redux_reducer = (state = initialState, action) => {
  switch (action.type) {
    case all_action.add:
      return {
        ...state,
        nam: state.nam + 1
      }
    default:
      return state
  }
}
