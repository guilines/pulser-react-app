import React from 'react';
import Single from './MessageCard';

export default class MessagesGrid extends React.Component {
    deleteNote(id) {
        this.props.deleteNote(id);
    }
    renderItems(){
        return this.props.notes.map(item =>
            <Single
                key={item.id}
                note={item}
                deleteNote={this.deleteNote.bind(this)}
            />
        );
    }
    render() {
        return (
            <div className="row">
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}