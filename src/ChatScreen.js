import React, { useState } from 'react';
import "./ChatScreen.css";

function ChatScreen() {
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
            message: 'Sup'
        }
    ]);
    return (
        <div className="chatScreen">
            <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map((message) => (
                <div className="chatScreen__message">
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatScreen;