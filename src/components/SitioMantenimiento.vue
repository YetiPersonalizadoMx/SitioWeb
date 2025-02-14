<template>
  <div className="min-vh-100 d-flex flex-column">
    <header>
      <div className="container">
        <nav className="navbar navbar-dark bg-transparenet">
          <a className="navbar-brand" href="">
            <img :src="logo" alt="Logo" />
          </a>
          <span className="navbar-text ml-auto d-none d-sm-inline-block"> Equipo 1 </span>

          <span className="navbar-text d-none d-sm-inline-block"> Ana Gabriela </span>
          <span className="navbar-text d-none d-sm-inline-block"> Fco. Javier S.M. </span>
          <span className="navbar-text d-none d-sm-inline-block"> Christian Jeovany </span>
          <span className="navbar-text d-none d-sm-inline-block"> Fco. Javier S.H. </span>
        </nav>
      </div>
    </header>
    <main className="my-auto">
      <div className="container">
        <h1 className="page-title">Sitio en construcción</h1>
        <p className="page-description">
          Estamos construyendo este sitio Web de Yeti Personalizado MX, en breve estaremos
          publicando las actualizaciones.
        </p>
        <p>Siguenos en nuestras redes.</p>
        <nav className="footer-social-links">
          <a href="#!" className="social-link">
            <i className="mdi mdi-facebook-box"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="mdi mdi-twitter"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="mdi mdi-google"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="mdi mdi-slack"></i>
          </a>
          <a href="#!" className="social-link">
            <i className="mdi mdi-skype"></i>
          </a>
        </nav>
      </div>
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Karla', sans-serif;
  background-image: url('../assets/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #ffffff;
  padding-bottom: 75px;
}
@media (min-width: 768px) {
  body {
    padding-bottom: 110px;
  }
}

.navbar-brand {
  margin-right: 0;
}
.navbar-brand img {
  height: 21px;
}

.navbar-dark {
  padding-top: 35px;
  padding-bottom: 35px;
}
.navbar-dark .navbar-text {
  color: #ffffff;
  opacity: 1;
  padding: 0 20px;
  border-right: 1px solid #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.navbar-dark .navbar-text:last-child {
  border-right: 0;
}
@media (max-width: 767px) {
  .navbar-dark {
    padding-bottom: 0;
  }
}

.page-title {
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 6px;
}
@media (max-width: 767px) {
  .page-title {
    font-size: 35px;
    margin-bottom: 14px;
  }
}

.page-description {
  max-width: 540px;
  font-size: 18px;
  margin-bottom: 59px;
}
@media (max-width: 767px) {
  .page-description {
    font-size: 14px;
  }
}

p {
  font-size: 14px;
  margin-bottom: 21px;
}

.footer-social-links .social-link {
  display: inline-block;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #000000;
  margin-right: 16px;
  transition: all 0.3s ease-in-out;
}
.footer-social-links .social-link:last-child {
  margin-right: 0;
}
.footer-social-links .social-link:hover {
  text-decoration: none;
  background-color: #000000;
  color: #ffffff;
}
.ml-auto,
.mx-auto {
  margin-left: auto;
}
main {
  display: block;
}
</style>
<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../assets/images/Yeti_LOGO.png'
</script>
