import React from 'react';

const Room = ({ article }) => {
    console.log(article)
    const { name, price, description, pics } = article.fields
    return (
        <div className='room'>
          <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
        </div>
                <h3 class="portfolio-modal-title text-secondary text-uppercase mb-0" className='name'>{name}</h3>
                <img class="img-fluid" src={pics} alt="..." />
                <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
                </div>
 
        <p className='description'>{description}</p>
        <p className='price'>Precio por noche: {price}</p>
        <div class="col-md-6 col-lg-4 mb-5">

                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        </div>
    )
}

export default Room;
    
                        
