import { Link } from "react-router-dom";
import "./App.css";
import Preview from "./pages/Preview";

function App() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/HeroImage.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Alzheimer disease prediction using Deep Learning Techniques
            </h1>
            <p className="mb-8 leading-relaxed">
              Develop a medical diagnostic portal using a deep learning model
              with CNN to predict Alzheimer's Disease from MRI scans. The portal
              enables users to diagnose AD, track their medical history, and
              receive doctor recommendations based on disease severity,
              location, and medical history.
            </p>
            <div className="flex justify-center">
              <Link to={"preview"}>
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Check For Alzheimer
                </button>
              </Link>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
