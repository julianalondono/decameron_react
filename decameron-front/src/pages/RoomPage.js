import React from 'react';
import '../App.css';
import { client } from '../client';
import Rooms  from '../components/Rooms';  

class RoomPage extends React.Component {
  state = {
    articles: [],
}

componentDidMount() {
  client.getEntries({ content_type: 'room' })
      .then((response) => {
          console.log(response)
          this.setState({
              articles: response.items
          })
      })
      .catch(console.error)
}

render() {
    return (  
      <div className="RoomPage">
      <div className='container'>
          <main>
              <div className='wrapper'> 
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Habitaciones</h2>
                <div class="row justify-content-center">
                <Rooms rooms={this.state.articles} />
                </div>
              </div>
          </main>
      </div>
      </div>
    );
}
}

export default RoomPage;