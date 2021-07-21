import React, { useState } from "react";
import { CancelBtn, ShowImageBtn } from "../components/Styled-components";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#F3F4ED",
  },

  // theme.palette.background.paper
  paper: {
    backgroundColor: "#787a91",
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

export default function SpringModal({ isOpen, onRowSelected, selectedData }) {
  const classes = useStyles();
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    onRowSelected(false);
  };

  const handleImage = () => {
    setOpen(true);
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        onOpenImage={handleImage}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 style={{ textAlign: "center" }}>Information</h1>
            <h1 id="spring-modal-title">
              Name: <i>{selectedData.name}</i>
            </h1>
            <p id="spring-modal-description">
              <strong>Description:</strong> <i>{selectedData.description}</i>
            </p>
            <p id="spring-modal-description">
              <strong>Tagline:</strong> <i>{selectedData.tagline}</i>
            </p>
            <p id="spring-modal-description">
              <strong>Brewed Year</strong>: <i>{selectedData.first_brewed}</i>
            </p>
            <p id="spring-modal-description">
              <strong>Fits best with:</strong>{" "}
              <i>{selectedData.food_pairing}</i>
            </p>
            <p id="spring-modal-description">
              <strong>Tips from brewers:</strong>{" "}
              <i>{selectedData.brewers_tips}</i>
            </p>
            <p id="spring-modal-description">
              <strong>Contributors:</strong>{" "}
              <i>{selectedData.contributed_by}</i>
            </p>
            <p id="spring-modal-description">
              <strong>ABV:</strong> <i>{selectedData.abv + "%"}</i>
            </p>
            <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
            <ShowImageBtn onClick={handleImage}>Image</ShowImageBtn>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
