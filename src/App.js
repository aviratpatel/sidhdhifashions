import React from 'react';
//import ReactDOM from 'react-dom';
import { useEffect } from "react";
import CarouselComponent from "./components/carousel.component";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollToTopComponent from "./components/scrolltotop.js"
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';

var listOfImages =[];

class App extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    // Before rendering the page, import all images
      componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
       const listItems = listOfImages.map((image, index) =>
            <img key={index} src={image} alt="info"></img>
       );
       console.log(listItems);

    function ScrollToTopOnMount() {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);

     return null;
   }

return (
  <div className="App">
    <CarouselComponent />

        <div>
            {
              listOfImages.map(
                (image, index) =>    <LazyLoadImage
                  effect="blur"
                  src={image.default}
                  alt={"Not Found"}
                  key={index}
                  height="500px"
                  width = "600px"
                  placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
                />
              )

            }
        </div>

        <div>
          <ScrollToTopComponent />
        </div>

  </div>

);
}
}

export default App;
