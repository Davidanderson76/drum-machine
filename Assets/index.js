window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#E9B5E9",
        "#EBA7EB",
        "#E782E7",
        "#815681",
        "#5A2D5A",
        "#5F105F"

    ];

    //SOUNDS
    pads.forEach((pad, index) =>{
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;  
            sounds[index].play();

            createBubbles(index);

        });
    });

    //BUBBLE FUNCTION
    const createBubble = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };
    });