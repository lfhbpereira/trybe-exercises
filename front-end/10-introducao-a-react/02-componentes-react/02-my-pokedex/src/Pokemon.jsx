import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {    
    const { name, type, averageWeight, image } = this.props.data;
    return (
      <section className='card'>
        <div>
          <p className='name'>{ name }</p>
          <p>{ type }</p>
          <p>{ averageWeight.value } { averageWeight.measurementUnit }</p>
        </div>
        <img src={ image } alt='Pokemon' />
      </section>
    );
  }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired
  }) 
}

export default Pokemon;
