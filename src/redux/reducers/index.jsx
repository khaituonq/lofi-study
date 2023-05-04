import { combineReducers } from "redux"

import  userReducer  from "./userReducer"
import  modeReducer  from "./modeReducer"
import  moodReducer  from "./moodReducer"
import  rainReducer  from "./rainReducer"
import  volumeReducer  from "./volumeReducer"
import  listReducer  from "./listReducer"

export const rootReducer = combineReducers({
  userState: userReducer,
  modeState: modeReducer,
  moodState: moodReducer,
  rainState: rainReducer,
  volumeState: volumeReducer,
  todoItems: listReducer
})

const todoItemsFromStorage = localStorage.getItem("listItems") ? JSON.parse(localStorage.getItem("listItems")) : []

export const initialState = {
  todoItems: {todoList: todoItemsFromStorage}
}