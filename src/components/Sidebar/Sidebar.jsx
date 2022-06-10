import React from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className='logo'>XavionAshik</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'></DashboardIcon>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li >
                        <PersonOutlineIcon className='icon'></PersonOutlineIcon>
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className='icon'></StoreIcon>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className='icon'></CreditCardIcon>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'></LocalShippingIcon>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFULL</p>
                    <li>
                        <InsertChartIcon className='icon'></InsertChartIcon>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon'></NotificationsNoneIcon>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <MonitorHeartIcon className='icon'></MonitorHeartIcon>
                        <span>Sytem Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon'></PsychologyIcon>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className='icon'></SettingsApplicationsIcon>
                        <span>Settings</span>
                    </li>
                    <p className="title">PROFILE</p>
                    <li>
                        <AccountCircleIcon className='icon'></AccountCircleIcon>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'></LogoutIcon>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <p className="title">THEME</p>
                <div className='options'>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;