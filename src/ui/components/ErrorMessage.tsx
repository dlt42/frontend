import React, { FC } from 'react';

import { getErrorMessage } from '../../global/util';

export type ErrorMessageProps = { error: Error };

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => (
  <div className='m-5 text-center'>
    <h3 style={{ marginBlockStart: '10px' }}>An error has occured</h3>
    <p>{getErrorMessage(error)}</p>
  </div>
);
