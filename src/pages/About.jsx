import {VscLaw} from "react-icons/vsc";
import {RiFocus3Line} from "react-icons/ri";
import {AiOutlineFileProtect} from "react-icons/ai";
const stats = [
  { label: "Çözüm Odaklı", icon: RiFocus3Line },
  { label: "Koruyucu", icon: VscLaw },
  { label: "Profesyonel", icon: AiOutlineFileProtect },
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
                    üzere Ankara, İstanbul, İzmir gibi Türkiye’nin birçok ilinde
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
                      sunmaktayız. Çalışma alanlarımızla ile ayrıntılı bilgilere
                      daha detaylı olarak Çalışma Alanlarımız bölümünden
                      erişebilirsiniz.
                    </p>
                  </div>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.label}
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                          <stat.icon  className="h-14 w-14 hover:cursor-pointer hover:scale-110"/>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
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
