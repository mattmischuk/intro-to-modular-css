import React from 'react';
import './VerticalCentering.css';


const VerticalCentering = () => {
  return (
    <div>

      {/*
        Add the following to the div following:
        p2 flex items-center
      */}
      <div className="bg-red white mb4 center VerticalCentering__container">
        Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock.
      </div>

      {/*
        flex items-stretch
      */}
      <div className="mb4">
        {/*
          flex items-center
        */}
        <div className="bg-red white p3 caps bold">
          Bacon
        </div>
        <div className="bg-aqua navy p3">
          Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.
        </div>
      </div>

      {/*
        p2 flex items-center justify-center
      */}
      <div className="bg-red white relative vh-50">
        <div className="translate-center">Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock.</div>
      </div>
    </div>
  );
};

export default VerticalCentering;
