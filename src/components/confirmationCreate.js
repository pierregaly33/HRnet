import React, { useState } from "react";

function ConfirmationCreate() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };
    return (
        <>
            {isVisible && (
                <div className="container-confirmation">
                    <div className="confirmation">User created</div>
                    <div className="button-close" onClick={handleClose}>
                        Close
                    </div>
                </div>
            )}
        </>
    );
}

export default ConfirmationCreate;
