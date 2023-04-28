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
                     Орон сууцанд □ Гэрт □ Бусад
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
                    □ Ойрын 6 сарын хугацаанд халдварт өвчтэй хүнтэй ойр байсан
                    эсэх{" "}
                  </div>
                  <div style={styles.topText}>
                    □ Ойрын 6 сарын дотор гадаад оронд зорчсон эсэх (хаашаа,
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
    </>
  );
}

export default CT_2;
