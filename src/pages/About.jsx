import {VscLaw} from "react-icons/vsc";
import {RiFocus3Line} from "react-icons/ri";
import {AiOutlineFileProtect} from "react-icons/ai";
import img5 from "../assets/commerce.png"
import img6 from "../assets/employment.png"
import img7 from "../assets/family-law.png"
import img8 from "../assets/prison.png"
import img10 from "../assets/clipboard.png"

const stats = [
  { label: "Çözüm Odaklı", icon: RiFocus3Line },
  { label: "Koruyucu", icon: VscLaw },
  { label: "Profesyonel", icon: AiOutlineFileProtect },
];
const studies = [
  { id: 1, name: "Ceza Hukuku", img: img8 },
  { id: 2, name: "Ticaret ve Şirketler Hukuku", img: img5 },
  { id: 3, name: "İş ve Sosyal Güvenlik Hukuku", img: img6 },
  { id: 4, name: "Aile Hukuku/Boşanma", img: img7 },  
  { id: 4, name: "Sigorta Hukuku", img: img10 },
];
function About() {
  return (
    <>
      <div className="bg-white">
        <main className="isolate mt-14 md:mt-16">
          <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-wide text-[#583E26] sm:text-4xl">
                Hakkında
              </h2>
              <h3 className="text-xl font-semibold tracking-tight text-[#A78B71] sm:text-2xl mt-4">
                AV. YUDUM ALTAN BAKIR HUKUK VE DANIŞMANLIK BÜROSU
              </h3>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    Yudum Altan Bakır Hukuk Bürosu olarak; Ankara başta olmak
                    üzere, İstanbul, İzmir gibi Türkiye’nin birçok ilinde
                    uzmanlaşmış olduğumuz birçok hukuk alanında danışmanlık ve
                    avukatlık hizmeti vermekteyiz.
                  </p>
                  <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    <p>
                      Temel prensibimiz; müvekkillerimiz için karşılaştıkları
                      hukuki sorunlarla ilgili dürüst, güvenilir, objektif ve
                      sonuç odaklı çözümler üretmektir. Hedefimiz; kısa vadede
                      hukuki sorunların önlenmesi için etkili bir danışmanlık,
                      uzun vadede ise mevcut hukuki sorunların çözümü amacıyla
                      aktif avukatlık hizmeti sağlamaktır.
                      <br /> 
                      <br/>
                      Müvekkillerin ihtiyaçlarına uygun hukuki danışmanlık
                      hizmeti sunabilmek amacıyla, uyuşmazlık esnasında olduğu
                      gibi, uyuşmazlık öncesi danışmanlık hizmetleri ile de
                      müvekkillerimiz aleyhine oluşabilecek hukuki risklerin
                      tespiti ve en aza indirgenmesi amaçlanmaktadır.
                    </p>
                    <p className="mt-10">
                      Hukuk Büromuz  olarak ceza hukuku, şirketler hukuku,  aile
                      hukuku, icra-iflas hukuku,  tüketici hukuku, borçlar
                      hukuku, bilişim hukuku, ticaret hukuku, tazminat
                      davaları, iş hukuku ve diğer hukuk dallarında , uyuşmazlık
                      çözümü ve ticari İşler takımlarımız ile hukuki destek
                      sunmaktayız.
                      Aşağıda çalışma alanlarımızı görebilirsiniz.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4 p-3 hover:scale-105 mx-auto"
                      >
                        <div className="text-base leading-7 text-gray-600 flex justify-center">
                          {stat.label}
                        </div>
                        <div className="text-5xl font-semibold tracking-tight text-gray-900 flex justify-center">
                          <stat.icon  className="h-14 w-14 hover:cursor-pointer hover:scale-110"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
               
              </div>
              <div className="mt-6">
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {studies.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-200 p-8">
                  <dt className="text-md font-semibold leading-6 text-gray-500 mt-5">
                    {stat.name}
                  </dt>
                  <dd className="order-first flex items-center justify-center text-3xl font-semibold tracking-tight text-gray-500">
                    <div>
                    <img src={stat.img} alt="icons" className="h-16 w-16"/>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
                </div>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-10 sm:mt-14 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              src="https://images.pexels.com/photos/9272182/pexels-photo-9272182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="aspect-[5/1] w-full object-cover xl:rounded-3xl"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
