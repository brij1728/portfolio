'use client';

import * as Sentry from '@sentry/nextjs';

import Error from 'next/error';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const GlobalError = ({ error }) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title={error.message} />
      </body>
    </html>
  );
};

GlobalError.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

export default GlobalError;
