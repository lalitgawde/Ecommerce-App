import React, { useContext, useState } from "react";
import styles from "./AddProduct.module.css";
import axios from "axios";
import UserContext from "../../Context/UserContextProvider";
import Loader from "../../Loader/Spinner/Loader";
import { toast, ToastContainer } from "react-toastify";

const API = "http://localhost:1337";

function AddProduct() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    discount: "",
    description: "",
    category: "Women",
    image: null,
  });

  const clearState = () => {
    setProduct({
      title: "",
      price: "",
      discount: "",
      description: "",
      category: "Women",
      image: null,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("product", product.image);
    try {
      let imageId = null;
      setIsLoading(true);
      if (product.image) {
        const formData = new FormData();
        formData.append("files", product.image);
        const uploadRes = await axios.post(`${API}/api/upload`, formData, {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        });
        imageId = uploadRes.data[0].id;
      }
      const productRes = await axios.post(
        `${API}/api/products`,
        {
          data: {
            product_title: product.title,
            product_price: Number(product.price),
            product_discount: Number(product.discount),
            product_category: product.category,
            product_images: imageId,
            is_product_disable: false,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      console.log("prodres", productRes);
      if (productRes.statusText === "Created") {
        setIsLoading(false);
        toast.success(`Product Added Successfully!!`, {
          position: "top-right",
        });
        clearState();
      }
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
      toast.error(`Product Adding Failed`, {
        position: "top-center",
      });
    }
  };
  console.log("user", user);
  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Product title</label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="₹"
                required
              />
            </div>
            <div className={styles.field}>
              <label>Product Discount</label>
              <input
                type="number"
                name="discount"
                value={product.discount}
                onChange={handleChange}
                placeholder="Type here"
              />
            </div>
          </div>
          <div className={styles.field}>
            <label>Product Description</label>
            <textarea
              value={product.description}
              name="description"
              onChange={handleChange}
              placeholder="Product Description"
            />
          </div>
          <div className={styles.field}>
            <label>Product Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}>
              <option>Women</option>
              <option>Mens</option>
              <option>Kids</option>
              <option>Accessories</option>
            </select>
          </div>
          <div className={styles.uploadBox}>
            <label htmlFor="imageUpload">Upload</label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
          </div>
          <button type="submit" className={styles.button}>
            ADD PRODUCT
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
