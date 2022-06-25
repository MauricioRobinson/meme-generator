import React from "react";

function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div
      style={styles}
      onClick={props.toogle}
      className="w-20 h-20 border-2 border-black m-2 inline-block rounded-md"></div>
  );
}

export default Box;
