import React from "react";
import { Table } from "react-bootstrap";

//маягт 6.8.2
function T6_8_2() {
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
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  Жорын маягт хүлээн авсан огноо
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  Жорын маягтын нэр, төрөл
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Хүлээн авсан жорын маягт
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Зарцуулсан жорын маягт
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Үлдэгдэл
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Индекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тоо</td>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Индекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тоо</td>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Индекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тоо</td>
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

export default T6_8_2;
