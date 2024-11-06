function ConfirmationCreate({ onClose }) {
    return (
        <>
            <div className="container-confirmation">
                <div className="confirmation">User created</div>
                <div className="button-close" onClick={onClose}>
                    Close
                </div>
            </div>
        </>
    );
}

export default ConfirmationCreate;
