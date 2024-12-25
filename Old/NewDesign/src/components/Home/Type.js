import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ color: '#1e90ff' }}>
      <Typewriter
        options={{
          strings: [
            "Computer Science Student", 
            "Software Engineering Intern",
            "Determined"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
