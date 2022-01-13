import Image from 'next/image';

import meetingImageFirst from '../public/images/photos/meeting_image1.jpg';
import meetingImageSecond from '../public/images/photos/meeting_image2.jpg';
import meetingImageThird from '../public/images/photos/stuypy_board.jpg';

export default function HomeTop() {
  return (

	<div id="home-top" className="text-center">
		<div id="home-top-carousel" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active home-top-image">
				<Image
              		className="d-block w-100 iopacty-100"
              		src={meetingImageFirst}
              		alt="First slide"
              		layout="responsive"
            	/>
				</div>
				<div className="carousel-item home-top-image">
				<Image
					className="d-block w-100 opacity-100"
					src={meetingImageSecond}
					alt="Second slide"
					layout="responsive"
				/>
				</div>
				{/* <div className="carousel-item">
				<Image
					className="d-block w-100 opacity-100"
					src={meetingImageThird}
					alt="Third slide"
					layout="responsive"
				/>
			    </div> */}
            </div>
        </div>
	</div>
  );
}
