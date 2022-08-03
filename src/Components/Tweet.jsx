import PropTypes from 'prop-types';

export function Tweet({ name }){

    return(
        <h1>{ name }</h1>
    )
}

//Tipando propriedades

Tweet.propTypes = {
    name: PropTypes.string
}