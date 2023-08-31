import Base from "../components/Base";

import './Home.css';

const Home = () => { 
  return (
    <Base>
      <div class = "image"
            // style = {{
              
            //    backgroundImage:
            //    'url("data:image/jpeg;base64,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")',
            //    backgroundSize:'cover',
            //    backgroundRepeat: "no-repeat",
            //    backgroundPosition: "center",
            //    height:'86vh',
            //    marginTop: '-2.8vh',
            //    width:'100vw'
            // }}
            >
        <main>
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
{/* <div class="content">
    <h1>Hello Guys!</h1>
</div> */}
          <div className="content1">
            <h1>Welcome to Extension Helper</h1>
            <div >
              <h3 className="heading">What are Extensions?</h3>
              <p className="info2">Extensions are small software programs that enhance the functionality and customization options of web browsers. 
                They are typically developed using web technologies such as HTML, CSS, and JavaScript. Extensions provide additional 
                features, tools, and functionality to the browser, allowing users to personalize their browsing experience and improve 
                productivity.</p>
            </div>
          </div>
        </main>
      </div>
    </Base>
  );
};

export default Home;
