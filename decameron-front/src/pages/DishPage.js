import React from 'react';
import '../App.css';
import { client } from '../client'; 
import Dishes  from '../components/Dishes'; 

class DishPage extends React.Component {
  state = {
    articles_dishes: [],
}

componentDidMount() {
  client.getEntries({ content_type: 'dishes' })
      .then((response) => {
          console.log(response)
          this.setState({
              articles_dishes: response.items
          })
      })
      .catch(console.error)
}

render() {
    return (  
      <div className="DishPage">
      <div className='container'>
          <main>
              <div className='wrapper'> 
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Platos</h2>
                <div class="row justify-content-center">
                <Dishes dishes={this.state.articles_dishes} />
                </div>
              </div>
          </main>
      </div>
      </div>
    );
}
}

export default DishPage;