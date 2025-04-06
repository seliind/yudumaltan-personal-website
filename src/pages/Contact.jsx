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
        <div className="mx-auto grid max-w-7xl relative px-3 pt-6 sm:pt-14 lg:static lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2" style={{ height: "77vh" }}>
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
                    Kazım Özalp Mah. Uğur Mumcu Caddesi
                      <br />
                      5/6
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
            <div className="flex justify-center mb-5 z-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.2007684771293!2d32.872105856311215!3d39.89213704088874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f9363957735%3A0x90dff4c6bc178805!2sGaziosmanpa%C5%9Fa%2C%20U%C4%9Fur%20Mumcu%20Cd.%2039%2F5%20D%3A6%2C%2006700%20Ankara%2F%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1741715583210!5m2!1str!2str"
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
      </div>
    </>
  );
}

export default Contact;
