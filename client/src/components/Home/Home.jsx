import React from 'react';
import io from 'socket.io-client';
import Tokyo from '../../assets/images/tokyo.png';
import './Home.scss';

class Home extends React.Component {
    english = (event) => {
        const english = io('/english');
        english.on('Chat', function(data) {
        })
        this.props.routerprops.history.push('/chat/english')
    }

    japanese = (event) => {
        const japanese = io('/japanese');
        japanese.on('Chat', function(data) {
        })
        this.props.routerprops.history.push('/chat/japanese');
    }

    render() {
    return (
        <section className="home">
            <h1 className="home__welcome">ようこそ! Youkoso! Welcome!</h1>
            <div className="home-buttons">
                <button onClick={this.english} className="home-buttons__english">English</button>
                <button onClick={this.japanese} className="home-buttons__japanese">Japanese</button>
            </div>
            <div className="home-footer">
                <img className="home-footer__image" src={Tokyo} alt="Tokyo"/>
            </div>
        </section>
    )
}}

export default Home;