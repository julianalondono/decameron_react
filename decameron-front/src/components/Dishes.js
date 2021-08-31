import React from 'react';
import { client } from '../client';
import Dish  from './Dish';

export default class Dishes extends React.Component {
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
            <div> 
            {this.state.articles_dishes.map((article, i) => <Dish article={article} key={i} />)}
            </div>
        )
    }
  }

    

