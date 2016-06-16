import React from 'react';
import Radium from 'radium';
import {Motion, spring} from 'react-motion';
import './Modal.css';


const Modal = ({ title, isVisible, toggle, children }) => {
  const containerStyles = { display: isVisible ? '' : 'none' };
  const motionStyle = {
    y: spring(isVisible ? 0 : 150),
    opacity: spring(isVisible ? 1 : 0),
  };

  return (
    <Motion style={ motionStyle }>
      { ({ y, opacity }) => {
        return (
          <aside style={ containerStyles }

            {/*
              fixed top-0 left-0 col-12 vh-100 flex items-center z4
            */}
            className="bg-darken-4">

            <div style={ getModalStyles(y, opacity) }
              {/*
                col-12 sm-col sm-col-8 mx-auto
              */}
              className="bg-white Modal">

              <header className="bg-blue white flex items-center py2 center">
                <div className="col-2"></div>

                <h3 className="m0 bold trim caps flex-auto">{ title }</h3>

                <button className="btn p0 col-2"
                  onClick={ toggle }>✖︎</button>
              </header>

              {/*
                overflow-scroll px2
              */}
              <div className="">
                { children }
              </div>
            </div>
          </aside>
        );
      }}
    </Motion>
  );
};

export default Radium(Modal);

/**
 * Utils
 */
function getModalStyles(y, opacity) {
  return {
    transform: `translate3d(0 , ${y}%, 0)`,
    opacity,
  };
}
