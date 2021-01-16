import React from 'react';
import ReactDOM from 'react-dom';
import CarouselComponent from "./components/carousel.component";

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

return (
  <div className="App">
    <CarouselComponent />

        <div>
            {
                  listOfImages.map(
                    (image, index) =>    <img key={index} src={image.default} alt="Image is not displayed.... " height="100%" width="100%"></img>
                  )

            }
        </div>

  </div>

);
}
}

export default App;
