import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import Layout from "../components/layout/Layout";

const DemoOne = () => {
    const value = useSelector<AppState, string>(
        state => state.demoTwo.otherValue
    );

    return (
        <Layout>
            <div>
                <span>Demo One Page</span>
                <button onClick={() => alert("You clicked me ;)")}>
                    Click me!
                </button>
                <div>
                    <span>Value from redux: </span>
                    <span>{value}</span>
                </div>
            </div>
        </Layout>
    );
};

export default DemoOne;
