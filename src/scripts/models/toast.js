export class Toast {
  static create(txt, color) {
    Toastify({
      text: txt,
      duration: 3000,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        backgroundColor: color,
        color: "#ffffff",
      },
    }).showToast();
  }
}
