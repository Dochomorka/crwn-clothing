import { createSelector } from "reselect";
import { selectCartItems } from "../cart/cart.selectors";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser],
(user) => user.currentUser)

