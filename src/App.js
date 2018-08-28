import React from 'react';
import MessagesGrid from './components/MessagesGrid';
import MessageForm from './components/MessageForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 1,
                    title: 'Note 1',
                    details: 'Hey'
                },
                {
                    id: 2,
                    title: 'Note 2',
                    details: 'Hi'
                }
            ],
            name: 'Manny',
            currentTitle: '',
            currentDetails: '',
        }
    }

    componentDidMount() {
        fetch('https://the-pulser.herokuapp.com/messages/', {
            crossDomain:true,
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        })
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: this.state.currentTitle,
            details: this.state.currentDetails,
        };
        // firebase.database().ref('/notes').push(data, response => response);
        // feel free to keep the alert or not
        // alert(`Your note ${this.state.currentTitle} has been added!!!`);

        this.setState({
            currentTitle: '',
            currentDetails: '',
        });
    }

    deleteNote(id) {
        alert('deleteNote');
        // fetch('https://the-pulser.herokuapp.com/messages/', {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     // body: JSON.stringify({
        //     //     firstParam: 'yourValue',
        //     //     secondParam: 'yourOtherValue',
        //     // })
        // });
        // firebase.database().ref(`/notes/${id}`)
        //     .remove();
        // feel free to keep the alert or not
        // alert('Successfully deleted!');
    }

  render() {
    return (
      <div>
          <MessageForm currentTitle={this.state.currentTitle}
                       currentDetails={this.state.currentDetails}
                       handleChange={this.handleChange.bind(this)}
                       handleSubmit={this.handleSubmit.bind(this)}/>
          <MessagesGrid notes={this.state.notes}
                        deleteNote={this.deleteNote.bind(this)}/>
      </div>
    );
  }
}

export default App;
