import React from 'react';
import './info.css'
import personalInfo from './personalInfo'
import Photo from '../images/emily-morter-P6LzJslW6nU-unsplash.jpg'

export default class InfoComponent extends React.Component {
    state = {
        name: '',
        surname: '',
        sex: '',
        birthdayOfProject: ''
    };

    parseJson = () => {
        this.setState({
            name: personalInfo.name,
            surname: personalInfo.surname,
            sex: personalInfo,
            birthdayOfProject: personalInfo.birthdayOfProject
        })
    };

    componentDidMount() {
        this.parseJson();
    }

    welcomeMessage = () => {
        return(
            <>
                <div>Hello</div>
                <div>I am {this.state.name} {this.state.surname}</div>
            </>
        );
    };

    render() {
        return(
            <div className="body-general-container">
                <div className="welcome-message">
                    <img src={Photo} alt='vishersky' />
                    <div className="message-text">
                        {this.welcomeMessage()}
                    </div>
                </div>
            </div>
        )
    }
}