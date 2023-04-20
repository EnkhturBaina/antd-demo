import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-32В
function CT_32V() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
      display: "inline-flex",
    },
    generalText: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
      marginTop: 5,
    },
    leftText: {
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
    topText: {
      padding: 1,
      fontSize: 11,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 11,
      padding: 0,
      lineHeight: 1,
      marginTop: 1,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
      fontSize: 11,
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
                  ...{ textAlign: "right", display: "block", lineHeight: 1 },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1,
                  }}
                >
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-32В
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЯАРАЛТАЙ ТУСЛАМЖИЙН ХУУДАС /Эх барих, эмэгтэйчүүд/
            </span>
          </div>
          <div style={styles.leftText}>
            Яаралтай тусламжид ирсэн огноо . . . . он . . . сар . . . өдөр ....
            цаг.... минут
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Ерөнхий мэдээлэл</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Эцэг/эх/-ийн нэр: ________________ Нэр: __________________
                </td>
                <td style={styles.topText}>
                  Регистрийн дугаар:
                  <div style={{ display: "flex", marginLeft: 5 }}>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.topText}>Нас:</td>
                <td style={styles.topText}>
                  <div style={styles.rowCellWithText}>
                    Хүйс:
                    <span style={styles.rowCells}></span>&nbsp;Эрэгтэй
                    <span style={styles.rowCells}></span>&nbsp;Эмэгтэй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Тогтмол хаяг</td>
                <td style={styles.topText} colSpan={2}>
                  Холбоо барих утас: ___________________
                </td>
                <td style={styles.topText}>
                  Давтан ирсэн хугацаа
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp; 24 цаг
                    <span style={styles.rowCells}></span>&nbsp; 48 цаг
                    <span style={styles.rowCells}></span>&nbsp; 72 цаг
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  ЯТТ-т ирсэн ….... цаг ....... минут
                </td>
                <td style={styles.centerText} colSpan={4} rowSpan={2}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.leftText}>Эрэмбэлсэн цаг хугацаа:</div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: 50,
                      }}
                    >
                      <div style={styles.leftText}>
                        Эхэлсэн: ......... цаг ........ минут
                      </div>
                      <div style={styles.leftText}>
                        Дууссан: ......... цаг ........ минут
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Ажиглалтын өрөөнд хянагдсан цаг ........
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  ЯТТ-т ирсэн хэлбэр
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;Өөрөө&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;103&nbsp;
                    <span style={styles.rowCells}></span>
                    &nbsp;Амбулаториос&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;Бусад
                    эмнэлгээс&nbsp;
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.leftText}>
                      ЯТТ-аар үйлчлүүлсэн давтамж:
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: 20,
                      }}
                    >
                      <div style={styles.leftText}>□ Анх</div>
                      <div style={styles.leftText}>□ Давтан</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Асуумжийг хэнээс авсан
                  <div style={styles.leftText}>
                    □ Өөрөөс нь
                    <span style={{ marginLeft: 30 }}>□ Бусад хүнээс</span>
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Асуумж авсан хүний овог нэр
                </td>
                <td style={styles.topText}>Утасны дугаар</td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Гол зовиур
                </td>
                <td style={styles.centerText} colSpan={3}>
                  Биеийн жин ________ кг Өндөр _______ см
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3} rowSpan={2}>
                  <div style={styles.centerText}>&nbsp;</div>
                  <div style={styles.centerText}>&nbsp;</div>
                </td>
                <td style={styles.leftText} rowSpan={2}>
                  Харшил
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp; Эм тариа &nbsp;
                    <span style={styles.rowCells}></span>&nbsp; Бусад
                  </div>
                </td>
                <td style={styles.centerText}>Хорт зуршил</td>
              </tr>
              <tr>
                <td style={styles.leftText}>□ Архи □ Тамхи □ Бусад</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={7}>
                  Бодит үзлэг
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>№</td>
                <td style={styles.leftText} colSpan={2}>
                  <div style={styles.rightText}>сар/ өдөр</div>
                  <div style={styles.leftText}>Параметрүүд</div>
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>1</td>
                <td style={styles.leftText} colSpan={2}>
                  Онцлог байдал
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>2</td>
                <td style={styles.leftText} colSpan={2}>
                  Зүрхний цохилт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>3</td>
                <td style={styles.leftText} colSpan={2}>
                  Амьсгалын тоо
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>4</td>
                <td style={styles.leftText} colSpan={2}>
                  Артерийн даралт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>5</td>
                <td style={styles.leftText} colSpan={2}>
                  Биеийн температур
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>6</td>
                <td style={styles.leftText} colSpan={2}>
                  SpO2 %
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>7</td>
                <td style={styles.leftText} colSpan={2}>
                  Fi O2
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  8
                </td>
                <td style={styles.leftText} rowSpan={2}>
                  Хялгасан судасны дүүрэлт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  □ 2 сек бага
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  □ 2 сек их
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}></td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={7}>
                  Эрэмбэлэн ангилалт
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={7}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                      }}
                    >
                      <div style={styles.centerText}>A. Яаралтай шинж</div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Унтаарсан
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Ухаангүй
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Цочромтгой,
                        хөөрлийн байдалтай
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Таталт
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Амьсгал
                        бөглөрөх
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Амьсгал
                        хямралын хүнд хэлбэр
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Жирэмсний эрт,
                        хожуу хугацаанд үтрээнээс их хэмжээний цус алдаж байгаа
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Захын хөхрөлт
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Аюулхай орчмоор
                        өвдөх
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Арьс салст
                        гэнэт цонхийж цайх
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Жирэмсэн
                        эмэгтэйн толгой хүчтэй өвдөх зовиур
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                      }}
                    >
                      <div style={styles.centerText}>Тулгамдсан шинж</div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Шээсэнд уураг 3
                        гр ба түүнээс дээш
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Өндөр халуунтай
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хэвлийгээр
                        хүчтэй өвдөх
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Ураг орчмын
                        шингэн гарсан, халууралттай
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Умайн хүзүүний
                        нээлт 8 см-ээс дээш
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Дотор муухайрах
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Жирэмсний эрт,
                        хожуу хугацаанд үтрээнээс цус багаар гарах
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Ургийн жижиг
                        хэсэг, хүй унжих
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хялгасан
                        судасны дүүрэлт 3 секундээс удаашрах
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={{ ...styles.rowCellWithText, ...{ marginTop: 10 } }}>
            Эрэмбэлэн ангилалтын үнэлгээ&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={styles.rowCells}></div>&nbsp;Улаан-A&nbsp;
            <div style={styles.rowCells}></div>&nbsp;Шар-B &nbsp;
            <div style={styles.rowCells}></div>&nbsp;Ногоон-C &nbsp;
            <div style={styles.rowCells}></div>&nbsp;Цагаан-D
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  Авсан арга хэмжээ болон яаралтай тусламж
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 20 } }}>№</td>
                <td style={styles.centerText}>Эмийн нэр</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Хэмжих нэгж
                </td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Тоо</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Үнэ</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Нийт үнэ
                </td>
              </tr>
              {[...Array(8)].map((x, i) => (
                <tr>
                  <td key={i} style={styles.centerText}>
                    {i + 1}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={styles.leftText}>
            Яаралтай тусламж үзүүлсэн Эмчийн нэр _______________________
            /____________________/
          </div>
          <div style={styles.leftText}>
            Эх баригчийн нэр _______________________ /____________________/
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "70%" } }}>
                  Төрөлжсөн мэргэжлийн эмчийн үзлэг ба шинжилгээ
                </td>
                <td style={{ ...styles.centerText, ...{ width: "30%" } }}>
                  Зөвлөгөө, эмчилгээ:
                </td>
              </tr>
              <tr>
                <td>
                  <div style={styles.leftText}>Огноо:</div>
                  <div style={styles.leftText}>Зовиур:</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Үзлэгт:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Толины үзлэг:</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Үтрээний үзлэг:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>КТГ:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Чанд авиа:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Сүүлийн сарын тэмдэг:</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Шинжилгээ:</div>
                  <div>&nbsp;</div>
                  <div style={styles.leftText}>Онош:</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Шийдвэрлэсэн байдал
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>
            □ Ажиглалт <span style={{ marginLeft: 10 }}>□ ЭЭТ</span>
            <span style={{ marginLeft: 10 }}>
              □ Бусад тасаг _________________________________
            </span>
          </div>
          <div style={styles.leftText}>
            Бусад эмнэлэг рүү илгээсэн:
            ___________________________________________________
          </div>
          <div style={styles.leftText}>□ Харьяа хяналтанд</div>
          <div style={styles.leftText}>
            Шийдвэрлэсэн ...... он ...... сар ...... өдөр...... цаг ...... минут
          </div>
          <div style={styles.centerText}>
            Шийдвэрлэсэн ЯТТ-н эмч _______________________/______________/
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_32V;
