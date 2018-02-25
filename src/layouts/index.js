import React from "react";

export default ({ children }) => (
    <div>
        <nav>
            <h1>Test</h1>
        </nav>
        <div>
            {children()}
        </div>
    </div>
)