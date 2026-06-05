import React from 'react'

import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-200">

      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <h3 className="font-bold text-xl">
            Sabrina Ahamed
          </h3>

          <p className="text-slate-500">
            © 2026 All Rights Reserved
          </p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;