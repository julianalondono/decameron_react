import React from 'react';
import { client } from '../client';
import Room  from './Room';


export default class Rooms extends React.Component {
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
            <div> 
            {this.state.articles.map((article, i) => <Room article={article} key={i} />)}
            </div>
            )
    }
  }

    

