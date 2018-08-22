import React from 'react';
import Logo from './logo/Logo';
import SearchBar from './searchbar/SearchBar';
import AccountInfos from './accountinfos/AccountInfos';

class Header extends React.Component {
    render() {
        return (
            <div className= "header_container">
                <Logo />
                <SearchBar />
                <AccountInfos />
            </div>
        )
    }

}

export default Header;