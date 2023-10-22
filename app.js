import React from "react";
import ReactDOM from "react-dom/client";

const head1 = <h1>Hello ! Welcome to Namaste React</h1>;
const head2 = <h2>From Akshay </h2>;

const HeadComponent = () => {
  return (
    <div className="title">
        {head1}
        {head2}
    </div>
    )


};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent></HeadComponent>);

console.log(head1.props)

