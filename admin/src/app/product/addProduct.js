"use client";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const AddProduct = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [imgAltText, setImgAltText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  function refreshPage() {
    window.location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await axios.post("/api/products", {
      title: title,
      description: description,
      image_link: imageLink,
      img_alt_text: imgAltText,
      isVisible: isVisible,
      isAvailable: isAvailable,
    });

    setIsLoading(false);
    setTitle("");
    setDescription("");
    setImageLink("");
    setImgAltText("");
    setIsVisible(true);
    setIsAvailable(true);
    refreshPage()
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const ImagePreviewChecking = () => {
    if (imageLink.startsWith("/") || imageLink.startsWith("http://") || imageLink.startsWith("https://")){
      return (<Image src={imageLink} alt={imgAltText} width={300} height={300}/>)
    } else {
      return '';
    }
  }

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Product Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered"
                placeholder="Product Title"
              />
            </div>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Desription</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input input-bordered"
                placeholder="Description"
              />
            </div>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Image Link</label>
              <input
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className="input input-bordered"
                placeholder="Image Link"
              >
              </input>
            </div>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Image Alt Text</label>
              <input
                value={imgAltText}
                onChange={(e) => setImgAltText(e.target.value)}
                className="input input-bordered"
                placeholder="Image Alt text"
              >
              </input>
            </div>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Is Visible</label>
              <input
                type="checkbox"
                value={isVisible}
                onChange={(e) => setIsVisible(e.target.value)}
                className="toggle toggle-success"
                defaultChecked={isVisible}
              >
              </input>
            </div>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Is Available</label>
              <input
                type="checkbox"
                value={isAvailable}
                onChange={(e) => setIsAvailable(e.target.value)}
                className="toggle toggle-success"
                defaultChecked={isAvailable}
              >
              </input>
            </div>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Image Preview</label>
              <ImagePreviewChecking/>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;