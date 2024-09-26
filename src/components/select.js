import React from "react";

function select({ name, id, data }) {
    return (
        <>
            <select name={name} id={id}>
                {data}
            </select>
        </>
    );
}

export default select;
