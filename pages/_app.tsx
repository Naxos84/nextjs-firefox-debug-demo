import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import configureStore, { AppState } from "../store";
import { Store } from "redux";

class MyApp extends App<{
    store: Store<AppState, any>;
}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(configureStore, {
    debug: process.env.NODE_ENV !== "production",
})(MyApp);
