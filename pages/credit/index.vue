<template>
  <div>
    <h1 class="h1">Solicitud de crédito</h1>
    <p class="subheading">Escribe tus datos de contacto y los de tu empresa</p>

    <form v-on:submit.prevent="sendForm">
      <section v-for="section in formData" :key="section.sectionId" class="section">
        <h1 class="section-title">{{ section.sectionName }}</h1>

        <div class="section-module">
          <div class="field section-field" v-for="field in section.fields">
            <label :for="field.key" class="label">{{ field.label }}</label>
            <input :id="field.key" class="input" :type="validateFieldType(field.type)" :name="field.key"
                   v-model="form.user[field.key]" autocomplete="off">
          </div>
        </div>

        <div v-for="subgroup in section.subgroups" class="subgroup">
          <h1 class="subgroup-title">{{ subgroup.name }}</h1>
          <p class="subgroup-subtitle">{{ subgroup.description }}</p>

          <div class="section-module section-subgroup">
            <div class="field section-field section-subfield" v-for="field in subgroup.fields"
                 :class="`section-${field.key}`">
              <label :for="field.key" class="label">{{ field.label }}</label>
              <input :id="field.key" class="input" :type="validateFieldType(field.type)" :name="field.key"
                     v-model="form.user[field.key]"
                     autocomplete="off">
            </div>
          </div>
        </div>
      </section>
      <button class="btn btn-primary page-btn" type="submit">{{
          loading ? 'Enviando...' : 'Solicitar crédito'
        }}
      </button>
    </form>

  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import data from '~/utilities/data.json'

export default {
  layout: 'light',
  data() {
    return {
      loading: false,
      form: {
        user: []
      }
    };
  },
  computed: {
    ...mapGetters({
      email: 'getEmail',
      userData: 'getUser'
    }),
    formData() {
      return data.form.sections
    }
  },
  methods: {
    ...mapMutations({
      setUser: 'setUser',
      setLoggedIn: 'setLoggedIn'
    }),
    sendForm() {
      this.loading = true
      const {user} = this.form
      const userInfo = {...user, email: this.email}
      this.setUser(userInfo)
      setTimeout(() => {
        this.$router.push('/credit/detail')
      }, 3000)

    },
    validateFieldType(type) {
      if (type === 'string') {
        return 'text'
      }
      if (type === 'amount') {
        return 'number'
      }

      return type
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  &-title {
    font-weight: 700;
    line-height: 1.4;
    flex-basis: 100%;
    font-size: 1.2rem;
    margin-top: 6.4rem;
    margin-bottom: 2rem;
    letter-spacing: .18em;
    text-transform: uppercase;
  }

  &-module {
    display: flex;
    margin: 0 2rem;
    flex-basis: 80%;
    flex-direction: row;
    justify-content: center;
  }

  &-field {
    width: 100%;
    max-width: 400px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  &-subfield {
    max-width: 244px;
  }

  &-interior_number,
  &-exterior_number {
    max-width: 10rem;
  }
}

.subgroup {

  &-title {
    margin-bottom: 0;
  }

  &-subtitle {
    color: $raven;
    margin-bottom: 3rem;
  }
}

@media (max-width: $screen-md-min) {
  .section {
    &-module {
      align-items: center;
      flex-direction: column;
    }

    &-interior_number,
    &-exterior_number,
    &-subfield {
      max-width: 400px;
    }
  }
}
</style>
