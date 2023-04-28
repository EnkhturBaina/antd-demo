import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-2
function CT_2() {
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
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}></div>
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
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ӨВЧНИЙ ТҮҮХ /хүүхдийн/
            </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  rowSpan={4}
                >
                  Эмнэлгийн нэр ____________
                  <div style={styles.leftText}>Өвчний түүхийн № ________</div>
                </td>
                <td style={styles.leftText} colSpan={3}>
                  РД
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  ЭМД
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Өвчний түүх нээсэн ______ он ____ сар ____ өдөр ____ цаг ____
                  мин
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Тасгийн нэр
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  colSpan={2}
                >
                  Эцэг /эх/-ийн нэр
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Өөрийн нэр:
                  <span style={{ marginLeft: 200 }}>Нас: _______</span>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Төрсөн ______ он ____ сар ____ өдөр
                  <div style={styles.leftText}>Нас ____</div>
                </td>
                <td style={styles.topText}>
                  Хүйс:
                  <div style={styles.leftText}> Эрэгтэй</div>
                  <div style={styles.leftText}> Эмэгтэй</div>
                  <div style={styles.leftText}>Жин _____</div>
                  <div style={styles.leftText}>Өндөр _____</div>
                </td>
                <td style={styles.topText}>
                  <b>Эхийн боловсрол:</b>
                  <div style={styles.leftText}>
                     Боловсролгүй{" "}
                    <span style={{ marginLeft: 30 }}> Бага</span>{" "}
                  </div>
                  <div style={styles.leftText}> Бүрэн дунд</div>
                  <div style={styles.leftText}>
                     Мэргэжлийн болон техникийн{" "}
                  </div>
                  <div style={styles.leftText}>
                     Дипломын
                    <span style={{ marginLeft: 30 }}> Бакалавр</span>
                  </div>
                  <div style={styles.leftText}>
                     Магистр
                    <span style={{ marginLeft: 30 }}> Доктор</span>
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Эцгийн боловсрол:</b>
                  <div style={styles.leftText}>
                     Боловсролгүй{" "}
                    <span style={{ marginLeft: 30 }}> Бага</span>{" "}
                  </div>
                  <div style={styles.leftText}> Бүрэн дунд</div>
                  <div style={styles.leftText}>
                     Мэргэжлийн болон техникийн{" "}
                  </div>
                  <div style={styles.leftText}>
                     Дипломын
                    <span style={{ marginLeft: 30 }}> Бакалавр</span>
                  </div>
                  <div style={styles.leftText}>
                     Магистр
                    <span style={{ marginLeft: 30 }}> Доктор</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.leftText}>Тогтмол хаяг:</div>
                  <div style={styles.leftText}>
                    Аймаг/хот: __________________________________
                  </div>
                  <div style={styles.leftText}>
                    Сум/дүүрэг: ________________ Баг/хороо ________________
                  </div>
                  <div style={styles.leftText}>
                    Гудамж/Байшин: _________________ тоот___________
                  </div>
                </td>
                <td style={styles.topText}>
                  Утасны дугаар:
                  <div style={styles.leftText}>Эцгийн ____________</div>
                  <div style={styles.leftText}>Эхийн _____________</div>
                  <div style={styles.leftText}>Гэрийн ____________</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.leftText}> Сургууль</div>
                  <div style={styles.leftText}> Цэцэрлэг</div>
                  <div style={styles.leftText}> Яслид явдаггүй</div>
                  <div style={styles.leftText}> Явдаг</div>
                  <div style={styles.leftText}> Хаана явдаг</div>
                  <div style={styles.leftText}>
                    _______________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  Зовиур:
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={4}>
                  Цусны бүлэг
                </td>
                <td style={styles.leftText}>Бүлэг</td>
                <td style={styles.leftText} rowSpan={4}>
                  Төлбөрийн хэлбэр:
                  <div style={styles.leftText}> Төр хариуцсан</div>
                  <div style={styles.leftText}> 15%</div>
                  <div style={styles.leftText}> 10%</div>
                  <div style={styles.leftText}> Өвчтөн хариуцсан</div>
                </td>
                <td style={styles.leftText} rowSpan={4}>
                  Доод шатлалаас илгээсэн эсэх
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Тодорхойлсон лаборант
                  <span style={{ width: 100 }}>&nbsp;</span>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шалгасан эмч</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Сар, өдөр</td>
              </tr>
            </tbody>
          </Table>{" "}
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 150 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Он</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Сар</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Өдөр</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Цаг</td>
                <td rowSpan={5} style={styles.leftText}>
                  Хэвтэлт:
                  <div style={styles.leftText}> Анх</div>
                  <div style={styles.leftText}> Давтан</div>
                </td>
                <td rowSpan={5} style={styles.leftText}>
                  Харшлын анамнез:
                  <div style={styles.leftText}> Эмийн бодис</div>
                  <div style={styles.leftText}> Хоол хүнс</div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 150 } }}>
                  Өвчин эхэлсэн
                </td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 150 } }}>
                  Эмчид үзүүлсэн
                </td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 150 } }}>
                  Эмнэлэгт хэвтсэн
                </td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 150 } }}>
                  Эмнэлгээс гарсан
                </td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 80 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Өвчний төгсгөл:
                  <div style={styles.leftText}> Эдгэрсэн</div>
                  <div style={styles.leftText}> Сайжирсан</div>
                  <div style={styles.leftText}> Хэвэндээ</div>
                  <div style={styles.leftText}> Дордсон</div>
                  <div style={styles.leftText}> Нас барсан</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Эмнэлгээс
                  <div style={styles.leftText}> Гарсан</div>
                  <div style={styles.leftText}> Шилжсэн</div>
                  <div style={styles.leftText}> Нас барсан</div>
                </td>
                <td style={styles.centerText} colSpan={2}>
                  он сар өдөр
                  <div style={styles.leftText}>______/ ____/ ____</div>
                  <div style={styles.leftText}>______/ ____/ ____</div>
                  <div style={styles.leftText}>______/ ____/ ____</div>
                </td>
                <td style={styles.topText}>
                  Ор хоног
                  <div style={styles.leftText}>________ хоног</div>
                  <div style={styles.leftText}>________ цаг</div>
                </td>
                <td style={styles.topText}>
                  Эмчилгээний зардал:
                  <div style={styles.leftText}>________________ ₮</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Онош</b>
                  <div>&nbsp;</div>
                </td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  ӨОУАкод
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Огноо
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.topText}>
                  Явуулсан эмнэлэг/ байгууллагын нэр:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Явуулсан эмчийн онош</b>
                </td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.topText}>
                  Явуулсан эмнэлэг/ байгууллагын нэр:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Явуулсан эмчийн онош</b>
                </td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Хүлээн авсан эмчийн онош</b>
                </td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Үндсэн онош</b>
                </td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Хүндрэл</b>
                </td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Хавсарсан өвчний онош</b>
                </td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Хийгдсэн ажилбар, мэс засал</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.centerText} colSpan={2}>
                  ӨОУА-9 код:
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Эмчлэгч эмчийн нэр, гарын үсэг</td>
                <td style={styles.topText} colSpan={4}>
                  Хянасан эмчийн нэр, гарын үсэг (Эмчилгээ эрхэлсэн орлогч,
                  тасгийн эрхлэгч, эмчилгээний чанарын менежер, бусад) /зур/
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            Үзлэг эхэлсэн:_______ он ________сар ________ өдөр ________ цаг
            ________ минут
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "55%" } }}>
                  <b>Хүлээн авсан эмчийн үзлэг</b>
                </td>
                <td style={{ ...styles.centerText, ...{ width: "45%" } }}>
                  <b>Хоол, эмчилгээ, сувилгаа, шинжилгээний заалт</b>
                </td>
              </tr>
              <tr>
                <td style={{ height: 900 }}></td>
                <td style={{ height: 900 }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.centerText}>
            Хүлээн авсан эмчийн гарын үсэг ____________________________
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: "50%" } }}>
                  Өндөр (см) _________
                  <div style={styles.leftText}>Жин (кг) _________</div>
                  <div style={styles.leftText}>
                    Биеийн жингийн индекс (кг/м2) _________
                  </div>
                </td>
                <td style={{ ...styles.leftText, ...{ width: "50%" } }}>
                  Цусны даралт (ммуб)
                  <div style={styles.leftText}>Систолын даралт _________</div>
                  <div style={styles.leftText}>Диастолын даралт _________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Хэвтэх үеийн зовиур:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Өвчний түүх:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.topText}>
                    <b>
                      Хэвтэхээс өмнө хийгдсэн эмчилгээ /гэрээр хийсэн эмчилгээ/:
                    </b>
                  </div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Амьдралын түүх:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Ахуйн нөхцөл:</b>
                  <div style={styles.topText}>
                     Орон сууцанд  Гэрт  Бусад
                  </div>
                </td>
                <td style={styles.topText}>
                  Ам бүл _____ хэнтэйгээ амьдардаг
                  <div style={styles.topText}>
                    _____________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Урьд өвчилсөн өвчин, эмгэгийн байдал:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
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
                <td style={{ ...styles.leftText, ...{ width: "33%" } }}>
                  <b>Халдварт:</b>
                  <div style={styles.topText}> Улаан бурхан_____ онд</div>
                  <div style={styles.topText}> Салхин цэцэг_____ онд</div>
                  <div style={styles.topText}> Гахайн хавдар_____ онд</div>
                  <div style={styles.topText}> Гепатит А ______ онд</div>
                  <div style={styles.topText}> Гепатит В _____ онд</div>
                  <div style={styles.topText}> Гепатит С _____ онд</div>
                  <div style={styles.topText}>
                     Гэдэсний халдварт өвчнөөр өвдсөн эсэх____ онд
                  </div>
                  <div style={styles.topText}>
                     Сүрьеэ өвчнөөр өвдсөн эсэх _____ онд
                  </div>
                  <div style={styles.topText}> Уушигны ______ онд</div>
                  <div style={styles.topText}> Булчирхайн ______ онд</div>
                  <div style={styles.topText}> Гэдэсний______ онд</div>
                  <div style={styles.topText}> Бусад ______ онд</div>
                  <div style={styles.topText}> Бусад_____ онд</div>
                </td>
                <td style={{ ...styles.leftText, ...{ width: "33%" } }}>
                  Мэс засал, мэс ажилбар хийлгэсэн эсэх:
                  <div style={styles.topText}> тийм</div>
                  <div style={styles.topText}> үгүй</div>
                  <div style={styles.topText}>Тийм бол</div>
                  <div style={styles.topText}>Ямар эрхтэнд ______</div>
                  <div style={styles.topText}>Хэдэн удаа_____</div>
                  <div style={styles.topText}>Хэдэн онд ______</div>
                  <div style={styles.topText}>Хүндрэл:</div>
                  <div style={styles.topText}> гарсан</div>
                  <div style={styles.topText}> үгүй</div>
                </td>
                <td style={{ ...styles.leftText, ...{ width: "33%" } }}>
                  Осол гэмтэл, хордлого:
                  <div style={styles.topText}>____________________________</div>
                  <div style={styles.topText}>
                    Одоогийн осол гэмтлийн шалтгаан:___________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Халдварт бус:</b>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Тархвар зүйн асуумж:</b>
                  <div style={styles.topText}>
                     Ойрын 6 сарын хугацаанд халдварт өвчтэй хүнтэй ойр байсан
                    эсэх{" "}
                  </div>
                  <div style={styles.topText}>
                     Ойрын 6 сарын дотор гадаад оронд зорчсон эсэх (хаашаа,
                    ямар хугацаагаар)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Удамшлын анамнез: </b>
                  Удамшлын өвчин:
                  ___________________________________________________________
                  <div>&nbsp;</div>
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
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Охидын анамнез:</b>
                  <div style={styles.leftText}>
                    Анхны сарын тэмдэг хэдэн настайд ирсэн:_____
                  </div>
                  <div style={styles.leftText}>
                    Сарын тэмдгийн үргэлжлэх хугацаа:_____
                  </div>
                  <div style={styles.leftText}>
                    Сүүлийн сарын тэмдэг хэзээ ирсэн
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Сарын тэмдгийн мөчлөгийн хоног:_____
                  <div style={styles.leftText}>
                    Сарын тэмдгийн хэмжээ: /зур/ бага, дунд, их
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Хорт зуршил:</b>
                  <div style={styles.leftText}>Тамхи татдаг эсэх:</div>
                  <div style={styles.leftText}>
                     Тийм
                    <span style={{ marginLeft: 100 }}>
                      Өдөрт хэдэн ширхэг: _____
                    </span>
                  </div>
                  <div style={styles.leftText}> үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эцэг /эх/ архи уудаг эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Эцэг /эх/ тамхи уудаг эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Хүүхдийн дэргэд тамхи татдаг эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Удаан хугацаагаар, байнга хэрэглэж байсан эмийн
                  тухай______________________________________
                  <div style={styles.topText}>
                    Хэдий хугацаагаар хэрэглэж байгаа
                    _______________________________________________________{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Хооллолтын байдал:</b>
                  <div style={styles.leftText}> Хөхөөр</div>
                  <div style={styles.leftText}> Тэжээвэр /юугаар/_____</div>
                  <div style={styles.leftText}> Холимог</div>
                  <div style={styles.leftText}> Ердийн хоол</div>
                </td>
                <td style={styles.topText}>
                  Хооллох үед зовиуртай эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                  <div style={styles.leftText}>
                     Тийм бол ямар зовиур илэрдэг
                  </div>
                  <div style={styles.leftText}>
                    _________________________________________
                  </div>
                  <div style={styles.leftText}>
                    _________________________________________
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Өдөрт хэдэн удаа хооллодог ___ Тогтмол цагт хооллож чаддаг
                  эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.topText}>Цагаан хоолтон эсэх:</div>
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Голчлон хэрэглэдэг хоол, хүнс:
                  <div style={styles.leftText}> Махан  Гурилан  Ногоо</div>
                  <div style={styles.leftText}> Жимс жимсгэнэ</div>
                  <div style={styles.leftText}> Сүү цагаан идээ</div>
                  <div style={styles.leftText}> Халуун ногоо</div>
                  <div style={styles.leftText}>
                     Дарсан давсалсан бүтээгдэхүүн
                  </div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Үзлэг эхэлсэн:______ он _______сар _______ өдөр _______ цаг
                  _______ минут
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={5}>
                  <b>БОДИТ ҮЗЛЭГИЙН ХЭСЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Ерөнхий үзлэг:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Биеийн ерөнхий байдал:</b>
                  <div style={styles.leftText}> Хөнгөн  Дунд</div>
                  <div style={styles.leftText}> Хүндэвтэр  Хүнд</div>
                  <div style={styles.leftText}>
                     Маш хүнд SatO2 .... FiO2 ....
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Ухаан санаа:</b>
                  <div style={styles.leftText}> Саруул  Бүдгэрсэн</div>
                  <div style={styles.leftText}> Cтупор  Сопор</div>
                  <div style={styles.leftText}> Кома  Бусад</div>
                </td>
                <td style={styles.topText}>
                  <b>Орчиндоо:</b>
                  <div style={styles.leftText}> Харьцаатай</div>
                  <div style={styles.leftText}> Харьцаагүй</div>
                  <div style={styles.leftText}> Сул</div>
                </td>
                <td style={styles.topText}>
                  <b>Байрлал:</b>
                  <div style={styles.leftText}> Идэвхтэй  Идэвхгүй</div>
                  <div style={styles.leftText}> Албадмал  Хагас суугаа </div>
                  <div style={styles.leftText}> Хэвтрийн  Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Царайны илрэл:</b>
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Айсан</div>
                  <div style={styles.leftText}> Сандарсан</div>
                  <div style={styles.leftText}> Цочсон</div>
                  <div style={styles.leftText}> Гутарсан</div>
                  <div style={styles.leftText}> Шаналсан</div>
                  <div style={styles.leftText}> Цонхийсон</div>
                  <div style={styles.leftText}> Улайсан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.leftText}> Хөхөрсөн</div>
                  <div style={styles.leftText}> Ядрангуй шаргалтсан</div>
                  <div style={styles.leftText}> Хавагнасан</div>
                  <div style={styles.leftText}>
                     Баг өмссөн мэт,гиппократын
                  </div>
                  <div style={styles.leftText}> Корвизорын</div>
                  <div style={styles.leftText}> Акромегалийн</div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
                <td style={styles.topText}>
                  <b>Биеийн галбир:</b>
                  <div style={styles.leftText}> Зөв</div>
                  <div style={styles.leftText}> Зөв биш</div>
                  <div style={styles.leftText}>Зөв: </div>
                  <div style={styles.leftText}> Астеник</div>
                  <div style={styles.leftText}> Гиперстеник</div>
                  <div style={styles.leftText}> Нормостеник</div>
                </td>
                <td style={styles.topText}>
                  Зөв биш эмгэг:
                  <div style={styles.leftText}> Тал саатай</div>
                  <div style={styles.leftText}> Бөгтөр</div>
                  <div style={styles.leftText}> Гэдгэр</div>
                  <div style={styles.leftText}> Оцгор</div>
                  <div style={styles.leftText}> Бусад</div>
                  <div style={styles.leftText}>___________</div>
                </td>
                <td style={styles.topText}>
                  <b>Марианы байдал:</b>
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Таргандуу</div>
                  <div style={styles.leftText}> Тарган</div>
                  <div style={styles.leftText}> Хэт тарган</div>
                  <div style={styles.leftText}> туранхайвтар</div>
                  <div style={styles.leftText}> Туранхай  Эцэнхий</div>
                  <div style={styles.leftText}> Яс арьс болтлоо турсан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={5}>
                  <b>Хэсэгчилсэн үзлэг:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Гавлын ясжилт:</b>
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Зөөлөн</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  <b>Зулай:</b>
                  <div style={styles.leftText}> Битүүрсэн</div>
                  <div style={styles.leftText}>
                     Битүүрээгүй ( тайван, хонхор, дүүрэнгэ, пульсацитай)
                  </div>
                </td>
                <td style={styles.topText}>
                  Зулайн хэмжээ: ________см
                  <div style={styles.leftText}>Заадсууд:</div>
                  <div style={styles.leftText}> Нийлсэн  Салсан</div>
                  <div style={styles.leftText}> Давхардсан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={5}>
                  Дагзны булчингийн хөшингө илэрсэн эсэх: □ Тийм □ Үгүй
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Нүүрний хэлбэр:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Дугуй сар шиг</div>
                  <div style={styles.leftText}> Зөв бус</div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хөмсөг
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Өтгөн</div>
                  <div style={styles.leftText}> Шингэн</div>
                  <div style={styles.leftText}>
                     Халцарсан /арын гуравны нэг нь ургаагүй/
                  </div>
                  <div style={styles.leftText}> Огт хөмсөггүй</div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
                <td style={styles.topText}>
                  Зовхи:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Хавантай</div>
                  <div style={styles.leftText}> Арьс нь харласан</div>
                  <div style={styles.leftText}> Зовхины орчим Ксантомтой</div>
                  <div style={styles.leftText}> Дээд, доод зовхи унжсан</div>
                </td>
                <td style={styles.topText}>
                  Нүд:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Нүд мэдэгдэхүйц бүлтийсэн</div>
                  <div style={styles.leftText}> Нүд солир</div>
                  <div style={styles.leftText}> Нистагм илэрсэн</div>
                  <div style={styles.leftText}> Хонхор</div>
                  <div style={styles.leftText}> Нулимстай</div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>{" "}
      <div className="page">
        <div className="subpage">
          <Table
            bordered
            className="document"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Нүдний салстын өнгө:
                  <div style={styles.leftText}>
                     Хэвийн  Хэвийн бус цэнхэр
                  </div>
                  <div style={styles.leftText}> Цайвар  Шарангуй  Улаан</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хүүхэн хараа:
                  <div style={styles.leftText}> Хэвийн  Нарийссан</div>
                  <div style={styles.leftText}>
                     Өргөссөн  Хоёр талд ижил биш
                  </div>
                  <div style={styles.leftText}>Гэрлийн урвал: _________</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хамар: хэлбэр:
                  <div style={styles.leftText}> Зөв □ Зөв биш</div>
                  <div style={styles.leftText}>
                    Хэмжээ: □ Хэвийн □ Хэвийн бус
                  </div>
                  <div style={styles.leftText}>
                    Муруйлттай эсэх: □ Тийм □ Үгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Уруулын өнгө: □ Ягаан
                  <div style={styles.leftText}> Улаан ягаан □ Хөхөлбөр</div>
                  <div style={styles.leftText}> Цайвар □ Бусад_________</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Уруулын чийгшилт:
                  <div style={styles.leftText}> Чийглэг □ Омголтсон</div>
                  <div style={styles.leftText}> Хуурай □ Бусад _____</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Уруул, тагнайн сэтэрхийтэй эсэх:
                  <div style={styles.leftText}> Тийм □ Үгүй</div>
                  <div style={styles.leftText}>
                    Тийм бол: (баруун, зүүн, 2 талд){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={9} style={styles.leftText}>
                  <b>Амны хөндий:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хэл: Өнгө:
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Цайвар</div>
                  <div style={styles.leftText}> Ягаан</div>
                  <div style={styles.leftText}> Улаан</div>
                </td>
                <td colSpan={4} style={styles.leftText}>
                  Өнгөр
                  <div style={styles.leftText}> Өнгөргүй</div>
                  <div style={styles.leftText}> Өнгөртэй /нимгэн, зузаан/</div>
                  <div style={styles.leftText}> Хэсэгчилэн арилсан</div>
                  <div style={styles.leftText}> Өнгө нь цайвар</div>
                  <div style={styles.leftText}>
                     Бохир □ Бусад _____________
                  </div>
                </td>
                <td style={styles.leftText}>
                  Хөхлөг:
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Хатингаршсан</div>
                  <div style={styles.leftText}> Томорсон</div>
                </td>
                <td style={styles.leftText}>
                  Тууралт:
                  <div style={styles.leftText}> Тууралтгүй</div>
                  <div style={styles.leftText}> Яр</div>
                  <div style={styles.leftText}> Шарх</div>
                  <div style={styles.leftText}> Улайлт</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Буйл: Өнгө:
                  <div style={styles.leftText}>
                     Ердийн □ Улайсан □ Цайвар □ Хөхөлбий
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <div style={styles.leftText}> Шархлаагүй</div>
                  <div style={styles.leftText}> Шархалсан</div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <div style={styles.leftText}> Эмзэглэлгүй □ Эмзэглэлтэй</div>
                  <div style={styles.leftText}> Тууралтгүй □ Тууралттай</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Хатуу, зөөлөн тагнай: Өнгө:
                  <div style={styles.leftText}> Ердийн □ Тууралттай</div>
                  <div style={styles.leftText}> Улайсан □ Шарлалттай</div>
                  <div style={styles.leftText}> Цайсан</div>
                </td>
                <td style={styles.leftText} colSpan={3}>
                  Гүйлсэн булчирхай:
                  <div style={styles.leftText}> Үрэвссэн</div>
                  <div style={styles.leftText}> Үрэвсээгүй</div>
                  <div style={styles.leftText}>Хэмжээ: □ Хэвийн □Томорсон</div>
                </td>
                <td style={styles.leftText} colSpan={3}>
                  Дууны өнгө:
                  <div style={styles.leftText}> Хэвийн □ Сул □ Сөөнгө</div>
                  <div style={styles.leftText}>
                     Дуу гарахгүй □ Бусад_________{" "}
                  </div>
                  <div style={styles.leftText}>Шүд: _____________________</div>
                </td>
              </tr>
              <tr>
                <td colSpan={9} style={styles.topText}>
                  <b>Арьс салстын байдал:</b>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_2;
