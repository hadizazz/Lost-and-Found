import React from "react";
import Footer from "../components/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title id="title">TENTANG LOST & FOUND</Footer.Title>
            <Footer.Link href="#">Syarat dan Ketentuan</Footer.Link>
            <Footer.Link href="#">Kebijakan Privasi</Footer.Link>
            <Footer.Link href="#">FAQ</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title id="title">IKUTI UPDATE KAMI</Footer.Title>
            <Footer.Row3>
              <Footer.Image href="#">
                <img alt="Twitter" src="https://i.ibb.co/3sLSSz0/twitter-1.png"></img>
              </Footer.Image>
              <Footer.Image href="#">
                <img alt="Facebook" src="https://i.ibb.co/PF1798t/facebook-1.png"></img>
              </Footer.Image>
              <Footer.Image href="#">
                <img alt="Instagram" src="https://i.ibb.co/25mw7Bs/INSTAGRAM.png"></img>
              </Footer.Image>
            </Footer.Row3>
            <Footer.Link href="#">Hubungi Kami</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
      <Footer.Line></Footer.Line>
      <Footer.Wrapper>
        <Footer.Column>
          <Footer.Row2>
            <Footer.Image>
              <img alt="LOGO" src="https://i.ibb.co/j4xCkXc/PIC-LOGO.png"></img>
            </Footer.Image>
            <Footer.Image>
              <img
                alt="LOST FOUND"
                src="https://i.ibb.co/h2yzwp9/LOST-FOUND-com.png"
              ></img>
            </Footer.Image>
          </Footer.Row2>
          <Footer.Text>@ 2021 LOST&FOUND.</Footer.Text>
        </Footer.Column>
      </Footer.Wrapper>
    </Footer>
  );
}
