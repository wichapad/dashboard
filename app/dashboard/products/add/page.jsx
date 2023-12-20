import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProduct = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <input type="text" placeholder='title' name='title' required />
            <select name="cat" id="cat">
                <option value="general">Choose a Category</option>
                <option value="clothing">Clothing</option>
                <option value="computers">Computers</option>
                <option value="accessorie">Accessorie</option>
            </select>
            <input type="number" placeholder='price' name='price' required />
            <input type="number" placeholder='stock' name='stock' required />
            <input type="text" placeholder='color' name='color'  />
            <input type="text" placeholder='size' name='size'  />
            <textarea required name="desc" id='desc' rows="10" placeholder='Description'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProduct