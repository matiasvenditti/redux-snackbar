import {SnackBarState} from "../store/SnackBarState";
import {ShowSnackBarAction, SnackBarAction} from "../actions/types";

const initialState: SnackBarState = {
    successSnackBarOpen: false,
    successSnackBarMessage: "",
    infoSnackBarOpen: false,
    infoSnackBarMessage: "",
    warningSnackBarOpen: false,
    warningSnackBarMessage: "",
    errorSnackBarOpen: false,
    errorSnackBarMessage: "",
}

const SnackBarReducer = (state = initialState, action: SnackBarAction): SnackBarState => {
    switch(action.type) {
        case "SNACKBAR_SUCCESS":
            return {
                ...state,
                successSnackBarOpen: true,
                successSnackBarMessage: action.payload
            };
        case "SNACKBAR_INFO":
            return {
                ...state,
                infoSnackBarOpen: true,
                infoSnackBarMessage: action.payload,
            }
        case "SNACKBAR_WARNING":
            return {
                ...state,
                warningSnackBarOpen: true,
                warningSnackBarMessage: action.payload,
            }
        case "SNACKBAR_ERROR":
            return {
                ...state,
                errorSnackBarOpen: true,
                errorSnackBarMessage: action.payload,
            }
        case "SNACKBAR_CLEAR":
            return {
                ...state,
                successSnackBarOpen: false,
                infoSnackBarOpen: false,
                warningSnackBarOpen: false,
                errorSnackBarOpen: false,
            }
        default:
            return state;
    }
}

export default SnackBarReducer;