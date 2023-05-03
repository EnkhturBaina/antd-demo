import React from "react";
import { Table } from "react-bootstrap";
//маягт СТ-1
function CT_1_ZURH() {
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
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
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
                  <b>Анамнез</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Зовиур, өвчний түүх:</b>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Зүрх судасны эрсдэлт хүчин зүйлс:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  □ Зохисгүй хооллолт
                  <div style={styles.topText}>□ Хөдөлгөөний хомсдол</div>
                  <div style={styles.topText}>□ Стресс</div>
                  <div style={styles.topText}>□ Таргалалт</div>
                  <div style={styles.topText}>□ Тамхидалт</div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  □ Архины зохисгүй хэрэглээ
                  <div style={styles.topText}>□ Удамшил</div>
                  <div style={styles.topText}>□ Артерийн гипертензи</div>
                  <div style={styles.topText}>□ Гиперхолестеринеми</div>
                  <div style={styles.topText}>□ Чихрийн шижин</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  <b>Бодит үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Ажиглалт</b>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналт</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Гүнзгий тэмтэрлт:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Арьсны хөхрөлт бий эсэх:
                  <div style={styles.topText}>
                    □ Үгүй □ Тийм ______________________
                  </div>
                  <div style={styles.topText}>Захын хаван бий эсэх:</div>
                  <div style={styles.topText}>
                    □ Үгүй □ Тийм ______________________
                  </div>
                  <div style={styles.topText}>Гүрээний венийн лугшилт:</div>
                  <div style={styles.topText}>□ Ажиглагдахгүй</div>
                  <div style={styles.topText}>
                    □ Ажиглагдана (хүчтэй, дунд, сул)
                  </div>
                  <div style={styles.topText}>Зүрхний оройн түлхэлт:</div>
                  <div style={styles.topText}>
                    □ Ажиглагдана □ Ажиглагдахгүй
                  </div>
                  <div style={styles.topText}>
                    <b>Тэмтрэлт </b>
                  </div>
                  <div style={styles.topText}>
                    Зүрхний оройн түлхэлт Байрлал:
                  </div>
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус</div>
                  <div style={styles.topText}>
                    Хүч: □ дунд зэрэг □ хүчтэй □ сул
                  </div>
                  <div style={styles.topText}>Шууны артерийн лугшилт</div>
                  <div style={styles.topText}>Хэмнэл: □ жигд □ жигд бус</div>
                  <div style={styles.topText}>Давтамж: _______ /мин</div>
                  <div style={styles.topText}>
                    Хүчдэл: □ дунд зэрэг □ их □ бага
                  </div>
                  <div style={styles.topText}>Дүүрэлт: □ дунд зэрэг □ сул</div>
                  <div style={styles.topText}>
                    2 талд ижил эсэх: □ ижил □ ижил бус
                  </div>
                  <div style={styles.topText}>
                    <b>Тогшилт</b>
                  </div>
                  <div style={styles.topText}>
                    Зүрхний ( харьцангуй) хил хязгаар:
                  </div>
                  <div style={styles.topText}>
                    □ Хэвийн □ Томорсон (дээд, баруун, зүүн хил )
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Артерийн даралт хэмжилт:
                  <div style={styles.topText}>
                    □ Баруун талд: _______/______мм.муб
                  </div>
                  <div style={styles.topText}>
                    □ Зүүн талд: _______/_______мм.муб
                  </div>
                  <div style={styles.topText}>Зүрхний авиа</div>
                  <div style={styles.topText}>Хэмнэл: □ жигд □ жигд бус</div>
                  <div style={styles.topText}>Давтамж: _______ /мин</div>
                  <div style={styles.topText}>
                    I авиа: □ тод; □ бүдгэвтэр (I, IV цэгт);{" "}
                  </div>
                  <div style={{ ...styles.topText, ...{ marginLeft: 40 } }}>
                    □ бүдэг( I, IV ); □ чангарсан (I, IV цэгт)
                  </div>
                  <div style={styles.topText}>
                    II авиа: □ тод; □ бүдэг (II, III, V цэгт);
                  </div>
                  <div style={{ ...styles.topText, ...{ marginLeft: 42 } }}>
                    □ өргөгдсөн (II, III цэгт){" "}
                  </div>
                  <div style={styles.topText}>
                    III авиа: □ сонсогдоно; □ сонсогдохгүй
                  </div>
                  <div style={styles.topText}>□ Шуугиангүй</div>
                  <div style={styles.topText}>□ Шуугиантай</div>
                  <div style={styles.topText}>
                    Байрлал: I; II; III; IV; V цэг
                  </div>
                  <div style={styles.topText}>
                    Систолын (I, II, III, IV, V цэгт)
                  </div>
                  <div style={styles.topText}>
                    Диастолын (I, II, III, IV, V цэгт)
                  </div>
                  <div style={styles.topText}>□ Үл дамжина</div>
                  <div style={styles.topText}>
                    □ Дамжина ______________________
                  </div>
                  <div style={styles.topText}>
                    Хүч: □ сул ; □ дунд зэрэг; □ хүчтэй
                  </div>
                  <div style={styles.topText}>
                    Перикардын шүргэлцэх чимээ бий эсэх
                  </div>
                  <div style={styles.topText}>□ Үгүй □ Тийм</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1_ZURH;
