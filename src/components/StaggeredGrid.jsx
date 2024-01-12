import React from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 3,
  500:2
};

const StaggeredGrid = ({ images }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid "
      columnClassName="masonry-grid-column"
    >
      {images.map((imageUrl, index) => (
        <div key={index} className="masonry-grid-item overflow-hidden bg-white rounded shadow-md">
          <img className="w-full h-full  object-cover" src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Masonry>
  );
};

export default StaggeredGrid;
