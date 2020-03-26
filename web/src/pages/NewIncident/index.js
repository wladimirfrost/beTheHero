import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Register new incident</h1>
          <p>Describe the incident and tell the others how they can help.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft color="#e02041" size={16} />
            Home
          </Link>
        </section>

        <form>
          <input placeholder="Incident Title" />
          <textarea placeholder="Description" />
          <input placeholder="Amount" />

          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
