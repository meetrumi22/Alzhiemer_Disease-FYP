import React from "react";

const Preview = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Below Upload Your MRI Picture
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Alzheimer's disease MRI scans typically show brain atrophy,
            particularly in the hippocampus, and enlarged ventricles due to
            tissue loss. These structural changes are key indicators used by
            deep learning models for diagnosis.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover "
                src="\alzhiemer_image\mild.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Mild Demented
                </h1>
                <p className="leading-relaxed">
                  Alzheimer's MRI scans show hippocampal atrophy and enlarged
                  ventricles, key indicators for deep learning diagnosis.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover"
                src="\alzhiemer_image\demented.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Non Demented
                </h1>
                <p className="leading-relaxed">
                  Non-demented MRI scans show normal brain structures with no
                  significant atrophy or enlargement of the ventricles.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="\alzhiemer_image\mild demented.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Very Mild Demented
                </h1>
                <p className="leading-relaxed">
                  Very mild demented MRI scans may show subtle signs of brain
                  atrophy, especially in the hippocampus, with minimal impact on
                  overall brain structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mb-20">
        <h1 className="text-3xl underline">Preview Below</h1>
      </div>
      <div className="container mx-auto flex justify-around items-center">
        <div className="">
          <input type="file" className="bg-green-500 p-4" />
        </div>
        <div className="space-y-8">
          <h1 className="text-2xl text-black">Preview:</h1>
          <img src="/alzhiemer_image/Alzheimer Disease.jpeg" />
          <h2 className="text-xl text-black">
            <span className="font-bold">Type:</span> Mild Demented
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Preview;
