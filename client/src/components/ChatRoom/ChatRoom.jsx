import React from 'react';
import './ChatRoom.scss';
import io from 'socket.io-client';

class ChatRoom extends React.Component {
    state = {
        messages: [],
        socket: {},
        localmessage: '',
        localhandle: '',
    }

    componentDidMount() {
        this.setState({socket: io.connect('http://localhost:8080')}, () => {
            this.state.socket.on('chat', (data) => {
                console.log(data);
                this.setState({
                    messages: [...this.state.messages, {message: data.message, handle: data.handle}]
                })
            })
        });
    }

    clickHandler = (event) => {
        event.preventDefault();
        if (this.props.routerprops.hasOwnProperty('match')) {
            console.log(this.props)
            this.state.socket.emit('chat', {
                message: this.state.localmessage,
                handle: this.state.localhandle,
                language: this.props.routerprops.match.params.language
            });
            this.setState({localmessage: ''})
        }
        };

    updateInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
    return (
        <div className="chat">
            <div className="chat-window">
                <div className="chat-window-output">
                    {this.state.messages.map((message) => {
                        return(
                            <p className="chat-window-output__text"><span className="chat-window-output__span">{message.handle}:</span>{message.message}</p>
                        )
                    })}
                </div>
                <div className="chat-window-typing"></div>
            </div>
            <form onSubmit={this.clickHandler} action="submit" onChange={(event) => this.updateInput(event)}>
                <input className="chat__handle" type="text" placeholder="Handle" name="localhandle" value={this.state.localhandle}/>
                <input className="chat__message" type="text" placeholder="message" name="localmessage" value={this.state.localmessage}/>
                <button className="chat__button">Send</button>
            </form>
        </div>
    )}
}

export default ChatRoom;