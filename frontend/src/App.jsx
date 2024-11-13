import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const sampleDataForPhotoListItem = [{
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `./Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `./profile-1.jpg`,
}, {
  id: "2",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `./Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `./profile-1.jpg`,
},{
  id: "3",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `./Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `./profile-1.jpg`,
}
];


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <>
      <div className="App">
        <h1>Photo List Item</h1>
        {sampleDataForPhotoListItem.map(photo => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
};

export default App;
