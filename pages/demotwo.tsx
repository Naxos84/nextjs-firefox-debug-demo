import React from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/layout/Layout";

const DemoTwo = () => {
    const dispatch = useDispatch();
    return (
        <Layout>
            <div>
                <button
                    onClick={() =>
                        dispatch({ type: "MyAction", value: "Test" })
                    }>
                    Click me to dispatch an action
                </button>
            </div>
        </Layout>
    );
};

export default DemoTwo;
