import React, { useState } from 'react';
import "./ChatScreen.css";
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://media2.s-nbcnews.com/j/newscms/2020_34/3405827/200819-ellen-degeneres-al-1159_d74a8d3ac7ae09eccbd28c97bf858767.fit-760w.jpg',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://media2.s-nbcnews.com/j/newscms/2020_34/3405827/200819-ellen-degeneres-al-1159_d74a8d3ac7ae09eccbd28c97bf858767.fit-760w.jpg',
            message: 'Hows it going'
        },
        {
            message: 'Hi! How are you Ellen?'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            )}

            <div>
                <form className="chatScreen__input">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message..."
                        type="text"
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen;