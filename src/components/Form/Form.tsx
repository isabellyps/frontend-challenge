/* eslint-disable no-use-before-define */
import React from 'react';

import './Form.scss';

const Form:React.FC = () => (
  <div className="form">
    <select className="form__country" name="country" id="country" aria-label="País">País</select>
    <input className="form__place" type="text" value="" id="place" aria-label="Local" />
    <input className="form__date" type="date" value="date" id="date" aria-label="Meta" />
    <button className="form__btn" type="submit">Adicionar</button>
  </div>
);

export default Form;
