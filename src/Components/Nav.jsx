import React, { useState } from "react";
// import { HashScroll } from "react-hash-scroll";
import Modal from "react-bootstrap/Modal";
import logo from "../Images/logo.png";
import metamask from "../Images/metamask.png";
import wallet from "../Images/wallet.png"
import arrow from "../Images/fwd_arrow.png"
import { Link } from "react-router-dom";
const Nav = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="meta_bnb_logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-between flex-grow-1">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" href="#">
                    Place to stay
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" href="#">
                    NFTs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" href="#">
                    Community
                  </Link>
                </li>
              </ul>
              <div className="flex justify-content-start">
                <ul className="navbar-nav">
                  <li className="nav-item cont">
                    <Link to="" className="nav-link con" href="#" onClick={handleShow}>
                      Connect wallet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal_title">Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 className="modal_header">Choose your preferred wallet:</h3>
        </Modal.Body>
        <div className="modal_container">
        <Modal.Body> <img src={metamask} alt="logo" className="img_1"/></Modal.Body>
        <Modal.Body className="mask"> Metamask</Modal.Body>
        <Modal.Body><img src={arrow} alt="logo" className="img_2" /> </Modal.Body>

        </div>
        <div className="modal_container_two mt-3">
        <Modal.Body> 
        <img src={wallet} alt="logo" className="img_1"/>
        </Modal.Body>
        <Modal.Body className="mask_2">WalletConnect</Modal.Body>
        <Modal.Body><img src={arrow} alt="logo" className="img_2" /> </Modal.Body>

        </div>
        <Modal.Footer className="modal_footer">
        
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Nav;
