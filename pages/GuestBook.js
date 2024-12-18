import React, { useState, useEffect } from "react";
// import axios from "axios";
import styles from './styling/GuestBook.module.scss';
import SideProfile from '../src/component/diary/SideProfile';
import Ring from '../src/component/diary/Ring';

function GuestBook() {
  const [entries, setEntries] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/entries')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setEntries(data.reverse());
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const images = Array.from({ length: 12 }, (_, index) => `minimi${index + 1}.png`);

  const selectedImage = images[currentImageIndex];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleAddEntry = () => {
    if (!name || !message) {
      alert('모든 필드를 채워주세요!');
      return;
    }

    const newEntry = {
      id: entries.length + 1,
      image: selectedImage,
      name,
      message,
      date: new Date().toLocaleDateString(),
    };

    fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })
      .then(response => response.json())
      .then(data => {
        setEntries([newEntry, ...entries]);
        setName("");
        setMessage("");
      })
      .catch(error => {
        console.error("There was an error saving the guestbook entry!", error);
      });
  };

  return (
    <>
      <SideProfile />
      <Ring />

      <div className="right-container">
        <div className="content">
          <div className={styles.form}>

            <div className={styles.select}>
              <span onClick={handlePrevImage} className={styles.arrow}>{"<"}</span>
              <img
                src={`/img/minimi/${images[currentImageIndex]}`}
                alt="character"
              />
              <span onClick={handleNextImage} className={styles.arrow}>{">"}</span>
            </div>

            <div className={styles.write}>
              <label htmlFor="name">이름</label>
              <input
                id="name"
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="nes-input"
              />

              <label htmlFor="content">내용</label>
              <textarea
                id="content"
                placeholder="메시지를 입력하세요..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="nes-textarea"
              ></textarea>
            </div>

            <button className={`nes-btn ${styles.submit}`} onClick={handleAddEntry}>확인</button>
          </div>

          <div>
            {entries.map((entry, index) => (
              <div key={entry._id} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <span>NO.{entries.length - index}</span>
                  <span className={styles.name}>{entry.name}</span>
                  <span className={styles.entryDate}>({entry.date})</span>
                </div>

                <div className={styles.entryBody}>
                  <img src={`/img/minimi/${entry.image}`} alt="character" />
                  <div className={styles.details}>
                    <p>{entry.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default GuestBook;
