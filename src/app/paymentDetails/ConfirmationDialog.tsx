import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material';


function ConfirmationDialog({open = false, onClose = () => {}, onConfirm = () => {}}) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to perform this action?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color="primary" href='http://localhost:3000/paymentSummary'>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmationDialog;