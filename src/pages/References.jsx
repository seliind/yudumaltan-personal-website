import img1 from "../assets/1.png";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.jpg";
import logo from "../assets/logo.png";
const testimonials = [
  [
    [
      {
        body: "Perihan Coşkun Güzellik Merkezi",
        img: img1,
      },
      {
        body: "Herofarma İlaç",
        img: img9,
      },
      {
        body: "Yaz-Pet Petrol",
        img: img6,
      },
      
    ],
    [
      {
        body: "HKM İş Sağlığı ve Güvenliği",
        img: img4,
      },
      {
        body: "Makser3e Mühendislik",
        img: img7,
      },
    ],
  ],
  [
    [
      {
        body: "Gülben Yiğit Psikolojik Danışmanlık",
        img: img10,
      },
      {
        body: "Şenzade Gıda ve Hayvancılık İnş. San. ve Tic Ltd. Şti.",
        img: img5,
      },
    ],
    [
      {
        body: "Marpataş Marka ve Patent",
        img: img2,
      },
      {
        body: "Gibi Akademi",
        img: img3,
      },
      {
        body: "Turkuaz Kişisel Gelişim Merkezi",
        img: img8,
      },
    ],
  ],
];
const featuredTestimonial = {
  body: "Müvekkillerimizle her zaman net ve doğru bir iletişim kurmaya özen gösteririz. Her zaman yüksek kalitede hukuki hizmet sunmak için çaba sarf ediyoruz ve referanslarımız, sunduğumuz hizmetin kalitesi hakkında güçlü bir gösterge oluşturuyor.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function References() {
  return (
    <div>
      <div className="relative isolate bg-white pb-32 pt-5 sm:pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#A78B71]">
              Referanslar
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#583E26] sm:text-4xl">
              Birlikte çalıştığımız müvekkillerden bir kısmını aşağıda
              bulabilirsiniz.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>{`${featuredTestimonial.body}`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <div className="flex-auto">
                  <div className="font-semibold">
                    Av. Yudum Altan Bakır
                  </div>
                  <div className="text-gray-600">avyudumaltan@gmail.com</div>
                </div>
                <img
                  className="h-10 w-auto flex-none"
                  src={logo}
                  alt="logo"
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {column.map((item, i) => (
                      <figure
                        key={i}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <div className="h-48">
                            <img
                              src={`${item.img}`}
                              alt="referanslar"
                              className="h-full w-full object-cover bg-gray-50"
                            />
                          </div>
                        </blockquote>
                        <figcaption className="mt-6 flex justify-center items-center gap-x-4">
                          <div>
                            <p className="text-lg text-center text-gray-700">
                              {item.body}
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
