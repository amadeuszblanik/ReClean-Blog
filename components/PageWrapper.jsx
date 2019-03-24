import React, {Component} from "react";
import api from "../api";

const PageWrapper = Comp =>
    class extends React.Component {
        static async getInitialProps(args) {
            const [mainMenu, childProps] = await Promise.all([
                api.categories(),
                Comp.getInitialProps(args),
            ]);

            return {
                mainMenu,
                ...(Comp.getInitialProps ? childProps : null),
            };
        }

        render() {
            return <Comp {...this.props} />;
        }
    };

export default PageWrapper;