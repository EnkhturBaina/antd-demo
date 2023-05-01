import React from "react";
import { Table } from "react-bootstrap";

//маягт 5.6.4
function T5_6_4() {
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
            Эмнэлэг, тасгийн нэр ________________
          </div>
          <div style={styles.leftText}>
            Эмийн нэр, тун хэмжээ ____________________ Хэмжих нэгж
            ________________________
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                  rowSpan={3}
                >
                  №
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                  rowSpan={3}
                >
                  Огноо
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                  rowSpan={2}
                  colSpan={3}
                >
                  Өвчтөний
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                  colSpan={6}
                >
                  Хэрэглэсэн эмийн тоо хэмжээ
                </td>
                <td style={styles.centerText} rowSpan={3}>
                  Эмчилгээ үйлчилгээ үзүүлсэн эмчийн нэр
                </td>
                <td style={styles.centerText} rowSpan={3}>
                  Сувилагчийн нэр
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  Орлого
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  Буцаалт
                </td>
                <td style={styles.centerText} colSpan={3}>
                  Зарлага
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                  rowSpan={2}
                >
                  Үлдэгдэл
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Өвчтөний түүхийн дугаар
                </td>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>Нэр</td>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>Онош</td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Тун
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Хэрэглэсэн давтамж
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Цувралын дугаар
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

export default T5_6_4;
