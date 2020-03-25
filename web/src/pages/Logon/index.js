import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Log in</h1>

          <input placeholder="Your ID" />
          <button className="button" type="submit">
            Log in
          </button>

          <a href="/register">
            <FiLogIn color="#e02041" size={16} />
            Sign up today
          </a>
        </form>
      </section>

      <img src={herosImg} alt="Heroes" />
    </div>
  );
}
