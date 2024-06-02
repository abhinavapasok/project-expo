import React, { useState } from "react";

function Home() {
  const [images, setImages] = useState([
    { id: 1, src: "image1.jpg", alt: "Image 1" },
    { id: 2, src: "image2.jpg", alt: "Image 2" },
    // Add more images as needed
  ]);
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      src: "audio1.mp3",
      title: "Audio 1",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      src: "audio1.mp3",
      title: "Audio 1",
    },

    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      src: "audio1.mp3",
      title: "Audio 1",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  const [audioFiles, setAudioFiles] = useState([
    { id: 1, src: "audio1.mp3", title: "Audio 1" },
    { id: 2, src: "audio2.mp3", title: "Audio 2" },
    // Add more audio files as needed
  ]);

  // Function to handle audio play
  const playAudio = (audioSrc) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div className="m-10">
      <h1>My Website</h1>

      <div className="grid gap-4">
        <div>
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={active.imgelink}
            alt=""
          />
          <div>
            <p>{active.title}</p>
            <button onClick={() => playAudio(active.src)}>Play</button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {data.map((img, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(img)}
                src={img.imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
