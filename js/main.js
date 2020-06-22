
new Vue({
  el: '#app',
  // data
  data: {

    // create students array with faker
    students: Array.from(new Array(20)).map(() => {
      return {
        id: faker.random.uuid(),
        name: faker.name.firstName(),
        age: faker.random.number({
          'min': 18,
          'max': 30
        }),
        phone: faker.phone.phoneNumberFormat()
      }
    }),

    isAdd: false,
    isEdit: false,
  },

  // methods
  methods: {

  },

  // computed 
  computed: {
    addStyles: function () {
      return {
        'btn-success': !this.isAdd,
        'btn-danger': this.isAdd
      }
    }
  }
})


