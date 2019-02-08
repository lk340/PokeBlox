// Button Logic
document.addEventListener("DOMContentLoaded", () => {
  const detailModal = document.getElementById("detail-modal");

  document.getElementById("details").addEventListener("click", () => {
    // debugger;
    console.log(document.getElementById("about-modal-close").style.color);
    console.log("hello");

    if (detailModal.classList.contains("hide-about-modal")) {
      detailModal.classList.remove("hide-about-modal");
      detailModal.classList.add("about-modal");
    }
  });

  // Close About Modal
  document.getElementById("about-modal-close").addEventListener("click", () => {
    if (detailModal.classList.contains("about-modal")) {
      detailModal.classList.remove("about-modal");
      detailModal.classList.add("hide-about-modal");
    }
  });

  document.getElementById("start-game").addEventListener("click", () => {
    alert("start-game");
  });

  document.getElementById("pause-game").addEventListener("click", () => {
    alert("pause-game");
  });

  document.getElementById("mute-music").addEventListener("click", () => {
    alert("mute-music");
  });

  document.getElementById("change-music").addEventListener("click", () => {
    alert("change-music");
  });

  // console.log(document.getElementById("tetronimo-I-next").classList);

});
