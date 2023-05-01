import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-36
function CT_36() {
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
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
      marginTop: 5,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 10,
    },
    centerText: {
      padding: 0,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 10,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
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
      fontSize: 10,
      textAlign: "center",
    },
    rightText: {
      textAlign: "right",
      fontSize: 10,
    },
  };
  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}>
              А1. Эмнэлгийн
              нэр:_______________________________________________________________
            </div>
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
                  <span style={{ fontWeight: "bold", fontSize: 10 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-36
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ТҮЛЭГДЛИЙН ШАЛТГААНТАЙ ОСОЛ ГЭМТЛИЙН ТОХИОЛДЛЫГ БҮРТГЭХ НЭМЭЛТ
              ХУУДАС
            </span>
          </div>
          <div style={styles.rowCellWithText}>
            А2.Эцэг/эх/-ийн нэр ________________________________ A3. Нэр
            __________________________________ A4.РД
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
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ ...styles.rowCellWithText, ...{ width: 200 } }}>
                A5. Нас
                <div style={{ display: "flex", marginLeft: 5 }}>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                </div>
              </div>
              <Table bordered className="document" style={{ marginTop: 5 }}>
                <tbody>
                  <tr>
                    <td colSpan={2} style={styles.centerText}>
                      А6. Хүйс
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Эрэгтэй</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Эмэгтэй</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Тодорхойгүй</td>
                    <td style={styles.centerText}>99</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Table
              bordered
              className="document"
              style={{ marginTop: 5, marginLeft: 20 }}
            >
              <tbody>
                <tr>
                  <td colSpan={2} style={styles.centerText}>
                    А11. Асран хамгаалагч /сахиур/
                  </td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Эцэг, эх</td>
                  <td style={styles.centerText}>1</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Нөхөр, эхнэр</td>
                  <td style={styles.centerText}>2</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Өвчтөн өөрөө</td>
                  <td style={styles.centerText}>3</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Ах, эгч, дүү </td>
                  <td style={styles.centerText}>4</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Бусад________________________</td>
                  <td style={styles.centerText}>98</td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginTop: 5, marginLeft: 20 }}
            >
              <tbody>
                <tr>
                  <td colSpan={2} style={styles.centerText}>
                    А12. Үйлчлүүлэгч 10-с доош настай бол түлэгдэх үед хэнтэй
                    хамт байсан бэ?
                  </td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Ганцаараа</td>
                  <td style={styles.centerText}>1</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Эцэг, эх</td>
                  <td style={styles.centerText}>2</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    Насанд хүрсэн боловч асран хамгаалагч нь биш
                  </td>
                  <td style={styles.centerText}>3</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    Насанд хүрсэн бусад асран хамгаалагч
                  </td>
                  <td style={styles.centerText}>4</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    8 нас хүрээгүй өөр хүүхэдтэй хамт
                  </td>
                  <td style={styles.centerText}>5</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Тодорхойгүй</td>
                  <td style={styles.centerText}>99</td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginTop: 5, marginLeft: 20 }}
            >
              <tbody>
                <tr>
                  <td colSpan={2} style={styles.centerText}>
                    А13.Түлэгдэлтэнд өртсөн хүний тоо
                  </td>
                </tr>
                <tr>
                  <td style={styles.leftText}>1 хүн</td>
                  <td style={styles.centerText}>1</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>2 хүн</td>
                  <td style={styles.centerText}>2</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>3-5 хүн</td>
                  <td style={styles.centerText}>3</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>6-9 хүн</td>
                  <td style={styles.centerText}>4</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>10 ба түүнээс дээш</td>
                  <td style={styles.centerText}>5</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Тодорхойгүй</td>
                  <td style={styles.centerText}>99</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={styles.flexRow}>
            <div style={{ width: "60%" }}>
              <div style={styles.leftText}>
                A7. Тогтмол хаяг:
                __________________________________________________________________
              </div>
              <div style={styles.leftText}>
                А8. Утас: ______________________________________
              </div>
              <div style={styles.leftText}>
                А9. Ажлын газар, албан тушаал
                _______________________________________________________
              </div>
              <div style={styles.leftText}>
                А10. Боловсрол:
                ___________________________________________________________________
              </div>
            </div>
            <Table bordered className="document" style={{ width: "40%" }}>
              <tbody>
                <tr>
                  <td style={styles.leftText}>
                    А14.Түлэгдсэн он, сар, өдөр, цаг, минут
                  </td>
                  {[...Array(7)].map((x, i) => (
                    <td
                      key={i}
                      style={{
                        ...styles.centerText,
                        ...{ width: 30, height: 15 },
                      }}
                    >
                      &nbsp;
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    А15. Үзүүлсэн он, сар, өдөр, цаг, минут
                  </td>
                  {[...Array(7)].map((x, i) => (
                    <td
                      key={i}
                      style={{
                        ...styles.centerText,
                        ...{ width: 30, height: 15 },
                      }}
                    >
                      &nbsp;
                    </td>
                  ))}
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    А16.Хэвтсэн он, сар, өдөр, цаг, минут
                  </td>
                  {[...Array(7)].map((x, i) => (
                    <td
                      key={i}
                      style={{
                        ...styles.centerText,
                        ...{ width: 30, height: 15 },
                      }}
                    >
                      &nbsp;
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={styles.flexRow}>
            <Table bordered className="document" style={{ marginTop: 0 }}>
              <tbody>
                <tr>
                  <td style={styles.centerText} rowSpan={7}>
                    <b>А17. Түлэгдэлд өртөхөд нөлөөлсөн хүчин зүйл</b>
                  </td>
                  <td style={styles.leftText}>Байхгүй</td>
                  <td style={styles.centerText}>&nbsp;1&nbsp;</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    Согтууруулах мансууруулах бодис
                  </td>
                  <td style={styles.centerText}>2</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Эм, эмийн бодис</td>
                  <td style={styles.centerText}>3</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Уналт /таталт</td>
                  <td style={styles.centerText}>4</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Оюуны хомсдол </td>
                  <td style={styles.centerText}>5</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Сэтгэцийн өвчин </td>
                  <td style={styles.centerText}>6</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    Биеийн, оюуны хөгжлийн бэрхшээл
                  </td>
                  <td style={styles.centerText}>7</td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginTop: 0, marginLeft: 50 }}
            >
              <tbody>
                <tr>
                  <td style={styles.centerText} rowSpan={8}>
                    <b>А18. Бусад эрхтний талаас хавсарсан гэмтэл</b>
                  </td>
                  <td style={styles.leftText}>Байхгүй</td>
                  <td style={styles.centerText}>1</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Хэвлийн гэмтэл</td>
                  <td style={styles.centerText}>2</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Цээжний гэмтэл</td>
                  <td style={styles.centerText}>3</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Нүдний гэмтэл</td>
                  <td style={styles.centerText}>4</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Ясны хугарал</td>
                  <td style={styles.centerText}>5</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Нугасны гэмтэл </td>
                  <td style={styles.centerText}>6</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Тархины гэмтэл</td>
                  <td style={styles.centerText}>7</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Бусад</td>
                  <td style={styles.centerText}>98</td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginTop: 0, marginLeft: 50 }}
            >
              <tbody>
                <tr>
                  <td style={styles.centerText}>
                    <b>
                      А19.Түлэгдсэн газар, байршил /Хот, аймаг, сум, дүүрэг,
                      хороо, осол болсон цэгийг бичнэ үү!/
                    </b>
                  </td>
                </tr>
                <tr>
                  <td style={styles.centerText}>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={styles.centerText}>
            <b>Б. ТҮЛЭГДЛИЙН БАЙРШИЛ</b>
          </div>
          <div style={styles.flexRow}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "33%" }}
            >
              <Table bordered className="document" style={{ marginTop: 0 }}>
                <tbody>
                  <tr>
                    <td style={styles.centerText} colSpan={2}>
                      <b>Б1. Биеийн хэдэн хувь түлэгдсэн бэ?</b>
                    </td>
                    <td style={styles.leftText}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText} rowSpan={2}>
                      Б2. Амьсгалын зам гэмтсэн эсэх
                    </td>
                    <td style={styles.centerText}>Тийм</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>Үгүй</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document" style={{ marginTop: 5 }}>
                <tbody>
                  <tr>
                    <td style={styles.centerText} rowSpan={5}>
                      <b>Б3.Их бие </b>
                    </td>
                    <td style={styles.leftText}>Цээж</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Хэвлий</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Нуруу</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Өгзөг</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бэлэг эрхтэн </td>
                    <td style={styles.centerText}>5</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "33%" }}
            >
              <Table bordered className="document" style={{ marginTop: 0 }}>
                <tbody>
                  <tr>
                    <td style={styles.centerText} rowSpan={5}>
                      <b>Б4. Толгой, хүзүү</b>
                    </td>
                    <td style={styles.leftText}>Хуйх</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Нүд</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Хүзүү</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Нүүр</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document" style={{ marginTop: 5 }}>
                <tbody>
                  <tr>
                    <td style={styles.centerText} rowSpan={4}>
                      <b>Б5. Гар</b>
                    </td>
                    <td style={styles.leftText}>Мөр</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бугалга</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Тохой</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Шуу</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "33%" }}
            >
              <Table bordered className="document" style={{ marginTop: 0 }}>
                <tbody>
                  <tr>
                    <td style={styles.centerText} rowSpan={4}>
                      <b>Б6. Хөл</b>
                    </td>
                    <td style={styles.leftText}>Ташаа</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Өвдөг</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Шагай</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Тавхай</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="document" style={{ marginTop: 5 }}>
                <tbody>
                  <tr>
                    <td style={styles.centerText} rowSpan={4}>
                      <b>Б7. Сарвуу </b>
                    </td>
                    <td style={styles.leftText}>Бугуй</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Алга</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Гарын ар</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Нуруу </td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div style={styles.centerText}>
            <b>ТҮЛЭГДЛИЙН ШАЛТГААН /В-Ж/</b>
          </div>
          <div style={styles.flexRow}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <Table
                bordered
                className="document"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <tbody>
                  <tr>
                    <td style={styles.verticalText} rowSpan={44}>
                      <b>В. Түлэгдсэн зүйл</b>
                    </td>
                    <td style={styles.centerText} rowSpan={4}>
                      <b>В1. Халуун гадаргу</b>
                    </td>
                    <td style={styles.leftText}>Хоол хийх хэрэгсэл</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      1
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Гэр ахуйн халаалтын хэрэгсэл
                    </td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Гэрэлтүүлэх хэрэгсэл</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Мэргэжлийн ажилтай холбоотой
                    </td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr style={{ height: 10 }}></tr>
                  <tr>
                    <td style={styles.centerText} rowSpan={4}>
                      <b>В2. Халуун хий, шингэн</b>
                    </td>
                    <td style={styles.leftText}>Уур болон хий</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Хоол хүнсний зүйл /Г хэсэг рүү/
                    </td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Мэргэжлийн ажилтай холбоотой
                    </td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Ус</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr style={{ height: 10 }}></tr>
                  <tr>
                    <td style={styles.centerText} rowSpan={4}>
                      <b>В3. Цахилгааны</b>
                    </td>
                    <td style={styles.leftText}>
                      Гэр ахуйн цахилгааны хэрэгсэл
                    </td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Мэргэжлийн ажилтай холбоотой
                    </td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Өндөр хүчдэл</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Бага хүчдэл /&#60;1000 хүчдэл/
                    </td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr style={{ height: 10 }}></tr>
                  <tr>
                    <td style={styles.centerText} rowSpan={2}>
                      <b>В4. Химийн</b>
                    </td>
                    <td style={styles.leftText}>Гэр ахуйн химийн бодис</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Мэргэжлийн ажилтай холбоотой
                    </td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr style={{ height: 10 }}></tr>
                  <tr>
                    <td style={styles.centerText} rowSpan={3}>
                      <b>В5. Үрэлтийн</b>
                    </td>
                    <td style={styles.leftText}>Амьсгалах</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Цацраг</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Бусад_________________________
                    </td>
                    <td style={styles.centerText}>98</td>
                  </tr>
                  <tr style={{ height: 10 }}></tr>
                  <tr>
                    <td style={styles.centerText} rowSpan={6}>
                      <b>В6. Гэр ахуйн орчны галд өртөх</b>
                    </td>
                    <td style={styles.leftText}>
                      Хоол хийх, халаах үед галд өртөх
                    </td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Халаалт /Д хэсэг рүү/</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Гэрэлтүүлэг /Е хэсэг рүү/</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Санамсаргүй гал алдах /Гал түлэх, хог шатаах/
                    </td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Санаатайгаар гал гаргах /Ж хэсэг рүү/
                    </td>
                    <td style={styles.centerText}>5</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Бусад_________________________
                    </td>
                    <td style={styles.centerText}>98</td>
                  </tr>
                  <tr style={{ height: 10 }}></tr>
                  <tr>
                    <td style={styles.centerText} rowSpan={8}>
                      <b>В7. Мэргэжлээс шалтгаалсан галд өртөх</b>
                    </td>
                    <td style={styles.leftText}>Хоол үйлдвэрлэл</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Нефть химийн</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Нэхмэл</td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Барилга</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>ХАА</td>
                    <td style={styles.centerText}>5</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Салют</td>
                    <td style={styles.centerText}>6</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Үйлдвэр</td>
                    <td style={styles.centerText}>7</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Бусад_________________________
                    </td>
                    <td style={styles.centerText}>98</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText} rowSpan={7}>
                      <b>В7. Мэргэжлээс шалтгаалсан галд өртөх</b>
                    </td>
                    <td style={styles.leftText}>Зам тээврийн осол</td>
                    <td style={styles.centerText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Түүдэг гал</td>
                    <td style={styles.centerText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Асгарсан шингэн </td>
                    <td style={styles.centerText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Гал түймэр</td>
                    <td style={styles.centerText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Салют, бусад зугаа цэнгэлийн галт хэрэгсэл
                    </td>
                    <td style={styles.centerText}>5</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Танхай үйлдэл, терроризм</td>
                    <td style={styles.centerText}>6</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>
                      Бусад_________________________
                    </td>
                    <td style={styles.centerText}>98</td>
                  </tr>
                  <tr>
                    <td colSpan={4} style={styles.centerText}>
                      <b>ТҮЛЭГДЛИЙН ШАЛТГААН</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} style={styles.centerText}>
                      <div>&nbsp;</div>
                      <div>&nbsp;</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", width: "58%" }}
            >
              <div style={{ ...styles.flexRow, ...{} }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Table bordered className="document" style={{ marginTop: 0 }}>
                    <tbody>
                      <tr>
                        <td style={styles.centerText} rowSpan={8}>
                          <b>Г1. Хоол хийх, бэлтгэх үед юунд түлэгдсэн бэ?</b>
                        </td>
                        <td style={styles.leftText}>Зуух</td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Буцалгагч</td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Халуун тогоо</td>
                        <td style={styles.centerText}>3</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Халуун сав</td>
                        <td style={styles.centerText}>4</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Битүү чанагч</td>
                        <td style={styles.centerText}>5</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Түлш</td>
                        <td style={styles.centerText}>6</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          энгийн тогоо, сав суулга
                        </td>
                        <td style={styles.centerText}>7</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Бусад</td>
                        <td style={styles.centerText}>98</td>
                      </tr>
                      <tr>
                        <td rowSpan={3} style={styles.leftText}>
                          <b>Г3. Саванд байсан зүйл</b>
                        </td>
                        <td style={styles.leftText}>Хоол, цай, тос, сүү</td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Буцалсан ус</td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Бусад____________ </td>
                        <td style={styles.centerText}>98</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table
                    bordered
                    className="document"
                    style={{ marginTop: 5, marginBottom: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.centerText} rowSpan={3}>
                          <b>
                            Г5. Хоол хийдэг газар нь амьдрах хэсгээс тусдаа эсэх
                          </b>
                        </td>
                        <td style={styles.leftText}>Тийм</td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Үгүй</td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Тодорхойгүй</td>
                        <td style={styles.centerText}>99</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table
                    bordered
                    className="document"
                    style={{ marginTop: 5, marginBottom: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.centerText} colSpan={2}>
                          <b>Д1. Гэрийн халаалтын улмаас гал гарах</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Халаалт орчмын материал</td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Халаалтыг хөдөлгөхөөр хүрэх
                        </td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Халаалтанд санаандгүй хүрэх
                        </td>
                        <td style={styles.centerText}>3</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Халаалт залгасан утас, кабель, залгуур
                        </td>
                        <td style={styles.centerText}>4</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад_________________________
                        </td>
                        <td style={styles.centerText}>98</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table bordered className="document" style={{ marginTop: 5 }}>
                    <tbody>
                      <tr>
                        <td style={styles.centerText} colSpan={2}>
                          <b>Е1. Гэрийн гэрэлтүүлгийн улмаас гал гарах</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Гэрэл, дэнлүү орчмын материал
                        </td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Гэрэл, дэнлүүг хөдөлгөхөөр оролдох
                        </td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Гэрэл, дэнлүүнд санаандгүй хүрэх
                        </td>
                        <td style={styles.centerText}>3</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Гэрэлтүүлэг залгасан утас, кабель, залгуур
                        </td>
                        <td style={styles.centerText}>4</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад_________________________
                        </td>
                        <td style={styles.centerText}>98</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Table
                    bordered
                    className="document"
                    style={{ marginTop: 5, marginBottom: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.centerText} rowSpan={5}>
                          <b>
                            Г2. Хоол хийх бэлтгэхтэй холбоотой түлэгдсэн бол үйл
                            явц
                          </b>
                        </td>
                        <td style={styles.leftText}>Дэлбэрэх</td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Дотор нь унах</td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Өөр лүүгээ татах</td>
                        <td style={styles.centerText}>3</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Асгарах</td>
                        <td style={styles.centerText}>4</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад_________________________
                        </td>
                        <td style={styles.centerText}>98</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table bordered className="document" style={{ marginTop: 5 }}>
                    <tbody>
                      <tr>
                        <td style={styles.centerText} colSpan={2}>
                          <b>Г4. Хоол хийх талбайн өндөр</b>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Нэг түвшинд /шалан дээр, газар/
                        </td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          0.9 метр хүртэл /ширээ, сандал, тавиур гм/
                        </td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          0.9 метрээс дээш /ширээ, сандал, тавиур гм/
                        </td>
                        <td style={styles.centerText}>3</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Мэдэхгүй</td>
                        <td style={styles.centerText}>99</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table bordered className="document" style={{ marginTop: 5 }}>
                    <tbody>
                      <tr>
                        <td style={styles.centerText} rowSpan={7}>
                          <b>Д2. Халаалтын эх үүсвэр</b>
                        </td>
                        <td style={styles.leftText}>Мод, нүүрс, аргал</td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Керосин</td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Шингэрүүлсэн нефтийн хий
                        </td>
                        <td style={styles.centerText}>3</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Байгалийн хий</td>
                        <td style={styles.centerText}>4</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Цахилгаан эрчим хүч</td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад___________________
                        </td>
                        <td style={styles.centerText}>98</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Тодорхойгүй</td>
                        <td style={styles.centerText}>99</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table bordered className="document" style={{ marginTop: 5 }}>
                    <tbody>
                      <tr>
                        <td style={styles.centerText} rowSpan={6}>
                          <b>Е2.Гэрэлтүүлгийн хэрэгслийн төрөл</b>
                        </td>
                        <td style={styles.leftText}>Лаа</td>
                        <td style={styles.centerText}>1</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Цахилгаан эрчим хүч</td>
                        <td style={styles.centerText}>2</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Нарны эрчим хүчээр</td>
                        <td style={styles.centerText}>3</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Керосин</td>
                        <td style={styles.centerText}>4</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад___________________
                        </td>
                        <td style={styles.centerText}>98</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Тодорхойгүй</td>
                        <td style={styles.centerText}>99</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={styles.centerText}>
                  <b>Ж. Санаатай болон учир битүүлэг үйлдэл</b>
                </div>
                <Table bordered className="document" style={{ marginTop: 5 }}>
                  <tbody>
                    <tr>
                      <td style={styles.centerText} rowSpan={5}>
                        <b>Ж1. Санаатайгаар түлсэн шалтгаа</b>
                      </td>
                      <td style={styles.leftText}>Өөрийгөө хорлох</td>
                      <td style={styles.centerText}>1</td>
                      <td
                        style={{ ...styles.centerText, ...{ width: 150 } }}
                        rowSpan={5}
                      >
                        <b>
                          Ж2. "Учир битүүлэг" бол санаатайгаар түлсэн байх
                          эмнэлзүйн шинж байна уу?
                        </b>
                      </td>
                      <td style={styles.leftText}>Өндөр</td>
                      <td style={styles.centerText}>1</td>
                    </tr>
                    <tr>
                      <td style={styles.leftText}>Бусдыг хорлох</td>
                      <td style={styles.centerText}>2</td>
                      <td style={styles.leftText}>Дунд зэрэг</td>
                      <td style={styles.centerText}>2</td>
                    </tr>
                    <tr>
                      <td style={styles.leftText}>Учир битүүлэг</td>
                      <td style={styles.centerText}>3</td>
                      <td style={styles.leftText}>Бага зэрэг</td>
                      <td style={styles.centerText}>3</td>
                    </tr>
                    <tr>
                      <td style={styles.leftText}>
                        Бусад_________________________
                      </td>
                      <td style={styles.centerText}>98</td>
                      <td style={styles.leftText}>Байхгүй</td>
                      <td style={styles.centerText}>4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td style={styles.leftText}>Мэдэхгүй</td>
                      <td style={styles.centerText}>99</td>
                    </tr>
                  </tbody>
                </Table>
                <div style={styles.centerText}>
                  <b>Ж3. Түлэгдэлтэд хүргэсэн шалтгааны эх үүсвэр</b>
                </div>
                <Table
                  bordered
                  className="document"
                  style={{ marginTop: 5, marginBottom: 0 }}
                >
                  <tbody>
                    <tr>
                      <td style={styles.leftText}>Этанол</td>
                      <td style={styles.centerText}>1</td>
                      <td
                        style={{ ...styles.centerText, ...{ width: 30 } }}
                        rowSpan={3}
                      ></td>
                      <td style={styles.leftText}>Шингэрүүлсэн нефтийн хий </td>
                      <td style={styles.centerText}>4</td>
                      <td
                        style={{ ...styles.centerText, ...{ width: 30 } }}
                        rowSpan={3}
                      ></td>
                      <td style={styles.leftText}>Мод </td>
                      <td style={styles.centerText}>7</td>
                    </tr>
                    <tr>
                      <td style={styles.leftText}>Керосин</td>
                      <td style={styles.centerText}>2</td>
                      <td style={styles.leftText}>Нарны эрчим хүч</td>
                      <td style={styles.centerText}>5</td>
                      <td style={styles.leftText}>Аргал </td>
                      <td style={styles.centerText}>8</td>
                    </tr>
                    <tr>
                      <td style={styles.leftText}>Нүүрс</td>
                      <td style={styles.centerText}>4</td>
                      <td style={styles.leftText}>Цахилгаан эрчим хүч</td>
                      <td style={styles.centerText}>6</td>
                      <td style={styles.leftText}>
                        Бусад_________________________
                      </td>
                      <td style={styles.centerText}>98</td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  bordered
                  className="document"
                  style={{ marginTop: 0, width: "100%", marginBottom: 0 }}
                >
                  <tbody>
                    <tr>
                      <td style={styles.leftText}>
                        <b>ТҮЛЭГДЛИЙН ОНОШ</b>
                      </td>
                      <td style={styles.leftText}>
                        <b>АВСАН АРГА ХЭМЖЭЭ </b>
                      </td>
                    </tr>
                    <tr>
                      <div>&nbsp;</div>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div style={styles.leftText}>
            Эмчийн нэр, гарын үсэг: _____________________________________ (
            <span style={{ marginLeft: 200 }}>)</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_36;
