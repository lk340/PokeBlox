import Button from './button';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("details").addEventListener("click", () => {
    alert("successful!");
    // 1. Find the detail-modal.
    // 2. If the detail-modal contains "hide-modal", change it to "show-modal".
    // 3. Else, change "show-modal" to "hide-modal".
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
});