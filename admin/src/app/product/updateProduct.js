"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";


const UpdateProduct = ({product}) => {

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [imageLink, setImageLink] = useState(product.image_link);
  const [imgAltText, setImgAltText] = useState(product.img_alt_text);
  const [isVisible, setIsVisible] = useState(product.isVisible);
  const [isAvailable, setIsAvailable] = useState(product.isAvailable);

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    //Update Logic
    await axios.patch(`/api/products/${product.id}`, {
      title: title,
      description: description,
      image_link: imageLink,
      img_alt_text: imgAltText,
      isVisible: Boolean(isVisible),
      isAvailable: Boolean(isAvailable),
    });

    setIsLoading(false);
    router.refresh();
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
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Edit
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleUpdate}>
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
                name="isVisible"
                value={isVisible}
                onChange={(e) => setIsVisible(Boolean(e.target.checked))}
                className="toggle toggle-success"
                checked={isVisible}
              >
              </input>
            </div>
            <div className="form-control w-full mb-1">
              <label className="label font-bold">Is Available</label>
              <input
                type="checkbox"
                name="isAvailable"
                onChange={(e) => setIsAvailable(Boolean(e.target.checked))}
                className="toggle toggle-success"
                checked={isAvailable}
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

export default UpdateProduct;