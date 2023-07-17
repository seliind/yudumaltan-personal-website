import icon from "../assets/compliant.png";
import { VscLaw } from "react-icons/vsc";
import { RiFocus3Line } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
const stats = [
  { label: "Çözüm Odaklı", icon: RiFocus3Line },
  { label: "Koruyucu", icon: VscLaw },
  { label: "Profesyonel", icon: AiOutlineFileProtect },
];
function BlogDetails3() {
  return (
    <div className="m-6 shadow-sm px-5 lg:px-10 py-3 lg:py-5">
      <div className="mt-8 grid justify-center">
        <span className="mb-1">
          <img src={icon} className="h-8 w-8 mx-auto" alt="icon" />
        </span>
        <h1 className="text-xl lg:text-3xl font-bold tracking-wide text-black">
          Evlilikte Bir Yıl Dolmadan Anlaşmalı Boşanma Olur Mu?
        </h1>
      </div>
      <div className="border-b mt-10 border-gray-300 w-full" />
      <div className="mt-10">
        <h3 className="text-lg lg:text-xl mt-2 font-semibold text-gray-700">
          Evlilikte bir yıl dolmadan tek celsede boşanabilir miyim ?
        </h3>
        <p className="mt-10 font-normal text-gray-800">
          Anlaşmalı boşanma davası açabilmek için tarafların boşanmanın
          sonuçları üzerinde şüpheye yer bırakmayacak düzeyde anlaşmış olması ve
          evliliğin en az 1 yıl sürmesi gerekmektedir. Bununla beraber taraflar
          boşanma sonuçları üzerinde şüpheye yer bırakmayacak şekilde anlaşmış
          fakat evlilik 1 yıldan az sürmüş ise; Usulen çekişmeli açılan boşanma
          davası kabul edildiği ve tanık dinletildiği takdirde anlaşmalı boşanma
          davası ile aynı süre içerisinde çekişmeli boşanma davası açılarak 1-2
          hafta içerisinde sonuçlanabilir. Yani taraflar, evlilik birliği
          içerisinde anlaşamadıklarını, sorunlar yaşadıklarını tanıklar
          aracılığıyla ispatlarsa, mahkeme ilk celse tarafların boşanmasına
          karar verebilir. Bu konuda mutlaka uzman bir avukattan destek
          alınmalıdır. Avukatsız takip edilen birçok boşanma davası, usuli
          eksiklikler nedeniyle reddedilebilmektedir. Böyle hallerde ret kararı
          üzerinden üç yıl geçmedikçe veya yeni boşanma nedenleri ortaya
          çıkmadıkça aynı nedenlere dayalı boşanma davası açılamamakta, taraflar
          yıllarca kağıt üzerinde evli kalabilmektedir.
        </p>
        <p className="text-right mt-8 font-bold i">Yudum Altan Bakır</p>
      </div>
      <div className="border-b mt-10 border-gray-300 w-full" />
      <div className="flex justify-center mt-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse gap-y-4 p-3 hover:scale-105 mx-auto"
          >
            <div className="text-base leading-7 text-gray-600 flex justify-center">
              {stat.label}
            </div>
            <div className="text-5xl font-semibold tracking-tight text-gray-900 flex justify-center">
              <stat.icon className="h-14 w-14 hover:cursor-pointer hover:scale-110" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails3;
