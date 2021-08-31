import React from 'react';
import { client } from '../client';
import Plan from './Plan';

export default class Plans extends React.Component {
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
        <div> 
        {this.state.articles_plans.map((article, i) => <Plan article={article} key={i} />)}
        </div>
        )
}
}