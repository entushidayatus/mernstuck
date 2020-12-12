import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 400 }}>
            <IconText />
            <p className="brand-tagline">
              We support your vacation, your trip my pleasure
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/carrers">
                  Our Carrers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Pricavy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.com"
                >
                  support@staycation.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6281286076782">
                  +62 812 8607 6782
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
            Copyright 2020 | All Right Reserved | Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
