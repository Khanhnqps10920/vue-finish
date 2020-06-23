
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
    name: '',
    phoneNumber: '',
    age: '',
    isAdd: false,
    isEdit: false,

    searchText: ''
  },

  // methods
  methods: {

    // add
    handleSubmitAdd: function (e) {
      e.preventDefault();

      // create new student
      const newStudent = {
        id: faker.random.uuid(),
        name: this.name,
        age: Number(this.age),
        phone: this.phoneNumber,
      }
      console.log('form submit', newStudent);

      // add new student to student list
      this.students.unshift(newStudent);

      // alert success message
      window.alert('Add new student success');

      // reset form
      this.name = '';
      this.phoneNumber = '';
      this.age = '';

      // close form
      this.isAdd = false;

    },

    // delete
    handleDelete: function (id) {

      const confirmMess = 'Ban co muon xoa hoc sinh nay ko?';
      if (window.confirm(confirmMess)) {
        // find index of student in student list
        const studentIndex = this.students.findIndex((student) => {
          return student.id === id;
        })

        // check if student index exist
        if (studentIndex !== -1) {
          // remove one from student index
          this.students.splice(studentIndex, 1);
        } else {
          return;
        }
      }

    },

    // edit
    handleEdit: function (id) {

      // toggle form edit
      this.isEdit = true;

      // close form add
      this.isAdd = false;

      //find student by id
      const studentIndex = this.students.findIndex((student) => {
        return student.id === id;
      })

      if (studentIndex !== -1) {
        this.name = this.students[studentIndex].name;
        this.age = this.students[studentIndex].age;
        this.phoneNumber = this.students[studentIndex].phone;
        this.$refs.id = this.students[studentIndex].id;
      }
    },

    // handle submit edit form
    handleSubmitEdit: function (e) {
      e.preventDefault();

      const studentId = this.$refs.id;

      // find student index
      const studentIndex = this.students.findIndex((student) => {
        return student.id === studentId;
      });

      // update student
      this.students[studentIndex] = {
        ...this.students[studentIndex],
        name: this.name,
        age: Number(this.age),
        phone: this.phoneNumber
      }

      // alert success message
      window.alert('edit student success');

      // reset form
      this.name = '';
      this.phoneNumber = '';
      this.age = '';

      // close form
      this.isEdit = false;


    },

    // handle addBtn 
    handleAddBtn: function () {
      this.isAdd = true;
      this.age = '';
      this.name = '';
      this.phoneNumber = '';
    },

    // handle search 


  },

  // computed 
  computed: {
    filteredList: function () {
      return this.students.filter(student => {
        return student.name.toLowerCase().includes(this.searchText.toLowerCase())
      })
    }
  }
})


