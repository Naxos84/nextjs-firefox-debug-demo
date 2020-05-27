import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = props => {
    useEffect(() => {
        fetch("/demo").then(res => console.log(res));
    }, []);

    return (
        <div>
            <Head>
                <title>Demo Application</title>
            </Head>
            <nav>
                <div>
                    <Link href="/demoone">
                        <a>Page One</a>
                    </Link>
                </div>
                <div>
                    <Link href="/demotwo">
                        <a>Page Two</a>
                    </Link>
                </div>
            </nav>
            {props.children}
        </div>
    );
};

export default Layout;
