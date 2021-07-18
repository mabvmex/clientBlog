import React from 'react';
import { Helmet } from 'react-helmet';

export default function Error404() {
    return (
        <>
        <Helmet>
            <title>
                Algo salió mal | deja de las drogas!
            </title>
        </Helmet>
        <div>
            <h2> ERROR 404 -xx Aquí va un perrito o algún meme xx- </h2>
        </div>
        </>
    );
}