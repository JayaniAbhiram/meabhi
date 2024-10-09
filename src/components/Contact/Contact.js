import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("jayaniabhiram@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              {/* Email Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>jayaniabhiram@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              

              {/* WhatsApp Section */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <br></br>
                <span>+918520997742</span>
                <a
                  href="https://wa.me/918520997742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn PrimaryBtn btn-shadow"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                    
                  }}
                >
                  <FaWhatsapp size={25} style={{ color: "#25D366" }} />
                  Connect on WhatsApp
                </a>
              </div>

              {/* Send Email Button */}
              {/* <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:pedro.sales.muniz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a> */}
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
