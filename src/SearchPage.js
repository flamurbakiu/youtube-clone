import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>       
            </div>
            <hr />

            <ChannelRow 
                image = "https://yt3.ggpht.com/ytc/AAUvwnhANFddIg2VMAmhfQxmo7tkU7XTqoPv_WUDFs4c=s176-c-k-c0x00ffffff-no-rj-mo"
                channel = "CodePurpose"
                verified
                subs = "192"
                nOfVideos = "108"
                description = "No description"
            />

            <hr />

            <VideoRow 
                views = "313"
                subs = "193"
                description = "No description"  
                timestamp = "2 hours ago"
                channel = "CodePurpose"
                title = "Анализа на Функција | Задачи по Калкулус"
                image = "https://i.ytimg.com/vi/LjNprq3FPIE/maxresdefault.jpg"
            />

            <VideoRow 
                image = "https://i.ytimg.com/vi/H2zE8pqKzkM/maxresdefault.jpg"
                title = "Најди го Збирот | Структурно Програмирање"
                channel = "CodePurpose" 
                views = "228" 
                subs = "193"
                description = "No description" 
                timestamp = "18 hours ago"             
            />

            <VideoRow 
                image = "https://i.ytimg.com/vi/f-m-J3zd2C8/maxresdefault.jpg"
                title = "Цик-цак 2 | Структурно Програмирање"
                channel = "CodePurpose" 
                views = "20" 
                subs = "193"
                description = "No description" 
                timestamp = "2 days ago" 
            />

            <VideoRow 
                image = "https://i.ytimg.com/vi/7c_r-f5i6s0/maxresdefault.jpg"
                title = "Цик-цак 1 | Структурно Програмирање"
                channel = "CodePurpose" 
                views = "40" 
                timestamp = "27 Dec 2020" 
                subs = "193"
                description = "No description" 
            />

        </div>
    )
}

export default SearchPage;
