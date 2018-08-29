import React from 'react';

const interactStyle = {
    cursor: 'pointer'
};

const MessageCard = (props) => {
    return (
        <li className="col s4">
            <div className="card teal darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{props.note.department}</span>
                    <p>{props.note.body}</p>
                </div>
                <div className="row blue-grey">
                    {/*<div className="col s2 card-action">*/}
                        {/*<a onClick={() => props.deleteNote(props.note.id)}>Delete</a>*/}
                    {/*</div>*/}
                    <div className="col s2 card-action">
                        <i className="small material-icons" style={interactStyle} onClick={() => props.thumbsUp(props.note.id)}>thumb_up</i>
                        <span>{props.note.likeCounter}</span>
                    </div>
                    <div className="col s2 card-action">
                        <i className="small material-icons" style={interactStyle}>thumb_down</i>
                        <span>{props.note.dislikeCounter}</span>
                    </div>
                    <div className="col s2 card-action">
                        <i className="small material-icons" style={interactStyle}>report</i>
                        <span>{props.note.reportCounter}</span>
                    </div>
                </div>
            </div>
        </li>

    );
}

export default MessageCard;