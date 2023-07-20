import React from 'react';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink>How it works</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Investors</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Support</FooterLink>
            <FooterLink>Destinations</FooterLink>
            <FooterLink>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
}

export default Footer;
