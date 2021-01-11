// Istruzioni:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di Vue JS stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.

let app = new Vue({
  el: "#root",
  data: {
    myNewArray: [],
    myNewList: []
  },

  mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then(response => {
      let array = response.data.response
      this.myNewArray = array
      // console.log(this.myNewArray);
      let _self = this;
      this.myNewArray.forEach((item, i) => {
        // console.log(item.genre);
        if (this.myNewList.indexOf(item.genre) == -1) {
          this.myNewList.push(item.genre)
        }
        console.log(this.myNewList);




      });

    })
  },

  methods: {


  }


});
