<template>
  <div class="contacto mt-10 mx-10">
    <v-container>
      <v-row>
        <v-col cols="12" class="nosotros-col" style="padding-left: 20%; padding-right: 20%">
          <h2 class="text-center">Tus comentarios son muy importantes para nosotros</h2>
          <p style="text-align: justify">
            Yeti Personalizado MX nos interesa saber si tienes alguna duda, por favor dejanos un
            mensaje o regalanos una llamada, estaremos en contacto contigo lo mas pronto posible.
          </p>
        </v-col>

        <v-col cols="12" sm="9" md="6" lg="6">
          <h3 class="text-center">Envianos un mensaje</h3>
          <div class="container py-4">
            <!-- Bootstrap 5 starter form -->
            <form id="contactForm">
              <!-- Name input -->
              <div class="mb-3">
                <label class="form-label" for="name">Nombre</label>
                <input class="form-control" id="name" type="text" placeholder="Su nombre" />
              </div>

              <!-- Email address input -->
              <div class="mb-3">
                <label class="form-label" for="emailAddress">Email</label>
                <input class="form-control" id="emailAddress" type="email" placeholder="Su email" />
              </div>

              <!-- Message input -->
              <div class="mb-3">
                <label class="form-label" for="message">Mensaje</label>
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Su mensaje"
                  style="height: 10rem"
                ></textarea>
              </div>

              <!-- Form submit button -->
              <div class="d-grid">
                <button class="btn btn-success" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </v-col>
        <v-col cols="12" sm="9" md="6" lg="6">
          <!-- <div class="col-md-5"> -->
          <div class="contact-info h-100">
            <h3 class="mb-4">Info de contacto</h3>
            <p class="mb-4">
              Nos encantaría saber de usted. Complete el formulario o contáctenos utilizando la
              información a continuación.
            </p>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h6 class="mb-0">Direccion</h6>
                <p class="mb-0">
                  Plaza Punto Naciones, Av Naciones Unidas #4856 int 3, Jardines Universidad<br />Zapopan,
                  JAL 45110
                </p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h6 class="mb-0">Telefono</h6>
                <p class="mb-0">33 32 68 88 88 ext. 18801</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h6 class="mb-0">Email</h6>
                <p class="mb-0">contacto@yetipersonalizado.com</p>
              </div>
            </div>

            <div class="social-links">
              <h6 class="mb-3">Siguenos en nuestras redes</h6>
              <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="parent">
            <h2 class="text-center">Ubicación</h2>
            <img
              src="/src/assets/images/ubicacion.jpeg"
              style="width: 100%; border-radius: 7px"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    ex4: [
      'red',
      'indigo',
      'orange',
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'error',
      'red darken-3',
      'indigo darken-3',
      'orange darken-3',
    ],

    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (value) => {
        if (value) return true

        return 'Se requiere nombre.'
      },
      (value) => {
        if (value?.length <= 20) return true

        return 'El nombre no debe ser mayor a 20 caracteres.'
      },
    ],
    email: '',
    emailRules: [
      (value) => {
        if (value) return true

        return 'Se requiere su email.'
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true

        return 'El email debe ser válido.'
      },
    ],
    msg: '',
    msgRules: [
      (value) => {
        if (value) return true

        return 'Se requiere su mensaje.'
      },
    ],
  }),
}
</script>

<style scoped>
.contact-wrapper {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
}

.contact-info {
  background: linear-gradient(135deg, #0062cc, #0096ff);
  padding: 40px;
  color: white;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(10px);
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.social-links {
  margin-top: 30px;
}

.social-icon {
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: white;
  color: #0062cc;
  transform: translateY(-3px);
}

.contact-form {
  padding: 40px;
}

.form-control {
  border-radius: 10px;
  padding: 12px 15px;
  border: 2px solid #eee;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #0062cc;
  box-shadow: none;
}

.form-label {
  font-weight: 500;
  margin-bottom: 8px;
}

.btn-submit {
  background: linear-gradient(135deg, #0062cc, #0096ff);
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 98, 204, 0.3);
}

.map-container {
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
}
</style>
