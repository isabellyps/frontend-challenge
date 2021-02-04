/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

import './ItemGrid.scss';

export interface DataInput {
  countrySelect: string,
  placeSelect: string,
  dateSelect: string,
  flagSelect: any,
  deleteSelect(): void
}

export default function ItemGrid(item:DataInput) {
  const editPlace = () => {
    console.log('editPlace');
  };

  return (
    <div className="grid__box" key={item.countrySelect}>
      <div className="grid__box--header">
        <figure className="grid__image">
          <img src={item.flagSelect} alt="flag" />
        </figure>
        <FontAwesomeIcon icon={faTimes} onClick={item.deleteSelect} />
        <FontAwesomeIcon icon={faPen} onClick={editPlace} />
        <h3 className="grid__country">{item.countrySelect}</h3>

      </div>
      <div className="grid__box--main">
        <p>
          Local:
          {item.placeSelect}
        </p>
        <p>
          Meta:
          {item.dateSelect}
        </p>
      </div>
    </div>
  );
}
