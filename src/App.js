import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import { ThemeProvider } from "@material-ui/core";
import Home from "./components/Home";
import customTheme from "./util/customTheme";
import "./App.css";

class App extends Component {
    state = {};
    render() {
        return (
            <ThemeProvider theme={customTheme}>
                <Navbar />
                <Sidebar />
                <div className="main">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/matches"
                            component={() => <h1>Matches</h1>}
                        />
                        <Route
                            path="/manage-sources"
                            component={() => <h1>Manage sources</h1>}
                        />
                        <Route
                            path="/integration"
                            component={() => <h1>Integration</h1>}
                        />
                        <Route
                            path="/alerts"
                            component={() => <h1>Alerts</h1>}
                        />
                        <Route
                            path="/not-found"
                            component={() => <h1>Not Found</h1>}
                        />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
