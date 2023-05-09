import { Link } from "react-router-dom";
import profile from "../assets/lawyer.png";
const posts = [
  {
    id: 1,
    title: "Lyrica Satmak Veya Kullanmak Suç Mu?",
    href: "/blog/lyrica-ya-iliskin",
    description:
      "Yeşil reçete ile satılan pregabalin etken maddeli haplara ilişkin  Adli Tıp Kurumu 5.Adli Tıp İhtisas Kurulu'nun 07/01/2019 tarihli raporuna göre...",
    date: "05.01.2023",
  },
  {
    id: 2,
    title: "TSK Yüksek Disiplin Kurulunda Savunma Nasıl Yapılır?",
    href: "/blog/TSK-Yüksek-Disiplin-Kurulunda-Savunma",
    description:
      "6413 Sayılı TSK Disiplin Kanununun  37/5 maddesine göre disiplin kuruluna sevk edilen personel; tahkikatın gizliliğini, üçüncü şahıs ve makamların özel bilgileri ile ...",
    date: "14.04.2023",
  },
];

function Blog() {
  return (
    <div className="bg-white py-2 sm:py-4 mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#A78B71] sm:text-4xl">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-500">
            Aşağıda Yudum Altan Bakır tarafından yazılmış blog yazılarını
            inceleyebilirsiniz. Merak ettikleriniz ve daha fazla için iletişime
            geçiniz.
          </p>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-5 sm:pt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{post.date}</time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-700">
                  <Link to={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={profile}
                  alt="profil-fotoğrafı"
                  className="h-10 w-10 rounded-md object-cover bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    Yudum Altan Bakır
                  </p>
                  <p className="text-gray-600">Avukat</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
