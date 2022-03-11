import React from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <p>{props.currentMSG}</p>
            <h1>Messages List</h1>
            {
                props.messages.map((message, i) => {
                    return (
                        <p key={i}>{message}</p>
                    )
                })
            }
        </>
    );
};
    
export default MessageDisplay;