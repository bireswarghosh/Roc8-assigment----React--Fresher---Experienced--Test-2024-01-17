// import axios from "axios";
// // import { server } from "../store";
 

//          //  this 2 url come from -->  backend\controllers\user.js\39,41
// export const getAdminStats = () => async (dispatch) => {
//   try {
//     dispatch({ type: "getDashboardStatsRequest" });

//     const { data } = await axios.get("/api/v1/admin/stats", {
//       withCredentials: true,
//     });

//     dispatch({ type: "getDashboardStatsSuccess", payload: data });
//   } catch (error) {
//     dispatch({
//       type: "getDashboardStatsFail",
//       payload: error.response.data.message,
//     });
//   }
// };
// export const getAdminUsers = () => async (dispatch) => {
//   try {
//     dispatch({ type: "getAdminUsersRequest" });

//     const { data } = await axios.get("/api/v1/admin/users", {
//       withCredentials: true,
//     });

//     dispatch({ type: "getAdminUsersSuccess", payload: data.users });
//   } catch (error) {
//     dispatch({
//       type: "getAdminUsersFail",
//       payload: error.response.data.message,
//     });
//   }
// };




//       //  this 2 url come from -->  backend\controllers\order.js\26,27

// export const getAdminOrders = () => async (dispatch) => {
//   try {
//     dispatch({ type: "getAdminOrdersRequest" });

//     const { data } = await axios.get("/api/v1/admin/orders", {
//       withCredentials: true,
//     });

//     dispatch({ type: "getAdminOrdersSuccess", payload: data.orders });
//   } catch (error) {
//     dispatch({
//       type: "getAdminOrdersFail",
//       payload: error.response.data.message,
//     });
//   }
// };

// export const processOrder = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "processOrderRequest" });

//     const { data } = await axios.get(`/api/v1/admin/order/${id}`, {
//       withCredentials: true,
//     });

//     dispatch({ type: "processOrderSuccess", payload: data.message });
//   } catch (error) {
//     dispatch({
//       type: "processOrderFail",
//       payload: error.response.data.message,
//     });
//   }
// };
