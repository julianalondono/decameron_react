import React from 'react';

const Dish = ({ article }) => {
    console.log(article)
    const { dish_name, dish_price, dish_description, dish_pic } = article.fields
    return (
        <div class="card">
                <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                <h3 class="portfolio-modal-title text-secondary text-uppercase mb-0" className='name'>{dish_name}</h3>
                <img class="img-fluid" src={dish_pic.fields.file.url} alt="..." />
                <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
                </div>      
                <p className='description'>{dish_description}</p>
                <p className='price'>Precio: {dish_price}</p>
                <button type="submit" class="btn btn-dark">Comprar {dish_name}</button>
                
        </div>
    )
}

export default Dish;
    
                        
