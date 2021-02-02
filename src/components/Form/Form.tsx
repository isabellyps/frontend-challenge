/* eslint-disable jsx-a11y/label-has-associated-control */
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
import InputMask from 'react-input-mask';

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

  const teste = (indexArray:any) => {
    console.log(indexArray);
    const newListSelect = listSelect.splice(indexArray, 1);
    console.log(newListSelect);
  };

  const handleAddPlace = (event:any) => {
    const countrySelect = repositories.filter((item) => item.name === country);
    console.log(event);
    // const dateSelect = date;
    const flag = countrySelect.map((item) => item.flag);

    const item: DataInput = {
      countrySelect: country,
      placeSelect: place,
      dateSelect: date,
      flagSelect: '',
      deleteSelect: () => {
        const nextIndiceArray = listSelect.length - 1;
        const newArray = listSelect.splice(nextIndiceArray, 1);
        setListSelect(newArray);
      },
    };

    console.log('item', item);
    setListSelect([...listSelect, item]);
    // const {  } = flagSelect;
    console.log('listSelect', listSelect);
    console.log('place', place);
    console.log('date', date);
    event.preventDefault();
    setCountry('');
    setPlace('');
    setDate('');

    // console.log(country);
    // console.log(date);
    //   <ItemGrid key={place} repository={country} />;
  };

  const onSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="form">
        {/* <form> */}
        <label htmlFor="country">
          País
          <select className="form__country" name="country" id="country" value={country} aria-label="País" onChange={(event) => handleSetCountry(event)}>
            <option value="" key=""> </option>
            {repositories.map((item) => (
              <option value={item.translations.br} key={item.name}>
                {item.translations.br}
              </option>
            ))}
          </select>
        </label>

        {/* </label>
          <label> */}
        <label htmlFor="place">
          Local
          <input
            className="form__place"
            type="text"
            id="place"
            value={place}
            onChange={(event) => handleSetPlace(event)}
          />
        </label>

        {/* </label>
          <label> */}
        <label htmlFor="date">
          Meta
          <input
         // mask="MM/AAAA"
            type="date"
            className="form__date"
            onChange={(event) => handleSetDate(event)}
            value={date}
          />
        </label>

        {/* </label> */}
        <button className="form__btn" type="submit" onClick={(event) => handleAddPlace(event)}>Adicionar</button>
        {/* </form> */}

      </div>
      <section className="grid">

        {listSelect.map((itemList, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemGrid deleteSelect={itemList.deleteSelect} key={indice} flagSelect={itemList.flagSelect} countrySelect={itemList.countrySelect} placeSelect={itemList.placeSelect} dateSelect={itemList.dateSelect} />
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
