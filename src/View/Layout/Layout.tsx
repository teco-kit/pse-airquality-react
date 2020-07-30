import React from "react";
import MapPage from "../MapPage/MapPage";
import DetailPage from "./../DetailPage/DetailPage";
import ErrorPage from "../ErrorPage";
import AboutPage from "./../About";
import PrivacyPolicyPage from "./../PrivacyPolicy";
import PageMenu from "./PageMenu";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Language from "../../Controller/Storage/Language";

function Layout() {
    let language: Language = Language.getInstance();

    return (
        <div className="App">
            <Router>
                <PageMenu language={language} />
                <Switch>
                    <Route
                        exact
                        path="/pse-airquality-react/"
                        component={MapPage}
                    />
                    <Route
                        exact
                        path="/pse-airquality-react/detail/:id"
                        component={DetailPage}
                    />
                    <Route
                        exact
                        path="/pse-airquality-react/about"
                        component={AboutPage}
                    />
                    <Route
                        exact
                        path="/pse-airquality-react/privacy-policy"
                        component={PrivacyPolicyPage}
                    />
                    {/* If no url pattern matches an error page is shown */}
                    <Route>
                        <ErrorPage
                            code={404}
                            message={Language.getInstance().getText("Error404")}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Layout;
