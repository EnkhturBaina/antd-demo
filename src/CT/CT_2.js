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
                     Боловсролгүй
                    <span style={{ marginLeft: 30 }}> Бага</span>
                  </div>
                  <div style={styles.leftText}> Бүрэн дунд</div>
                  <div style={styles.leftText}>
                     Мэргэжлийн болон техникийн
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
                     Боловсролгүй
                    <span style={{ marginLeft: 30 }}> Бага</span>
                  </div>
                  <div style={styles.leftText}> Бүрэн дунд</div>
                  <div style={styles.leftText}>
                     Мэргэжлийн болон техникийн
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
          </Table>
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
                    эсэх
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
                    _______________________________________________________
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
                    Тийм бол: (баруун, зүүн, 2 талд)
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
                     Дуу гарахгүй □ Бусад_________
                  </div>
                  <div style={styles.leftText}>Шүд: _____________________</div>
                </td>
              </tr>
              <tr>
                <td colSpan={9} style={styles.topText}>
                  <b>Арьс салстын байдал:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Хамар уруулын гурвалжин:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Хөхрөлттэй</div>
                  <div style={styles.leftText}>
                    ( төвийн, захын цайвар хөхрөлт)
                  </div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Арьсны өнгө:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Цайвар шар</div>
                  <div style={styles.leftText}> Цайвар ягаан</div>
                  <div style={styles.leftText}> Шар</div>
                  <div style={styles.leftText}> Нимбэгэн шар</div>
                  <div style={styles.leftText}> Улаан шар</div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  <div style={styles.leftText}> Ногоон шар</div>
                  <div style={styles.leftText}> Бараан саарал</div>
                  <div style={styles.leftText}> Цайж алагласан</div>
                  <div style={styles.leftText}> Хүрэл шиг</div>
                  <div style={styles.leftText}> Улаан цоохор</div>
                  <div style={styles.leftText}> Зэвхий саарал</div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
                <td style={styles.topText}>
                  Уян хатан чанар:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Буурсан</div>
                  <div style={styles.leftText}> Алдагдсан</div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Арьсны чийглэг байдал:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Ихэссэн</div>
                  <div style={styles.leftText}> Хуурайшсан</div>
                  <div style={styles.leftText}> Хогжруутсан</div>
                  <div style={styles.leftText}> Гуужсан</div>
                  <div style={styles.leftText}> Сайртсан</div>
                </td>
              </tr>
              <tr>
                <td colSpan={9} style={styles.topText}>
                  Арьсан дээрх тууралт: □ Цэвэр тууралтгүй □ Тууралттай
                  <div style={styles.leftText}>
                    (улаан, толбон, гүвдрүүт, цэврүүт, бэлцрүүт, товруут,
                    зангилаат, цусархаг шалбархай, тав, хайрс, ан цав, цууралт,
                    цэгэн, одлог, үү, сорви, гемангиом, атером, хөхрөлт, бусад
                    ________________________
                  </div>
                  <div style={styles.leftText}>
                    Тууралтын байршил: ____________
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={styles.topText}>
                  Арьсан доорх өөхөн эдийн хөгжил:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Сул</div>
                  <div style={styles.leftText}> Их</div>
                </td>
                <td colSpan={3} style={styles.topText}>
                  Арьсан доорхи судасны байдал:
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Ялимгүй харагдана</div>
                  <div style={styles.leftText}> Тод харагдана</div>
                  <div style={styles.leftText}> Өргөсч бүдүүрсэн</div>
                  <div style={styles.leftText}> Бусад______________ </div>
                </td>
                <td colSpan={3} style={styles.topText}>
                  Хаван: □ Хавангүй □ Хавантай:
                  <div style={styles.leftText}>Ерөнхий хэсгийн:</div>
                  <div style={styles.leftText}> Нүүрэнд □ Зовхинд</div>
                  <div style={styles.leftText}> Хэвлийд □ Шилбээр</div>
                  <div style={styles.leftText}> Хуухнаг</div>
                </td>
              </tr>
              <tr>
                <td colSpan={9} style={styles.topText}>
                  <b>Захын тунгалгийн булчирхайн байдал:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={styles.topText}>
                  Хэмжээ:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Харахад томорсон</div>
                  <div style={styles.leftText}> Тэмтрэлтээр томорсон</div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Байрлал:
                  <div style={styles.leftText}> Хүзүүний</div>
                  <div style={styles.leftText}> Суганы</div>
                  <div style={styles.leftText}> Цавины</div>
                  <div style={styles.leftText}> Бусад_____</div>
                </td>
                <td style={styles.topText}>
                  Нягт:
                  <div style={styles.leftText}> Зөөлөн</div>
                  <div style={styles.leftText}> Хатуу</div>
                </td>
                <td style={styles.topText}>
                  Гадаргуу:
                  <div style={styles.leftText}> Барзгар</div>
                  <div style={styles.leftText}> Гөлгөр</div>
                </td>
                <td style={styles.topText}>
                  Хөдөлгөөн:
                  <div style={styles.leftText}> Хөдөлгөөнтэй</div>
                  <div style={styles.leftText}> Хөдөлгөөнгүй</div>
                </td>
                <td style={styles.topText}>
                  Эмзэглэл:
                  <div style={styles.leftText}> эмзэглэлгүй</div>
                  <div style={styles.leftText}> эмзэглэлтэй</div>
                </td>
              </tr>
              <tr>
                <td colSpan={9} style={styles.topText}>
                  Арьсны дайврууд: Үс
                  ______________________________________________________ Хумс
                  __________________________________
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Булчингийн хөгжил:
                  <div style={styles.leftText}> Ердийн  Сул</div>
                  <div style={styles.leftText}> Хатингаршсан</div>
                  <div style={styles.leftText}> Сайн  Жигд бус</div>
                </td>
                <td colSpan={3} style={styles.leftText}>
                  Булчингийн чангарал:
                  <div style={styles.leftText}> Хэвийн  Сул</div>
                  <div style={styles.leftText}> Чангарсан</div>
                  <div style={styles.leftText}> Хэт чангарсан</div>
                </td>
                <td colSpan={3} style={styles.leftText}>
                  Булчингийн хүч, хөдөлгөөн:
                  <div style={styles.leftText}>0б, 1б, 2б, 3б, 4б, 5б</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>
                    Булчингийн чангарлын байршил:
                  </div>
                  <div style={styles.leftText}>
                    _____________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={9} style={styles.topText}>
                  <b>Тулгуур эрхтний тогтолцоо:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.topText}>
                  Үе мөчний хэлбэр:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Өөрчлөгдсөн</div>
                  <div style={styles.leftText}>
                     Үений орчим хавдаж улайсан
                  </div>
                  <div style={styles.leftText}>
                     Хөдөлгөх буюу дарахад өвддөг
                  </div>
                  <div style={styles.leftText}>
                    аль үеэнд_______________________
                  </div>
                </td>
                <td colSpan={4} style={styles.topText}>
                  Үений хөдөлгөөн:
                  <div style={styles.leftText}> Идэвхитэй</div>
                  <div style={styles.leftText}> Чөлөөтэй</div>
                  <div style={styles.leftText}> Идэвхигүй</div>
                  <div style={styles.leftText}> Хязгаарлагдмал</div>
                  <div style={styles.leftText}>
                    аль үеэнд_________________________
                  </div>
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
                <td style={styles.topText} colSpan={5}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Харж ажиглах:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Хамар сарталзах шинж:
                  <div style={styles.leftText}> Илэрсэн</div>
                  <div style={styles.leftText}> Илрээгүй</div>
                  <div style={styles.leftText}>Хамрын амьсгал:</div>
                  <div style={styles.leftText}> Чөлөөтэй</div>
                  <div style={styles.leftText}> Саадтай</div>
                  <div style={styles.leftText}> Амаар амьсгалж байгаа</div>
                </td>
                <td style={styles.topText}>
                  Хөхрөлт байгаа эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                  <div style={styles.leftText}>Тийм бол:</div>
                  <div style={styles.leftText}> Төвийн</div>
                  <div style={styles.leftText}> Захын</div>
                </td>
                <td style={styles.topText}>
                  Цээж хонхолзох шинж:
                  <div style={styles.leftText}> Илрээгүй</div>
                  <div style={styles.leftText}> Сул илэрсэн</div>
                  <div style={styles.leftText}> Тод илэрсэн </div>
                  <div style={styles.leftText}>Цээжний хэлбэр:</div>
                  <div style={styles.leftText}> Зөв □ Эмгэг</div>
                </td>
                <td style={styles.topText}>
                  Цээжний 2 талд амьсгалд жигд оролцох байдал:
                  <div style={styles.leftText}> Жигд (баруун\зүүн тал)</div>
                  <div style={styles.leftText}> Хоцорно</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Хөхрөлт байгаа эсэх:
                  <div style={styles.leftText}> Тийм  Үгүй</div>
                  <div style={styles.leftText}>Тийм бол:</div>
                  <div style={styles.leftText}>ямар:____________</div>
                </td>
                <td style={styles.topText}>
                  Амьсгал авалт саадтай:
                  <div style={styles.leftText}> Тийм  Үгүй</div>
                  <div style={styles.leftText}>Амьсгал гаргалт саадтай:</div>
                  <div style={styles.leftText}> Тийм  Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Амьсгалын тоо 1
                  <div style={styles.leftText}>минутанд____удаа</div>
                  <div style={styles.leftText}> Хэм жигд</div>
                  <div style={styles.leftText}> Жигд бус</div>
                </td>
                <td style={styles.topText}>
                  Цэрний шинж байдал:
                  <div style={styles.leftText}>__________________</div>
                  <div style={styles.leftText}>Ханиалгалтын байдал:</div>
                  <div style={styles.leftText}>__________________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Тэмтрэлт:</b>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Тогшилт</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Цээжээр эмзэглэх:
                  <div style={styles.leftText}> Эмзэглэлгүй</div>
                  <div style={styles.leftText}> Эмзэглэлтэй (________)</div>
                  <div style={styles.leftText}>Уян чанар: □ Хэвийн</div>
                  <div style={styles.leftText}> □ Буурсан</div>
                </td>
                <td style={styles.topText}>
                  Дууны доргион:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Суларсан</div>
                  <div style={styles.leftText}> Тодорхойлогдохгүй</div>
                  <div style={styles.leftText}> Хүчтэй болсон</div>
                </td>
                <td style={styles.topText}>
                  Тогшилтын дуу:
                  <div style={styles.leftText}> 2 талд ижил </div>
                  <div style={styles.leftText}> Ижил бус</div>
                </td>
                <td style={styles.topText}>
                  Хэсэгт тогшилтын дуу:
                  <div style={styles.leftText}> Бүдгэрсэн</div>
                  <div style={styles.leftText}> Тодорсон</div>
                  <div style={styles.leftText}> Дүлий болсон</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Чагналт:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={styles.topText}>
                  Амьсгал 2 талд
                  <div style={styles.leftText}>
                     Ижил □ Ижил бус (_________хэсэгт);
                  </div>
                  <div style={styles.leftText}>
                    Эмгэг амьсгалтай: □ Тийм □ Үгүй
                  </div>
                  <div style={styles.leftText}>
                    Тийм бол: (цулцангийн суларсан, цулцангийн ширүүссэн,
                    гуурсан хоолойн эмгэг, стенозын, амьсгал сонсогдохгүй)
                  </div>
                </td>
                <td colSpan={3} style={styles.topText}>
                  Нэмэлт шуугиантай эсэх:
                  <div style={styles.leftText}> Тийм □ Үгүй</div>
                  <div style={styles.leftText}>
                    Тийм бол: (нойтон хэржигнүүр, шажигнуур, хуурай хэржигнүүр,
                    гялтангийн шүргэлцэх чимээ_________хэсэгт)
                  </div>
                  <div style={styles.leftText}>Бронхофони</div>
                  <div style={styles.leftText}>
                    □ Хэвийн □ Тодорсон □ Суларсан ( _______хэсэгт)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Цусны эргэлтийн тогтолцоо:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Харж ажиглахад: Зүрхний оройн түлхэлт:
                  <div style={styles.leftText}> Ажиглагдахгүй</div>
                  <div style={styles.leftText}> Ажиглагдана</div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Гүрээний судасны лугшилт:
                  <div style={styles.leftText}> Ажиглагдахгүй</div>
                  <div style={styles.leftText}> Ажиглагдана</div>
                </td>
                <td style={styles.topText}>
                  Чамархайн судасны лугшилт:
                  <div style={styles.leftText}> Ажиглагдахгүй</div>
                  <div style={styles.leftText}> Ажиглагдана</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Хурууны үзүүр:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Бөмбөрийн дохиур мэт</div>
                  <div style={styles.leftText}> Бусад___________________</div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Тэмтрэлтээр:
                  <div style={styles.leftText}>Зүрхний оройн түлхэлт:</div>
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}>
                     Хэлбийсэн байрлал (______________ )
                  </div>
                </td>
                <td style={styles.topText}>
                  Түлхэлтийн хүч:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Ихэссэн</div>
                  <div style={styles.leftText}> Багассан</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Тогшилтоор: Зүрхний хил:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Томорсон</div>
                </td>
                <td style={styles.topText}>
                  Аль тийш хазайсан:
                  <div style={styles.leftText}> Зүүн □ Баруун</div>
                  <div style={styles.leftText}>Хэмжээ</div>
                  <div style={styles.leftText}>________________</div>
                </td>
                <td style={styles.topText}>
                  Чагналтаар: Зүрхний авиа:
                  <div style={styles.leftText}> Тод □ Бүдэг</div>
                  <div style={styles.leftText}> Бүдгэвтэр</div>
                </td>
                <td style={styles.topText}>
                  Хэм:
                  <div style={styles.leftText}> Жигд □ Жигд бус</div>
                  <div style={styles.leftText}>Хэм алдалттай хэлбэр нь</div>
                  <div style={styles.leftText}>_____________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  ЗЦТ__________минутанд АД баруун талд______/______АД зүүн
                  талд______/_____
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Амны үнэр:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Иссэн жимс</div>
                  <div style={styles.leftText}> Элэгний</div>
                  <div style={styles.leftText}> Ацетон</div>
                  <div style={styles.leftText}> Үмхий</div>
                </td>
                <td style={styles.topText}>
                  Хэвлийн үзлэг:
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Цардгар</div>
                  <div style={styles.leftText}> Мэхгэр</div>
                  <div style={styles.leftText}> Хэвлийн тойрог _____ см</div>
                </td>
                <td style={styles.topText}>
                  Хэвлийд асцит бий эсэх:
                  <div style={styles.leftText}> Тийм □ Үгүй</div>
                  <div style={styles.leftText}>Хэвлий:</div>
                  <div style={styles.leftText}> Эмзэглэлтэй</div>
                  <div style={styles.leftText}> Эмзэглэлгүй</div>
                  <div style={styles.leftText}>Өвдөлтийн байрлал:</div>
                  <div style={styles.leftText}>____________________</div>
                </td>
                <td style={styles.topText}>
                  Хүйн байдал:
                  <div style={styles.leftText}>____________________</div>
                  <div style={styles.leftText}>____________________</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Элэгний бага шинжүүд:
                  <div style={styles.leftText}>
                     Хэлний үзүүр улайсан ____, Алга улайсан ____
                  </div>
                  <div style={styles.leftText}>
                     Гарын алганы зураас тодорсон _____
                  </div>
                  <div style={styles.leftText}> Өнгөц вен өргөссөн _____ </div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Ходоод тэмтрэлт, тогшилтоор:
                  <div style={styles.leftText}>Ходоодны доод хил:</div>
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Агшсан</div>
                </td>
                <td style={styles.topText}>
                  Нугалуур:
                  <div style={styles.leftText}> Тэмтрэгдэнэ</div>
                  <div style={styles.leftText}> Тэмтрэгдээгүй</div>
                  <div style={styles.leftText}>Хэмжээ нь:</div>
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
                  □ Одлог тууралт ____ Гинекомасти ____
                </td>
                <td style={styles.topText}>□ Сунасан (1, 2, 3-р зэрэг)</td>
                <td style={styles.topText}>
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Томорсон</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Их, бага махиа:
                  <div style={styles.leftText}> Тэмтрэгдэнэ</div>
                  <div style={styles.leftText}> Тэмтрэгдээгүй</div>
                  <div style={styles.leftText}>Менделийн шинж ____</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Элэгний хэмжээ тэмтрэлтээр:
                  <div style={styles.leftText}> Хэвийн □ Томорсон</div>
                  <div style={styles.leftText}>
                     Хавирганы нумнаас доош ____ см
                  </div>
                  <div style={styles.leftText}>
                    Элэгний ирмэг □ Хурц □ Мохоо
                  </div>
                </td>
                <td style={styles.topText}>
                  Дэлүүний хэмжээ:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Томорсон ______ см</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Цөсний өвдөлтийн үед илрэх хам шинжүүд:
                  <div style={styles.leftText}>
                     Кера [ ] см,□ Мерфи [ ] см,□ Мюсси [ ] см
                  </div>
                  <div style={styles.leftText}>
                     Ортнера [ ] см □Василенко [ ] см
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Нойр булчирхайн өвдөлтийн үед илрэх хам шинжүүд:
                  <div style={styles.leftText}>
                     Воскресенского [ ] см □ Мейо-Робсона [ ] см
                  </div>
                  <div style={styles.leftText}>
                     Тернера [ ] см □ Губергрицкого [ ] см □ Джаниледзе [ ] см
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Гэдэс тэмтрэлтээр:
                  <div style={styles.leftText}>Тахир гэдэс: Хэлбэр:</div>
                  <div style={styles.leftText}> Бортгон □ Өөр</div>
                  <div style={styles.leftText}>
                    Гадаргуу: □ Гөлгөр □ Барзгар
                  </div>
                </td>
                <td style={styles.topText}>
                  Хэмжээ:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Агшсан</div>
                  <div style={styles.leftText}> Томорсон</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Нягтрал:
                  <span style={{ marginLeft: 100 }}>□ Эмзэглэлгүй</span>
                  <div style={styles.leftText}>
                    □ Хатуу:
                    <span style={{ marginLeft: 100 }}>□ Хөдөлгөөнтэй</span>
                  </div>
                  <div style={styles.leftText}>
                    □ Зөөлөн:
                    <span style={{ marginLeft: 90 }}>□ Хөдөлгөөнгүй</span>
                  </div>
                  <div style={styles.leftText}>□ Эмзэглэлтэй:</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хошного:
                  <div style={styles.leftText}> Хэвийн онгойсон</div>
                  <div style={styles.leftText}> Битүү</div>
                </td>
                <td style={styles.topText}>
                  Баас:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Шингэн баана</div>
                  <div style={styles.leftText}> Хатна</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Суулгах:
                  <div style={styles.leftText}>□ Усархаг □ Салсттай</div>
                  <div style={styles.leftText}>
                    □ Цусны судалтай □ Залхагтай
                  </div>
                  <div style={styles.leftText}>
                    □ Хоолны боловсроогүй үлдэгдэлтэй
                  </div>
                </td>
                <td style={styles.topText}>
                  Баасны тоо: хоногт
                  <div style={styles.leftText}>___ удаа</div>
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.topText}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  12 хос мэдрэлээс гарсан өөрчлөлт /дугуйл/
                  <div style={styles.leftText}>
                    I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII
                  </div>
                </td>
                <td style={styles.topText}>
                  Үнэрлэх мэдрэмж:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Буурсан</div>
                  <div style={styles.leftText}> Ялгахгүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Сонсголын мэдрэмж:
                  <div style={styles.leftText}>Сонсох чадавхи:</div>
                  <div style={styles.leftText}> Хэвийн □ Ихэссэн</div>
                  <div style={styles.leftText}> Буурсан</div>
                </td>
                <td style={styles.topText}>
                  Чих шуугих:
                  <div style={styles.leftText}>Баруун________</div>
                  <div style={styles.leftText}>Зүүн талд _______</div>
                  <div style={styles.leftText}>Нүүрний 2 тал:</div>
                  <div style={styles.leftText}> Ижил □ Ижил бус</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хүүхэн хараа:
                  <div style={styles.leftText}> Өргөссөн</div>
                  <div style={styles.leftText}> Ердийн</div>
                  <div style={styles.leftText}> Нарийссан</div>
                </td>
                <td style={styles.topText}>
                  Рефлекс:
                  <div style={styles.leftText}> Хэвийн □ Арефлекс</div>
                  <div style={styles.leftText}> Гиперрефлекс</div>
                  <div style={styles.leftText}> Гипорефлекс</div>
                  <div style={styles.leftText}> Эмгэг рефлекс</div>
                  <div style={styles.leftText}> Клонус илэрсэн</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Мэдрэхүйн хүрээний өөрчлөлт:
                  <div style={styles.leftText}> Илрээгүй</div>
                  <div style={styles.leftText}> Илэрсэн</div>
                  <div style={styles.leftText}>Өнгөц мэдрэхүй:</div>
                  <div style={styles.leftText}> Алдагдаагүй</div>
                  <div style={styles.leftText}> Алдсан</div>
                </td>
                <td style={styles.topText}>
                  Гүний мэдрэхүй:
                  <div style={styles.leftText}> Алдагдаагүй</div>
                  <div style={styles.leftText}> Алдсан</div>
                  <div style={styles.leftText}>
                    (парастезия, анестезия, гипостезия, гиперстезия,
                    бусад_____________)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Хэт хөдөлгөөнтөх хам шинж: □ Илрээгүй □ Илэрсэн
                  <div style={styles.leftText}>
                    (гиперкинезия, тремор, тик, хорея, атетоз, нүүрний
                    татвалзал, бусад_____________)
                  </div>
                </td>
                <td style={styles.topText}>
                  Тэнцвэрийн сорилд:
                  <div style={styles.leftText}> Алдахгүй</div>
                  <div style={styles.leftText}> Алдана</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Менингитийн шинж:
                  <div style={styles.leftText}> Илрээгүй</div>
                  <div style={styles.leftText}> Илэрсэн</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Вегетатив мэдрэлийн систем:
                  _____________________________________________________
                  <div style={styles.leftText}>
                    Сэтгэцийн байдал:
                    _____________________________________________________________________
                  </div>
                  <div style={styles.leftText}>
                    Бусад:________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Шээс бэлгэсийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Бөөр:
                  <div style={styles.leftText}> Тэмтрэгдэхгүй</div>
                  <div style={styles.leftText}> Тэмтрэгдэнэ</div>
                  <div style={styles.leftText}> Эмзэглэлтэй</div>
                  <div style={styles.leftText}> Эмзэглэлгүй</div>
                </td>
                <td style={styles.topText}>
                  Пастернацкийн шинж: Баруун талд [ ]
                  <div style={styles.leftText}>Зүүн талд [ ]</div>
                </td>
                <td style={styles.topText}>
                  Хоногийн шээсний гарц:
                  <div style={styles.leftText}> Хэвийн</div>
                  <div style={styles.leftText}> Ихэссэн</div>
                  <div style={styles.leftText}> Багассан</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Шээсний өнгө:
                  <div style={styles.leftText}> Сүрлэн шар □ Улаан шар</div>
                  <div style={styles.leftText}> Өнгөгүй □ Тунадастай</div>
                  <div style={styles.leftText}>
                     Тунадасгүй, Тоо ___ олон, цөөн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Шөнө шээдэг эсэх:
                  <div style={styles.leftText}> Үгүй □ Тийм Тоо ___ </div>
                  <div style={styles.leftText}> Шээс: □ Тасалддаг □ Үгүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Шээхэд:
                  <div style={styles.leftText}>
                     Давсаг шээсний сүв эмзэглэх □ Үгүй
                  </div>
                  <div style={styles.leftText}>
                     Шээс дүлүүлж гардаг □ Үгүй
                  </div>
                </td>
                <td style={styles.topText}>
                  Гадна бэлэг эрхтний хөгжил:
                  <div style={styles.leftText}> Зөв</div>
                  <div style={styles.leftText}> Зөв биш</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Давсаг тэмтрэгдэх:
                  ____________________________________________________________________
                  <div style={styles.leftText}>
                    Бэлгийн хоёрдогч шинж тэмдэг илэрсэн эсэх:
                    ______________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Бусад эрхтэн, тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Бамбай булчирхай:
                  <div style={styles.leftText}> Тэмтрэгдэхгүй</div>
                  <div style={styles.leftText}>
                     Тэмтрэгдэнэ /зур/ (зөөлөн, хатуу, эмзэглэлтэй,
                    эмзэглэлгүй)
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.leftText}> Томроогүй</div>
                  <div style={styles.leftText}> Томорсон (0, I, II зэрэг)</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Хэсэг газрын үзлэг /Status
                  localis/___________________________________________________________________
                  <div style={styles.leftText}>
                    ___________________________________________________________________________________________
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЭМНЭЛЗҮЙН УРЬДЧИЛСАН ОНОШИЙН ҮНДЭСЛЭЛ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.topText, ...{ width: "55%" } }}>
                  Зовиураас:_______________________________________________________________
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Асуумжаас:______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Бодит
                    үзлэгээс:________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Шинжилгээний дүгнэлтээс:<b> а/ Лабораторийн шинжилгээ:</b>
                  </div>
                  <div style={styles.topText}>
                    Цусны ерөнхий
                    шинжилгээ:___________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Шээсний ерөнхий
                    шинжилгээ:___________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Цусны биохимийн
                    шинжилгээ:___________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Вирүс, маркерийн шинжилгээ:________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Бусад шинжилгээ: _________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    <b>б/ Үйл оношийн шинжилгээ:</b>
                  </div>
                  <div style={styles.topText}>
                    Чанд авиан шинжилгээ:_____________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Дурангийн шинжилгээ: ______________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Рентген шинжилгээ:
                    __________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Бусад шинжилгээ: _________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    <b>
                      Клиникийн урьдчилсан онош:________________________________
                    </b>
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Хүндрэл: _________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    Дагалдах онош:
                    ______________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div style={styles.topText}>
                        <b>Ялган оношлох эмгэг ба хам шинжүүд:</b>
                      </div>
                      <div style={styles.topText}>
                        <b>Шинжилгээний төлөвлөгөө:</b>
                      </div>
                    </div>
                  </div>
                  <div style={styles.topText}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div style={styles.topText}>
                        <div style={styles.topText}>
                          <b>1</b>
                        </div>
                        <div style={styles.topText}>
                          <b>2</b>
                        </div>
                        <div style={styles.topText}>
                          <b>3</b>
                        </div>
                        <div style={styles.topText}>
                          <b>4</b>
                        </div>
                      </div>
                      <div style={{ marginLeft: 200 }}>
                        <div style={styles.topText}>
                          <b>1</b>
                        </div>
                        <div style={styles.topText}>
                          <b>2</b>
                        </div>
                        <div style={styles.topText}>
                          <b>3</b>
                        </div>
                        <div style={styles.topText}>
                          <b>4</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ ...styles.topText, ...{ width: "45%" } }}>
                  Эмчилгээ сувилгааны төлөвлөгөө
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Хоол тэжээл</b>
                  <div style={styles.topText}>1. Хоол № _________</div>
                  <div style={styles.topText}>
                    2. Зөвшөөрөгдөх ____________________
                  </div>
                  <div style={styles.topText}>
                    3. Хориглох ________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  Дэглэм
                  <div style={styles.topText}>Хэвтрийн [ ] ердийн [ ]</div>
                  <div style={styles.topText}>
                    Эмч, сувилагчийн хяналт: Байнга [ ] Ердийн [ ]
                  </div>
                  <div style={styles.topText}>
                    Сахиур: /зур/ шаардлагатай [ ] үгүй [ ]
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.centerText}>Эмчийн нэр ______________________</div>
          <div style={styles.centerText}>
            _____он _____ сар _____ өдөр _____цаг_____минут
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЭМНЭЛЗҮЙН УРЬДЧИЛСАН ОНОШИЙН ҮНДЭСЛЭЛ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}>
                  Сар, өдөр
                </td>
                <td style={{ ...styles.centerText, ...{ width: "45%" } }}>
                  ҮЗЛЭГИЙН ТЭМДЭГЛЭЛ
                </td>
                <td style={{ ...styles.centerText, ...{ width: "45%" } }}>
                  ЭМЧИЛГЭЭ, ХООЛ СУВИЛГААНЫ ЗААЛТ
                </td>
              </tr>
              <tr>
                <td style={{ height: 900 }}></td>
                <td style={{ height: 900 }}></td>
                <td style={{ height: 900 }}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЛИНИКИЙН ОНОШИЙН ҮНДЭСЛЭЛ</b>
          </div>
          <div style={styles.leftText}>
            Зовиураас:
            ________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Асуумжаас:_____________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Бодит үзлэгээс:
            ______________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            <b>
              Шинжилгээний дүгнэлтээс:
              <span style={{ marginLeft: 100 }}>
                а/ Лабораторийн шинжилгээ:
              </span>
            </b>
          </div>
          <div style={styles.leftText}>
            Цусны ерөнхий шинжилгээ:
            ___________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            __________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Шээсний ерөнхий шинжилгээ:
            _______________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Цусны биохимийн шинжилгээ:
            ___________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Вирус, маркерийн
            шинжилгээ:___________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Бусад шинжилгээ:
            _________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.centerText}>
            <b>б/ Үйл оношийн шинжилгээ:</b>
          </div>
          <div style={styles.leftText}>
            Чанд авиан шинжилгээ:
            ____________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Дурангийн шинжилгээ:
            _____________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Рентген шинжилгээ:
            _________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Бусад шинжилгээ:
            _________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.centerText}>Клиникийн онош</div>
          <div style={styles.leftText}>
            Үндсэн онош:
            ____________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Хүндрэл:
            ___________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Дагалдах
            онош:______________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            ________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.centerText}>Эмчийн нэр ______________________</div>
          <div style={styles.centerText}>____ он _____ сар _____ өдөр</div>
        </div>
      </div>
    </>
  );
}

export default CT_2;
