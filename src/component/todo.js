import React,{useState,useEffect} from 'react'

//to get local storage

const getLocalStorage =()=> {
    let lists = localStorage.getItem('myTodoList')
    if(lists){
        return JSON.parse(lists)
    }
}
//edit

const Todo=()=>{
    const[store,setStore]=useState('')
    const[save,setSave]=useState(getLocalStorage)
    const[edit,setedit]=useState('')
    
    console.log(save)
    const abc =(e)=>{  setStore(e.target.value) }
    const addItem=()=>{
        if(!store){
            alert('please enter something')
            }else{ 
                const newstore ={
                    id: new Date().getTime().toString(),
                    name : store,
                };
                    
            setSave([...save,newstore]) 
            setStore('')
            
         }
           }
           //deleting item
    const deleteItem=(index)=>{
       const updataItem= save.filter((current)=>{
         return  current.id!==index
           })
        setSave(updataItem)
     }
    //  removing all item
    const removeAll=()=>{
        return setSave([])
    }

//for local storage
useEffect(()=>{
    localStorage.setItem('myTodoList',JSON.stringify(save))
    
},[save])
//edit item
const editItem=(index)=>{
    const edited_item= save.find((current)=>{
        return current.id===index;
    

    })
    setStore(edited_item.name)
    setedit(index)
    


}            
    
        
  return( 
    <div>
   
    <div className='main-div'>
    <div className='child-div'>
    <div className="add-item">
    <input type="text" placeholder='Add item 👌'className='form-control' onChange={abc} value={store} />
    <span><button onClick={addItem}>Add item</button></span>
    
    
    </div>
    {
        save.map((just)=>{
            return(
                <div className='showItem' key={just.id}>
                <div className="eachItem">
                <p>{just.name}<button onClick={()=>deleteItem(just.id)}>delete</button>
                <button onClick={()=>editItem(just.id)} >edit</button></p>
                </div>
                </div>

            )
        })


    }

    <div className='show-item'><button className='btn ' onClick={removeAll}>Remove All</button></div>
    </div>
    </div>

    </div>
  )
}
export default Todo;
  
  