import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Sign Up</h1>
          <p>
            Sign up today and get support for your incidents, with our community
            help.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft color="#e02041" size={16} />
            Log in
          </Link>
        </section>

        <form>
          <input placeholder="ONG Name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
