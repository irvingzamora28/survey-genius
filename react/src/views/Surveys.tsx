import React from "react";
import Page from "../components/Page";
import { userStateContext } from "../contexts/ContextProvider";

const Surveys: React.FC<{}> = () => {
    const { surveys } = userStateContext();

    return (
        <>
            <Page title="Survey">
                Children survey
                <br />
                Children survey
            </Page>
        </>
    );
};

export default Surveys;
