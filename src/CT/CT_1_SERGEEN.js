import React from "react";
import { Table } from "react-bootstrap";
import CT_1_SERGEEN_1 from "./CT_1_SERGEEN_1.PNG";

//маягт СТ-1
function CT_1_SERGEEN() {
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
      padding: 0,
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
      fontSize: 12,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЗҮРХНИЙ ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Харилцах бэрхшээлтэй эсэх: Тийм □ Үгүй □
                  <div style={styles.topText}>
                    Залгих чадвар бэрхшээлтэй эсэх: Тийм □ Үгүй □ (Хэрвээ тийм
                    бол хэл засалч бөглөнө )
                  </div>
                  <div style={styles.topText}>
                    Танин мэдэхүйн үйл ажиллагаа өөрчлөлттэй эсэх: Тийм □ Үгүй□
                    (Хэрвээ тийм бол хөдөлмөр засалч бөглөнө)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>
                </td>
                <td style={styles.centerText}>
                  <b>Арьс салст</b>
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
                <td style={styles.topText}>
                  Амьсгал 1 минутанд _____ удаа
                  <div style={styles.topText}>
                    Амьсгалд туслах булчин оролцож байгаа эсэх:
                  </div>
                  <div style={styles.topText}>□ тийм □ үгүй</div>
                  <div style={styles.topText}>Цээжний хэлбэр:</div>
                  <div style={styles.topText}>□ зөв □ эмгэг</div>
                  <div style={styles.topText}>Амьсгалын хэлбэр:</div>
                  <div style={styles.topText}>□ Цээжний □ хэвлийн</div>
                  <div style={styles.topText}>□ холимог</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Цээжний 2 тал амьсгалд жигд оролцох байдал:
                  <div style={styles.topText}>
                    □ жигд □ хоцорно / баруун, зүүн /
                  </div>
                  <div style={styles.topText}>
                    <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  </div>
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа)
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
                    АД баруун талд _____/____ Зүүн талд _____/______
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Хоол шингээх эрхтэн тогтолцоо </b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн</div>
                  <div style={styles.topText}>□ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй</div>
                  <div style={styles.topText}>□ Өнгөртэй</div>
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
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>Шээс бэлгийн тогтолцоо</b>
                </td>
                <td style={styles.leftText}>
                  <b>Үе мөч</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Шээх байдал
                  <div style={styles.topText}>□ Өөрөө</div>
                  <div style={styles.topText}>□ Катетераар</div>
                  <div style={styles.topText}>□ Цистостомийн гуурсаар</div>
                  <div style={styles.topText}>Хоногийн шээсний гарц</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>□ багассан</div>
                </td>
                <td style={styles.leftText}>
                  Шээсний өнгө
                  <div style={styles.topText}>□ сүрлэн шар</div>
                  <div style={styles.topText}>□ улаан шар </div>
                  <div style={styles.topText}>□ өнгөгүй</div>
                  <div style={styles.topText}>□ тунадастай</div>
                  <div style={styles.topText}>□ тунадасгүй</div>
                  <div style={styles.topText}>Шөнө шээдэг эсэх</div>
                  <div style={styles.topText}>□ тийм</div>
                  <div style={styles.topText}>□ үгүй</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.topText}>Шээс тасалддаг эсэх:</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Дутуу шээдэг эсэх</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Дүлж шээдэг эсэх:</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.topText}>Шээхэд өвдөлттэй эсэх:</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Бөөр тэмтрэлтээр:</div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>(Баруун, зүүн)</div>
                  <div style={styles.topText}>Пастернацкий</div>
                  <div style={styles.topText}>□ Баруун ______</div>
                  <div style={styles.topText}>□ Зүүн ______</div>
                </td>
                <td style={styles.leftText}>
                  Үе мөчний хэлбэр:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Өөрчлөгдсөн</div>
                  <div style={styles.leftText}>Үений хөдөлгөөн</div>
                  <div style={styles.leftText}> идэвхтэй</div>
                  <div style={styles.leftText}> идэвхгүй</div>
                  <div style={styles.leftText}> хязгаарлагдмал</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>
            <b>Бага тархины үйл ажиллагаа</b>
          </div>
          <div style={styles.leftText}>
            Нистагм: + / - салганал: (тайван байхад/ хөдөлгөхөд) өсгий шилбэний
            сорил:----------------------------------
          </div>
          <div style={styles.leftText}>
            Хамар хурууын сорил: ----------------------- Тандем алхаа:
            --------------------------- Ромберг сорил: -----------------
          </div>
          <div style={styles.leftText}>
            Солбисон хурдан хөдөлгөөн: -----------------------------------
            Алхааны атакси: -------------------------------------------
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Ухаан санааны байдал:
                  <div style={styles.topText}>□ Саруул</div>
                  <div style={styles.topText}>□ Саруул бус: </div>
                  <div style={styles.topText}>□ Баримжаалал алдагдсан:</div>
                  <div style={styles.topText}>□ Цаг хугацааны</div>
                  <div style={styles.topText}>□ Орон зайн</div>
                  <div style={styles.topText}>□ Өөрийн</div>
                </td>
                <td style={styles.leftText}>
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
                <td style={styles.leftText}>
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
                <td style={styles.topText} colSpan={8}>
                  <b>Гавал тархины мэдрэлүүд:</b>
                </td>
              </tr>
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
                  rowSpan={4}
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
                  rowSpan={4}
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
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Эвэрлэгийн рефлекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хатангиршил / татвалзал
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
                  Дизартри / анартри
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  <b>Хөдөлгөөний тогтолцоо </b>
                </td>
                <td colSpan={4} style={styles.leftText}>
                  <b>Мэдрэхүйн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td colSpan={4} rowSpan={4} style={styles.leftText}>
                  <b>Үений хөдөлгөөний далайц</b>
                  <div style={styles.topText}>Мөр</div>
                  <div style={styles.topText}>Тохой</div>
                  <div style={styles.topText}>Бугуй</div>
                  <div style={styles.topText}>Сарвуу</div>
                  <div style={styles.topText}>Түнх</div>
                  <div style={styles.topText}>Өвдөг</div>
                  <div style={styles.topText}>Шагай</div>
                  <div style={styles.topText}>
                    <b>Булчингийн хүч: </b>
                  </div>
                  <div style={styles.topText}>
                    Гар: -----------------------------------------------------
                  </div>
                  <div style={styles.topText}>
                    -------------------------------------------------------
                  </div>
                  <div style={styles.topText}>
                    Хөл: ----------------------------------------------------
                  </div>
                  <div style={styles.topText}>
                    -------------------------------------------------------
                  </div>
                  <div style={styles.topText}>
                    <b>Булчингийн тонус: </b>
                  </div>
                  <div style={styles.topText}>
                    Гар: -----------------------------------------------------
                  </div>
                  <div style={styles.topText}>
                    -------------------------------------------------------
                  </div>
                  <div style={styles.topText}>
                    Хөл: ----------------------------------------------------
                  </div>
                  <div style={styles.topText}>
                    -------------------------------------------------------
                  </div>
                </td>
                <td style={styles.centerText}>Мэдрэхүй</td>
                <td style={styles.centerText}>Хэвийн</td>
                <td style={styles.centerText}>Ихэссэн</td>
                <td style={styles.centerText}>Буурсан</td>
                <td style={styles.centerText} rowSpan={4}>
                  Үнэрлэх:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Ихэссэн</div>
                  <div style={styles.topText}> Буурсан</div>
                  <div style={styles.topText}>Сонсгол :</div>
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Ихэссэн</div>
                  <div style={styles.topText}> Буурсан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Өнгөц</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Гүн</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Хэт мэдрэгшил</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <b>Рефлекс</b>
                </td>
                <td style={styles.centerText}>
                  <b>≠ ≠</b>
                </td>
                <td style={styles.centerText}>
                  <b>≠ ≠ ≠</b>
                </td>
                <td style={styles.centerText}>
                  <b>≠</b>
                </td>
                <td style={styles.centerText} colSpan={3}>
                  <b>Эмгэг рефлекс</b>
                </td>
                <td style={styles.centerText}>
                  <b>+</b>
                </td>
                <td style={styles.centerText}>
                  <b>-</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Бицепс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}>Бабински:</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Трицепс</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}>Хоффман:</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Өвдөгний</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText} rowSpan={2}>
                  Тавхайн чичигнэлт: :
                </td>
                <td style={styles.centerText} rowSpan={2}></td>
                <td style={styles.centerText} rowSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Ахиллын</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={5}>
                  <b>Тэнцвэрийн тогтолцоо </b>
                </td>
                <td style={styles.centerText} colSpan={4}>
                  <b>Мэнэнгийн хамшинж :</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5} rowSpan={3}>
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
                <td style={styles.centerText} colSpan={4}>
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
                <td style={styles.topText} rowSpan={4}>
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={styles.topText}></td>
                <td style={styles.centerText}>Б</td>
                <td style={styles.centerText}>З</td>
                <td colSpan={5} rowSpan={4} style={styles.leftText}>
                  Өвдөлт: ฀ тийм ฀ үгүй
                  <div style={styles.topText}>
                    <img src={CT_1_SERGEEN_1} width={300} height={100} />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Өсгийн-өвдөгшилбэний</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Хуруу-хамрын сорил</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Дисметри:</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1_SERGEEN;
