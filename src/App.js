import React, { useEffect, useState } from "react";
import {images} from "./mocks";
import {deleteImagesApi, loadImagesApi} from "./api";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async () => {
    try {
      const data = await loadImagesApi(images);
      setGallery(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onDeleteImage = async (e, image) => {
    e.stopPropagation();
    try{
      const res = await deleteImagesApi(image);
      const newList = gallery.filter((item) => item.id !== res.id)
      setGallery([...newList])
    }catch (e) {
      console.log(e.response)
    }
  }

  const onImageSelected = (selectedImage) => {
    setSelectedImage(selectedImage);
  }

  const onModalClose = () => {
    setSelectedImage(null);
  }

  return (
    <div className="image-container">
      <Gallery onDeleteImage={onDeleteImage} onImageSelected={onImageSelected} gallery={gallery}/>
      {selectedImage && (
        <Modal onModalClose={onModalClose} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default App;
