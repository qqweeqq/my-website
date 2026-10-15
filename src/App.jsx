import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Arial',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh',
      padding: '30px'
    }}>

      <h1 style={{ color: 'red' }}>Привет!</h1>

      <h2>Добро пожаловать на наш сайт</h2>

      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        maxWidth: '300px',
        margin: '30px auto',
        boxShadow: '0 4px 10px #cccccc'
      }}>

        <h2>Наш проект</h2>

        <p>Здесь вы найдёте интересную информацию и полезные материалы.</p>

        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          onClick={() => alert('Добро пожаловать!')}
        >
          Подробнее
        </button>

      </div>

      <p>© 2026 Все права защищены</p>

    </div>
  );

}

export default App;
