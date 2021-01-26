/* eslint-disable no-use-before-define */
import React from 'react';
import ItemGrid from '../ItemGrid/ItemGrid';

import './Grid.scss';

const Grid: React.FC = () => (
  // {
  //   return (
  <section className="grid">
    {/* <div className="container"> */}
    <div className="grid__itens"><ItemGrid /></div>
    {/* </div> */}

  </section>

  //   )
  // }
);

export default Grid;
