import React from 'react';
import './header.css'
import '../fonts/Yourever.otf'
import '../fonts/fonts.css'

export default class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className='header-logo'>
                    <div className='header-title-text'>
                        brand
                    </div>
                </div>
                <nav className='header-buttons-group'>
                    <button className='custom-button'>
                        about me
                    </button>
                    <button className='custom-button'>
                        album
                    </button>
                    <button className='custom-button'>
                        contacts
                    </button>
                </nav>
            </header>
        );
    };
}