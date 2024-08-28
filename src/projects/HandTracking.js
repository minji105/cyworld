import React, { useState, useEffect } from "react";
import content from './styling/Content.module.css';

function HandTracking() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  useEffect(() => {
    const imagePaths = Array.from(
      { length: 27 },
      (_, index) => `projects/handTracking/ppt/슬라이드${index + 1}.png`
    );

    const validImages = [];
    let loadedImagesCount = 0;
    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        validImages.push({ img: path });
        loadedImagesCount++;
        if (loadedImagesCount === imagePaths.length) {
          setImages(validImages);
        }
      };
      img.onerror = () => {
        loadedImagesCount++;
        if (loadedImagesCount === imagePaths.length) {
          setImages(validImages);
        }
        console.log(`Image not found: ${path}`);
      };
    });
  }, []);

  const nextImage = () => {
    setcurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevImage = () => {
    setcurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  return (
    <div className="content">
      <div className={content.header}>
        <h3>Hand Tracking and Gesture Recognition in VR</h3>
        <span className="retro">2023</span>
      </div>

      <div className={content.subContent}>
        &nbsp;허공 제스처를 통해 VR 환경에서 실시간 상호작용하는 방법을 연구한 것입니다.<br/>
        &nbsp;웹캠으로 손을 인식하여 랜드마크 좌표를 추출하고, 추출된 좌표를 UDP를 통해 Unity로 전송하여 VR 내 손 모양을 나타냅니다.
        오브젝트를 생성하여 손의 움직임을 시각화하고, 블록과 바닥을 추가하여 물리적 상호작용을 구현했습니다.<br />

        <div className={`${content.link} retro`}>
          Git:  <a href="https://github.com/minji105/aptero-hotel-reservation" target="_blank" rel="noreferrer" >
            https://github.com/minji105/aptero-hotel-reservation</a>
        </div>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>사용스택
      </div>
      <div className={content.subContent}>
        - Python<br />
        - C#<br />
        - Unity<br />
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>PPT
      </div>
      <div className={content.subContent}>
        <div className={content.slideContainer}>
          <div className={content.slide}>
            <span onClick={prevImage} className={content.arrow}>&lt;</span>
            <img src={images[currentImageIndex]?.img} alt={`image ${currentImageIndex + 1}`} />
            <span onClick={nextImage} className={content.arrow}>&gt;</span>
          </div>
          <div className="slide-index"><p>{currentImageIndex + 1} / {images.length}</p></div>
        </div>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>실행영상
      </div>
      <div className={`${content.subContent} ${content.web}`}>
        <video controls>
          <source src="projects/handTracking/execute.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HandTracking;