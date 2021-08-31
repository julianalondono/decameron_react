import React, { Component } from 'react'; 


export class Home extends Component {
    render() {  
        return (
            <div className='container'>    
                <header class="masthead bg-primary text-white text-center" style={{ 
                    backgroundImage: 'url("https://www.decameron.com/images/thumbnail/colombia/marazul-04.jpg")' 
            }}>
            <div class="container d-flex align-items-center flex-column" >
            <h1 class="masthead-heading text-uppercase mb-0">Decameron</h1>       
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <p class="masthead-subheading font-weight-light mb-0">Rooms and Plans</p>
        </div>
    </header>

            </div>
        );
    }
}

export default Home  