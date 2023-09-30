import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Protect(props) {
  const {screen} = props;
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate;


  let checkAuth = () => {
    setLoader(true);
    let auth = false;
    if (auth) {
      setLoader(false);
    } else {
      setLoader(false);
      navigate("/login");
    }
  };

useEffect(()=>{
  checkAuth()
},[])

  return loader?(

  <>
    <h1>
      loading...
    </h1>
  </>
  ) :(
    <props.screen/>
  )
  
}

