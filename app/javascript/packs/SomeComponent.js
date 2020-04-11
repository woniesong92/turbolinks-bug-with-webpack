import React from "react";
import ReactDOM from "react-dom";

function SomeComponent() {
  return (
    <div>
      <h1>Render Me!</h1>
    </div>
  );
}

const renderComponent = (elementID) => () => {
  const node = document.getElementById(elementID);
  if (node) {
    const data = JSON.parse(node.getAttribute("data"));
    ReactDOM.render(<SomeComponent {...data} />, node);
  }
};

const dismountComponent = (elementID) => () => {
  const node = document.getElementById(elementID);
  if (node) {
    ReactDOM.unmountComponentAtNode(node);
  }
};

document.addEventListener(
  "turbolinks:before-render",
  dismountComponent("posts-index")
);
document.addEventListener("turbolinks:load", renderComponent("posts-index"));
