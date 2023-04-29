import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import styles from "../components/Contact.module.css"

function Contact() {
  return (
    <>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl relative px-6 pt-12 sm:pt-14 lg:static lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pt-5 pb-20 lg:static lg:px-8">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-[#583E26]">
                  İletişim Bilgileri
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#A78B71]">
                  Aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <MapPinIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      Ehlibeyt Mahallesi Ceyhun Atuf Kansu Cad.
                      <br />
                      107/1, Balgat
                      <br />
                      Çankaya/ANKARA
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="tel:+1 (555) 234-5678"
                      >
                        +90 546 867 95 30
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <EnvelopeIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="mailto:hello@example.com"
                      >
                        avyudumaltan@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex justify-center items-center px-6 pb-24 pt-5 sm:pb-32 lg:px-8">
              <div className="mx-auto">
                <img
                  src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="contact"
                  className={`${styles.phone} w-full object-cover mx-auto`}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-5 bg-gray-100 opacity-60 z-5">
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
      </div>
    </>
  );
}

export default Contact;
