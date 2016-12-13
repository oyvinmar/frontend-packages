/* eslint-disable max-len */
import React, { PropTypes } from 'react';

export default function Info({ width = '50px', height = '50px' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100" xmlSpace="preserve" height={height} width={width}>
      <g>
        <g>
          <path d="M50.033,4.979c-24.853,0-45,20.147-45,45s20.147,45,45,45c24.854,0,44.994-20.147,44.994-45S74.887,4.979,50.033,4.979z M60.271,81.185c-2.855,1.125-4.097,0.773-5.801,1.363c-1.702,0.592-3.68,0.888-5.929,0.888c-3.464,0-6.154-0.847-8.072-2.532    c-1.92-1.689-4.002-3.831-4.002-6.429c0-0.123-0.278-5.027,1.336-8.378l4.961-11.602c0.318-1.212,0.587-2.358,0.803-3.439    c0.216-1.083,0.323-1.206,0.323-2.101c0-1.615-1.023-2.742-1.688-3.374c-0.667-0.636-3.497-0.955-5.381-0.955    c-0.922,0-1.872,0.146-2.841,0.432c-0.97,0.289-2.014,0.564-2.708,0.824l0.262-4.762c2.341-0.953,7.041-2.287,9.181-2.966    c2.137-0.675,4.157-1.017,6.065-1.017c3.439,0,6.947,0.831,8.81,2.49c1.859,1.658,4.179,4.336,4.179,6.991    c0,0.547-0.065,1.512-0.196,2.899c-0.127,1.386-0.365,2.657-0.713,3.809l-5.801,11.555c-0.292,1.014-0.553,2.165-0.783,3.465    c-0.23,1.299-0.346,3.992-0.346,4.656c0,1.674,0.373,2.814,1.124,3.42c0.749,0.607,1.528,1.602,3.372,1.602    c2.499,0,2.348,0.419,4.794-0.735L60.271,81.185z M60.205,29.196c-1.555,1.443-3.425,2.491-5.611,2.491    c-2.19,0-4.068-1.048-5.637-2.491c-1.566-1.447-2.349-3.357-2.349-5.411s0.783-3.972,2.349-5.432    c1.569-1.458,3.447-2.35,5.637-2.35c2.187,0,4.057,0.729,5.611,2.189c1.555,1.459,2.326,3.539,2.326,5.593    S61.76,27.749,60.205,29.196z" />
        </g>
      </g>
    </svg>
  );
}

Info.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
