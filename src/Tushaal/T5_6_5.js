import React from "react";
import { Table } from "react-bootstrap";

//маягт 5.6.5
function T5_6_5() {
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
                  №
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 50 } }}
                  rowSpan={2}
                >
                  Огноо
                </td>
                <td style={styles.centerText} colSpan={4}>
                  Орлого
                </td>
                <td style={styles.centerText} colSpan={4}>
                  Зарлага
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Үлдэгдэл тоо
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Тоо
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Цувралын дугаар
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 100 } }}>
                  Импортын лицензийн дугаар
                </td>
                <td style={styles.centerText}>Нийлүүлэгчийн дугаар</td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Олгосон
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Байгууллагын нэр
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тоо</td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Баримтын дугаар
                </td>
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
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default T5_6_5;
