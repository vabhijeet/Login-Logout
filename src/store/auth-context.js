import React,{ useState,useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email,password)=>{},

});
export const AuthContexProvider =(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler=()=>{

        setIsLoggedIn(false);
    };
    const loginHandler=()=>{

        setIsLoggedIn(true);
    };
    return <AuthContext.Provider
    value={
        {
            isLoggedIn:isLoggedIn,
            onLogout:logoutHandler,
            onLogin:loginHandler,
        }
    }>{props.children}</AuthContext.Provider>

};
export default AuthContext;