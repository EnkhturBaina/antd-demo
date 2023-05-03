import React from "react";
import { Table } from "react-bootstrap";
import CT_1_Hudulguun from "./CT_1_Hudulguun.PNG";
import CT_1_MEDREHUI from "./CT_1_MEDREHUI.PNG";
import CT_1_img from "./CT_1_img.PNG";
import CT_1_NUD_1 from "./CT_1_NUD_1.PNG";
import CT_1_NUD_2 from "./CT_1_NUD_2.PNG";
import CT_1_NUD_3 from "./CT_1_NUD_3.PNG";
import CT_1_NUD_4 from "./CT_1_NUD_4.PNG";
import CT_1_NUD_5 from "./CT_1_NUD_5.PNG";
import CT_1_NUD_6 from "./CT_1_NUD_6.PNG";
import CT_1_DOTOOD_1 from "./CT_1_DOTOOD_1.PNG";
import CT_1_DOTOOD_2 from "./CT_1_DOTOOD_2.PNG";
import CT_1_DOTOOD_3 from "./CT_1_DOTOOD_3.PNG";
import CT_1_DOTOOD_4 from "./CT_1_DOTOOD_4.PNG";
import CT_1_DOTOOD_5 from "./CT_1_DOTOOD_5.PNG";

//маягт СТ-1
function CT_1_ARIS() {
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
            <b>АРЬСНЫ ЭМЧИЙН ҮЗЛЭГ</b>
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
                  <b>Арьс, салст, дайвруудын үзлэг:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Арьсны хүрэлцэх мэдрэхүйн байдал:</b> □ Мэдэрч байна □
                  Мэдрэхгүй байна
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>Арьсны байдал:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Арьсны өнгө:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Улаан цоохор</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>□ Зэвхий саарал</div>
                  <div style={styles.topText}>□ Шар</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Шарангуй</div>
                  <div style={styles.topText}>□ Хүрэн</div>
                  <div style={styles.topText}>□ Харласан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Хөхөрсөн</div>
                  <div style={styles.topText}>□ Цайж алагласан</div>
                  <div style={styles.topText}>□ Хүрэл шиг</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Уян чанар
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>□ Алдагдсан</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Арьсны халуун
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Халуун</div>
                  <div style={styles.topText}>□ Хүйтэн</div>
                </td>
                <td style={styles.topText}>
                  Чийглэг байдал
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>□ Багассан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Хэсэг газрын үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>Тууралтын онцлог</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Өнгө: □ Бор
                  <div style={styles.topText}>□ Ягаан □ Хар</div>
                  <div style={styles.topText}>□ Улаан □ Хөх</div>
                  <div style={styles.topText}>□ Цагаан □ Саарал</div>
                  <div style={styles.topText}>□ Цайвар бор □ Шар</div>
                </td>
                <td style={styles.topText}>
                  Хүрээ:
                  <div style={styles.topText}>□ Хил хязгаар нь тод</div>
                  <div style={styles.topText}>
                    □ Тод бус (well defined) (Illdefined)
                  </div>
                </td>
                <td style={styles.topText}>
                  Хэлбэр:
                  <div style={styles.topText}>□ Дугараг</div>
                  <div style={styles.topText}>□ Зууван</div>
                  <div style={styles.topText}>□ Олон талт</div>
                  <div style={styles.topText}>□ Олон цагирагт</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Зоос хэлбэрийн</div>
                  <div style={styles.topText}>□ Могой хэлбэрийн</div>
                  <div style={styles.topText}>□ Шугаман</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Тэмтрэхэд: □ Хатуувтар
                  <div style={styles.topText}>□ Тогтоц нь □ Нягт хатуу</div>
                  <div style={styles.topText}>□ Зөөлөн □ Бамбалзсан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Даргар</div>
                  <div style={styles.topText}>□ Халуун</div>
                  <div style={styles.topText}>□ Хүйтэн</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Хөдөлгөөнтэй</div>
                  <div style={styles.topText}>□ Хөдөлгөөнгүй</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эмх цэгц, хэв маяг болон тархалт
                  <div style={styles.topText}>
                    Тоо хэмжээ: □ Нэг □ Олон тууралт
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Эмх цэгц: □ Бүлэглэсэн □ Тархсан
                  <div style={styles.topText}>Нягтрал: □ Байгаа □ Байхгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Тархац: Тэлэлт:</td>
                <td style={styles.topText} colSpan={2}>
                  Байрлалт
                </td>
                <td style={styles.topText}>□ Хурууны завсар</td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дангараа
                  <div style={styles.topText}>□ Нэг хэсэг (хэсэгчилсэн)</div>
                  <div style={styles.topText}>□ Хэсэг газрыг хамарсан</div>
                  <div style={styles.topText}>□ Бүх биеэр тархсан</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.topText}>□ 2 талд тэгш</div>
                  <div style={styles.topText}>□ Тэгш бус</div>
                  <div style={styles.topText}>□ Өртсөн хэсэгт </div>
                  <div style={styles.topText}>□ Даралттай хэсэгт</div>
                </td>
                <td style={styles.topText}>
                  □ Энд тэнд
                  <div style={styles.topText}>□ Blaschko-н шугам дагуу</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1_ARIS;
