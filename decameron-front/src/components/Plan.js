import React from 'react';

const Plan = ({ article }) => {
    console.log(article)
    const { name, price, description, photos } = article.fields
    return (
        <div class="card">
        <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                <h3 class="portfolio-modal-title text-secondary text-uppercase mb-0" className='name'>{name}</h3>
                <img class="img-fluid" src={photos.fields.file.url} alt="..." />
                <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
                </div>
        <p className='description'>{description}</p>
        <h5 className='price'>Precio: {price}</h5>
        <button type="submit" class="btn btn-dark" onClick={SendReq}>Reservar {name}</button>
        </div>
    )
}

const SendReq = ()=>{

var url = "https://cgmkp3n80i.execute-api.us-east-1.amazonaws.com/default/CrearReserva";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader("x-api-key", "Ll1WBbf83N5uullHQpZP9a5EjVzw4Eyq4IngOS1p");
xhr.setRequestHeader("Authorization", "x-api-key: Ll1WBbf83N5uullHQpZP9a5EjVzw4Eyq4IngOS1p");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = "usuarioID=1&roomID=1&dateIn=2232&dateOut=322&adults=2&children=2";

xhr.send(data);
console.log("Holaa");
}

export default Plan;
    