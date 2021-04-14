<template>
  <div>
      <v-img
          src="../assets/machine learning.png"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
        <FormulateForm
            v-model="formValues" 
            @submit="sendEmail" 
            name="contactForm">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div class="pt-12 text-center">
                        <h3 class="display-1 font-weight-blod">
                            CONTACT ME
                        </h3>
                        <p class="body-2 my-3">
                            <span class="welcome">
                            I thought this was a cool feature and I didn't want to remove it. I made it functional, so go ahead and send me a message or a job offer. Please don't spam me.
                            </span>
                        </p>
                        </div>
                    </v-col>

                    <v-col cols="12" md="6">
                        <FormulateInput
                            type="text"
                            v-model="formValues.name"
                            placeholder="Your Name*"
                            validation="required"
                        />
                        <FormulateInput
                            type="email"
                            v-model="formValues.email"
                            placeholder="Your Email*"
                            validation="required|email"
                        />
                        <FormulateInput
                            type="tel"
                            v-model="formValues.phone"
                            placeholder="Your Phone"
                        />
                    </v-col>

                    <v-col cols="12" md="6" class="fill-height">
                        <FormulateInput
                            type="textarea"
                            v-model="formValues.message"
                            placeholder="Your Message*"
                            validation="required|min:5,length"
                        />
                        
                    </v-col>

                    <v-col cols="12" class="text-center">
                        <v-btn x-large color="accent">
                          <input type="submit" value="Send Message">
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </FormulateForm>
      </v-img>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactUs',
  data() {
    return {
      formValues: {
          name: "",
          email: "",
          phone: "",
          message: ""
      }
    }
  },
  methods: {
    sendEmail: (e) => {
      let formObj = {
          from_name: e.name, 
          from_email: e.email, 
          message: e.message, 
          from_phone: e.phone ? e.phone : "not provided"
      }
      emailjs.send('service_vztm2qa', 'template_6w4skyd', formObj, 'user_v6guEmIacckV6bNjPCz5c')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("Email was successfully sent");
        }, (error) => {
            alert("Email FAILED...", error);
        });
    }
  }
}
</script>

<style>
  a:link {
    text-decoration: none;
  }
</style>