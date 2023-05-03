import React from "react";
import { Table } from "react-bootstrap";
//маягт СТ-1
function CT_1_HOOL() {
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
            <b>ХООЛ БОЛОВСРУУЛАХ ЭРХТНИЙ ЭМЧИЙН ҮЗЛЭГ</b>
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
                  <b>ХООЛ БОЛОВСРУУЛАХ ТОГТОЛЦООНЫ ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Зовуурь:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Өвчний эхлэл явц:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Эрсдэлт хүчин зүйлс:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  □ Архи
                  <div style={styles.topText}>□ Тамхи (хайрцаг\жил __)</div>
                  <div style={styles.topText}>□ Бусад хорт зуршил</div>
                  <div style={styles.topText}>□ Ажлын таагүй нөхцөл</div>
                </td>
                <td style={styles.centerText}>
                  □ Стресс
                  <div style={styles.topText}>□ Харшил</div>
                  <div style={styles.topText}>□ Удамшил</div>
                  <div style={styles.topText}>
                    □ ХБЭ-ны эмгэгээр өвдөж байсан
                  </div>
                  <div style={styles.topText}>
                    □ Хэвлийд мэс засал хийлгэсэн
                  </div>
                </td>
                <td style={styles.centerText}>
                  □ Хавсарсан хүнд эмгэг
                  <div style={styles.topText}>□ Шарласан</div>
                  <div style={styles.topText}>□ Хоолны дэглэм</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Хийсэн эмчилгээ:</b>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Харж ажиглах:</b> Хэл өнгөртэй эсэх:
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Арьс, салст–чийглэг</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                  <div style={styles.topText}>Өнгө ______________</div>
                </td>
                <td style={styles.topText}>
                  Хэвлийн – хэм
                  <div style={styles.topText}>□ Жигд</div>
                  <div style={styles.topText}>□ Жигд бус</div>
                  <div style={styles.topText}>Хэлбэр ________</div>
                </td>
                <td style={styles.topText}>
                  <b>Тэмтрэлт:</b>
                  <div style={styles.topText}>
                    Өнгөц тэмтрэлт – хэвлий эмзэглэлтэй эсэх
                  </div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>
                    Булчингийн чангарал байгаа эсэх:
                  </div>
                  <div style={styles.topText}>□ Тийм □ Үгүй </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Гүнзгий тэмтэрлт:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Тахир гэдэс – байрлал
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>Тогтоц</div>
                  <div style={styles.topText}>□ Хатуу</div>
                  <div style={styles.topText}>□ Зөөлөн</div>
                  <div style={styles.topText}>Хөдөлгөөнтэй</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Тогтоц
                  <div style={styles.topText}>□ Хатуу</div>
                  <div style={styles.topText}>□ Зөөлөн</div>
                  <div style={styles.topText}>Хөдөлгөөнтэй</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Хөндлөн гэдэс - байрлал</div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>Тогтоц</div>
                  <div style={styles.topText}>□ Хатуу</div>
                  <div style={styles.topText}>□ Зөөлөн</div>
                </td>
                <td style={styles.topText}>
                  Хөдөлгөөнтэй
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Цутгалан гэдэс - байрлал</div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>Тогтоц</div>
                  <div style={styles.topText}>□ Хатуу</div>
                  <div style={styles.topText}>□ Зөөлөн</div>
                  <div style={styles.topText}>Хөдөлгөөнтэй</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
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
                <td style={styles.leftText}>
                  <b>Тогшилт:</b>
                  <div style={styles.topText}>Хэвлийн хэнгэрэгэн чимээ:</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                </td>
                <td style={styles.leftText}>
                  Ихэссэн хэсэгт тогшилтын дуу
                  <div style={styles.topText}>□ Бүдгэрсэн</div>
                  <div style={styles.topText}>□ Тодорсон</div>
                  <div style={styles.topText}>□ Дүлий болсон</div>
                </td>
                <td style={styles.leftText}>
                  <b>Чагналт: </b>
                  <div style={styles.topText}>
                    Гэдэсний гүрвэлзэх хөдөлгөөн:
                  </div>
                  <div style={styles.topText}>□ Хэвийн □ Ихэссэн</div>
                  <div style={styles.topText}>□ Хэвийн □ Дүлий</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>
                    Хэвлийн рентген шинжилгээ КТГ, хэт авиан шинжилгээ
                    <div>&nbsp;</div>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>
                    Дурангийн шинжилгээ:
                    <div>&nbsp;</div>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Улаан хоолой</b>
                  <div style={styles.topText}>
                    □ Салстын өнгө ______________
                  </div>
                  <div style={styles.topText}>□ Хаван ____________________</div>
                  <div style={styles.topText}>
                    □ Z шугам ___________________
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Хөдөлгөөн _____________</div>
                  <div style={styles.topText}>□ Шалбархай – хэмжээ______</div>
                  <div style={styles.topText}>□ Тоо ________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Байрлал ______________</div>
                  <div style={styles.topText}>□ Хэлбэр _______________</div>
                  <div style={styles.topText}>□ Өнгөр ________________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Ходоод:</b>
                  <div style={styles.topText}>
                    Амсар - салстын өнгө _________
                  </div>
                  <div style={styles.topText}>Хаван _____________________</div>
                  <div style={styles.topText}>Хөдөлгөөн _________________</div>
                  <div style={styles.topText}>Шалбархай – хэмжээ _________</div>
                  <div style={styles.topText}>Хэлбэр _____________________</div>
                  <div style={styles.topText}>Өнгөр _____________________</div>
                  <div style={styles.topText}>Тоо ______</div>
                  <div style={styles.topText}>Байрлал ____________________</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.topText}>
                    Их бие - салстын өнгө _______
                  </div>
                  <div style={styles.topText}>Хаван ____________________</div>
                  <div style={styles.topText}>Хөдөлгөөн ________________</div>
                  <div style={styles.topText}>Шалбархай – хэмжээ ________</div>
                  <div style={styles.topText}>Хэлбэр____________________</div>
                  <div style={styles.topText}>Өнгөр ____________________</div>
                  <div style={styles.topText}>Тоо ________</div>
                  <div style={styles.topText}>Байрлал __________________</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.topText}>
                    Антрум - салстын өнгө ________
                  </div>
                  <div style={styles.topText}>Хаван ____________________</div>
                  <div style={styles.topText}>Хөдөлгөөн ________________</div>
                  <div style={styles.topText}>Шалбархай – хэмжээ ________</div>
                  <div style={styles.topText}>Хэлбэр____________________</div>
                  <div style={styles.topText}>Өнгөр ____________________</div>
                  <div style={styles.topText}>Тоо ________</div>
                  <div style={styles.topText}>Байрлал __________________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Дээд гэдэс</b>
                  <div style={styles.topText}>Салстын өнгө</div>
                  <div style={styles.topText}>Хаван ______________________</div>
                  <div style={styles.topText}>Хөдөлгөөн _________________</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.topText}>Шалбархай – хэмжээ ________</div>
                  <div style={styles.topText}>Хэлбэр____________________</div>
                  <div style={styles.topText}>Өнгөр ____________________</div>
                  <div style={styles.topText}>Тоо ________</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.topText}>Байрлал __________________</div>
                  <div style={styles.topText}>Фатер хөхлөг ______________</div>
                  <div style={styles.topText}>Цөс ялгаралт _______________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>
                    Нр тодорхойлох:
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>
                    Рн-метрийн шинжилгээ:
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>
                    Лабораторийн шинжилгээ:
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                  <div style={styles.topText}>
                    <b>Цитологи\гистологийн шинжилгээ:</b>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </div>
                  <div style={styles.topText}>
                    <b>Бусад шинжилгээ:</b>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </div>
                  <div style={styles.topText}>
                    <b>Эмнэлзүйн онош:</b>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Эмчилгээ\зөвлөгөө:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Зөвлөгөө өгсөн эмч:
                  <div>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1_HOOL;
