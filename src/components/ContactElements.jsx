import img1 from "../assets/agreement.png";
import img2 from "../assets/auction.png";
import img3 from "../assets/law.png";
import img4 from "../assets/courthouse.png";

const stats = [
  { id: 1, name: "Güvenli İlişki", img: img1 },
  { id: 2, name: "Dava Mahiyeti", img: img2 },
  { id: 3, name: "Tecrübe", img: img3 },
  { id: 4, name: "Etik Kurallar", img: img4 },
];

function ContactElements() {
  return (
    <>
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#A78B71] sm:text-4xl">
              Koruyucu Ve Çözüm Odaklı Avukatlık
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-500">
              Hukuki haklarınızı korumak için bize danışın ve güvenilir hukuki danışmanlık hizmetlerimizden yararlanın!
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
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
      .
    </>
  );
}

export default ContactElements;
