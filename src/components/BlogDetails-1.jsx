import icon from "../assets/compliant.png";
import { VscLaw } from "react-icons/vsc";
import { RiFocus3Line } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
const stats = [
  { label: "Çözüm Odaklı", icon: RiFocus3Line },
  { label: "Koruyucu", icon: VscLaw },
  { label: "Profesyonel", icon: AiOutlineFileProtect },
];
function BlogDetails1() {
  return (
    <div className="m-6 shadow-sm px-5 lg:px-10 py-3 lg:py-5">
      <div className="mt-8 grid justify-center">
        <span className="mb-1">
          <img src={icon} className="h-8 w-8 mx-auto" alt="icon" />
        </span>
        <h1 className="text-xl lg:text-3xl font-bold tracking-wide text-black">
          TSK Yüksek Disiplin Kurulunda Savunma
        </h1>
      </div>
      <div className="border-b mt-10 border-gray-300 w-full" />
      <div className="mt-10">
        <h3 className="text-lg lg:text-xl mt-2 font-semibold text-gray-700">
          TSK Yüksek Disiplin Kurulunda Savunma Nasıl Yapılır?
        </h3>
        <h3 className="text-lg lg:text-xl mt-2 font-semibold text-gray-700">
          Avukatım Eşliğinde Savunma Yapabilir Miyim?
        </h3>
        <h3 className="text-lg lg:text-xl mt-2 font-semibold text-gray-700">
          TSK Yüksek Disiplin Kurulu Kararına Nasıl İtiraz Ederim?
        </h3>
        <p className="mt-10 font-normal text-gray-800">
          6413 Sayılı TSK Disiplin Kanununun 37/5 maddesine göre disiplin
          kuruluna sevk edilen personel; tahkikatın gizliliğini, üçüncü şahıs ve
          makamların özel bilgileri ile şeref, haysiyet ve güvenliğini, gizli ve
          özel nitelikteki bilgileri korumaya yönelik olanların dışındaki
          soruşturma evrakının tamamını inceleme, tanık dinletme ve disiplin
          kurulunda sözlü veya yazılı olarak savunma yapma hakkına sahiptir
        </p>
        <p className="mt-3 font-normal text-gray-800">
          TSK yüksek disiplin kurulunda personele en az on iş günü önce
          bildirilmiş olan gün ve saatte Kara Kuvvetleri Komutanlığında hazır
          bulunulur. Burada aynı gün birkaç kişinin sözlü savunması
          alınacağından savunma personel sıraya sokulur ve sırası gelen personel
          kurul önüne çıkar. Personel 1 nolu harici elbise ile kurulun karşısına
          çıkar ve avukatı olanlar avukatlarıyla birlikte avukatı olmayanlar ise
          şahsi olarak savunmasını huzurda sözlü olarak yapar. Sözlü
          savunmaların gerekçeli olması ve kişinin içinde bulunduğu hukuki
          durumu destekler nitelikte olması zorunludur. Aksi halde yapılan
          savunmaların hiçbir önemi kalmayacaktır. Savunma hakkı Anayasal bir
          haktır ve savunması alınmadan kişi hakkında Silahlı Kuvvetlerden
          çıkarılma kararı verilmesi hukuka aykırıdır.
        </p>
        <p className="mt-3 font-semibold text-gray-800">
          Bununla beraber personelin kurulda müdafi yardımından faydalanıp
          faydalanmayacağı hususunda Kanunda bir düzenleme bulunmamaktadır.
          Ancak gerek bir şeyin yasak olmamasının serbest olduğuna delalet
          olması gerek başta Anayasa olmak üzere İdari Yargılama Usulü Kanunu,
          Avukatlık Kanunu ve diğer kanunların savunma hakkına ilişkin
          düzenlemeleri, gerekse cezalandırmanın personele olan olumsuz etkileri
          nedenleriyle, hakkında tahkikat yapılan personelin, vekâlet verdiği
          bir müdafiin hukuki yardımından faydalanması, müdafiin yazılı veya
          sözlü olarak savunmaya katılmasının mümkün olduğu
          değerlendirilmektedir. Nitekim Genelkurmay Başkanlığı Hukuk Hizmetleri
          Başkanlığı ve Adli Müşavirliğinin 05 Haziran 2014 tarihli görüşü de bu
          doğrultudadır.
        </p>
        <p className="mt-3 font-normal text-gray-800">
          TSK <strong>yüksek disiplin kurulu kararına itirazlarda</strong> idare
          mahkemesinde iptal davası açılabilir. Personel yüksek disiplin kurulu
          kararı ile silahlı kuvvetlerden çıkartılmış ise dava açma süresi
          ilgili kuvvet komutanı, Jandarma Genel Komutanı veya Sahil Güvenlik
          Komutanı tarafından onaylanmış ilgili yüksek disiplin kurulu kararının
          personele tebliğinden itibaren başlar. Dava açma süresi 60 gündür. 60
          gün sonra dava açılması durumunda ne yazık ki dava süre aşımı
          nedeniyle reddolacaktır. İdare mahkemelerinin resen araştırma ilkesi
          bir yana dava açılmadan önce de bu usulsüzlüklerin tespit edilmesi ve
          bunlara yönelik bir çalışma yapılması açısından alanında uzman bir
          İdare Avukatından hukuki yardım alınması faydalı olacaktır. Öyle ki
          Disiplin cezalarıyla ilgili idare mahkemelerinde açılan davaların
          yüzde 60 ila 70’i disiplin soruşturmasının usulüne uygun
          yürütülmemesinden kaynaklı olarak iptalle sonuçlanmaktadır.
        </p>

        <p className="text-right mt-8 font-bold italic">Yudum Altan Bakır</p>
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

export default BlogDetails1;
