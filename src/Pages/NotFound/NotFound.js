import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div style={{ margin: "12% 0%" }}>
                <p style={{ fontSize: "8rem", marginBottom: "0px" }}>404</p>
                <p style={{ fontSize: "2rem", marginBottom: "0px" }}>Not Found</p>
                <strong>The Resource requested could not be found on this server</strong>
            </div>
        </div>
    );
};

export default NotFound;