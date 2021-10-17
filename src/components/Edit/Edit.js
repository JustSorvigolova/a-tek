import {React, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import './../Product/Product.css'

const Edit = (props) => {
    let id = props.product.id
    let [name, setName] = useState(props.product.name)
    let [description, setDescription] = useState(props.product.description)
    let [price, setPrice] = useState(props.product.price)
    let [amount,setAmount]=useState(props.product.amount)
    let [image, setImage] = useState(props.product.image)

    useEffect(()=>{
        setName(props.product.name)
    },[props.product.name])

    useEffect(()=>{
        setDescription(props.product.description)
    },[props.product.description])

    useEffect(()=>{
        setPrice(props.product.price)
    },[props.product.price])

    useEffect(()=>{
        setAmount(props.product.amount)
    },[props.product.amount])

    useEffect(()=>{
        setImage(props.product.image)
    },[props.product.image])


  const onNameChange=(e)=>{
        setName(e.currentTarget.value)
    }

    const onDescriptionChange=(e)=>{
        setDescription(e.currentTarget.value)
    }
    const onPriceChange=(e)=>{
        setPrice(e.currentTarget.value)
    }
    const onImageChange=(e)=>{
        setImage(e.currentTarget.value)
    }
    const onAmountChange=(e)=>{
        setAmount(e.currentTarget.value)
    }
    const handleSubmit=(event)=>{
        props.updateproduct(id,name,description,price,amount,image)
     }

    return (
<div className={"container plp"}>
      <div className='row'>
           <div className='col-12 pt-5 pb-5'>
           <nav aria-label="breadcrumb">
           <ol className="breadcrumb">
               <li className="breadcrumb-item "><NavLink className={'Color_item'} to='/'>Home</NavLink></li>
                   <li className="breadcrumb-item "><NavLink className={'Color_item'} to={props.product.id}>о</NavLink></li>
                    <li className="breadcrumb-item "><NavLink className={'Color_item'} to={name}>5</NavLink></li>
                </ol>
         </nav>
     </div>
</div>
            <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className="col-md-4">
                    <div className="card" >
                        <img  src={image} className="card-img-top img-fluid ImgSize" alt="..."/>
                            <div className="card-body">
                               <input onChange={onImageChange}  type="file" accept=".png, .jpg, .jpeg" className='form-control'/>
                            </div>
                    </div>
                </div>
                <div className="col-6">
                    <label  className="form-label">Название</label>
                    <input type="text" onChange={onNameChange} value={name}  className="form-control form-control-lg"/>

                    <label  className="form-label">Описание</label>
                    <textarea type="textarea" onChange={onDescriptionChange} value={description}  className="form-control form-control-lg"/>
                    <label className="form-label">Цена</label>
                    <input type="textarea" onChange={onPriceChange}  value={price} className="form-control form-control-lg"/>
                    <label  className="form-label">Остаток</label>
                    <input type="textarea" value={amount} onChange={onAmountChange}  className="form-control form-control-lg"/>
                        <div className="col-5">
                    <input type="submit" className="btn btn-primary mt-5 btn-lg" onSubmit={handleSubmit}   value="Сохранить изменения"/>
                        </div>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Edit;