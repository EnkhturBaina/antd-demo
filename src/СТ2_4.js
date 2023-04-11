import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ2 Хавсралт-4
function СТ2_4() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    leftText: {
      fontSize: 12,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      marginTop: 10,
    },
    rightText: {
      textAlign: "right",
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      textAlign: "center",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 12,
    },
  };
  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 14 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ2 Хавсралт-4
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЭРЧИМТ ЭМЧИЛГЭЭНИЙ ХЯНАЛТЫН ХУУДАС
            </span>
          </div>
          <div style={styles.leftText}>____он____ сар ____ өдөр</div>
          <div style={styles.flexContainer}>
            <div style={styles.leftText}>Нэр________________________</div>
            <div style={styles.leftText}>
              Үндсэн онош
              _______________________________________________________
            </div>
          </div>
          <div style={styles.flexContainer}>
            <div style={styles.leftText}> </div>
            <div style={styles.leftText}>
              Дагалдах онош, хавсарсан онош:__________________________________
            </div>
          </div>
          <div style={styles.flexContainer}>
            <div style={styles.leftText}>
              Эрчимт эмчилгээний ______ дэх өдөр
            </div>
            <div style={styles.leftText}>
              ____________________________________________________
            </div>
          </div>
          <div style={styles.flexContainer}>
            <div style={styles.leftText}>
              Мэс заслын дараах _______ дэх өдөр
            </div>
            <div style={styles.leftText}>Биеийн жин _____ /кг</div>
            <div style={styles.leftText}>
              Мэс заслын нэр __________________________________
            </div>
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 60 } }}
                >
                  Глазго үнэлгээ
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Өвдөлт Шугаман үнэлгээ
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Т&#176;
                </td>
                <td colSpan={2} style={{ ...styles.centerText, ...{} }}>
                  АД
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 20 } }}
                >
                  Пульс
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  А
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 20 } }}
                >
                  Sao2
                </td>
                <td colSpan={6} style={{ ...styles.centerText, ...{} }}>
                  Зохиомол амьсгал
                </td>
                <td colSpan={5} style={{ ...styles.centerText, ...{} }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Орсон шингэн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 300 } }}>
                  Эмчилгээ, сувилгаанд гарсан онцлог байдал
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 40 } }}
                >
                  Дээд\Доод
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 40 } }}
                >
                  Дундаж
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Төрөл
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Vt
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Vm
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Шахалт/ даралт
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  PEEP
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  FIO2
                </td>
                <td colSpan={3} style={{ ...styles.centerText, ...{} }}>
                  Гуурсаар
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Шээс/ мл
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Өтгөн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  Хоол, унд
                </td>
                <td
                  rowSpan={10}
                  style={{ ...styles.centerText, ...{ width: 40 } }}
                >
                  1
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>Цус</td>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>
                  Шингэн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>
                  Ходоодны
                </td>
              </tr>
              {[...Array(8)].map((x, i) => (
                <tr key={i}>
                  {[...Array(20)].map((x, i) => (
                    <td style={styles.centerText} key={i}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
              {[...Array(14)].map((x, i) => (
                <tr key={i}>
                  {[...Array(i == 0 ? 21 : 20)].map((x, j) => (
                    <td
                      rowSpan={j == 20 && i == 0 ? 14 : null}
                      style={styles.centerText}
                      key={j}
                    >
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div style={styles.flexContainer}>
            <div>
              <div style={styles.leftText}>
                Эмчлүүлэгч _______________________
              </div>
              <div style={styles.leftText}>Нас.....</div>
              <div style={styles.leftText}>Хүйс/зур/ эрэгтэй, эмэгтэй</div>
            </div>
            <div>
              <div style={styles.leftText}>Хориглох зүйл_________________</div>
              <div style={styles.leftText}>Харшил ____________________</div>
            </div>
            <div style={{ marginRight: 300 }}>
              <div style={styles.leftText}>
                Шинжилгээ: 1. ........................................
              </div>
              {[...Array(8)].map((x, i) => (
                <div
                  key={i}
                  style={{ ...styles.leftText, ...{ marginLeft: 70 } }}
                >
                  {i}. ........................................
                </div>
              ))}
            </div>
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>Д/Д</td>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>
                  Эмчилгээ, сувилгааны заалт цаг
                </td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>09</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>10</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>11</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>12</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>13</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>14</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>15</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>16</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>17</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>18</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>19</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>20</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>21</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>22</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>23</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>00</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>01</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>02</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>03</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>04</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>05</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>06</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>07</td>
                <td style={{ ...styles.centerText, ...{ width: 10 } }}>08</td>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>Дүн</td>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                ></td>
              </tr>
              <tr>
                <td rowSpan={4} style={styles.verticalText}>
                  Шахуурга
                </td>
                {[...Array(28)].map((x, i) => (
                  <td
                    colSpan={i == 27 ? 3 : null}
                    rowSpan={i == 27 ? 8 : null}
                    style={{
                      ...styles.centerText,
                      ...{ width: i == 27 ? 40 : null },
                    }}
                    key={i}
                  >
                    {i == 27 ? (
                      <span>+ /орсон/ Судсаар Амаар</span>
                    ) : (
                      <>&nbsp;{i}</>
                    )}
                  </td>
                ))}
              </tr>
              {[...Array(3)].map((x, i) => (
                <tr key={i}>
                  {[...Array(27)].map((x, j) => (
                    <td style={styles.centerText}>&nbsp;</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td rowSpan={9} style={styles.verticalText}>
                  Дуслаар
                </td>
                {[...Array(27)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(27)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(27)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(27)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(29)].map((x, i) => (
                  <td
                    key={i}
                    rowSpan={i == 27 || i == 28 ? 2 : null}
                    colSpan={i == 27 ? 2 : null}
                    style={{
                      ...styles.centerText,
                      ...{ width: i == 26 ? 40 : null },
                    }}
                  >
                    {i == 27 ? <span>Нийт</span> : <>&nbsp;</>}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(27)].map((x, i) => (
                  <td
                    key={i}
                    style={{ ...styles.centerText, ...{ height: 10 } }}
                  >
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(28)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ height: 10 } }}
                    key={i}
                    colSpan={i == 27 ? 3 : null}
                    rowSpan={i == 27 ? 14 : null}
                  >
                    {i == 27 ? (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={styles.leftText}>- /гарсан/</div>
                        <div style={styles.leftText}>Шээс</div>
                        <div style={styles.leftText}>Бөөлжилт</div>
                        <div style={styles.leftText}>Өтгөн</div>
                        <div style={styles.leftText}>Гуурсаар</div>
                        <div style={styles.leftText}>Бусад</div>
                      </div>
                    ) : (
                      <>&nbsp;</>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(27)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(27)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              {/*<tr>
                {[...Array(27)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    &nbsp;
                  </td>
                ))}
              </tr> */}
              {/* {[...Array(8)].map((x, i) => (
                <tr key={i}>
                  {[...Array(i == 3 ? 28 : 27)].map((x, j) => (
                    <td
                      key={j}
                      rowSpan={
                        i == 3 && j == 27
                          ? 2
                          : null || (i == 5 && j == 28)
                          ? 14
                          : null
                      }
                      style={{
                        ...styles.centerText,
                        ...{ width: i == 3 && j == 27 ? 40 : null },
                      }}
                    >
                      {i} - {j}
                    </td>
                  ))}
                </tr>
              ))} */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default СТ2_4;
