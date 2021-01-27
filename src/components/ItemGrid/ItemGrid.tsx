/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Repository } from '../../store/ducks/repositories/types';

import './ItemGrid.scss';

interface OwnProps {
  repository: Repository;
}

export default function ItemGrid({ repository }: OwnProps) {
  return (
    <div className="grid__box">
      <div className="grid__box--header">
        <figure className="grid__image">
          <img src={repository.flag} alt="flag" />
        </figure>
        <h3 className="grid__country">{repository.name}</h3>
        {/* <div className="grid__icon"> */}
        <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTimes} />
        {/* </div> */}
      </div>
      <div className="grid__box--main">
        <p>Local: local.nome</p>
        <p>Meta: local.meta</p>
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
