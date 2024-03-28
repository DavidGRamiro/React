import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle } ) => {
    return (
        <>
            <h1>{ title }</h1>
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
    name: 'Fernando'
}