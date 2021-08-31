import React from 'react';
import '../App.css';
import { client } from '../client'; 
import Plans  from '../components/Plans'; 

class PlanPage extends React.Component {
  state = {
    articles_plans: [],
}

componentDidMount() {
  client.getEntries({ content_type: 'plan' })
      .then((response) => {
          console.log(response)
          this.setState({
              articles_plans: response.items
          })
      })
      .catch(console.error)
}

render() {
    return (  
      <div className="PlanPage">
      <div className='container'>
          <main>
              <div className='wrapper'> 
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Planes</h2>
                <div class="row justify-content-center">
                <Plans plans={this.state.articles_plans} />
                </div>
              </div>
          </main>
      </div>
      </div>
    );
}
}

export default PlanPage;