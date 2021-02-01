/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React, {
  Component, Fragment, useEffect, useState,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import './Form.scss';
import ItemGrid, { DataInput } from '../ItemGrid/ItemGrid';
import Grid from '../Grid/Grid';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

// interface Teste {
//   countrySelect: string,
//   placeSelect: string,
//   dateSelect: string,
//   flagSelect: string,
// }

type Props = StateProps & DispatchProps;

const Form:React.FC<Props> = ({
  repositories, loadRequest,
}:Props) => {
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [listSelect, setListSelect] = useState<DataInput[]>([]);

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  const handleSetCountry = (event:any) => {
    const { value } = event.target;
    setCountry(value);
  };

  const handleSetPlace = (event:any) => {
    const { value } = event.target;
    setPlace(value);
  };

  const handleSetDate = (event:any) => {
    const { value } = event.target;
    setDate(value);
  };

  const handleAddPlace = (event:any) => {
    event.preventDefault();
    const countrySelect = repositories.filter((item) => item.name === country);
    console.log(event);
    // const dateSelect = date;
    const flag = countrySelect.map((item) => item.flag);

    const item: DataInput = {
      countrySelect: country,
      placeSelect: place,
      dateSelect: date,
      flagSelect: '',
    };

    console.log('item', item);
    setListSelect([...listSelect, item]);
    // const {  } = flagSelect;
    console.log('listSelect', listSelect);
    console.log('place', place);
    console.log('date', date);

    // console.log(country);
    // console.log(date);
    //   <ItemGrid key={place} repository={country} />;
  };

  return (
    <>
      <div className="form">
        {/* <form onSubmit={(event) => handleAddPlace(event)}>

          <label> */}
        País
        <select className="form__country" name="country" id="country" value={country} aria-label="País" onChange={(event) => handleSetCountry(event)}>
          <option value="" key=""> </option>
          {repositories.map((item) => (
            <option value={item.name} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {/* </label>
          <label> */}
        Local
        <input
          className="form__place"
          type="text"
          id="place"
          value={place}
          onChange={(event) => handleSetPlace(event)}
        />
        {/* </label>
          <label> */}
        Meta
        <input
          className="form__date"
          type="date"
          id="date"
          aria-label="Meta"
          onChange={(event) => handleSetDate(event)}
          value={date}
        />
        {/* </label> */}
        <button className="form__btn" type="submit" onClick={(event) => handleAddPlace(event)}>Adicionar</button>
        {/* </form> */}
      </div>
      <section className="grid">

        {listSelect.map((itemList) => (
          <ItemGrid key={itemList.placeSelect} flagSelect={itemList.flagSelect} countrySelect={itemList.countrySelect} placeSelect={itemList.placeSelect} dateSelect={itemList.dateSelect} />
        ))}

      </section>

    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
