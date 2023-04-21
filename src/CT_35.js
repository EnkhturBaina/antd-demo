import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-35
function CT_35() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
      marginTop: 5,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 10,
    },
    centerText: {
      padding: 1,
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
      marginTop: 2,
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
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}>
              <div style={styles.rowCellWithText}>
                Эмнэлгийн нэр:&nbsp;
                <div style={{ display: "flex" }}>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                  <div style={styles.rowCells}></div>
                </div>
              </div>
            </div>
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
                  <span style={{ fontWeight: "bold", fontSize: 10 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-35
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ГЭРИЙН ТӨРӨЛТИЙГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            1. Эцэг /эх/-ийн нэр: _______________ 2. Нэр: ___________________
            <div style={{ display: "flex", marginLeft: 150 }}>
              <span style={styles.generalText}>3. РД:</span>
              <div style={{ display: "flex", marginLeft: 15 }}>
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
          </div>
          <div style={styles.rowStyle}>
            <div style={{ display: "flex" }}>
              <span style={styles.generalText}>4. Нас:</span>
              <div style={{ display: "flex", marginLeft: 15 }}>
                <div style={styles.rowCells}></div>
                <div style={styles.rowCells}></div>
              </div>
              <span style={{ marginLeft: 50 }}>
                5. Төрсөн он _______ сар _____ өдөр ____
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "48%" }}
            >
              <Table
                bordered
                className="document"
                style={{ marginTop: 10, marginBottom: 0 }}
              >
                <tbody>
                  <tr>
                    <td style={styles.leftText}>
                      <b>7. Тогтмол хаяг: ________________________</b>
                      <div style={styles.rowStyle}>
                        ________________________________________________
                      </div>
                      <div style={styles.rowStyle}>
                        ________________________________________________
                      </div>
                      <div style={styles.rowStyle}>
                        ________________________________________________
                      </div>
                      <div style={styles.rowStyle}>Утасны дугаар:</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div style={styles.rowStyle}>
                <b>12. Гэр бүлийн байдал</b>
              </div>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td style={styles.leftText}>Огт гэрлээгүй</td>
                    <td style={styles.centerText}>`01</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Батлуулсан гэр бүлтэй </td>
                    <td style={styles.centerText}>`02</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Батлуулаагүй гэр бүлтэй</td>
                    <td style={styles.centerText}>`03</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Тусгаарласан</td>
                    <td style={styles.centerText}>`04</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Цуцалсан</td>
                    <td style={styles.centerText}>`05</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бэлбэсэн</td>
                    <td style={styles.centerText}>`06</td>
                  </tr>
                </tbody>
              </Table>
              <div style={styles.rowStyle}>
                <b>14. Төрөлтийн үед тусламж үзүүлсэн байдал</b>
              </div>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td style={styles.centerText}>1</td>
                    <td style={styles.leftText}>Эх барих эмэгтэйчүүдийн эмч</td>
                    <td style={styles.centerText}>`01</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>2</td>
                    <td style={styles.leftText}>Их эмч</td>
                    <td style={styles.centerText}>`02</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>3</td>
                    <td style={styles.leftText}>Эх баригч бага эмч</td>
                    <td style={styles.centerText}>`03</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>4</td>
                    <td style={styles.leftText}>Бага эмч</td>
                    <td style={styles.centerText}>`04</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>5</td>
                    <td style={styles.leftText}>Сувилагч</td>
                    <td style={styles.centerText}>`05</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>6</td>
                    <td style={styles.leftText}>Мэргэжлийн бус</td>
                    <td style={styles.centerText}>`06</td>
                  </tr>
                </tbody>
              </Table>
              <div style={styles.rowStyle}>
                <b>16. Төрсний дараах хүндрэл</b>
              </div>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td style={styles.centerText}>1</td>
                    <td style={styles.leftText}>Халуурсан</td>
                    <td style={styles.centerText}>`01</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>2</td>
                    <td style={styles.leftText}>Төрсний дараа цус алдсан</td>
                    <td style={styles.centerText}>`02</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>3</td>
                    <td style={styles.leftText}>Хүндрэлгүй</td>
                    <td style={styles.centerText}>`03</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>4</td>
                    <td style={styles.leftText}>Бусад</td>
                    <td style={styles.centerText}>`04</td>
                  </tr>
                </tbody>
              </Table>
              <div style={styles.rowStyle}>
                <b>18. Гэртээ төрсөн шалтгаан</b>
              </div>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td style={styles.centerText}>1</td>
                    <td style={styles.leftText}>Дуудлага өгөх боломжгүй</td>
                    <td style={styles.centerText}>`01</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>2</td>
                    <td style={styles.leftText}>Эмнэлгээс хол /км/</td>
                    <td style={styles.centerText}>`02</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>3</td>
                    <td style={styles.leftText}>
                      Дуудлага дуудаад амжиж ирээгүй
                    </td>
                    <td style={styles.centerText}>`03</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>4</td>
                    <td style={styles.leftText}>Дуудлага өгөөгүй</td>
                    <td style={styles.centerText}>`04</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>5</td>
                    <td style={styles.leftText}>Эмнэлэгт хүргэх унаагүй </td>
                    <td style={styles.centerText}>`05</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>6</td>
                    <td style={styles.leftText}>Гэртээ төрөх сонирхолтой</td>
                    <td style={styles.centerText}>`06</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>7</td>
                    <td style={styles.leftText}>Гэртээ төрж заншсан</td>
                    <td style={styles.centerText}>`07</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>8</td>
                    <td style={styles.leftText}>Эх төрөлт эхэлснээ мэдээгүй</td>
                    <td style={styles.centerText}>`08</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>9</td>
                    <td style={styles.leftText}>Бусад</td>
                    <td style={styles.centerText}>`09</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "48%",
                marginLeft: 20,
              }}
            >
              <Table
                bordered
                className="document"
                style={{ marginBottom: 10, marginTop: 10 }}
              >
                <tbody>
                  <tr>
                    <td style={styles.centerText}>7</td>
                    <td style={styles.leftText}>Боловсрол</td>
                    <td style={styles.leftText}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>8</td>
                    <td style={styles.leftText}>Ажил, мэргэжил</td>
                    <td style={styles.leftText}></td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>9</td>
                    <td style={styles.leftText}>Ажлын газар</td>
                    <td style={styles.leftText}></td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>10</td>
                    <td style={styles.leftText}>Хөдөлмөр эрхлэлтийн байдал</td>
                    <td style={styles.leftText}></td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>11</td>
                    <td style={styles.leftText}>Хөдөлмөр эрхлэхгүй шалтгаан</td>
                    <td style={styles.leftText}></td>
                  </tr>
                </tbody>
              </Table>

              <div style={styles.rowStyle}>
                <b>13. Төрсөн газар</b>
              </div>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td style={styles.centerText}>1</td>
                    <td style={styles.leftText}>Гэртээ</td>
                    <td style={styles.centerText}>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>2</td>
                    <td style={styles.leftText}>Гудамжинд</td>
                    <td style={styles.centerText}></td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>3</td>
                    <td style={styles.leftText}>Хээр гадаа</td>
                    <td style={styles.centerText}></td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>4</td>
                    <td style={styles.leftText}>Түргэний машин</td>
                    <td style={styles.centerText}></td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>5</td>
                    <td style={styles.leftText}>Бусад тээврийн хэрэгсэл</td>
                    <td style={styles.centerText}></td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>6</td>
                    <td style={styles.leftText}>Бусад газар</td>
                    <td style={styles.centerText}></td>
                  </tr>
                </tbody>
              </Table>
              <div style={styles.rowStyle}>
                <b> 15. Төрөлтийн явц, хүндрэл</b>
              </div>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td style={styles.centerText}>1</td>
                    <td style={styles.leftText}>Хэвийн</td>
                    <td style={styles.centerText}>`01</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>2</td>
                    <td style={styles.leftText}>Ус урьтаж эрт гарсан</td>
                    <td style={styles.centerText}>`02</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>3</td>
                    <td style={styles.leftText}>Эхэс ховхорсон </td>
                    <td style={styles.centerText}>`03</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>4</td>
                    <td style={styles.leftText}>Эхэс түрүүлсэн </td>
                    <td style={styles.centerText}>`04</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>5</td>
                    <td style={styles.leftText}>Цус алдсан</td>
                    <td style={styles.centerText}>`05</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>6</td>
                    <td style={styles.leftText}>Бусад</td>
                    <td style={styles.centerText}>`06</td>
                  </tr>
                </tbody>
              </Table>
              <div style={styles.rowStyle}>
                <b>17. Төрөх үеийн хугацаа</b>
              </div>
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td style={styles.centerText}>1</td>
                    <td style={styles.leftText}>22-28 долоо хоног</td>
                    <td style={styles.centerText}>`01</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>2</td>
                    <td style={styles.leftText}>29-32 долоо хоног</td>
                    <td style={styles.centerText}>`02</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>3</td>
                    <td style={styles.leftText}>33-36 долоо хоног</td>
                    <td style={styles.centerText}>`03</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>4</td>
                    <td style={styles.leftText}>37-42 долоо хоног</td>
                    <td style={styles.centerText}>`04</td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>5</td>
                    <td style={styles.leftText}>42-оос дээш</td>
                    <td style={styles.centerText}>`05</td>
                  </tr>
                </tbody>
              </Table>
              <div style={styles.rowStyle}>
                <b>19. Хэддэх төрөлт: /бичих/ ________</b>
              </div>
              <div style={styles.rowStyle}>20. Хүүхдийн тухай мэдээлэл:</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <div style={styles.rowStyle}>20.1. Амьд</div>
                  <Table bordered className="document">
                    <tbody>
                      <tr>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.leftText}>Хүйс</td>
                        <td style={styles.centerText}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.leftText}>Апгарын үнэлгээ</td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.leftText}>Нярай өвдсөн эсэх</td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>4</td>
                        <td style={styles.leftText}>Төрөх үеийн жин</td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>5</td>
                        <td style={styles.leftText}>Төрөх үеийн өндөр</td>
                        <td style={styles.centerText}></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div>
                  <div style={styles.rowStyle}>20.2. Амьгүй</div>
                  <Table bordered className="document">
                    <tbody>
                      <tr>
                        <td style={styles.centerText}>1</td>
                        <td style={styles.leftText}>Хүйс</td>
                        <td style={styles.centerText}>
                          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>2</td>
                        <td style={styles.leftText}>Ураг дутуу</td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>3</td>
                        <td style={styles.leftText}>Ураг гүйцэд</td>
                        <td style={styles.centerText}></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.centerText}>
            Мэдээлсэн их эмч
            <span style={{ marginLeft: 50 }}>_________________</span>
            <span style={{ marginLeft: 20 }}>_________________</span>
            <span style={{ marginLeft: 20 }}>_________________</span>
          </div>
          <div style={styles.centerText}>
            <span style={{ marginLeft: 100 }}>/албан тушаал/</span>
            <span style={{ marginLeft: 20 }}>/гарын үсэг/</span>
            <span style={{ marginLeft: 20 }}>/нэр/</span>
          </div>
          <div style={styles.centerText}>
            Мэдээлсэн огноо: ________ он _________ сар _______ өдөр
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_35;
