import React from 'react';

const MessageCard = (props) => {
    return (
        <li className="col s4">
            <div className="card teal darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{props.note.title}</span>
                    <p>{props.note.details}</p>
                </div>
                <div className="row blue-grey">
                    {/*<div className="col s2 card-action">*/}
                        {/*<a onClick={() => props.deleteNote(props.note.id)}>Delete</a>*/}
                    {/*</div>*/}
                    <div className="col s2 card-action">
                        <i className="small material-icons">thumb_up</i>
                    </div>
                    <div className="col s2 card-action">
                        <i className="small material-icons">thumb_down</i>
                    </div>
                    <div className="col s2 card-action">
                        <i className="small material-icons">report</i>
                    </div>
                </div>
            </div>
        </li>

    );
}

export default MessageCard;