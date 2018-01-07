import React from "react";

const Guitar = () => {
  return (
    <svg>
      <circle
        cx="120"
        cy="300"
        r="110"
        stroke="#8f4422"
        strokeWidth="3"
        fill="#8f4422"
      />
      <circle
        cx="300"
        cy="300"
        r="60"
        stroke="#8f4422"
        strokeWidth="3"
        fill="#8f4422"
      />
      <polygon points="120,200 300,240 300,360 120,400" fill="#8f4422" />
      <path d="M 185 200, Q 190 250 , 300, 238" strokeWidth="3" fill="beige" />
      <path d="M 185 400, Q 190 350 , 300, 362" strokeWidth="3" fill="beige" />
      <polygon points="350,275 550,280 550,320 350,325" fill="#8f4422" />
      <polygon points="140,270 150,270 150,330 140,330" fill="black" />
      <circle
        cx="220"
        cy="300"
        r="30"
        stroke="#c78a2c"
        strokeWidth="3"
        fill="#ce986c"
      />
      <polygon
        points="550,280 560,270 610,285 610,315 560,330,550,320"
        fill="#ffc15e"
      />
      <circle
        cx="565"
        cy="281"
        r="2"
        stroke="white"
        strokeWidth="3"
        fill="white"
      />
      <circle
        cx="580"
        cy="284"
        r="2"
        stroke="white"
        strokeWidth="3"
        fill="white"
      />
      <circle
        cx="595"
        cy="288"
        r="2"
        stroke="white"
        strokeWidth="3"
        fill="white"
      />
      <circle
        cx="565"
        cy="319"
        r="2"
        stroke="white"
        strokeWidth="3"
        fill="white"
      />
      <circle
        cx="580"
        cy="316"
        r="2"
        stroke="white"
        strokeWidth="3"
        fill="white"
      />
      <circle
        cx="595"
        cy="312"
        r="2"
        stroke="white"
        strokeWidth="3"
        fill="white"
      />
    </svg>
  );
};

export default Guitar;
