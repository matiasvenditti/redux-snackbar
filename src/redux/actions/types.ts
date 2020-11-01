type ShowSnackBar = "SNACKBAR_SUCCESS" | "SNACKBAR_INFO" | "SNACKBAR_WARNING" | "SNACKBAR_ERROR"
const CLEAR = "SNACKBAR_CLEAR"

export type ShowSnackBarAction = {
    type: ShowSnackBar
    payload: string
}

export type ClearSnackBarAction = {
    type: typeof CLEAR
}

export type SnackBarAction = ShowSnackBarAction | ClearSnackBarAction