import React from 'react';
import {useRouteError} from "react-router-dom";

export const Error= () => {
  const errors = useRouteError();
  console.log(errors)
  return (
    <div>
<h1>Ooops, Error happend</h1>
    </div>
  )
};
