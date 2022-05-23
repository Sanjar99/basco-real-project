import React, { useState, useEffect } from "react";
import ".././main.scss";
import "./_directions.scss";
import trade from "../../Assets/images/icon-2.png";
import resource from "../../Assets/images/icon-3.png";
import house from "../../Assets/images/icon-6.png";
import star from "../../Assets/images/icon-8.png";
import setting from "../../Assets/images/icon-7.png";
import saveMoney from "../../Assets/images/icon-4.png";
import kluch from "../../Assets/images/icon-1.png";
import money from "../../Assets/images/icon-5.png";
import yuk from "../../Assets/images/yuk.png";
import turli from "../../Assets/images/turli.png";
import bugaltera from "../../Assets/images/bugaltera.png";
import ishlab from "../../Assets/images/ishlab.png";
import maosh from "../../Assets/images/maosh.png";
import asosiy from "../../Assets/images/asosiy.png";
import Modal from "../../UI/Modal/Modal";
import { AiOutlineRight } from "react-icons/ai";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

function Directions() {
  const [width] = useWindowSize();
  const [shower, setShower] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal9, setModal9] = useState(false);
  const [modal10, setModal10] = useState(false);
  const [modal11, setModal11] = useState(false);
  const [modal12, setModal12] = useState(false);
  const [modal13, setModal13] = useState(false);
  const [modal14, setModal14] = useState(false);
  return (
    <>
      <section className="directions">
        <div className=" container">
          <div className="directions-top">
            <h3 className="directions-top__subject">
              Basco ERP platforma yo'nalishlari
            </h3>

            <p className="directions-top__text">
              Basco ERP platformasining yo’nalishlari - biznesingizning barcha
              bo'limlari uchun yagona komplex yechim
            </p>
          </div>
          <div className="directions-middle">
            <ul className="directions-middle__list">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--1">
                    <img
                      src={kluch}
                      alt="trade"
                      className="directions-middle-card__img "
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    CRM boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Mijozlar bilan munosabat- larni boshqarishni avtomat-
                    lashtirish uchun qulay va optimal yondashuv
                  </p>
                  <button
                    onClick={() => setModal1(true)}
                    className="directions-middle-card__btn directions-middle-card__btn--1"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--2">
                    <img
                      src={trade}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Savdo boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                  </p>
                  <button
                    onClick={() => setModal2(true)}
                    className="directions-middle-card__btn directions-middle-card__btn--2"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--3">
                    <img
                      src={resource}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    HR boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                    ostingizda!
                  </p>
                  <button
                    onClick={() => setModal3(true)}
                    className="directions-middle-card__btn directions-middle-card__btn--3"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--4">
                    <img
                      src={saveMoney}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Hisob-kitob boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Xodimlarning maoshi va kompaniyaning hisob-kitobi uchun
                    optimal yondashuv
                  </p>
                  <button
                    onClick={() => setModal4(true)}
                    className="directions-middle-card__btn directions-middle-card__btn--4"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--5">
                    <img
                      src={money}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Kassa boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                    ishonchli yuritilishi
                  </p>
                  <button
                    onClick={() => setModal5(true)}
                    className="directions-middle-card__btn directions-middle-card__btn--5"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--6">
                    <img
                      src={house}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Sklad boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                    qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                  </p>
                  <button
                    onClick={() => setModal6(true)}
                    className="directions-middle-card__btn  directions-middle-card__btn--6"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--7">
                    <img src={setting} alt="trade" className=" " />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Nazorat boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Korxona ichki qonun-qoida-lari va tartibi nazoratini yagona
                    baza orqali nazorat qilish imkoniyatini beradi
                  </p>
                  <button
                    onClick={() => setModal7(true)}
                    className="directions-middle-card__btn directions-middle-card__btn--7"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={star}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Rahbar boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar sifatida
                    sizning vaqtingiz ejaladi, samaradorlik oshadi.
                  </p>
                  <button
                    onClick={() => setModal8(true)}
                    className="directions-middle-card__btn directions-middle-card__btn--8"
                  >
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          {shower ? (
            <div className="directions-middle">
              <ul className="directions-middle__list">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--9">
                      <img
                        width={72}
                        height={72}
                        src={maosh}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Maosh bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Xodimlaringizga istalgan turda maosh hisoblash mumkin
                      (tabel asosida, KPI asosida, bonus shaklida, ishbay
                      shaklda).
                    </p>
                    <button
                      onClick={() => setModal9(true)}
                      className="directions-middle-card__btn directions-middle-card__btn--9"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--10">
                      <img
                        src={yuk}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ta’minot bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                      beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                      imkoniyati.
                    </p>
                    <button
                      onClick={() => setModal10(true)}
                      className="directions-middle-card__btn directions-middle-card__btn--10"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--11">
                      <img
                        src={turli}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Turli shaxslar <br></br> bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Turli shaxslar bilan ishlash samaradorligi sezilarli
                      darajada oshadi.
                    </p>
                    <button
                      onClick={() => setModal11(true)}
                      className="directions-middle-card__btn directions-middle-card__btn--11"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--12">
                      <img
                        src={asosiy}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Asosiy vositalar <br></br> bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Barcha asosiy vositalarning hisob-kitoblari, eskirishi
                      hamda ularni sotishdan olinadigan foyda va zararlar yagona
                      joyda.
                    </p>
                    <button
                      onClick={() => setModal12(true)}
                      className="directions-middle-card__btn directions-middle-card__btn--12"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--13">
                      <img
                        src={ishlab}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Ishlab chiqarish <br></br> bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Ishlab chiqarish bo’limi orqali kompaniya ishlab
                      chiqarishda bo’layotgan ortiqcha xarajatlarni ko’ra oladi
                      hamda real ishlab chiqarishni to’g’ri nazorat qila oladi.
                    </p>
                    <button
                      onClick={() => setModal13(true)}
                      className="directions-middle-card__btn directions-middle-card__btn--13"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--14">
                      <img
                        src={bugaltera}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Buxgalteriya bo’limi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniya real daromadi va xarajatlarini, bankdagi
                      operatsiyalarni soliq, kommunal xizmatlarga qilinayotgan
                      xarajatlarni doim nazorat qilib borish imkoniyati paydo
                      boʻladi.
                    </p>
                    <button
                      onClick={() => setModal14(true)}
                      className="directions-middle-card__btn directions-middle-card__btn--14"
                    >
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="directions-bottom">
            <button
              onClick={() => setShower(!shower)}
              className="directions-bottom__btn"
            >
              {shower ? "Yopish" : " Barcha bo`limlar"}
            </button>
          </div>
        </div>
      </section>
      {modal1 ? (
        <Modal shower={modal1} setShower={setModal1}>
          <div>
            <h3 className="modal__subject">CRM bo’limi</h3>
            <p className="modal__text">
              Mijozlar bilan munosabatlarni boshqarishni avtomatlashtirish uchun
              qulay va optimal yondashuv.
            </p>
            <p className="modal__text">
              BASCO ERP platformasining CRM bo’limi sotuv menejerlaringizga juda
              ham yoqqan bo’lardi. Undan tashqari, CRM bo’limi kompaniyaning
              rahbari, ya’ni, siz hamda kompaniya nazoratchisi va marketing
              bo’limi uchun foydali hisoblanadi. CRM bo’limining bir nechta
              muhim imkoniyatlari quyidagilar:
            </p>
            <ul>
              <li className="modal__text">
                ● Kompaniya rahbari sifatida siz har bir sotuvchining
                unumdorligi bo’yicha analiz qilish va qaysi mahsulot va xizmatga
                nisbatan talab yuqori ekanligini aniqlash imkoniyatiga ega
                bo’lasiz;
              </li>
              <li className="modal__text">
                ● Kompaniya nazoratchisi esa CRM bo’limi orqali sotuv
                menejerlari kunlik rejasining to’liq nazorat qilish imkoniga ega
                bo’ladi;
              </li>
              <li className="modal__text">
                ● Sotuv menejerlari CRM bo’limi orqali kunlik rejalarini tez,
                aniq va qulay avtomatlashtirishlari mumkin bo’ladi.
              </li>
            </ul>
            <p className="modal__text">
              Bu bo’lim yordamida mijozlar bilan ishlash samaradorligi sezilarli
              darajada o’sadi.
            </p>
            <p className="modal__text">
              Sotuv menejerlaringizning ham samaradorligi oshishi natijasida
              sotuvlaringiz sonida ham sezilarli o’zgarish sezasiz.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal2 ? (
        <Modal shower={modal2} setShower={setModal2}>
          <div>
            <h3 className="modal__subject">Savdo bo’limi</h3>
            <p className="modal__text">
              Savdo jarayonlari boshqaruvi, nazorati va analizi.
            </p>
            <p className="modal__text">
              Savdo bo’limining asosiy vazifasi - mahsulot va xom-ashyo sotishni
              avtomatlashtirish.
            </p>
            <p className="modal__text">
              Keling, Savdo bo’limining eng muhim imkoniyatlaridan bir nechtasi
              bilan tanishib chiqamiz:
            </p>
            <ul>
              <li className="modal__text">
                ● Mijozlarga mahsulot va xom-ashyo sotishni avtomatlashtirib
                beradi;
              </li>
              <li className="modal__text">
                ● Mijozlar bilan pul oldi-berdisi akt sverkalarini oson ko’rish;
              </li>
              <li className="modal__text">
                ● Har bir menejer, faqatgina, oʻzi masʼul boʻlgan mijozlargagina
                mahsulot sotishi va toʻlovlarni qabul qilishi mumkin;
              </li>
            </ul>
            <p className="modal__text">
              ● Har bir menejer boʻyicha tushgan savdo pullari haqida batafsil
              maʼlumot.
            </p>
            <p className="modal__text">
              Savdo bo’limi orqali mijozlar bilan ishlash hamda mahsulot va
              xom-ashyoning savdosi jarayonlari samaradorligi sezilardi darajada
              oshadi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal3 ? (
        <Modal shower={modal3} setShower={setModal3}>
          <div>
            <h3 className="modal__subject">HR bo’limi</h3>
            <p className="modal__text">
              Kerakli kadrlar va barcha xodimlar maʼlumotlari qoʼl ostingizda!
            </p>
            <p className="modal__text">
              Sizning xodimlaringiz kompaniyangizdagi eng qimmatli resursingiz
              bo’lganligi sababli, ular bilan ishlash samaradorligi juda ham
              muhim.
            </p>
            <p className="modal__text">
              BASCO ERP platformasi HR bo’limining ba’zi eng muhim
              imkoniyatlari:
            </p>
            <ul>
              <li className="modal__text">
                ● Barcha kadrlarning elektron toʻldirilgan anketalar bazasini
                toʻgʻri va tartibli saqlash imkoniyati;
              </li>
              <li className="modal__text">
                ● Yangi olinayotgan kadrlar bilan boʻlgan suhbatlarning toʻliq
                muzokarasini tushirish imkoniyati;
              </li>
              <li className="modal__text">
                ● Kompaniyada ishlayotgan xodimlarning toʻliq bazasini tez va
                qulay koʻrish imkoniyati;
              </li>
            </ul>
            <p className="modal__text">
              ● Har bir menejer boʻyicha tushgan savdo pullari haqida batafsil
              maʼlumot.
            </p>
            <p className="modal__text">
              HR bo’limining barcha imkoniyatlari sizga xodimlaringiz bilan
              ishlash samaradorligingiz sezilarli darajada o’sadi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal4 ? (
        <Modal shower={modal4} setShower={setModal4}>
          <div>
            <h3 className="modal__subject">HR bo’limi</h3>
            <p className="modal__text">
              Kerakli kadrlar va barcha xodimlar maʼlumotlari qoʼl ostingizda!
            </p>
            <p className="modal__text">
              Sizning xodimlaringiz kompaniyangizdagi eng qimmatli resursingiz
              bo’lganligi sababli, ular bilan ishlash samaradorligi juda ham
              muhim.
            </p>
            <p className="modal__text">
              BASCO ERP platformasi HR bo’limining ba’zi eng muhim
              imkoniyatlari:
            </p>
            <ul>
              <li className="modal__text">
                ● Barcha kadrlarning elektron toʻldirilgan anketalar bazasini
                toʻgʻri va tartibli saqlash imkoniyati;
              </li>
              <li className="modal__text">
                ● Yangi olinayotgan kadrlar bilan boʻlgan suhbatlarning toʻliq
                muzokarasini tushirish imkoniyati;
              </li>
              <li className="modal__text">
                ● Kompaniyada ishlayotgan xodimlarning toʻliq bazasini tez va
                qulay koʻrish imkoniyati;
              </li>
            </ul>
            <p className="modal__text">
              ● Har bir menejer boʻyicha tushgan savdo pullari haqida batafsil
              maʼlumot.
            </p>
            <p className="modal__text">
              HR bo’limining barcha imkoniyatlari sizga xodimlaringiz bilan
              ishlash samaradorligingiz sezilarli darajada o’sadi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal5 ? (
        <Modal shower={modal5} setShower={setModal5}>
          <div>
            <h3 className="modal__subject">Kassa bo’limi</h3>
            <p className="modal__text">
              Kompaniyaning barcha turdagi pul mablagʼlarining aniq va ishonchli
              yuritilishi.
            </p>
            <p className="modal__text">
              Ushbu bo’lim kompaniya rahbari, buxgalteriya va kassa bo’limi
              uchun zaruriy yechimlarni beradi.
            </p>
            <p className="modal__text">
              Dasturda istalgancha mikdorda kassalarni kiritish va ular boʻyicha
              amaliyotlarni qilish mumkin. Bu bilan kompaniyaning puli, aynan,
              qayerda turibdi, qaysi kassada qanday kirim-chiqimlar
              boʻlayotganini aniq bilib turish mumkin.
            </p>
            <p className="modal__text">
              Kassalarda istalgancha turdagi valyutalarni alohida-alohida tarzda
              hisobini yuritish mumkin.
            </p>
            <p className="modal__text">
              Muhim kassa hujjatlari tasdiqlangandan soʻnggina bazadagi
              hisob-kitoblarda aks etadi. Tasdiqni esa faqat oldindan
              belgilangan masʼul shaxslargina qoʻya oladilar.
            </p>
            <p className="modal__text">
              Natijada, masʼul shaxslar har bir operatsiyani koʻrib, xabardor
              bo’lib turishlari taʼminlanadi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal6 ? (
        <Modal shower={modal6} setShower={setModal6}>
          <div>
            <h3 className="modal__subject">Sklad bo’limi</h3>
            <p className="modal__text">
              Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
              qoldigʼini real vaqt rejimida koʼrib turish imkoniyati.
            </p>
            <p className="modal__text">
              Sklad bo’limi kompaniya rahbari, savdo va buxgalteriya bo’limi
              uchun foydali bo’ladi.
            </p>
            <p className="modal__text">
              BASCO ERP platformasining eng muhim imkoniyatlari quyidagilar::
            </p>
            <ul>
              <li className="modal__text">
                ● Skladga mahsulot qabul qilish funksiyasi;
              </li>
              <li className="modal__text">
                ● Skladga kirim boʻlgan mahsulotlarning alohida hisoboti;
              </li>
              <li className="modal__text">
                ● Skladdan chiqim boʻlgan mahsulotlarning alohida hisoboti;
              </li>
              <li className="modal__text">
                ● Mahsulotlar qoldigʻi eng kam miqdoridan kamayganda bu haqida
                maxsus hisobotda bilib turish mumkin;
              </li>
              <li className="modal__text">
                ● Natijada hech qachon toʻsatdan mahsulot yetishmasligi yuzaga
                kelmaydi. Sababi, kamaygani oldindan bilinadi;
              </li>
              <li className="modal__text">
                ● Mahsulotlar qoldigʻi eng koʻp mikdoridan koʻpayganda bu haqida
                maxsus hisobotda bilib turish mumkin;
              </li>
              <li className="modal__text">
                ● Natijada, omborda bir turdagi mahsulotlarning meʼyordan ortib
                ketishi oldi olinadi.
              </li>
            </ul>
            <p className="modal__text">
              Ushbu bo’lim orqali tovarlar zahirasini doimiy kuzatib turish va
              hisobotlarni to’g’ri yuritish oson amalga oshiriladi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal7 ? (
        <Modal shower={modal7} setShower={setModal7}>
          <div>
            <h3 className="modal__subject">Nazorat bo’limi</h3>
            <p className="modal__text">
              Korxona ichki qonun-qoidalari va tartibi nazoratini yagona baza
              orqali nazorat qilish imkoniyatini beradi.
            </p>
            <p className="modal__text">
              BASCO ERP platformasining Nazorat bo’limi kompaniya rahbari hamda
              maosh bo’limi uchun foydali bo’ladi.
            </p>
            <p className="modal__text">
              Nazoratchi tomonidan har kunlik jarima, bonus va
              ragʻbatlantrishlarni oʻsha kuniyoq kiritib borish hamda jarima,
              bonus va ragʻbatlantirishlarni kun, xafta, oy va yillar boʻyicha
              saralash imkoniyatini beradi.
            </p>
            <p className="modal__text">
              Undan tashqari, Nazorat bo’limi sotuv menejerlarini bezovta
              qilmagan holda, ularning mijoz bilan muzokaralarini nazorat qilish
              imkoniyatini beradi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal8 ? (
        <Modal shower={modal8} setShower={setModal8}>
          <div>
            <h3 className="modal__subject">Rahbar bo’limi</h3>
            <p className="modal__text">
              Rahbar uchun barcha imkoniyatlar bir joyda. Rahbar sifatida
              sizning vaqtingiz tejaladi, samaradorlik oshadi.
            </p>
            <p className="modal__text">
              Undan tashqari rahbar sifatida siz kompaniyangiz balansini
              to’laqonli ko’ra olasiz.
            </p>
            <p className="modal__text">
              Dasturning har bir bo’limi o’zaro bog’liq holda ishlagani sababli
              barcha foydalanuvchilar ma’lumotlarni o’z vaqtida kiritib
              borishlari talab etiladi. Natijada hisobotlar to’g’ri va aniq
              yuritiladi.
            </p>
            <p className="modal__text">
              Rahbar sifatida har bir bo’limda ishlar qanday ketayotganligini
              to’liq ko’ra olasiz. Bu esa kompaniyangiz jarayonlarini tahlil
              qilish va rivojlantirish imkoniyatini beradi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal9 ? (
        <Modal shower={modal9} setShower={setModal9}>
          <div>
            <h3 className="modal__subject">Maosh bo’limi</h3>
            <p className="modal__text">
              Xodimlaringizga istalgan turda maosh hisoblash mumkin (tabel
              asosida, KPI asosida, bonus shaklida, ishbay shaklda).
            </p>
            <p className="modal__text">
              Agar sizning jamoangiz yetarlicha katta bo’lsa, ularning ishlash
              smenasi, ishga kelgan vaqti, oldindan berilgan avanslariga qarab,
              maosh berish jarayoni ham murakkablashib ketadi.
            </p>
            <p className="modal__text">
              BASCO ERP platformasining Maosh bo’limi orqali esa siz shu va shu
              kabi maosh hisoblash bilan bog’liq barcha muammolarni oson hal
              qilishingiz mumkin bo’ladi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal10 ? (
        <Modal shower={modal10} setShower={setModal10}>
          <div>
            <h3 className="modal__subject">Ta’minot bo’limi</h3>
            <p className="modal__text">
              Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
              beruvchilar haqidagi maʼlumotlarini tez va qulay topish
              imkoniyati.
            </p>
            <p className="modal__text">
              Ushbu bo’lim orqali kompaniyaning ta’minotchilar bilan ishlash
              samaradorligi oshadi. Kompaniya rahbariyatiga tayyorlanadigan
              hisobotlar vaqti qisqaradi.
            </p>
            <p className="modal__text">
              Bu boʻlimda, nafaqat, tayyor mahsulot, balki xizmat sotish va
              sotib olish orqali faoliyatidagi kompaniyalarga taʼminotni kiritib
              borish imkonini beradi.
            </p>
            <p className="modal__text">
              Ta’minot bo’limining muhim imkoniyatlarining ba’zilarini ko’rib
              chiqamiz:
            </p>
            <ul>
              <li className="modal__text">
                ● Taʼminotchining kompaniyaga xom-ashyo va mahsulot yetkazib
                beruvchilar haqidagi maʼlumotlarini tez va qulay topish
                imkoniyati;
              </li>
              <li className="modal__text">
                ● Taʼminotchining kunlik rejasini tez, qulay avtomatik tashkil
                qilib berish imkoniyati;
              </li>
              <li className="modal__text">
                ● Taʼminotchi bilan suhbatlashish vaqti kelganda uning
                kartochkasiga yangi suhbat mazmunini qo’shmay turib, budilnik
                vaqtini oʻzgartirib boʻlmaydi. Bu taʼminotchi bilan
                suhbatlashmay, shunchaki, vaqtni surib kuyishning oldini oladi.
              </li>
              <li className="modal__text">
                ● Taʼminotchilar bilan boʻlgan suhbatlar bir marta bazaga
                yozilganidan keyin uni hodim oʻzi oʻchirib yoki oʻzgartirib
                yubora olmaydi. Bu bilan maʼlumotlar keyinchalik oʻzgartirib
                kuyilishi xavfining oldi olinadi;.
              </li>
            </ul>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal11 ? (
        <Modal shower={modal11} setShower={setModal11}>
          <div>
            <h3 className="modal__subject">Turli shaxslar bo’limi</h3>
            <p className="modal__text">
              Turli shaxslar bilan ishlash samaradorligi sezilarli darajada
              oshadi.
            </p>
            <p className="modal__text">Boʻlimning umumiy imkoniyatlari:</p>

            <ul>
              <li className="modal__text">
                ● Taʼminotchilar bilan pul oldi-berdisi akt sverkalarini oson
                koʻrish imkoniyati.
              </li>
              <li className="modal__text">
                ● Turli shaxslar bilan umumiy hisob-kitoblarda manfaatlardan
                kechish hisobiga kelishuvlar boʻlganda korrektirovka qilish
                funksiyasi.
              </li>
              <li className="modal__text">
                ● Turli shaxslar bilan istalgan valyutada hisob-kitoblarni
                alohida-alohida qilib olib yurish mumkin. Bu bilan
                hisob-kitoblar doimo aniq holatda boʻladi.
              </li>
              <li className="modal__text">
                ● Turli shaxslar istalgan valyutada pul kirim-chiqim qilish,
                qabul kilayotganda pul summasini bir valyutadan boshqasiga
                konvertatsiya qilib olish mumkin. Bu bilan bir vaqtning oʻzida
                ham kassa hisobkitoblari, ham taʼminotchi bilan oldi berdi real
                holatda kurinadi.
              </li>
              <li className="modal__text">
                ● Turli shaxslardan mahsulotlar sotib olish narxini soʻmda yoki
                AQSH dollarida belgilasa boʻladi. Bu siz istagan narxni osonlik
                bilan koʻrishda yordam beradi.
              </li>
              <li className="modal__text">
                ● Turli shaxslardan istalgan vaqt oraligʻida sotib olingan
                xizmatlar hisoboti.
              </li>
              <li className="modal__text">
                ● Turli shaxslar harakati hisoboti orqali har bir taʼsischi va
                turli shaxslarni individual analiz qilish imkoniyati.
              </li>
              <li className="modal__text">
                ● Turli shaxslardan xizmat sotib olish va sotish.
              </li>
            </ul>
            <p className="modal__text">
              BASCO ERP platformasining ushbu bo’limi kompaniyangizning turli
              shaxslar bilan bo’ladigan barcha munosabatlarini nazorat qiladi
              hamda tartibga soladi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal12 ? (
        <Modal shower={modal12} setShower={setModal12}>
          <div>
            <h3 className="modal__subject">Asosiy vositalar bo’limi</h3>
            <p className="modal__text">
              Barcha asosiy vositalarning hisob-kitoblari, eskirishi hamda
              ularni sotishdan olinadigan foyda va zararlar yagona joyda.
            </p>
            <p className="modal__text">Boʻlimning umumiy imkoniyatlari:</p>
            <ul>
              <li className="modal__text">
                ● Asosiy vositalarga maxsus inventar raqam berish mumkin. Va shu
                raqamga asosan ularning hisob-kitoblari yuritiladi.
              </li>
              <li className="modal__text">
                ● Asosiy vositalar, yaʼni ishlab chiqarish jihozlari, ofis
                jihozlari sotib olish va kompaniya balansida olib yurish.
              </li>
              <li className="modal__text">
                ● Asosiy vositalarga foizda oylik eskirishini hisoblash.
              </li>
              <li className="modal__text">
                ● Asosiy vositalarni sotish va balansdan olib tashlash.
              </li>
              <li className="modal__text">
                ● Asosiy vositalarning umumiy batafsil roʻyxati.
              </li>
              <li className="modal__text">
                ●Asosiy vosita sotishdan foyda (zarar) hisoboti.
              </li>
              <li className="modal__text">
                ● Asosiy vositalarning sotish va sotib olish harakati.
              </li>
              <li className="modal__text">
                ● Asosiy vositalarning maʼlum kun uchun koldigʻi hisoboti
              </li>
            </ul>
            <p className="modal__text">
              Bu bo’lim orqali kompaniya real daromadining asosiy vositalar
              eskirishida o’rni qanchalik muhimligi sezila boshlaydi.
            </p>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal13 ? (
        <Modal shower={modal13} setShower={setModal13}>
          <div>
            <h3 className="modal__subject">Ishlab chiqarish bo’limi</h3>
            <p className="modal__text">
              Ishlab chiqarish bo’limi orqali kompaniya ishlab chiqarishda
              bo’layotgan ortiqcha xarajatlarni ko’ra oladi hamda real ishlab
              chiqarishni to’g’ri nazorat qila oladi.
            </p>
            <p className="modal__text">Boʻlimning umumiy imkoniyatlari:</p>
            <ul>
              <li className="modal__text">● Mahsulot ishlab chiqarish.</li>
              <li className="modal__text">
                ● Mahsulot ishlab chiqarishda har bir mahsulotga ketadigan
                xom-ashyolarni toʻliq kiritish imkoniyati orqali har bir
                mahsulotning tannarxini ham hisoblash imkoniyati.
              </li>
              <li className="modal__text">
                ● Mahsulot ishlab chiqarishda xom-ashyo bilan birga
                polufabrikatlarni ham tayyor mahsulot ishlab chiqarish ichiga
                kiritish imkoniyati.
              </li>
              <li className="modal__text">
                ● Ishlab chiqarilayotgan mahsulotning soniga karab tannarxi va
                summasini ham koʻrish mumkin.
              </li>
              <li className="modal__text">
                ● Mahsulot ishlab chiqarishda xom-ashyo yoki polufabrikat agar
                skladda bulmasa, ishlab chiqarishga ruxsat bermaydi. Bu real
                holatni analiz qilib turishni osonlashtiradi.
              </li>
              <li className="modal__text">
                ● Ishlab chiqariladigan mahsulotlar roʻyxatini kiritganda unga
                kerakli boʻlgan xom-ashyolarni skladdan avtomatik toʻldirib
                quyish imkoniyati mavjud.
              </li>
              <li className="modal__text">
                ● Yaroqsiz mahsulotlar skladga kaytganda mahsulotlarni qayta
                ishlash funksiyasi ham mavjud.
              </li>
              <li className="modal__text">
                ● Qayta ishlash funksiyasi orqali bir turdagi mahsulotdan
                ikkinchi turdagi mahsulotni ham qayta ishlash mumkin.
              </li>
              <li className="modal__text">
                ● Ishlab chiqarish uchun kerak boʻlgan xom-ashyolarni xom-ashyo
                skladidan ajratib saqlash uchun va tayyor boʻlgan mahsulotlarni
                saqlash uchun alohida ishlab chiqarish skladi.
              </li>
              <li className="modal__text">
                ● Skladdan skladga xom-ashyo va tayyor mahsulot oʻtkazish
                funksiyasi.
              </li>
              <li className="modal__text">
                ● Ishlab chiqarish skladini nazorat qilish uchun sklad hisoboti.
              </li>
              <li className="modal__text">
                ● Ishlab chiqarish uchun norma belgilash orqali xohlagan davrni
                tanlab, ishlab chiqarish kam yoki koʻp boʻlayotgani haqida
                maʼlumot olish.
              </li>
              <li className="modal__text">
                ● Ishlab chiqarishga mahsulot buyurtma berish.
              </li>
              <li className="modal__text">
                ● Ishlab chiqarish uchun kerakli xom-ashyolarga buyurtma berish.
              </li>
              <li className="modal__text">
                ● Kamaygan va koʻpaygan mahsulotlar haqida hisobot olish orqali
                mahsulotlar miqdorini toʻgʻri nazorat qila olish imkoniyati.
              </li>
              <li className="modal__text">
                ● Ishlab chiqarishga sarflangan xom-ashyoning kam yoki koʻp sarf
                boʻlayotgani haqida hisobot olish.
              </li>
              <li className="modal__text">
                ● Bir mahsulot uchun koʻp turdagi kalkulyatsiya kiritish
                imkoniyati.
              </li>
            </ul>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {modal14 ? (
        <Modal shower={modal14} setShower={setModal14}>
          <div>
            <h3 className="modal__subject">Buxgalteriya bo’limi</h3>
            <p className="modal__text">
              Kompaniya real daromadi va xarajatlarini, bankdagi operatsiyalarni
              soliq, kommunal xizmatlarga qilinayotgan xarajatlarni doim nazorat
              qilib borish imkoniyati paydo boʻladi.
            </p>
            <p className="modal__text">Bo’limning umumiy imkoniyatlari:</p>
            <ul>
              <li className="modal__text">
                ● Maoshning buxgalteriya boʻlimiga doir boʻlgan operatsiyalarni
                toʻgʻridan-toʻgʻri amalga oshirish
              </li>
              <li className="modal__text">
                ● Xodimlar plastik kartasiga pul oʻtkazish, ularga naqd pul
                toʻlash, maoshdan ushlanmalarni yozib borish.
              </li>
              <li className="modal__text">
                ● Kompaniyaning istalgan soliqlarini hisoblab borish va ularni
                har oylik tizimda korxona xarajatlarida kirgizib borish.
              </li>
              <li className="modal__text">
                ● Kompaniya soliqlarini bank orqali toʻlov qilib borish.
              </li>
              <li className="modal__text">
                ● Kompaniyaning istalgan kommunal xizmatlarni hisoblab borish va
                ularni har oylik tizimda korxona xarajatlarida kirgizib borish.
              </li>
              <li className="modal__text">
                ● Kompaniyaning kommunal xizmatlarini bank orqali toʻlov qilib
                borish.
              </li>
              <li className="modal__text">
                ● Bank orqali boʻladigan barcha xarajatlarni toʻgʻri yuritish
                uchun kiritib borish va yuritish orqali kompaniyaning hisob
                raqamini kirim chiqimlarini toʻliq nazorat qilish mumkin.
              </li>
              <li className="modal__text">
                ● Kompaniya faoliyatida turli shaxslar bilan pul
                oldi-berdisining hisob-kitoblarini yuritish imkoniyati.
              </li>
              <li className="modal__text">
                ● Xodimlarga hisoblangan maoshlarni va maoshdan tashqari pullar
                berish.
              </li>
              <li className="modal__text">
                ● Kompaniya mijozlari, taʼminotchilari, turli shaxslar firmalari
                rekvizitlarini oson topish, rus va oʻzbek tilidagi hisob
                fakturalarga oson kiritish va qulay foydalanish.
              </li>
              <li className="modal__text">
                ● Kompaniyaning barcha tuzilgan shartnomalar roʻyxati.
              </li>
              <li className="modal__text">
                ● Kommunal xizmatlarga, soliqlarga, turli shaxslarga
                qilinayotgan harajatlar hisoboti alohida holatda doim avtomatik
                yangilanib boradi.
              </li>
              <li className="modal__text">
                ● Xodimlarning maoshdan turli ushlanmalar hisoboti orqali
                istalgan oydagi maosh ushlanmalar tarixini koʻrish mumkin.
              </li>
            </ul>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default Directions;
