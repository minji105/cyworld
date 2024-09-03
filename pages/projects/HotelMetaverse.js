import React, { useState, useEffect } from "react";
import content from './styling/Content.module.css';

function Hotel() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  useEffect(() => {
    const imagePaths = Array.from(
      { length: 27 },
      (_, index) => `projects/hotel/ppt/메타버스-최종-발표_${index + 1}.png`
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
        <h3>메타버스 기반 비대면 호텔 플레이스</h3>
        <span className="retro">2023</span>
      </div>

      <div className={content.subContent}>
        &nbsp;Aptero를 활용하여 구축한 호텔 메타버스 플랫폼으로, 객실 가상 미리보기와 비대면 서비스를 목표로 만들었습니다.
        교내 글로컬 메타버스 DT 인력양성과정에서 진행한 프로젝트이며 최우수상을 받았습니다.<br />
        &nbsp;현재 Aptero와 Heroku 서버의 만료로 인해 직접적인 이용은 불가능하지만 아래에서 실행 과정 영상을 확인하실 수 있습니다.<br />

        <div className={`${content.link} retro`}>
          Git:  <a href="https://github.com/minji105/aptero-hotel-reservation" target="_blank" rel="noreferrer" >
            https://github.com/minji105/aptero-hotel-reservation</a>
        </div>
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>사용스택
      </div>
      <div className={content.subContent}>
        - HTML, CSS, JS<br />
        - Node.js<br />
        - MongoDB<br />
        - Aptero<br />
      </div>

      <div className={content.subTitle}>
        <span className="orange">▸ </span>역할 (총 인원: 2명)
      </div>
      <div className={content.subContent}>
        - 전경, 객실1 구현<br />
        - 예약 페이지 제작<br />
        - ppt 제작<br />
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
          <source src="projects/hotel/시작 ~ 로비.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="projects/hotel/수영장 ~ 객실1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="projects/hotel/객실1(챗봇, 예약).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src="projects/hotel/객실2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Hotel;