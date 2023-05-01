import React from "react";
import { Table } from "react-bootstrap";

//маягт 5.6.3
function T5_6_3() {
  const styles = {
    centerText: {
      padding: 3,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 12,
      textAlign: "center",
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 12,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.leftText}>
            Эмийн нэр, тун хэмжээ ____________________ Хэмжих нэгж
            ________________________
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                  rowSpan={2}
                >
                  Огноо
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                  rowSpan={2}
                >
                  Эхний үлдэгдэл
                </td>
                <td style={styles.centerText} colSpan={3}>
                  Орлого
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Зарцуулалт
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Эцсийн үлдэгдэл
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Тоо</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Цувралын дугаар
                </td>
                <td style={{ ...styles.centerText, ...{ width: 110 } }}>
                  Нийлүүлэгчийн нэр
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Тоо</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Тасаг, нэгж
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default T5_6_3;
