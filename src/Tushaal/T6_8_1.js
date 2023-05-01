import React from "react";
import { Table } from "react-bootstrap";

//маягт 6.8.1
function T6_8_1() {
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
      fontSize: 10,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 20 } }}>№</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Жорын индекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Үйлчлүүлэгчийн нэр, регистрийн дугаар
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Онош
                </td>
                <td style={styles.centerText}>
                  Жоронд бичсэн эмийн тун, хэлбэр
                </td>
                <td style={styles.centerText}>Жор бичсэн эмчийн нэр, тасаг</td>
              </tr>
              <tr>
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
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default T6_8_1;
