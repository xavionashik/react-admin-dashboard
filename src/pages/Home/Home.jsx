import React from 'react';
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widgets from '../../components/Widgets/Widgets';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <div className="homeContainer">
                <Navbar></Navbar>
                {/* now home page  and here i did a mistake: Widgets = Widget*/}
                <div className="widgets">
                    <Widgets type="user"></Widgets>
                    <Widgets type="order"></Widgets>
                    <Widgets type="earning"></Widgets>
                    <Widgets type="balance"></Widgets>
                </div>
            </div>
        </div>
    );
};

export default Home;