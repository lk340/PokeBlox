export const frameRate = () => {
  setInterval(() => {
    if (currentPiece === "I") {
      if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 540) {
        document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
      }
    }
    else if (currentPiece !== "I") {
      if (parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) <= 510) {
        document.getElementById(`tetronimo-${currentPiece}`).style.marginTop = `${parseInt(document.getElementById(`tetronimo-${currentPiece}`).style.marginTop) + 30}px`;
      }
    }
    else {
      clearInterval();
    }
  }, 1000);
}