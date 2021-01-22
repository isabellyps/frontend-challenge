/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
  return <li>{repository.name}</li>;
}
