import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var listOfImages =[];
/*
Image size can be edited from C:\React\sampleapp3\node_modules\react-responsive-carousel\lib\styles\carousel.min.css file
Look for img tag in the css file; Ideally, you can make changes to 2nd img tag;

npm install react-responsive-carousel --save
Full documentation is available at https://www.npmjs.com/package/react-responsive-carousel
*/
function   importAll(r) {
      return r.keys().map(r);
  }

export default function CarouselComponent() {

  // Before rendering the page, import all images
      listOfImages = importAll(require.context('../sliderimages/', false, /\.(png|jpe?g|svg)$/));
// url.default must be used to prevent [object_module] reference error
    return (
       <div>
       <h3 style={{color: "blue"}}> Sidhdhi Fashions! Whatsapp me on +91 7777 912 677 to get good deals... </h3>
            <Carousel infiniteLoop autoPlay useKeyboardArrows showArrows thumbWidth="10%" dynamicHeight="TRUE" centerMode>
{
    listOfImages.map((url, index) => (
       <img key={index} src={url.default} alt="Not Found" />

    ))
}
</Carousel>
        </div>
    );
}

/* Another way

<Carousel showArrows={true} showThumbs={true}>
{
    images.map((url, index) => (
        <div key={index}>
           <img src={url} />
           <p>Legend</p>
        </div>
    ))
}
</Carousel>
*/
