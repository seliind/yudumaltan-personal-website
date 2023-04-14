import { FaPhone, FaMailBulk } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Contact() {
  return (
    <div className="h-full">
      <div className="relative flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="contact"
          className="w-full object-cover"
        />
        <div className="absolute h-full bg-gray-300 opacity-60 border bottom-0 md:right-20 px-5 py-2 md:py-20 rounded-sm md:space-y-5">
        <h1 className="font-bold text-center text-[#A78B71] text-xl sm:text-4xl rounded-sm px-20 py-5 top-8">
          İletişim
        </h1>
          <p className="flex items-center gap-x-3 font-semibold hover:scale-110">
            <FaPhone className="h-4 w-4 " />
            <a target="_blank" rel="noreferrer" href="https://wa.me/5468679530">
              +90 (546) 867 95 30
            </a>
          </p>
          <p className="flex items-center gap-x-3 font-semibold">
            {" "}
            <FaMailBulk className="h-4 w-4" /> avyudumaltan@gmail.com
          </p>
          <p className="flex items-center gap-x-3 font-semibold cursor-pointer">
            <HiLocationMarker className="h-4 w-4" />
            Ehlibeyt Mah. <br /> Ceyhun Atuf Kansu Cad.
            <br />
            107/1, Balgat
            <br />
            Çankaya/ANKARA
          </p>
          <div className="mt-5 border-b-2"/>
        </div>
      </div>
      <div className="flex justify-center p-5 bg-gray-300 opacity-60 z-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.185229729609!2d32.8143610747982!3d39.89248497152866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345f9820f29dd%3A0x1729a999cb3a0741!2sEhlibeyt%2C%20Ceyhun%20Atuf%20Kansu%20Cd.%20No%3A107%2C%2006520%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1681502386227!5m2!1str!2str"
          width="800"
          height="600"
          allowFullScreen=""
          title="address-office"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
