const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("button", {
            className: "btn"
        }, "push"),
        React.createElement("button", {
            className: "btn"
        }, "popo")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("button", {
            className: "btn"
        }, "push"),
        React.createElement("button", {
            className: "btn"
        }, "popo")
    ])
]);
const hoo = React.createElement("h1", {}, "hee roopaly goog");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
root.render(element);

//# sourceMappingURL=index.7c0ccee6.js.map
