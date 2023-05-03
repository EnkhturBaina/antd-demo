import React from "react";
import { Table } from "react-bootstrap";
import CT_1_DOTOOD_1 from "./CT_1_DOTOOD_1.PNG";
import CT_1_DOTOOD_2 from "./CT_1_DOTOOD_2.PNG";
import CT_1_DOTOOD_3 from "./CT_1_DOTOOD_3.PNG";
import CT_1_DOTOOD_4 from "./CT_1_DOTOOD_4.PNG";
import CT_1_DOTOOD_5 from "./CT_1_DOTOOD_5.PNG";

//маягт СТ-1
function CT_1_DOTOOD() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 12,
      paddingLeft: 5,
    },
    centerText: {
      padding: 0,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      paddingLeft: 0,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 12,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 12,
      padding: 0,
      lineHeight: 1,
      marginTop: 5,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 10,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>{" "}
                </td>
                <td style={styles.centerText} colSpan={2}>
                  <b>Арьс салст</b>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дунд □ Хүндэвтэр □ Хүнд
                  <div style={styles.topText}>□ Маш хүнд</div>
                </td>
                <td style={styles.topText}>
                  □ Саруул □ Бүдгэрсэн
                  <div style={styles.topText}>□ Ухаангүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  □ Хэвийн □ Хэвийн бус_________
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={3}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Цусны эргэлтийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Судасны цохилт 1 минутанд_____ удаа
                  <div style={styles.topText}>Хүчдэл дүүрэлт______ </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон (зүүн, баруун)</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b>
                  <div style={styles.topText}>Зүрхний авиа </div>
                  <div style={styles.topText}>
                    □ Тод □ Бүдэг □ Бүдгэвтэр □ Хэм жигд
                  </div>
                  <div style={styles.topText}>□ Жигд бус □ Хэм алдалттай</div>
                  <div style={styles.topText}>
                    АД баруун талд _____/____ Зүүн талд _____/______{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хэвлийн үзлэг:
                  <div style={styles.topText}>
                    □ Өнгөц тэмтрэлтээр □ Гүн тэмтрэлтээр □ Эмзэглэлтэй
                    (байрлал____)
                  </div>
                  <div style={styles.topText}>
                    □ Ердийн □ Зөөлөн гялтан цочрол үгүй □ Гялтан цочролын шинж
                    илэрсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Сонсох чадвахи:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан (баруун, зүүн)
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <img src={CT_1_DOTOOD_1} width="80%" height={120} />
                </td>
                <td style={styles.topText}>
                  <b>Зовиур:</b>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Бамбайн томролын зэрэг:</b>
                  <div style={styles.topText}>
                    □ 0 зэрэг (Харагдахгүй, тэмтрэгдэхгүй)
                  </div>
                  <div style={styles.topText}>
                    □ 1-р зэрэг (Харагдахгүй, тэмтрэгдэнэ){" "}
                  </div>
                  <div style={styles.topText}>
                    □ 2-р зэрэг (Харагдана, тэмтрэгдэнэ)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Нүдний бүлтийлт:
                  <div style={styles.topText}>Нүдний шинж:</div>
                  <div style={styles.topText}>□ Крауссийн шинж</div>
                  <div style={styles.topText}>□ Грефийн шинж</div>
                  <div style={styles.topText}>□ Кохерийн шинж </div>
                  <div style={styles.topText}>□ Мебиусийн шинж</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Штельвагийн шинж</div>
                  <div style={styles.topText}>□ Дельримплийн шинж</div>
                  <div style={styles.topText}>□ Еленикийн шинж</div>
                  <div style={styles.topText}>□ Розенбахийн шинж</div>
                  <div style={styles.topText}>□ Боткиний шинж</div>
                  <div style={styles.topText}>□ Жоффруагийн шинж</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Марийн шинж
                  <div style={styles.topText}>
                    ____________________________________________
                  </div>
                  <div style={styles.topText}>Цахилгаан бүхээгний шинж</div>
                  <div style={styles.topText}>
                    ____________________________________________
                  </div>
                  <div style={styles.topText}>
                    Дермографизм (улаан, түргэн тогтвортой)
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <img src={CT_1_DOTOOD_5} width="80%" height={120} />
                </td>
                <td style={styles.topText} colSpan={2} rowSpan={2}>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.centerText}>Үзүүлэлт</td>
                        <td style={styles.centerText}>Хариу</td>
                        <td style={styles.centerText}>Хэвийн хэмжээ</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Чөлөөт Т3</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Чөлөөт Т4</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Нийт Т3</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Нийт Т4</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TSH</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TR-Ab</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TG-Ab</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TPO-Ab</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                    </tbody>
                  </Table>
                  <div style={styles.topText}>
                    <b>Бамбайн цөмийн изотоп шинжилгээ:</b>
                    <div style={styles.topText}>
                      ____________________________________________
                    </div>
                    <div style={styles.topText}>
                      <b>Бамбайн эсийн шинжилгээ:</b>
                    </div>
                    <div style={styles.topText}>
                      ____________________________________________
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <img src={CT_1_DOTOOD_2} width="80%" height={120} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  <b>Чихрийн шижингийн үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Чихрийн шижингийн эрсдэлт хүчин зүйлс:</b>
                  <div style={styles.leftText}>□ Тарган удам</div>
                  <div style={styles.leftText}>□ ЧШ-гийн удам</div>
                  <div style={styles.leftText}>□ Жин (хамгийн их)</div>
                  <div style={styles.leftText}>□ Гепатит</div>
                  <div style={styles.leftText}>□ Панкреатит</div>
                  <div style={styles.leftText}>□ Жирэмсний ЧШ</div>
                  <div style={styles.leftText}>□ 4 кг дээш хүүхэд</div>
                  <div style={styles.leftText}>□ Архи</div>
                  <div style={styles.leftText}>□ Тамхи</div>
                  <div style={styles.leftText}>
                    □ Хоолны дэглэм: сайн / дунд / муу
                  </div>
                  <div style={styles.leftText}>
                    □ Хөдөлгөөн: сайн / дунд / муу
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  <b>Оношлогдсон он:</b>
                  <div>&nbsp;</div>
                  <div style={styles.topText}>
                    <b>Хэрэглэдэг эмийн бэлдмэл:</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Бие бялдарын үзүүлэлт: </b>
                  <div style={styles.leftText}>□ Жин_________кг</div>
                  <div style={styles.leftText}>□ Өндөр ________ см</div>
                  <div style={styles.leftText}>
                    □ Биеийн өөхний хэмжээ_____%
                  </div>
                  <div style={{ ...styles.leftText, ...{ marginLeft: 40 } }}>
                    □ (эр&#60;25%; эм&#60;30%)
                  </div>
                  <div style={styles.leftText}>□ Бүсэлхийн тойрог______см</div>
                  <div style={{ ...styles.leftText, ...{ marginLeft: 40 } }}>
                    □ (Aзи - эр&#60;94см; эм&#60;80см)
                  </div>
                  <div style={{ ...styles.leftText, ...{ marginLeft: 40 } }}>
                    □ (Европ - эр&#60;102см; эм&#60;88см)
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  <img src={CT_1_DOTOOD_3} width="80%" height={140} />
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  Биеийн жингийн индекс (БЖИ) ________ кг/м2
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Жингийн дутагдал</td>
                <td style={styles.centerText}>Хэвийн жинтэй</td>
                <td style={styles.centerText}>Жингийн илүүдэл</td>
                <td style={styles.centerText}>Таргалалтын I зэрэг</td>
                <td style={styles.centerText}>Таргалалтын II зэрэг</td>
                <td style={styles.centerText}>Таргалалтын III зэрэг</td>
              </tr>
              <tr>
                <td style={styles.centerText}>&#60;18кг/м2</td>
                <td style={styles.centerText}>18-24.9кг/м2</td>
                <td style={styles.centerText}>25-29.9 кг/м2</td>
                <td style={styles.centerText}>30-34.9 кг/м2 </td>
                <td style={styles.centerText}>35-39.9 кг/м2</td>
                <td style={styles.centerText}>40кг/м2&#60;</td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  <b>Чихрийн шижингийн хяналт</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={6}>
                  <b>Өөрийн хяналт:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Өлөн үеийн глюкоз (&#60;6.0 ммоль/л)
                </td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Хоолны дараах глюкоз (&#60;8.0 ммоль/л)
                </td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Эмчийн хяналт:</b>
                </td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  <b>HbA1C................%</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Эрүүл</td>
                <td style={styles.centerText} colSpan={2}>
                  Сайн
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Дунд
                </td>
                <td style={styles.centerText}>Муу</td>
              </tr>
              <tr>
                <td style={styles.centerText}>4-6%</td>
                <td style={styles.centerText} colSpan={2}>
                  &#60;6.5%
                </td>
                <td style={styles.centerText} colSpan={2}>
                  6.5-7.5%
                </td>
                <td style={styles.centerText}>7.5%&#60;</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Anti- GAD/IA2 ____________________
                </td>
                <td style={styles.topText} colSpan={3}>
                  Глюкозын ачаалалтай сорил:
                  <div style={styles.leftText}>
                    □ Өлөн үеийн глюкоз__________ ммоль/л
                  </div>{" "}
                  <div style={styles.leftText}>
                    □ 2 цагийн дараах глюкоз _________ ммол
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  <b>
                    Чихрийн шижингийн хүндрэл Нүд:
                    _________________________________________________________
                  </b>
                  <div style={styles.leftText}>
                    Зүрх:
                    ___________________________________________________________________________________
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Өөх тосны үзүүлэлтүүд
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Хариу
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Хэвийн хэмжээ
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Холестерол
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 4ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  БНЛП
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 2ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  ИНЛП
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  эр&#60;1.0ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  эм&#60;1.2ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Триглицерид
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 1.7ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  ИНЛП-с бусад
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 3.3ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Холест/ИНЛП
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 5 ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={6}>
                  CRP....................... &#60;5.0мг/л
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  <b>Зүрх судасны вегетатив невропати:</b>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  <b>Бөөр: </b>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 120 } }}>
                  Үзүүлэлтүүд
                </td>
                <td style={{ ...styles.topText, ...{ width: 120 } }}>Хариу</td>
                <td style={{ ...styles.topText, ...{ width: 120 } }}>
                  Хэвийн хэмжээ
                </td>
                <td style={styles.topText} colSpan={3}>
                  <b>Микроальбуминурийн шинжилгээ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Сахар</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText} rowSpan={3}></td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}>
                  &#60;20
                </td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Кетон</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}>20-200</td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Уураг</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}>200</td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цагаан эс</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Креатинин</td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Улаан эс</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText} rowSpan={2}>
                  АКХ (Альбумин / Креатинины харьцаа)
                </td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}>
                  &#60;2.5/эр/
                </td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цилиндр</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}>
                  &#60;3.5/эм/
                </td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <img src={CT_1_DOTOOD_4} width="100%" height={100} />
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Арьсны өнгө:
                  <div style={styles.topText}>□ Хэвийн □ Өөрчлөлттэй</div>
                  <div style={styles.topText}>Арьс хуурайшилт:</div>
                  <div style={styles.topText}>□ Хэвийн □ Өөрчлөлттэй</div>
                  <div style={styles.topText}>Хумсны байдал:</div>
                  <div style={styles.topText}>□ Хэвийн □ Өөрчлөлттэй</div>
                  <div style={styles.topText}>Хөлийн хэлбэр</div>
                  <div style={styles.topText}>□ Хэвийн □ Өөрчлөлттэй</div>
                </td>
                <td style={styles.leftText}>
                  Дараах өөрчлөлт илэрсэн эсэх:
                  <div style={styles.topText}>□ Эвэр</div>
                  <div style={styles.topText}>□ Үрэвсэл</div>
                  <div style={styles.topText}>□ Зузаарал</div>
                  <div style={styles.topText}>□ Шарх</div>
                  <div style={styles.topText}>□ Хагарал</div>
                  <div style={styles.topText}>□ Ампутаци</div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хөлийн судасны лугшилт:
                  <div style={styles.topText}>a.pedis dorsalis:</div>
                  <div style={styles.topText}>□ Хэвийн □ Сул</div>
                  <div style={styles.topText}>□ Тэмтрэгдэхгүй</div>
                  <div style={styles.topText}>a.tibialis posterior:</div>
                  <div style={styles.topText}>□ Хэвийн □ Сул</div>
                  <div style={styles.topText}>□ Тэмтрэгдэхгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={6}>
                  Хөлийн мэдрэхүй: /тэмдэглэ/
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Доргионы:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Сул</div>
                  <div style={styles.topText}>□ Тэмтрэгдэхгүй</div>
                </td>
                <td style={styles.leftText}>
                  Хүрэлцэхүйн:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Сул</div>
                  <div style={styles.topText}>□ Тэмтрэгдэхгүй</div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Температурын:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Сул</div>
                  <div style={styles.topText}>□ Тэмтрэгдэхгүй</div>
                </td>
                <td style={styles.leftText}>
                  Өвдөлтийн:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Сул</div>
                  <div style={styles.topText}>□ Тэмтрэгдэхгүй</div>
                </td>
                <td style={styles.leftText}>
                  Монофиламент:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Сул</div>
                  <div style={styles.topText}>□ Тэмтрэгдэхгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={6}>
                  Шагай, Бугалганы индекс: □ Баруун: □ Зүүн:
                  <div style={styles.topText}>
                    Борвины рефлекс: □ Баруун: □ Зүүн:
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1_DOTOOD;
