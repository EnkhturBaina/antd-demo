import React from "react";
import { Table } from "react-bootstrap";

//маягт 5.6.2
function T5_6_2() {
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
            Эмийн нэр, тун хэмжээ, хэлбэр ____________________
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
                  Жорын индекс
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  Жор бичсэн огноо, эмчийн нэр
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  Өвчтөний нэр
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  Онош
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Өвчтөний регистрийн дугаар
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Олгосон
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Эм олгогчийн нэр
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Эмийн цувралын дугаар
                </td>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Эмийн тоо хэмжээ
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
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default T5_6_2;
