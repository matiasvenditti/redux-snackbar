import {SnackBarAction} from "./types";

export const showSuccessSnackBar = (message: string): SnackBarAction => {
    return {
        type: "SNACKBAR_SUCCESS",
        payload: message
    }
}

export const showInfoSnackBar = (message: string): SnackBarAction => {
    return {
        type: "SNACKBAR_INFO",
        payload: message
    }
}

export const showWarningSnackBar = (message: string): SnackBarAction => {
    return {
        type: "SNACKBAR_WARNING",
        payload: message
    }
}

export const showErrorSnackBar = (message: string): SnackBarAction => {
    return {
        type: "SNACKBAR_ERROR",
        payload: message
    }
}

export const clearSnackBar = (): SnackBarAction => {
    return {
        type: "SNACKBAR_CLEAR"
    }
}