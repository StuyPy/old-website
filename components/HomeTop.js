import Image from 'next/image';

import logo from '../public/images/StuyPyTransparent.png'
import otherLogo from '../public/images/StuyPy.png'

export default function HomeTop() {
    return (
        <div id="home-top" className="container-fluid text-center">
            <div id="homeImages" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#homeImages" data-slide-to="0" className="active"></li>
                    <li data-target="#homeImages" data-slide-to="1"></li>
                    <li data-target="#homeImages" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <Image className="d-block w-100" src={otherLogo} alt="First slide" layout="responsive" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>wow, its the first slide</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <Image className="d-block w-100" src={logo} alt="Second slide" layout="responsive" />
                        <div class="carousel-caption d-none d-md-block text-secondary">
                            <h1>second slide!?</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <Image className="d-block w-100" src={otherLogo} alt="Third slide" layout="responsive" />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>i need to sleep</h1>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev ps-4" href="#homeImages" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next pe-4" href="#homeImages" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                </div>
                <script 
                    src="https://code.jquery.com/jquery-3.4.1.slim.min.js" 
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" 
                    crossorigin="anonymous" />
                <script 
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" 
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" 
                    crossorigin="anonymous" />
                <script 
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" 
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" 
                    crossorigin="anonymous" />
        </div>
        
    )
}