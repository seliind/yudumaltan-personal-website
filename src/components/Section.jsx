import React from "react";

function Section() {
  return (
    <>
      <div className="bg-[#f4f4f4] py-12">
      <div className="p-2 mb-5"> 
      <h2 className="text-center text-3xl uppercase font-semibold tracking-wider  text-[#c36a2d]">
          Referanslar
        </h2>
      </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            <div className="bg-[#eadca6] p-8 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-[#eadca6] p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-[#eadca6] p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-[#eadca6] p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg"
                alt="Laravel"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-[#eadca6] p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-[#eadca6] p-6 sm:p-10">
              <img
                className="max-h-12 w-full object-contain"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
