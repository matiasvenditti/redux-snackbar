import {TabMenuLabel} from "../../model/TabMenuLabel";
import {AppBar, Tab, Tabs, useTheme} from "@material-ui/core";
import React, {useState} from "react";
import TabPanel from "./TabPanel";
import CheckIcon from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import SwipeableViews from 'react-swipeable-views';
import TabIcon from "./TabIcon";

interface MenuProps {
    icons: TabMenuLabel[],
}

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Menu = (props: MenuProps) => {
    const {icons} = props;
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    }
    const tabs = icons.map((label: TabMenuLabel, index: number) => <Tab icon={<TabIcon label={label}/>} key={index} {...a11yProps(index)}/>)

    return(
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                    {tabs}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
            </SwipeableViews>
        </div>
    )
}

export default Menu;