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
                <div className='header-buttons-group'>
                    <button className='custom-button'>
                        Info
                    </button>
                    <button className='custom-button'>
                        Album
                    </button>
                    <button className='custom-button'>
                        Contacts
                    </button>
                </div>
            </header>


        );
    };
}