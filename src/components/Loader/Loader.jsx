import React from 'react';
import { Dna } from 'react-loader-spinner';
import { Box } from 'components/Box';

const Loader = () => {
  return (
    <Box textAlign="center">
      <Dna
        className="Loader"
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Box>
  );
};

export default Loader;
