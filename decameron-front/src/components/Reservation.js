import React from 'react';
import axios from 'axios';


/*
export default class Reservation extends React.Component {  
    render(){
    return <h1>Hello, {props.name}</h1>;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: props.name })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json());
        console.log(response)
}
}*/


const Reservation = () => {

    return axios.post('https://jsonplaceholder.typicode.com/users', {
        name: 'Juliana'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
 
export default Reservation;
