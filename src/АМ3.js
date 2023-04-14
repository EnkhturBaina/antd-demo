import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-3
function АМ3() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 9,
    },
    blankSpaces: {
      fontSize: 9,
    },
    rowStyle: {
      fontSize: 9,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 9,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 9,
    },
    flexContainerTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 9,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 9,
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
      fontSize: 10,
      padding: 0,
      lineHeight: 1,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: 5 }}>Эмнэлгийн нэр: </span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
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
                  <span style={{ fontWeight: "bold", fontSize: 9 }}>
                    Эрүүл мэндийн бүртгэлийн маягт АМ-3
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              БЗДХ-ЫГ МЭДЭЭЛЭХ ХУУДАС
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            1. Эцэг /эх/-ийн нэр ______________________ 2. Нэр
            _______________________ 3. РД
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
          <div
            style={{
              ...styles.rowStyle,
              ...{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            <div style={{ display: "flex" }}>
              4. Нас:
              <div style={{ ...styles.rowCells, ...{ marginLeft: 20 } }}></div>
              <div style={styles.rowCells}></div>
            </div>
            <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
              5. Хүйс: /зур/ эрэгтэй, эмэгтэй
            </div>
            <div style={{ ...styles.rowStyle, ...{ marginLeft: 20 } }}>
              6. Жирэмсэн эсэх:
            </div>
            <div style={styles.rowCellWithText}>
              <div style={styles.rowCells}></div>&nbsp;тийм
            </div>
            <div style={{ ...styles.rowCellWithText, ...{ marginLeft: 20 } }}>
              <div style={styles.rowCells}></div>&nbsp;үгүй
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "48%" }}
            >
              <Table bordered className="document">
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "48%",
                marginLeft: 20,
              }}
            >
              <Table bordered className="document">
                <tbody>
                  <tr>
                    <td rowSpan={9} style={styles.centerText}>
                      <b>8. Боловсролын байдал</b>
                    </td>
                    <td style={styles.leftText}>Боловсролгүй</td>
                    <td style={styles.leftText}>1</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бага</td>
                    <td style={styles.leftText}>2</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Суурь боловсрол</td>
                    <td style={styles.leftText}>3</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бүрэн дунд</td>
                    <td style={styles.leftText}>4</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Мэргэжлийн болон техникийн</td>
                    <td style={styles.leftText}>5</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Дипломын</td>
                    <td style={styles.leftText}>6</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Бакалавр</td>
                    <td style={styles.leftText}>7</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Магистр</td>
                    <td style={styles.leftText}>8</td>
                  </tr>
                  <tr>
                    <td style={styles.leftText}>Доктор</td>
                    <td style={styles.leftText}>9</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default АМ3;
