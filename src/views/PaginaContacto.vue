<template>
  <div class="contacto mt-10 mx-10">
    <v-container>
      <v-row>
        <v-col cols="12" class="nosotros-col" style="padding-left: 20%; padding-right: 20%">
          <h2 class="text-center mt-10">Tus comentarios son muy importantes para nosotros</h2>
          <p style="text-align: justify">
            Yeti Personalizado MX nos interesa saber si tienes alguna duda, por favor dejanos un
            mensaje o regalanos una llamada, estaremos en contacto contigo lo mas pronto posible.
          </p>
        </v-col>

        <v-col cols="12" sm="9" md="6" lg="6">
          <h3 class="text-center">Envianos un mensaje</h3>
          <div class="container py-4">
            <!-- Bootstrap 5 starter form -->
            <form
              v-if="showForm"
              id="contactForm"
              @submit.prevent="onSubmit"
              enctype="multipart/form-data"
            >
              <!-- Name input -->
              <div class="mb-3">
                <FormInput
                  label="Nombre"
                  v-model="contactForm.name"
                  :error="errors.name"
                  placeholder="Su nombre"
                  @Input="() => setTouched('name')"
                />
              </div>

              <!-- Subject input -->
              <div class="mb-3">
                <FormInput
                  label="Asunto"
                  v-model="contactForm.subject"
                  :error="errors.subject"
                  placeholder="Asunto"
                  @Input="() => setTouched('subject')"
                />
              </div>
              <!-- Email input -->
              <div class="mb-3">
                <FormInput
                  type="email"
                  label="Email"
                  v-model="contactForm.email"
                  :error="errors.email"
                  placeholder="su-correo@dominio.com"
                  @Input="() => setTouched('email')"
                />
              </div>

              <!-- Message input -->
              <div class="mb-3">
                <FormTextArea
                  label="Mensaje"
                  v-model="contactForm.message"
                  :error="errors.message"
                  @Input="() => setTouched('message')"
                  rows="4"
                />
              </div>
              <!-- File input -->
              <div class="mb-3">
                <label for="file">Adjuntar archivos (PDF,JPG,PNG)</label>
                <input
                  type="file"
                  class="form-control"
                  id="file"
                  @change="onFileSelected"
                  accept=".pdf, .jpg, .jpeg, .png"
                />
              </div>

              <!-- Form submit button -->
              <div class="d-flex justify-content-end">
                <button class="btn btn-primary mt-3" type="submit" :disabled="!isFormValid">
                  Enviar
                </button>
              </div>
            </form>
            <div v-if="!showForm" class="alert alert-success">{{ successMessage }}</div>
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
<script setup>
import { ref, reactive, computed } from 'vue'
//import { sendEmail } from '@/services/emailService'
import FormInput from '@/components/contacto/FormInput.vue'
import FormTextArea from '@/components/contacto/FormTextArea.vue'
import Swal from 'sweetalert2'

//const title = 'Yeti Personalizado MX'
const showForm = true
const successMessage = ref('')

const initialContactForm = {
  name: '',
  subject: '',
  email: '',
  message: '',
  file: null,
}

const initialtouched = {
  name: false,
  subject: false,
  email: false,
  message: false,
}

const contactForm = reactive({ ...initialContactForm })
const touched = reactive({ ...initialtouched })

function setTouched(field) {
  touched[field] = true
}

const errors = reactive({
  name: computed(() => (!contactForm.name && touched.name ? 'El nombre es requerido' : '')),
  subject: computed(() =>
    !contactForm.subject && touched.subject ? 'El asunto es requerido' : '',
  ),
  email: computed(() => {
    if (touched.email) {
      if (!contactForm.email) return 'El email es requerido'
      if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(contactForm.email))
        return 'Favor de proporcionar una email valido.'
    }
    return ''
  }),
  message: computed(() =>
    !contactForm.message && touched.message ? 'El mensaje es requerido' : '',
  ),
})
const isFormValid = computed(() => {
  const allFieldsTouched = Object.values(touched).every((t) => t)
  const noErrors = !Object.values(errors).some((e) => e)
  return allFieldsTouched && noErrors
})

/* function noFileSelected($event) {
  contactForm.file = $event.target.files[0]
} */

function resetForm() {
  setTimeout(() => {
    successMessage.value = ''
    //showForm.value = true
    Object.assign(contactForm, initialContactForm)
    Object.assign(touched, initialtouched)
  }, 5000)
}
async function onSubmit() {
  if (isFormValid.value) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'f2435eb6-10ce-4c3f-b601-e549fa97b478',
        name: contactForm.name,
        subject: contactForm.subject,
        email: contactForm.email,
        message: contactForm.message,
      }),
    })
    const result = await response.json()
    if (result.success) {
      Swal.fire({
        title: 'Su mensaje se ha enviado con exito!',
        icon: 'success',
        draggable: true,
      })
      //console.log(result)
      //successMessage.value = resetForm.data.message
      //showForm.value = false
      resetForm()
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salio mal, no se pudo enviar su mensaje!',
    })
    //console.log('El formulario no es valido')
  }
}
/* async function onSubmit() {
  if (isFormValid.value) {
    const formData = new formData()
    formData.append('name', contactForm.name)
    formData.append('subject', contactForm.subject)
    formData.append('email', contactForm.email)
    formData.append('message', contactForm.message)
    if (contactForm.file) {
      formData.append('file', contactForm.file, contactForm.file.name)
    }

    try {
      const response = await sendEmail(formData)
      if (response.status === 200) {
        successMessage.value = resetForm.data.message
        showForm.value = false
        resetForm()
      } else {
        console.error('Fallo en el envio del correo:', response)
      }
    } catch (error) {
      console.error('Ocurrio un error al enviar el email:', error)
    }
  } else {
    console.log('El formulario no es valido')
  }
} */
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
