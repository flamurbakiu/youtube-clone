import React, {useState} from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";


function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
         
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img 
                        className="header__logo"
                        src="https://unioncountyymca.org/wp-content/uploads/2020/04/youtube-3.png" 
                        alt="youtube-icon"
                    />
                </Link>
                
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value) } value={inputSearch} type="text" placeholder="Search" className="header__inputSearch" />
                
                <Link to = {`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Flamur Bakiu"
                    src="https://scontent.fskp1-1.fna.fbcdn.net/v/t1.0-9/86971270_214796246322566_1610108274911215616_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=6GN6IiPI6R8AX_kMdDp&_nc_ht=scontent.fskp1-1.fna&oh=3c2e24c434000088e74abe36a1655279&oe=600F7BB5"
                />
            </div>

        </div>
    )
}

export default Header
