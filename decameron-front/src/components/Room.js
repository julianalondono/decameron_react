import React from 'react';
import axios from 'axios';


const Room = ({ article }) => {
    console.log(article)
    const { name, price, description, roomPhoto } = article.fields;

    const response = axios.post(
        'https://jsonplaceholder.typicode.com/users',
        { usuarioID: '123', roomID: {name}, dateIn: '00000', dateOut: '00000', adults: '2', children: '2'},
        { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(response.data);
  
    return (
        <div class="card">
                <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                        <h3 class="portfolio-modal-title text-secondary text-uppercase mb-0" className='name'>{name}</h3>
                        <img class="img-fluid" src={roomPhoto.fields.file.url} alt="..." />
                        <div class="divider-custom">
                        <div class="divider-custom-line"></div><div class="divider-custom-icon"><i class="fas fa-star"></i></div><div class="divider-custom-line"></div>
                        </div>
                        
                <p className='description'>{description}</p>
                <h5 className='price'>Precio por noche: {price}</h5>
                <button type="submit" class="btn btn-dark">Reservar {name}</button>
              
        </div>
    )

}


export default Room;


