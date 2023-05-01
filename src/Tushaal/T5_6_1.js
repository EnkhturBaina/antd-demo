import React from "react";
import { Table } from "react-bootstrap";

//маягт 5.6.1
function T5_6_1() {
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
            Эмийн сангийн нэр ____________________
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  №
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  Огноо
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 120 } }}
                  rowSpan={2}
                >
                  Эмийн нэр, тун хэмжээ, хэлбэр
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  Цувралын дугаар
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Нийлүүлэгчийн нэр
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Баримтын дугаар
                </td>
                <td style={styles.centerText} colSpan={3}>
                  Эмийн тоо хэмжээ
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Орлого
                </td>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Зарлага
                </td>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Эцсийн үлдэгдэл
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
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default T5_6_1;
