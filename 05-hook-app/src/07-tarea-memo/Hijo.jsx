/* eslint-disable react/display-name */
import { memo } from "react";

// eslint-disable-next-line react/prop-types
export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}
)