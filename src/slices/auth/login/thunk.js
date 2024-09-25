//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { adminLogin, postFakeLogin, postJwtLogin, postSocialLogin } from "../../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from "./reducer";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();
// cookies.set("myCat", "Pacman", { path: "/" });
// console.log(cookies.get("myCat"));
export const loginUser = (user, history) => async (dispatch) => {
  console.log("user", user);
  try {
    let response;
    response = adminLogin({
      email: user?.email,
      password: user?.password,
      // isSocial: false,
    });
    var data = await response;
    console.log("data------------>>>", data);
    if (data) {
      sessionStorage.setItem("authUser", JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(loginSuccess(data));
      setTimeout(() => {
        history("/home");
      }, 3000);
      toast.success("Welcome to the Dashboard");
    }
  } catch (error) {
    toast.error("Something went wrong");
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
    let fireBaseBackend = getFirebaseBackend();
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const socialLogin = (type, history) => async (dispatch) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialLoginUser(type);
    }
    //  else {
    //   response = postSocialLogin(data);
    // }

    const socialdata = await response;
    if (socialdata) {
      sessionStorage.setItem("authUser", JSON.stringify(response));
      dispatch(loginSuccess(response));
      history("/dashboard");
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};

// *************
// export const getAllUser = () => async (dispatch) => {
//   console.log("getAllUser called");
//   try {
//     let response;
//     response = getAlluserData();
//     var data = await response;
//     console.log("data------------>>>", data);
//   } catch (error) {
//     dispatch(apiError(error));
//   }
// };
