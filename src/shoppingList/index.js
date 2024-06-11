import React,{ useState } from 'react'
import './styles.css'

const ShoppingList = () => {
  const [itemName ,setitemName]= useState("");
  const [lists ,setLists]= useState([]);
const changeHandler = (event) => {
  setitemName(event.target.value)
}
const submitHandler = (event) => {
  event.preventDefault();
  console.log(itemName)
  const newlists = [...lists,itemName]
  setLists(newlists);
  setitemName("");
}
const deleteHandler = (indexValue) => {
  const newlists = lists.filter((list,index) =>{
  if(index !== indexValue) {
    console.log(index,list) 
    return list;
  }})
  setLists(newlists);
}
  return (
    <div className='container'>
      <center>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Items To Buy</h5>
          <form onSubmit={submitHandler}>
            <input type='text' name='list'placeholder='Add a new item' value={itemName} onChange={changeHandler}/> &nbsp;&nbsp;
            <button type='submit'>Add</button>
          </form>
          <Lists itemlist={lists} deleteHandler={deleteHandler}/>
        </div>
      </div>
      </center>
    </div>
  )
}

function Lists({itemlist,deleteHandler}) {
  return (
    <div className='itemListBox'>
      {itemlist.map((list,index)=>
        <div key={index} className='order'>
          <span className='items'>{list}</span>
          <span className='delete' onClick={() => deleteHandler(index)}>{"X"}</span>
        </div>
      )}
    </div>
  )
}


export default ShoppingList