import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });
      const { name } = response.data;

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', name);

      history.push('/profile');
    } catch (err) {
      alert('Login Failed!');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Log in</h1>

          <input
            placeholder="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Log in
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn color="#e02041" size={16} />
            Sign up today
          </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes" />
    </div>
  );
}
