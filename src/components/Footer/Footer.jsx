import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="relative py-10 overflow-hidden bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap -m-6">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex items-center mb-4">
              <Logo width="100px" alt="Company Logo" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                &copy; Copyright 2023. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-px">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/features">
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/affiliate">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/press">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div>
              <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-px">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/account">
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/help">
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/support">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div>
              <h3 className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-px">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/terms">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/licensing">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
