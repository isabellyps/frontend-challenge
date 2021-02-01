/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

import './ItemGrid.scss';

export interface DataInput {
  countrySelect: string,
  placeSelect: string,
  dateSelect: string,
  flagSelect: string,
}

export default function ItemGrid(item:DataInput) {
  return (
    <div className="grid__box" key={item.countrySelect}>
      <div className="grid__box--header">
        <figure className="grid__image">
          <img src={item.flagSelect} alt="flag" />
        </figure>
        <FontAwesomeIcon icon={faTimes} />
        <FontAwesomeIcon icon={faPen} />
        <h3 className="grid__country">{item.countrySelect}</h3>
        {/* <div className="grid__icon"> */}

        {/* </div> */}
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
  // <>
  //   <div className="grid__box">
  //     <div className="grid__box--header">
  //       <figure className="grid__image">
  //         <img src={repository.flag} alt="flag" />
  //       </figure>
  //       <h3 className="grid__country">{repository.name}</h3>
  //       {/* <div className="grid__icon"> */}
  //       <FontAwesomeIcon icon={faPen} />
  //       <FontAwesomeIcon icon={faTimes} />
  //       {/* </div> */}
  //     </div>
  //     <div className="grid__box--main">
  //       <p>Local: local.nome</p>
  //       <p>Meta: local.meta</p>
  //     </div>
  //   </div>
  // </>;
}
