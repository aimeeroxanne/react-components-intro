import React from 'react';
import ListItem from './listItem.js'

const AddItem = (props) => {
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" max="50" name="quantity" onChange={props.onChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="type">Product</label>
            <select name="name" onChange={props.onChange}>
              <option>Choose an Item</option>
              {props.type.map(item =>
                <ListItem
                  key={item.id}
                  name={item.name}/>
              )}
            </select>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddItem;
