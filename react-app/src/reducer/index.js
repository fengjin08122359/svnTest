import { combineReducers } from "redux";

// to do like this,the reducer's name must be the same with certain State's prop name.
import { count, ucc, openfire, images, redis, cassandra, ump, app, mongo, qa, unUsed, other } from "./reducers";
const reducer = combineReducers({
	// 这是整个 state 树中的 属性
	counter:count,
  ucc,
  openfire,
  images,
  redis,
  ump,
  cassandra,
  app,
  mongo,
  qa,
  unUsed,
  other
});

export default reducer;