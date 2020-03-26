import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', data);

      const { id } = response.data;

      alert(`Your ID ${id}`);

      history.push('/');
    } catch (err) {
      alert('Register Failed!');
    }
  }

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

        <form onSubmit={handleRegister}>
          <input
            placeholder="ONG Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
