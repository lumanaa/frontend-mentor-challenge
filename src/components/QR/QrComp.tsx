import qr from "../../assets/images/image-qr-code.png";

import "./qrcomp.scss";

const QrComp = () => {
  return (
    <div className='qr-body'>
      <div className='qr-section'>
        <div className='qr-container'>
          <img src={qr} alt='qr-code' />
          <div className='qr-text'>
            <h2>Improve your front-end skills by building projects</h2>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrComp;
