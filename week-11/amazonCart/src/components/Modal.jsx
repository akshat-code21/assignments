import React from "react";
import { CiLogin } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
export const Modal = ({ setIsModalOpen,total,setCartItems }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.2)"
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding : 20
        }}
      >
        <div style={{ width: "550px", background: "white", zIndex: 10, borderRadius: "16px", boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",display:"flex",flexDirection : "column",padding:20,alignItems:"flex-start",justifyContent:"flex-start",gap : "20px"}}>
            <h1 className="heading">
                Purchase Successful !
            </h1>
            <div className="icon" style={{color : "green",fontSize : "78px",margin : " 0 auto"}}>
                <TiTick />
            </div>
            <h3 style={{textAlign : "center"}}>
                Thank you for your purchase.Your order has been placed successfully.
            </h3>
            <h1>
                Total Amount : ₹ {total}
            </h1>
            <div style={{width : "100%"}}>
                <button onClick={()=>{
                    setIsModalOpen(false)
                    setCartItems([])
                }} style={{width : "100%",padding : "10px",cursor : "pointer",fontSize : "18px",backgroundColor : "blue",color : "white",border : "none",fontWeight : 600}}>Close</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
