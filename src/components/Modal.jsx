import React, { useState } from "react";
import { CancelBtn } from "../components/Styled-components";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring";
import BeerList from "./BeerList";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#F3F4ED",
  },

  // theme.palette.background.paper
  paper: {
    backgroundColor: "#536162",
    // border: "1px solid #000",
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 600,
    width: 600,
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({ isOpen, onRowSelected, data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    onRowSelected(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Name:</h2>
            <p id="spring-modal-description">Description:</p>
            <p id="spring-modal-description">Tagline:</p>
            <p id="spring-modal-description">Brewed Year:</p>
            <p id="spring-modal-description">Fits best with:</p>
            {/* food pairing*/}
            <p id="spring-modal-description">Tips from brewers: {BeerList}</p>
            {/* brewers tip*/}
            <p id="spring-modal-description">Contributors:</p>
            <p id="spring-modal-description">ABV:</p>
            <img src="" alt="Beer Can or Bottle" />
            <CancelBtn>
              <button>Cancel</button>
            </CancelBtn>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
