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
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 40,
      lineHeight: 1,
      fontSize: 11,
      textAlign: "center",
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
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Гүйлсэн булчирхай:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Үрэвсээгүй</div>
                  <div style={styles.rowStyle}>□ Үрэвссэн</div>
                  <div style={styles.rowStyle}>□ Бусад</div>
                  <div style={styles.rowStyle}>_________________________</div>
                  <div style={styles.rowStyle}>_________________________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Хэл:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Чийглэг</div>
                  <div style={styles.rowStyle}>□ Хуурай</div>
                  <div style={styles.rowStyle}>□ Өнгөртэй</div>
                  <div style={styles.rowStyle}>□ Өнгөргүй</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Зүрхний авиа:</b>
                  </div>
                  <div style={styles.rowStyle}>Тод, бүдэг</div>
                  <div style={styles.rowStyle}>
                    <b>Хэм:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Жигд
                    <span style={{ marginLeft: 10 }}>□ Жигд бус</span>
                    <span style={{ marginLeft: 10 }}>□ Түргэссэн</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Удааширсан
                    <span style={{ marginLeft: 10 }}>□ Хэм алдагдсан</span>
                  </div>
                  <div style={styles.rowStyle}>□ Акцент______________,</div>
                  <div style={styles.rowStyle}>
                    Эмгэг шуугиан + - хүчдэл,дүүрэлт
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Амьсгалын тогтолцоо: Хамар сарталзах шинж:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Илэрсэн</div>
                  <div style={styles.rowStyle}>□ Илрээгүй</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Цээж хонхолзох шинж:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Илрээгүй</div>
                  <div style={styles.rowStyle}>□ Тод илэрсэн</div>
                  <div style={styles.rowStyle}>□ Сул илэрсэн</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Хамрын амьсгал:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Чөлөөтэй</div>
                  <div style={styles.rowStyle}>□ Саадтай</div>
                  <div style={styles.rowStyle}>□ Тийм бол ямар:</div>
                  <div style={styles.rowStyle}>_________________________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Амьсгал авалт саадтай эсэх:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тийм</div>
                  <div style={styles.rowStyle}>□ Үгүй</div>
                  <div style={styles.rowStyle}>
                    <b>Амьсгал гаргалт саадтай эсэх:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тийм</div>
                  <div style={styles.rowStyle}>□ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Амьсгалын хэлбэр:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Цээжний</div>
                  <div style={styles.rowStyle}>□ Хэвлийн</div>
                  <div style={styles.rowStyle}>□ Холимог</div>
                  <div style={styles.rowStyle}>
                    <b>Ханиалгалт:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тийм</div>
                  <div style={styles.rowStyle}>□ Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Амьсгалд цээжний туслах булчин:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Оролцоно</div>
                  <div style={styles.rowStyle}>□ Оролцохгүй</div>
                  <div>
                    <b>Дууны доргион:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Суларсан</div>
                  <div style={styles.rowStyle}>□ Хүчтэй</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Чагналтаар:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Цулцангийн</div>
                  <div style={styles.rowStyle}>□ Ширүүссэн</div>
                  <div style={styles.rowStyle}>□ Гуурсан хоолойн</div>
                  <div style={styles.rowStyle}>□ Суларсан</div>
                  <div style={styles.rowStyle}>□ Дүлий</div>
                  <div style={styles.rowStyle}>
                    <b>Амьсгалын эмгэг шуугиан::</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хяхтнасан</div>
                  <div style={styles.rowStyle}>□ Шуугисан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Хэржигнүүр:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэржигнүүргүй</div>
                  <div style={styles.rowStyle}>
                    □ Хэржигнүүртэй: /зур/ хуурай,
                  </div>
                  <div style={styles.rowStyle}>
                    нойтон, холимог, шаржигнуур,{" "}
                  </div>
                  <div style={styles.rowStyle}>жижиг, дунд, том, байрлал</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Гялтангийн шүргэлцэх чимээ:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвлийнүзлэг</div>
                  <div style={styles.rowStyle}>□ Ердийн</div>
                  <div style={styles.rowStyle}>□ Цардгар</div>
                  <div style={styles.rowStyle}>□ Дүүрэнгэ</div>
                  <div style={styles.rowStyle}>□ Мэхгэр</div>
                  <div style={styles.rowStyle}>□ Зөөлөн</div>
                  <div style={styles.rowStyle}>□ Эмзэглэлгүй</div>
                  <div style={styles.rowStyle}>□ Эмзэглэлтэй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Хэвлийн хөндийн цочмог шинж:</b>
                  </div>
                  <div style={styles.rowStyle}>+ -</div>
                  <div style={styles.rowStyle}>
                    См___________________________
                  </div>
                  <div style={styles.rowStyle}>
                    __________________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Элэг дэлүү: </b>
                  </div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэнэ</div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэхгүй</div>
                  <div style={styles.rowStyle}>_________________________</div>
                  <div style={styles.rowStyle}>_________________________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Хагалгааны сорив:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тийм</div>
                  <div style={styles.rowStyle}>□ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Баас:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Хэвийн<span style={{ marginLeft: 10 }}>□ Шингэн</span>
                    <span style={{ marginLeft: 10 }}>□ Хатна</span>
                  </div>
                  <div style={styles.rowStyle}>
                    Суулгалт:<span style={{ marginLeft: 10 }}>□ Шингэн</span>
                    <span style={{ marginLeft: 10 }}>□ Усархаг</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Салсархаг:
                    <span style={{ marginLeft: 10 }}>□ Цусан судалтай</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Хоолны боловсроогүй үлдэгдэлтэй{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.rowStyle}>
                    <b>Баасны өнгө: </b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Шар<span style={{ marginLeft: 10 }}>□ Ногоон</span>
                    <span style={{ marginLeft: 10 }}>□ Цагаан</span>
                    <span style={{ marginLeft: 10 }}>□ Хар</span>
                    <span style={{ marginLeft: 10 }}>□ Бусад</span>
                  </div>
                  <div style={styles.rowStyle}>
                    ________________ Баасны тоо: хоногт ______ удаа
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    □ Хэвийн<span style={{ marginLeft: 10 }}>□ Ихэссэн</span>
                    <span style={{ marginLeft: 10 }}>□ Багассан</span>
                  </div>
                  <div style={styles.rowStyle}>
                    См Пастернацский /зур/ баруун + -, зүүн +-
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    <b>Хөл шилбээр хаван:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тийм</div>
                  <div style={styles.rowStyle}>□ Үгүй</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  0-2 сар хүртэлх хүүхдийн үзлэг
                </td>
                <td style={styles.centerText} colSpan={3}>
                  2 сараас дээш насны хүүхдийн үзлэг
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={3}>
                  Маш хүнд өвчин
                </td>
                <td style={styles.topText} rowSpan={3}>
                  <div style={styles.rowStyle}>□ Хооллож чадаж буй эсэх</div>
                  <div style={styles.rowStyle}>□ Татсан</div>
                  <div style={styles.rowStyle}>□ Амьсгал олширсон </div>
                  <div style={styles.rowStyle}>□ Цээж хүчтэй хонхолзсон</div>
                  <div style={styles.rowStyle}>□ Хамар сарталзсан</div>
                  <div style={styles.rowStyle}>□ Яраглаж амьсгалсан</div>
                  <div style={styles.rowStyle}>□ Чихнээс булаг гоожсон</div>
                  <div style={styles.rowStyle}>□ Зулай чинэрэлттэй</div>
                  <div style={styles.rowStyle}>□ Хүй улайж арьсруу тэлсэн </div>
                  <div style={styles.rowStyle}>
                    □ Халууралт 37.5-с дээш, эсвэл 35.5-с доош буух
                  </div>
                  <div style={styles.rowStyle}>
                    □ Арьсанд олон идээт цэврүүтэй
                  </div>
                  <div style={styles.rowStyle}>□ Унтаарсан буюу ухаангүй</div>
                  <div style={styles.rowStyle}>
                    □ Хөдөлгөөн ердийнхөөс багассан
                  </div>
                </td>
                <td rowSpan={3}></td>
                <td style={styles.verticalText}>Машхүнд өвчин</td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>□ Татсан</div>
                  <div style={styles.rowStyle}>□ Унтаарсан буюу ухаангүй</div>
                  <div style={styles.rowStyle}>□ Уух чадваргүй болсон</div>
                  <div style={styles.rowStyle}>□ Уусан бүхнээ бөөлжих</div>
                </td>
                <td rowSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Суулгалт</td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>□ Шингэн их алдалт</div>
                  <div style={styles.rowStyle}>□ Шингэн алдалт</div>
                  <div style={styles.rowStyle}>□ Шингэн алдалтгүй</div>
                  <div style={styles.rowStyle}>□ Хүнд ужиг суулгалт</div>
                  <div style={styles.rowStyle}>□ Цусан суулгалт</div>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 30 } }}>
                  Чихний өвчин
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>□Хөхлөг ургацагийн үрэвсэл</div>
                  <div style={styles.rowStyle}>□ Чихний цочмог халдвар</div>
                  <div style={styles.rowStyle}>□ Чихний архаг халдвар</div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.verticalText, ...{ height: 80 } }}
                  rowSpan={2}
                >
                  Нянгийн хэсэг газрын халдвар
                </td>
                <td rowSpan={2} style={styles.topText}>
                  <div style={styles.rowStyle}>
                    □ Хүй улайсан буюу идээ гарсан
                  </div>
                  <div style={styles.rowStyle}>□ Арьсны идээт цэврүү </div>
                  <div style={styles.rowStyle}>□ Хүй улайж арьсруу тэлсэн</div>
                </td>
                <td style={styles.verticalText} rowSpan={2}></td>
                <td style={styles.verticalText}>Хоолойн өвчин</td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>□ Залгиурын арын буглаа</div>
                  <div style={styles.rowStyle}>
                    □ Хоолой залгиурын идээт үрэвсэл
                  </div>
                  <div style={styles.rowStyle}>□ Залгиурын салстын үрэвсэл</div>
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.verticalText, ...{ height: 70 } }}
                  rowSpan={2}
                >
                  Хооллолтын бэрхшээл
                </td>
                <td rowSpan={2} style={styles.topText}>
                  <div style={styles.rowStyle}>□ Хооллолтын бэрхшээлтэй</div>
                  <div style={styles.rowStyle}>□ Хооллолтын бэрхшээлгүй</div>
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ height: 40 } }}
                >
                  Нярайн шарлалт
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>□ Төрөөд шарласан нярай</div>
                </td>
                <td style={styles.verticalText} rowSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.rowStyle}>
                    □ Гарын алга хөлийн ул, нүдний склер гар байх
                  </div>
                </td>
                <td style={styles.topText} rowSpan={3} colSpan={2}>
                  <div style={{ height: 100 }}></div>
                </td>
                <td style={styles.topText} rowSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={2}>
                  Шингэн алдалт
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowStyle} rowSpan={2}>
                    □ Хөдөлгөөн муудах
                  </div>
                  <div style={styles.rowStyle}>□ Цочромтгой</div>
                  <div style={styles.rowStyle}>□ Нүд хонхойх</div>
                  <div style={styles.rowStyle}>□ Арьсны хуниас</div>
                </td>
                <td style={styles.verticalText}></td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText} rowSpan={2}>
                  <b>Урьдчилсан онош: </b>
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  ӨОУА код
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <div style={{ height: 30 }}></div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2} rowSpan={2}>
                  <div style={{ height: 50 }}>Хийсэн эмчилгээ:</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Үзүүлэлт
                </td>
                <td style={styles.centerText}>Анхны үзлэгээр</td>
                <td style={styles.centerText}>Арга хэмжээ авсны дараахь</td>
                <td style={styles.topText} rowSpan={7}>
                  <div style={styles.topText}>Зөвлөсөн эмчилгээ:</div>
                  <div style={styles.topText}>- давтан үзлэг 1,2,3,5 хоног</div>
                  <div style={styles.topText}>
                    - хэзээ яаралтай эргэн үзүүлэхийг
                  </div>
                  <div style={styles.topText}>- зөвлөсөн эсэх</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={2}>
                  Цусны даралт
                </td>
                <td style={styles.leftText}>зүүн</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>баруун</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зүрхний цохилтын тоо</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Амьсгалын тоо</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Биеийн хэм</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Захын судасны O2 -ын хангамж</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>
            Өвчтөнг тээвэрлэхдээ: хөлөөр, сандалд, өргөж, буюу тэвэрч,
            дамнуургаар
          </div>
          <div style={styles.leftText}>
            Хэвтүүлсэн шилжүүлсэн эмнэлэг: /зур/
            ______________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Эмнэлэгт очсон цаг____________________________
            минут_______________________________
          </div>
          <div style={styles.leftText}>
            Хүлээн авсан эмчийн нэр
            гарынүсэг:________________________________________________
          </div>
          <div style={styles.leftText}>
            <b>Дуудлагын үр дүн:</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>Замд нас барсан </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}></td>
                <td style={styles.leftText}>Хаяг олдооүй</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Эмч очихоос өмнө нас барсан</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Дуудлагаа буцаасан</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Өөрсдөө эмнэлэг явсан</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Үзлэгээс татгалзсан</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Эмнэлэг хүргэсэн</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Үр дүнгүй</td>
              </tr>
            </tbody>
          </Table>
          <div>&nbsp;</div>
          <div style={styles.flexRow}>
            <div style={styles.leftText}>
              Эмчийн нэр: __________________________________________
            </div>
            <div style={styles.leftText}>
              Сувилагчийн нэр:__________________________________
            </div>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.leftText}>
              Жолоочийн нэр: _______________________________________
            </div>
            <div style={styles.leftText}>
              Ээлжийн зохицуулагчийн нэр: _______________________
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ_23Б;
