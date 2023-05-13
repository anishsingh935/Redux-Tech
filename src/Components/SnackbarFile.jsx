import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  closeIcon: {
    fontSize: 20,
  },
}));

export default function CustomSnackbar({open,setOpen, msg}) {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classes.success}
          message={
            <span className={classes.message}>
              <CheckCircleIcon className={classes.icon} />
            {msg}
            </span>
          }
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon className={classes.closeIcon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  );
}
