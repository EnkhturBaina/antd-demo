import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-2 Хавсралт 1
function CT2_1() {
  const styles = {
    generalText: {
      fontSize: 14,
    },
    rowStyle: {
      fontSize: 14,
      marginTop: 10,
    },
    leftText: {
      fontSize: 14,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 14,
      padding: 0,
      marginTop: 10,
    },
    rightText: {
      textAlign: "right",
      fontSize: 14,
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
      fontSize: 14,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
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
                Эрүүл мэндийн бүртгэлийн маягт СТ-2 Хавсралт 1
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЭМЧЛҮҮЛЭГЧИЙН ХЭРЭГЛЭСЭН ЭМИЙН ХУУДАС
            </span>
          </div>
          <div style={styles.leftText}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: 5 }}>
                Эцэг /эх/-ийн нэр _________________________________ Нэр
                ________________________________________РД
              </span>
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
              <div style={{ ...styles.leftText, ...{ marginLeft: 100 } }}>
                Өвчний түүхийн № ___________________ Палат № _________________
              </div>
            </div>
          </div>

          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  №
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 150 } }}
                >
                  Эмийн нэр
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                >
                  Тун
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Хэрэглэх арга
                </td>
                <td colSpan={30} style={styles.centerText}>
                  Сар, өдөр
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                >
                  Нийт хэрэглэсэн эмийн тоо
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 70 } }}
                >
                  Нэг бүрийн үнэ
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Нийт үнэ
                </td>
              </tr>
              <tr>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.leftText} key={i} colSpan={3}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(30)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  >
                    {i % 3 == 2 ? "о" : "ө"}
                  </td>
                ))}
              </tr>
              {[...Array(23)].map((x, z) => (
                <tr key={z}>
                  {[...Array(37)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 30, height: 20, padding: 0 },
                      }}
                      key={i}
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
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  №
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 150 } }}
                >
                  Эмийн нэр
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                >
                  Тун
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Хэрэглэх арга
                </td>
                <td colSpan={30} style={styles.centerText}>
                  Сар, өдөр
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                >
                  Нийт хэрэглэсэн эмийн тоо
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 70 } }}
                >
                  Нэг бүрийн үнэ
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Нийт үнэ
                </td>
              </tr>
              <tr>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.leftText} key={i} colSpan={3}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(30)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  >
                    {i % 3 == 2 ? "о" : "ө"}
                  </td>
                ))}
              </tr>
              {[...Array(22)].map((x, z) => (
                <tr key={z}>
                  {[...Array(37)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ height: 20, padding: 0 },
                      }}
                      key={i}
                    >
                      {z == 17 && i == 1 ? "Тариур" : null}
                      {z == 16 && i == 1 ? "Уян зүү" : null}
                      {z == 15 && i == 1 ? "Систем" : null}
                      {z == 14 && i == 1 ? "Бээлий" : null}
                      {z == 13 && i == 1 ? "Хөвөн" : null}
                      {z == 12 && i == 1 ? "Спирт" : null}

                      {z == 17 && i == 2 ? "20 гр" : null}
                      {z == 18 && i == 2 ? "10 гр" : null}
                      {z == 19 && i == 2 ? "5 гр" : null}
                      {z == 20 && i == 2 ? "3 гр" : null}
                      {z == 21 && i == 2 ? "1 гр" : null}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                {[...Array(34)].map((x, i) => (
                  <td
                    style={{
                      ...styles.centerText,
                      ...{ width: 30, height: i == 0 ? 120 : 22, padding: 0 },
                    }}
                    key={i}
                    colSpan={i == 0 ? 4 : null}
                  >
                    {i == 0 ? "Эмчилгээ хийсэн хүний гарын үсэг" : null}
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT2_1;
