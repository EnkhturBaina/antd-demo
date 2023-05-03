import React from "react";
import { Table } from "react-bootstrap";
import CT_1_Hudulguun from "./CT_1_Hudulguun.PNG";
import CT_1_MEDREHUI from "./CT_1_MEDREHUI.PNG";
import CT_1_img from "./CT_1_img.PNG";

//маягт СТ-1
function CT_1_MEDREL() {
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
            <b>МЭДРЭЛИЙН ЭМЧИЙН ҮЗЛЭГ</b>
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
                <td style={styles.centerText}>
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
                <td style={styles.topText}>□ Хэвийн □ Хэвийн бус_________</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={2}>
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
                <td style={styles.topText} colSpan={3}>
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
                <td style={styles.topText}>
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
                <td style={styles.topText} colSpan={3}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
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
                <td style={styles.topText} colSpan={3}>
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
                <td style={styles.topText}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  <b>МЭДРЭЛИЙН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Ухаан санааны байдал:
                  <div style={styles.topText}>□ Саруул</div>
                  <div style={styles.topText}>□ Саруул бус: ___________</div>
                  <div style={styles.topText}>□ Баримжаалал алдагдсан:</div>
                  <div style={styles.topText}>□ Цаг хугацааны</div>
                  <div style={styles.topText}>□ Орон зайн</div>
                  <div style={styles.topText}>□ Өөрийн</div>
                  <div style={styles.topText}>
                    <b>GCS: E ___V___ М___ </b>
                  </div>
                </td>
                <td style={styles.topText}>
                  Сэтгэцийн байдал:
                  <div style={styles.topText}>
                    □ Анхаарал:__________________________
                  </div>
                  <div style={styles.topText}>
                    □ Ой тогтоолт:________________________
                  </div>
                  <div style={styles.topText}>
                    □ Тоолох чадвар:______________________
                  </div>
                  <div style={styles.topText}>
                    □ Бүтээх чадвар: ______________________
                  </div>
                  <div style={styles.topText}>
                    □ Сэтгэл хөдлөл: ______________________
                  </div>
                  <div style={styles.topText}>
                    □ Зан төрх: ___________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  Хэл ярианы байдал:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ойлгохын хэлгүйдэл</div>
                  <div style={styles.topText}>□ Ярихын хэлгүйдэл</div>
                  <div style={styles.topText}>□ Нэрлэхийн хэлгүйдэл</div>
                  <div style={styles.topText}>□ Уншихгүйдэл</div>
                  <div style={styles.topText}>□ Бичихгүйдэл</div>
                  <div style={styles.topText}>□ Давтан хэлэх чадвар</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Гавал тархины мэдрэлүүд:</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={4} rowSpan={14}>
                  I:  Хэвийн  Хэвийн бус: Б ___ З ___
                  <div style={styles.topText}>II:</div>
                  <div style={styles.topText}>
                    ХХХ: Б__ З__ (мм){" "}
                    <span style={{ marginLeft: 100 }}>Харах чадал:</span>
                  </div>
                  <div style={styles.topText}>
                    Гэрлийн гурвал:
                    <span style={{ marginLeft: 100 }}>Б: ____ З: ____ </span>
                  </div>
                  <div style={styles.topText}>
                    Шууд: Б___З___
                    <span style={{ marginLeft: 100 }}>Харааны талбай:</span>
                  </div>
                  <div style={styles.topText}>Шууд бус: Б___ З___</div>
                  <div style={styles.topText}>
                    Нүдний уг: _____________________________
                  </div>
                  <div style={styles.topText}>III-IV-VI:</div>
                  <div style={styles.topText}>
                    Птоз: Б___ З___{" "}
                    <span style={{ marginLeft: 100 }}>Нистагм:</span>
                  </div>
                  <div style={styles.topText}>
                    Диплопи:  Эерэг  Сөрөг  Илрээгүй  Илэрсэн
                  </div>
                  <div style={styles.topText}>НХБ:  Хэвийн  Хэвийн бус</div>
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={4}
                >
                  VII:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Нүдний анилт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Духны атираа
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хамар уруулын нугалаа
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={3}
                >
                  VIII:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Сонсгол
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Чих шуугих
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={3}
                >
                  IX, X:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хүүхэн хэлний хазайлт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Залгиурын рефлекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                   Дисфони  Дисфаги
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={3}
                >
                  XI:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Стерноклейдомастойд
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Трапец хэлбэрт булчин
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  V:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  XII:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Нүүрний мэдрэхүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэлний хазайлт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
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
                <td rowSpan={2}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Эвэрлэгийн рефлекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={2}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хатангиршил/татвалзал
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Зажлуурын булчингийн хүч
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Дизартри/анартри
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Хөдөлгөөний тогтолцоо
                </td>
                <td style={styles.topText} colSpan={4}>
                  Мэдрэхүйн тогтолцоо
                </td>
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.topText, ...{ width: "50%" } }}>
                  <b>
                    Булчингийн хүч{" "}
                    <span style={{ marginLeft: 30 }}> Рефлексүүд</span>
                  </b>
                  <img src={CT_1_Hudulguun} style={{ width: 200 }} />
                  <div style={styles.topText}>
                    <b>Эмгэг рефлекс:</b>  Бөхийх  Гэдийх
                  </div>
                  <div style={styles.topText}>
                    <b>Булчингийн тонус:</b>
                  </div>
                  <div style={styles.topText}> Хэвийн  Ихэссэн  Буурсан</div>
                  <div style={styles.topText}>
                     Хэвийн бус:  БГ  БХ ЗГ ЗХ
                  </div>
                </td>
                <td style={{ ...styles.topText, ...{ width: "25%" } }}>
                  <img src={CT_1_MEDREHUI} style={{ width: 170 }} />
                </td>
                <td style={{ ...styles.topText, ...{ width: "25%" } }}>
                  Өнгөц мэдрэхүй– Өн
                  <div style={styles.topText}>Гүний мэдрэхүй- Г</div>
                  <div style={styles.topText}>Температур - Т</div>
                  <div style={styles.topText}>Өвдөлт- Өв</div>
                  <img src={CT_1_img} style={{ width: 170 }} />
                </td>
              </tr>
            </tbody>
          </Table>{" "}
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  {" "}
                  7. Тэнцвэрийн тогтолцоо
                </td>
                <td colSpan={4} style={styles.leftText}>
                  {" "}
                  7. Тэнцвэрийн тогтолцоо
                </td>
              </tr>
              <tr>
                <td rowSpan={3} colSpan={4}>
                  Зогсох тэнцвэр:  Хэвийн  Хэвийн бус____
                  <div style={styles.topText}>
                    Явах тэнцвэр:  Хэвийн  Хэвийн бус_____
                  </div>
                  <div style={styles.topText}>
                    Шугаман алхалт: Хурдан солигдох хөдөлгөөн:
                  </div>
                  <div style={styles.topText}>
                     Хэвийн  Хэвийн бус  Хэвийн___________
                  </div>
                  <div style={styles.topText}> Дисдиадохокинез</div>
                  <div style={styles.topText}>
                    Ромбергийн сорил: БГ БХ ЗГ ЗХ
                  </div>
                  <div style={styles.topText}> Эерэг  Сөрөг</div>
                </td>
                <td style={styles.topText} colSpan={4}>
                   Дагзны хөшингө:_ хуруу  Кернигийн шинж: Б__ З__
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  9. Ёзоорын хамшинж:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                   Ласегийн шинж: Б_ З _
                  <div style={styles.topText}> Мацкевичийн шинж: Б_ З_</div>
                  <div style={styles.topText}>
                     Сколиоз  Нурууны булчингийн чангарал
                  </div>
                </td>
              </tr>
              <tr>
                <td rowSpan={4} style={styles.leftText}>
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
                <td colSpan={4} style={styles.leftText}>
                  10. Вегататив үйлийн байдал
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Өсгий-өвдөг-шилбэний
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td colSpan={4} rowSpan={3} style={styles.leftText}>
                   Хөлрөлт: ___________  Пигментаци:__________
                  <div style={styles.topText}>
                     Вазомотор урвал:_______  Симпаталги:_________
                  </div>
                  <div style={styles.topText}>
                     Тэжээрлийн байдал:_____________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хуруу-хамрын сорил
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Дисметри:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  11. Бусад шинжүүд:
                </td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  12. Байршлын болон клиникийн онош:
                </td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>{" "}
    </>
  );
}

export default CT_1_MEDREL;
