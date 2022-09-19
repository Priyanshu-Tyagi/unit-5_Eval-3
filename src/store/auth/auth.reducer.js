import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
} from "./auth.types";
import React from "react";

const token = localStorage.getItem("token");

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: token || "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {...authInitalState,
      loading:true};
    }
    case AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem("token",payload.token);
      return {
        ...authInitalState,
        data:{
          ...payload,
          isAuthenticated:true
        }
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...authInitalState,
        error:true
      };
    }
    case AUTH_SIGN_OUT: {
      localStorage.removeItem("token")
      return {
        authInitalState
      };
    }
    default: {
      return state;
    }
  }
};
