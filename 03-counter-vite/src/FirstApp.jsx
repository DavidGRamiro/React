import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle } ) => {
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <h3>{ subtitle }</h3>
        </>
    ) 
} 

// Tipado de las propiedades
FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

// Valor de las propiedades por defecto. Se renderizan primero que las propTypes
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'Fernando'
}