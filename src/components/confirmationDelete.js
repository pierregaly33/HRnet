import React from "react";

function ConfirmationDelete({ onClose, onDelete }) {
    return (
        <>
            <div className="container-confirmation">
                <div className="confirmation">Voulez vous supprimez l'utilisateur ?</div>
                <div className="main-button">
                    <div className="button-confirmation" onClick={onDelete}>
                        Supprimer
                    </div>
                    <div className="button-close" onClick={onClose}>
                        Close
                    </div>
                </div>
            </div>
        </>
    );
}
export default ConfirmationDelete;
