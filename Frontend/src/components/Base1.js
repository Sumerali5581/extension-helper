import CustomNavbar1 from "./CustomNavbar1";

const Base1=({title="Welcome to our website",children})=>{
    return(
        <div className="container-fluid p-0 m-0">
            <CustomNavbar1/>

{children}

            
        </div>
    );
};

export default Base1;