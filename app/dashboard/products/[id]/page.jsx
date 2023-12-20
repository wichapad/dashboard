import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src="/noproducts.jpeg" alt="" fill />
      </div>
      Nike Air Max
    </div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
          <input type="hidden" name="id" />
          <label>Title</label>
          <input type="text" name="title" placeholder="title"/>
          <label>Price</label>
          <input type="number" name="price" placeholder="price"/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder='stock'/>
          <label>color</label>
          <input type="text" name="color" placeholder="color"/>
          <label>Size</label>
          <textarea type="text" name="size" placeholder="size"/>
          <label>Categories</label>
          <select name="cat" id="cat">
              <option value='clothing'>Clothing</option>
              <option value='computers'>Computers</option>
              <option value='accessorie'>Accessorie</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder='Description'></textarea>
          <button>Update</button>
      </form>
    </div>
  </div>
  )
}

export default SingleProductPage