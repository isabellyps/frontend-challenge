/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import './Form.scss';
import ItemGrid, { DataInput } from '../ItemGrid/ItemGrid';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const Form: React.FC<Props> = ({ repositories, loadRequest }: Props) => {
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [listSelect, setListSelect] = useState<DataInput[]>([]);

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  const handleSetCountry = (event: any) => {
    const { value } = event.target;
    setCountry(value);
  };

  const handleSetPlace = (event: any) => {
    const { value } = event.target;
    setPlace(value);
  };

  const handleSetDate = (event: any) => {
    const { value } = event.target;
    setDate(value);
  };

  const handleAddPlace = (event: any) => {
    const countrySelect = repositories.filter((item) => item.name === country);
    const flag = countrySelect.map((item) => item.flag);

    const item: DataInput = {
      countrySelect: country,
      placeSelect: place,
      dateSelect: date,
      flagSelect: flag,
      deleteSelect: () => {
        const nextIndiceArray = listSelect.length - 1;
        const newArray = listSelect.splice(nextIndiceArray, 1);
        setListSelect(newArray);
      },
    };

    setListSelect([...listSelect, item]);

    event.preventDefault();
    setCountry('');
    setPlace('');
    setDate('');
  };

  return (
    <>
      <div className="form">
        {/* <form> */}
        <label htmlFor="country">
          País
          <select
            className="form__country"
            name="country"
            id="country"
            value={country}
            aria-label="País"
            onChange={(event) => handleSetCountry(event)}
          >
            <option value="" key="">
              {' '}
            </option>
            {repositories.map((item) => (
              <option value={item.translations.br} key={item.name}>
                {item.translations.br}
              </option>
            ))}
          </select>
        </label>
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
        <label htmlFor="date">
          Meta
          <input
            type="date"
            className="form__date"
            onChange={(event) => handleSetDate(event)}
            value={date}
          />
        </label>
        <button
          className="form__btn"
          type="submit"
          onClick={(event) => handleAddPlace(event)}
        >
          Adicionar
        </button>
      </div>
      <section className="grid">
        {listSelect.map((itemList, indice) => (
          <ItemGrid
            deleteSelect={itemList.deleteSelect}
            key={indice}
            flagSelect={itemList.flagSelect}
            countrySelect={itemList.countrySelect}
            placeSelect={itemList.placeSelect}
            dateSelect={itemList.dateSelect}
          />
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
