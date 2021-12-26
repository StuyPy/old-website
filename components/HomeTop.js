import Image from 'next/image';

import meetingImageFirst from '../public/images/photos/meeting_image1.jpg';
import meetingImageSecond from '../public/images/photos/meeting_image2.jpg';
import boardImage from '../public/images/photos/stuypy_board.jpg';

export default function HomeTop() {
  return (
    <div id="home-top" className="text-center">
      <div id="homeImages" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              className="d-block w-100 opacity-50"
              src={meetingImageFirst}
              alt="First slide"
              layout="responsive"
            />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1>test</h1>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              className="d-block w-100 opacity-50"
              src={meetingImageSecond}
              alt="Second slide"
              layout="responsive"
            />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1>second slide!?</h1>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              className="d-block w-100 opacity-50"
              src={boardImage}
              alt="Third slide"
              layout="responsive"
            />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1>i need to sleep</h1>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#homeImages"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#homeImages"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
      </div>
    </div>
  );
}
