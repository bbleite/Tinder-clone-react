import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {

    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="what's up"
                timestamp="40 seconds ago"
                profilePic="https://ktla.com/wp-content/uploads/sites/4/2020/02/WEB-NEXSTAR-MARK-MESTER-SQUARE.jpg?w=720&h=720&crop=1"
            />

            <Chat
                name="Elen"
                message="How are you"
                timestamp="55 min ago"
                profilePic="https://media2.s-nbcnews.com/j/newscms/2020_34/3405827/200819-ellen-degeneres-al-1159_d74a8d3ac7ae09eccbd28c97bf858767.fit-760w.jpg"
            />

            <Chat
                name="Sandra"
                message="Ola"
                timestamp="3 days ago"
                profilePic="https://img.discogs.com/w3E3o4nVVOhJxouF3H5AU_nDlYU=/600x795/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-4537475-1447235370-2165.jpeg.jpg"
            />

            <Chat
                name="Natasha"
                message="what's up"
                timestamp="1 week ago"
                profilePic="https://media.wired.com/photos/5f35b7fc86a7c014331d15dd/master/pass/Culture_Monitor_Sarah-Cooper-B46A2916-10.jpg"
            />
        </div>
    );
}

export default Chats;