import "../Price/Price.css"


const Price = () => (
  <div className="ml">
    <h2 className="sidebar-title price-title">Price</h2>
    <label className="sidebar-label-container">

      <input type="text" name="test2" />
      <span className="checkmark"></span>All

    </label>


    <label className="sidebar-label-container">

    <input type="text" name="test2" />
     <span className="checkmark"></span>Rs0-50rs

</label>

<label className="sidebar-label-container">

     <input type="text" name="test2" />
     <span className="checkmark"></span>Rs50-100rs

</label>

<label className="sidebar-label-container">

<input type="text" name="test2" />
<span className="checkmark"></span>Rs100-150

</label>

<label className="sidebar-label-container">

<input type="text" name="test2" />
<span className="checkmark"></span>Rs150-200r

</label>


  </div>
)

export default Price
