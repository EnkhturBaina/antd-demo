import React from "react";
import { Table } from "react-bootstrap";
import CT_1_NUD_1 from "./CT_1_NUD_1.PNG";
import CT_1_NUD_2 from "./CT_1_NUD_2.PNG";
import CT_1_NUD_3 from "./CT_1_NUD_3.PNG";
import CT_1_NUD_4 from "./CT_1_NUD_4.PNG";
import CT_1_NUD_5 from "./CT_1_NUD_5.PNG";
import CT_1_NUD_6 from "./CT_1_NUD_6.PNG";
import CT_1_NUD_7 from "./CT_1_NUD_7.PNG";

//маягт СТ-1
function CT_1_CHIX_HAMAR() {
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
            <b>ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</b>
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
                  <b>ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хамрын амьсгал:
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>
                    □ Саадтай /баруун, зүүн, 2 талд адил/
                  </div>
                </td>
                <td style={styles.topText}>
                  Гадна хамрын хэлбэр:
                  <div style={styles.topText}>□ Зөв</div>
                  <div style={styles.topText}>□ Зөв бус</div>
                </td>
                <td style={styles.topText}>
                  Тэмтрэхэд:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хамрын үүдэвч:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Ерөнхий хөндий:
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Саадтай</div>
                </td>
                <td style={styles.topText}>
                  Хамрын таславч:
                  <div style={styles.topText}>□ Муруйлтгүй</div>
                  <div style={styles.topText}>□ Муруйсан</div>
                  <div style={styles.topText}>□ Бусад өөрчлөлттэй</div>
                </td>
                <td style={styles.topText}>
                  <img src={CT_1_NUD_1} width={200} />
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хамрын салст бүрхүүл:
                  <div style={styles.topText}>□ Ягаан</div>
                  <div style={styles.topText}>□ Улаан ягаан</div>
                  <div style={styles.topText}>□ Хөхөлбий</div>
                  <div style={styles.topText}>□ Цайвар</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  Самалдгууд:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хөөнгө</div>
                  <div style={styles.topText}>□ Бусад өөрчлөлттэй</div>
                  <div style={styles.topText}>Хамрын жим:</div>
                  <div style={styles.topText}>□ Ялгадасгүй</div>
                  <div style={styles.topText}>□ Ялгадастай</div>
                </td>
                <td style={styles.topText}>
                  Ялгадас:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>Эмгэг шинжтэй:</div>
                  <div style={styles.topText}>□ Идээрхэг □ Ногоон</div>
                  <div style={styles.topText}>□ Үнэртэй □ Өтгөн</div>
                  <div style={styles.topText}>□ Бусад өөрчлөлттэй</div>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <img src={CT_1_NUD_2} width="100%" height={100} />
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  Бүсийн лимфийн булчирхайн байдал:
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  <b>Баруун, зүүн чих:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Гадна чихний хэлбэр:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Тэмтрэхэд:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
                <td style={styles.topText}>
                  Хөхлөг сэртэн:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хавантай</div>
                </td>
                <td style={styles.topText}>
                  Тэмтрэхэд:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <img src={CT_1_NUD_3} width="50%" height={80} />
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Чихний гадна суваг:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>
                    □ Нарийссан (төрөлхийн, олдмол){" "}
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Саадтай</div>
                  <div style={styles.topText}>□ Ялгадасгүй</div>
                  <div style={styles.topText}>
                    □ Ялгадастай: (идээрхэг, үнэртэй, ногоон){" "}
                  </div>
                </td>
                <td style={styles.topText}>
                  Сувгийн хана:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Цүлхийсэн (аль хана)</div>
                </td>
                <td style={styles.centerText}>
                  <img src={CT_1_NUD_4} width="100%" height={80} />
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэнгэргэн хальс:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>□ Бусад</div>
                  <div style={styles.topText}>□ Сувдан саарал</div>
                  <div style={styles.topText}>□ Улаан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Цооролтын байрлал</div>
                  <div style={styles.topText}>□ Цооролтын хэмжээ</div>
                  <div style={styles.topText}>Хэнгэргэн хөндийн салст:</div>
                  <div style={styles.topText}>□ Цайвар ягаан</div>
                  <div style={styles.topText}>□ Улаан</div>
                  <div style={styles.topText}>□ Эмгэг өөрчлөлт</div>
                </td>
                <td style={styles.centerText} colSpan={2}>
                  <img src={CT_1_NUD_5} width="100%" height={100} />
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  Бүсийн лимфийн булчирхайн байдал:
                  ________________________________________________
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хөглүүрийн сорил:
                  <div style={styles.topText}>□ Ринне</div>
                  <div style={styles.topText}>□ Вебер</div>
                  <div style={styles.topText}>□ Желле</div>
                  <div style={styles.topText}>□ Вальсалва</div>
                </td>
                <td style={styles.topText}>
                  Сонсголын бичлэг:
                  <div style={styles.topText}>________________</div>
                  <div style={styles.topText}>________________</div>
                  <div style={styles.topText}>Зэрэг:</div>
                  <div style={styles.topText}>________________</div>
                  <div style={styles.topText}>________________</div>
                </td>
                <td style={styles.topText}>
                  Ам ангайлт:
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Хязгаарлагдсан</div>
                  <div style={styles.topText}>Хүүхэн хэл:</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Зөөлөн тагнай:
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус</div>
                  <div style={styles.topText}>Тагнайн гүйлс:</div>
                  <div style={styles.topText}>□ Хэвийн □ Томорсон</div>
                  <div style={styles.topText}>□ 1-р зэрэг □ 2-р зэрэг</div>
                  <div style={styles.topText}>□ 3-р зэрэг □ Бусад өөрчлөлт</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <img src={CT_1_NUD_6} width="100%" height={100} />
                </td>
                <td style={styles.topText}>
                  Архаг үрэвслийн шинж:
                  <div style={styles.topText}>□ Зак</div>
                  <div style={styles.topText}>□ Гисс</div>
                  <div style={styles.topText}>□ Преображенский</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  Лакуны байдал:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Өргөссөн</div>
                  <div style={styles.topText}>Залгиурын ар хана:</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Залгиурын хажуу хана:
                  <div style={styles.topText}>□ Хэвийн </div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Шувтан хонхрын байдал:</div>
                  <div style={styles.topText}>□ Хэвийн </div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төвөнхийн гадна үзлэг:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Тэмтрэхэд:</div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
                <td style={styles.topText}>
                  Нуржигнах:
                  <div style={styles.topText}>□ Чимээтэй</div>
                  <div style={styles.topText}>□ Чимээгүй</div>
                  <div style={styles.topText}>
                    Төвөнхийн шууд бус тольдолтоор:
                  </div>
                  <div style={styles.topText}>Амьсгалын үйл ажиллагаа:</div>
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Саалтай</div>
                </td>
                <td style={styles.topText}>
                  Халхавч мөгөөрс:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Төвөнхийн салст:</div>
                  <div style={styles.topText}>□ Цайвар ягаан</div>
                  <div style={styles.topText}>□ Улаан</div>
                  <div style={styles.topText}>□ Цайвар</div>
                </td>
                <td style={styles.topText}>
                  Утгуур мөгөөрс
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Дууны туслах хөвчүүд:</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Жинхэнэ хөвч:</div>
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <img src={CT_1_NUD_7} width="100%" height={100} />
                </td>
                <td style={styles.topText}>
                  Дууны өнгө: □ Хэвийн □ Хэвийн бус
                  <div style={styles.topText}>
                    Фонаци хийх үед: (Дууны хөвчүүд бүрэн гадаргуугаар
                    шүргэлцэнэ)
                  </div>
                  <div style={styles.topText}>
                    Дууны хөвчүүдийн үйл ажиллаггааны хямрал:
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Дууны хөвчийн доод зайн байдал: _____
                  <div style={styles.topText}>ЦМХоолой цагираг:</div>
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус □ Өнгө</div>
                  <div style={styles.topText}>
                    Бүсийн лимфийн булчирхайн байдал:
                  </div>
                  <div style={styles.topText}>
                    Бусад:______________________________{" "}
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

export default CT_1_CHIX_HAMAR;
