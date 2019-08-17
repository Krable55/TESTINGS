import { combineReducers } from "redux";
import ContextMenuReducer from './contextMenuReducer'

export default combineReducers({
  contextMenu: ContextMenuReducer
})
// This would produce the following state object


