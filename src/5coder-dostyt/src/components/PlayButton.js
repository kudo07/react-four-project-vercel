import "./PlayButton.css";
function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false; // dont use this approach
  function handleClick(e) {
    console.log(e);
    e.stopPropagation();
    e.peventDefault();
    // recommended
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    playing = !playing;
  }

  return (
    <button onClick={handleClick}>
      {children} : {playing ? ">" : "||"}
    </button>
  );
}
export default PlayButton;
