import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (Component: () => JSX.Element) => () =>{
    return (
        <BrowserRouter>
            <Suspense fallback='Loading...'>
                {
                    <Component/>
                }
            </Suspense>
        </BrowserRouter>
    )
}