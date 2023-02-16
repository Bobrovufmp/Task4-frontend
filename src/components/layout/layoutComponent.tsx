import React from 'react';
import {ILayout} from "../../common/types/layout/layout";
import TopBarComponent from "../topbar/topbar";

const LayoutComponent = ({children}: ILayout) => {
    return (
        <>
            <TopBarComponent/>
            {children}
        </>
    );
};

export default LayoutComponent;