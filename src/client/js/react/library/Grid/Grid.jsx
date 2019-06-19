import React from 'react';
import PropTypes from 'prop-types';

export const Block = props => {
  const {mt, mb, ml, mr, children} = props;
  const styles = {marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr};
  return (
    <div style={styles}>
      {children}
    </div>
  );
};

Block.propTypes = {
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number
};

Block.defaultProps = {
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0
};

export default Block;