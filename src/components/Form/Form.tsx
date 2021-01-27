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
import ItemGrid from '../ItemGrid/ItemGrid';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

interface OwnProps {
  repository: Repository
}

type Props = StateProps & DispatchProps;

const Form:React.FC<Props> = ({ repositories, loadRequest }:Props) => {
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  const handleSetCountry = (event:any) => {
    console.log('event', event);
    const { value } = event.target;
    setCountry(value);
    console.log('value', value);
  };

  const handleSetPlace = (event:any) => {
    console.log('event', event);
    const { value } = event.target;
    setPlace(value);
    console.log('value', value);
  };

  const handleSetDate = (event:any) => {
    console.log('event', event);
    const { value } = event.target;
    setDate(value);
    console.log('value', value);
  };

  const handleAddPlace = (event:any) => {
    event.preventDefault();
    // const renderCardPlace = repositories.map((item) => (
    //   <ItemGrid key={item.name} repository={item} />
    // ));
    console.log(place);
  };

  return (
    <>
      <div className="form">
        <form>
          <select className="form__country" name="country" id="country" aria-label="País" onChange={(event) => handleSetCountry(event)}>
            <option value="" key=""> </option>
            {repositories.map((item) => (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            ))}

          </select>
          <input
            className="form__place"
            type="text"
            id="place"
            aria-label="Local"
            value={place}
            onChange={(event) => handleSetPlace(event)}
          />
          <input
            className="form__date"
            type="date"
            id="date"
            aria-label="Meta"
            onChange={(event) => handleSetDate(event)}
            value={date}
          />
          <button className="form__btn" type="submit" onClick={(event) => handleAddPlace(event)}>Adicionar</button>
        </form>

      </div>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
