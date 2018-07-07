import React from 'react';
import ListItem from './listItem.js'

const AddItem = (props) => {
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={props.onSubmit}>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" max="50" name="quantity" onChange={props.onChange}></input>
          <label htmlFor="type">Type</label>
          <select name="name" onChange={props.onChange}>
            <option>Choose an Item</option>
            {props.type.map(item =>
            <ListItem
              key={item.id}
              name={item.name}/>
          )}
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddItem;
