const app = Vue.createApp({
  data() {
    return {
      isPending: false,
      // spinnerTime: 5000,
      username: "",
      message: "",
      formError: false,
      timer: null,
      index: 0,
      status: [
        "try bruteforcing....",
        "log in...",
        "getting password",
        "password downloaded",
        "success!",
      ],
      currentStatus: "",
      submitSuccess: false,
      passwordDownloaded: false,
    };
  },

  methods: {
    hackClick() {
      if (this.username) {
        this.isPending = true;
        this.formError = false;

        this.showStatus();

        setTimeout(() => {
          this.isPending = false;
          this.submitSuccess = true;
        }, this.status.length * 2000);
      } else {
        this.formError = true;
        this.message = "username cannot be empty!";
      }
    },

    showStatus() {
      this.timer = setInterval(this.printStatus, 2000);
    },

    printStatus() {
      this.currentStatus = this.status[this.index];
      if (this.index === this.status.length - 1) {
        clearInterval(this.timer);
        this.passwordDownloaded = true;
        document.querySelector(".status").setAttribute("class", "success");
      } else {
        this.index++;
      }
    },
  },
});
app.mount("#app");

console.log(this.spinnerTime);
