import Image from 'next/image';

import meetingImageFirst from '../public/images/photos/meeting_image1.jpg';
import meetingImageSecond from '../public/images/photos/meeting_image2.jpg';
import boardImage from '../public/images/photos/stuypy_board.jpg'

export default function HomeTop() {
    return (
        <div id="home-top" className="text-center">
            <div id="homeImages" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image className="d-block w-100 opacity-50" src={meetingImageFirst} alt="First slide" layout="responsive" />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <h1>test</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image className="d-block w-100 opacity-50" src={meetingImageSecond} alt="Second slide" layout="responsive" />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <h1>second slide!?</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image className="d-block w-100 opacity-50" src={boardImage} alt="Third slide" layout="responsive" />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <h1>i need to sleep</h1>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#homeImages" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
                <a class="carousel-control-next" href="#homeImages" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
            <script 
                src="https://code.jquery.com/jquery-3.4.1.slim.min.js" 
                integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" 
                crossOrigin="anonymous" />
            <script 
                src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" 
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" 
                crossOrigin="anonymous" />
            <script 
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" 
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" 
                crossOrigin="anonymous" />
        </div>
        
    )
}