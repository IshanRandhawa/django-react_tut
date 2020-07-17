import axios from "axios";

import { GET_LEADS, DELETE_LEADS, ADD_LEADS } from "./types";

//GET LEADS

// export const fetchLeadsRequest = () => {
//   return {
//     type: "FETCH_LEADS_REQUEST",
//   };
// };

// export const fetchLeadsSuccess = (leads) => {
//   return {
//     type: "FETCH_LEADS_SUCCESS",
//     payload: Leads,
//   };
// };

// export const fetchLeadsFailure = (error) => {
//   return {
//     type: "FETCH_LEADS_FAILURE",
//     payload: error,
//   };
// };

export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//DELETE LEADS
export const deleteLeads = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_LEADS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD LEADS

export const addLeads = (lead) => (dispatch) => {
  axios
    .post(`/api/leads/`, lead)
    .then((res) => {
      dispatch({
        type: ADD_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
