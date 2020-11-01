import CheckIcon from "@material-ui/icons/Check";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import React from "react";
import {TabMenuLabel} from "../../model/TabMenuLabel";

interface TabIconProps {
    label: TabMenuLabel
}

export const TabIcon = (props: TabIconProps) => {
    const {label} = props;
    switch (label) {
        case "success":
            return <CheckIcon/>
        case "info":
            return <InfoIcon/>
        case "warning":
            return <WarningIcon/>
        case "error":
            return <ErrorIcon/>
    }
}

export default TabIcon;