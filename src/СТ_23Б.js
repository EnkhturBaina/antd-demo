import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-23Б
function СТ_23Б() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 11,
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    blankSpaces: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 11,
    },
    flexContainerTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 11,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 11,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 11,
      marginTop: 3,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-23Б
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              ХҮҮХДИЙН ТҮРГЭН ТУСЛАМЖИЙН ДУУДЛАГЫН ХУУДАС№
            </span>
          </div>
          <div style={styles.rowStyle}>
            Дуудлага авсан <span style={{ marginLeft: 50 }}>он</span>
            <span style={{ marginLeft: 50 }}>сар</span>
            <span style={{ marginLeft: 50 }}>өдөр</span>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>
              Дуудлага хүлээн авсан хүний нэр
              _________________________________________
            </div>
            <div style={styles.rowStyle}>
              <span>Яаралтай</span>
            </div>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>Дуудлага өгсөн утасны дугаар</div>
            <div style={styles.rowStyle}>
              <span>Яаралтай бус</span>
            </div>
          </div>
          <div style={styles.rowStyle}>
            Өвчтөний эцэг/эх/-ийн нэр: _________________________________________
            <span style={{ marginLeft: 100 }}>
              Нэр _________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            Нас
            <span style={{ marginLeft: 100 }}>
              Хүйс: /зур/ Эрэгтэй, Эмэгтэй
            </span>
          </div>
          <div style={styles.rowStyle}>
            Оршин суугаа
            хаяг___________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Хаягын
            тодотголын__________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Дуудлага өгсөн хүний нэр _________________________________________
            <span style={{ marginLeft: 100 }}>
              ажлын газар _________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>Дуудсан шалтгаан</div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText}>Үзүүлэлт</td>
                <td style={styles.centerText}>цаг</td>
                <td style={styles.centerText}>минут</td>
                <td style={styles.centerText}>Үзүүлэлт</td>
                <td style={styles.centerText}>цаг</td>
                <td style={styles.centerText}>минут</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Дуудлага авсан</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Гарсан</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хүлээгдсэн</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Айлд очсон</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Буцаж ирсэн</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Зарцуулсан</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            Очихоос өмнөх тусламж: /зур/ аваагүй, авсан, хэрэглэсэн эм тариа:
            _______________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Зовиур:_________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________________
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td colSpan={4} style={styles.centerText}>
                  <b>Бодит үзлэгийн хэсэг:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Биеийн ерөнхий байдал:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Дунд</div>
                  <div style={styles.rowStyle}>□ Хүндэвтэр</div>
                  <div style={styles.rowStyle}>□ Хүнд</div>
                  <div style={styles.rowStyle}>□ Маш хүнд</div>
                  <div style={styles.rowStyle}>□ Агональ</div>
                  <div style={styles.rowStyle}>□ Клиник үхэл</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Ухаан санаа:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Саруул</div>
                  <div style={styles.rowStyle}>□ Бүдгэрсэн</div>
                  <div style={styles.rowStyle}>□ Дөжрөн балартах</div>
                  <div style={styles.rowStyle}>□ Оворго</div>
                  <div style={styles.rowStyle}>□ Бусад</div>
                  <div style={styles.rowStyle}>________________________</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Орчиндоо:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Харьцаатай
                    <span style={{ marginLeft: 40 }}>□ Харьцаагүй</span>
                  </div>
                  <div style={styles.rowStyle}>
                    <b>Байрлал:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Идэвхтэй<span style={{ marginLeft: 40 }}>□ Идэвхгүй</span>
                  </div>
                  <div style={styles.rowStyle}>□ Хагас суугаа</div>
                  <div style={styles.rowStyle}>□ Албадмал</div>
                  <div style={styles.rowStyle}>□ Хэвтрийн бусад __________</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Хөдөлгөөн:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Идэвхтэй<span style={{ marginLeft: 40 }}>□ Идэвхгүй</span>
                  </div>

                  <div style={styles.rowStyle}>
                    <b>Биеийн галбир:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Тарган</div>
                  <div style={styles.rowStyle}>□ Туранхай</div>
                  <div style={styles.rowStyle}>□ Туранхайвтар</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Арьсны өнгө:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Ердийн</div>
                  <div style={styles.rowStyle}>□ Цайвар</div>
                  <div style={styles.rowStyle}>□ Цайвар ягаан</div>
                  <div style={styles.rowStyle}>□ Шар</div>
                  <div style={styles.rowStyle}>□ Саарал</div>
                  <div style={styles.rowStyle}>□ Бусад____________</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Уян чанар:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Буурсан</div>
                  <div style={styles.rowStyle}>□ Алдагдсан</div>
                  <div style={styles.rowStyle}>
                    <b>Арьсны чийглэг байдал:</b>
                  </div>

                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Ихэссэн</div>
                  <div style={styles.rowStyle}>□ Хуурайшсан</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Тууралт:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Цэвэр
                    <span style={{ marginLeft: 5 }}>□ Тууралтгүй</span>
                    <span style={{ marginLeft: 5 }}>□ Тууралттай</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Улаан
                    <span style={{ marginLeft: 5 }}>□ Толбон</span>
                    <span style={{ marginLeft: 5 }}>□ Гүвдрүүт</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Цэврүүт
                    <span style={{ marginLeft: 5 }}>□ Бэлцрүүт</span>
                    <span style={{ marginLeft: 5 }}>□ Зангилаат</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Цусархаг
                    <span style={{ marginLeft: 5 }}>□ Хөхрөлт</span>
                    <span style={{ marginLeft: 5 }}>□ Бусад</span>
                  </div>
                  <div style={styles.rowStyle}>
                    _____________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    _____________________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    Тууралтын байршил:______________
                  </div>
                  <div style={styles.rowStyle}>
                    _____________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    _____________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Захын тунгалагийн булчирхай:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэхгүй</div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэнэ___________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Булчингийн хүчдэл:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Ердийн</div>
                  <div style={styles.rowStyle}>□ Сул</div>
                  <div style={styles.rowStyle}>□ Хүчдэлгүй</div>
                  <div style={styles.rowStyle}>□ Ихэссэн</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Мэдрэлийн үзлэг:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    Дагзны хөшингө илэрсэн эсэх + -
                  </div>
                  <div style={styles.rowStyle}>
                    См Керниг + - См Брузенский + -
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Таталт:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Үгүй</div>
                  <div style={styles.rowStyle}>□ Хэсгийн</div>
                  <div style={styles.rowStyle}>□ Нилэнхүйдээ</div>
                  <div style={styles.rowStyle}>□ Шилжимхий</div>
                  <div style={styles.rowStyle}>□ Чичирхийлсэн</div>
                  <div style={styles.rowStyle}>□ Хүчдэлийн</div>
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  <b>
                    Толгойн
                    хэлбэр:____________________________________________________________________Гавлын
                    ясжилт
                  </b>
                  :/зур/ хэвийн, зөөлөн
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Зулай:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Битүүрсэн</div>
                  <div style={styles.rowStyle}>
                    □ Битүүрээгүй /тайван, хонхор, дүүрэнгэ, лугшилттай/:
                  </div>
                  <div style={styles.rowStyle}>Зулай хэмжээ:__________см</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Хүүхэн хараа:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Нарийн</div>
                  <div style={styles.rowStyle}>□ Өргөссөн</div>
                  <div style={styles.rowStyle}>□ 2 талд ижил биш</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Гэрлийн урвал: + -</b>
                  </div>
                  <div style={styles.rowStyle}>Эвэрлэгийн рефлекс: + -</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Чих:Өвдөлт:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тийм</div>
                  <div style={styles.rowStyle}>□ Үгүй</div>
                  <div style={styles.rowStyle}>
                    □ См Трагус +- /баруун,зүүн/
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

export default СТ_23Б;
