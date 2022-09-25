import React,{ useContext } from "react";
import { CartContext } from "../../context/CartContext";
import '../style/ItemCart.css';


const Cart =()=> {
     const {cart, TotalPrecio, ClearCart, RemoveItem } = useContext(CartContext);
    return(
       <section className="container"> 
        <div className="descripcion row mt-3 p-2 d-flex justify-content-around text-center">
          <div className="col-2 d-none d-md-block">Foto</div>
          <div className="col-2 ">Desc.</div>
          <div className="col-2 ">Cant.</div>
          <div className="col-2 d-none d-md-block">Prec.</div>
          <div className="col-2 ">S.total</div>
          <div className="col-2 ">Eliminar</div>
        </div>
            {cart.map((producto)=> {
                return (
                 <div key={producto.id} className=" row mt-4  d-flex justify-content-around text-center">
                    <td className="col-2 d-none d-md-block"><img src={producto.imagen} width="40" className="img-fluid" alt={producto.descripcion} /></td>
                    <td className="col-2 text ">{producto.descripcion}</td>
                    <td className="col-2 text ">{producto.cantidad}</td>
                    <td className="col-2 text d-none d-md-block">$ {producto.precio}</td>
                    <td className="col-2 text ">$ {producto.cantidad * producto.precio}</td>
                    <td className="col-2 eliminar">
                    <span className="material-icons"onClick={() => {RemoveItem(producto.id)}} >delete_forever</span>
                    </td>
                </div>
              )
            })}
           
            <div className="descripcion row mt-4 d-flex justify-content-center">
              <h5 className="text-center total p-2 " > Total Compra $  {TotalPrecio()}
              </h5>
              <span className="material-icons" onClick={() => {ClearCart()}}>delete_forever
              
              </span>
            </div>
        </section>
      
        )
}
export default Cart;