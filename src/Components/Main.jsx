import { useEffect, useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    toptext: "One does not simply",
    bottumtext: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [memeImage, setMemeImage] = useState([]);

    
    
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(memeData => setMemeImage(memeData.data.memes));
  }, []);

    //   console.log(memeImage);
    
    const handelMemeimg = () => {
        const randomNum = Math.round(Math.random() * memeImage.length);
       const randomImages = memeImage[randomNum].url;
        setMeme((prev) => ({
            ...prev,
            imageUrl: randomImages,

        }));
        
    }

  const handelChange = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="toptext"
            onChange={handelChange}
            value={meme.toptext}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottumtext"
            onChange={handelChange}
            value={meme.bottumtext}
          />
        </label>
        <button onClick={handelMemeimg}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.toptext}</span>
        <span className="bottom">{meme.bottumtext} </span>
      </div>
    </main>
  );
};

export default Main;
