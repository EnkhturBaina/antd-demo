import React from "react";
import { Table } from "react-bootstrap";

//маягт 6.9
function T6_9() {
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
            Эрүүл мэндийн газрын нэр __________________________
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                  rowSpan={2}
                >
                  №
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 150 } }}
                  rowSpan={2}
                >
                  Хэвлүүлсэн мансууруулах болон сэтгэц нөлөөт эмийн жорын
                  маягтын тоо
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 120 } }}
                  rowSpan={2}
                >
                  Олгосон байгууллагын тоо
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 120 } }}
                  colSpan={2}
                >
                  Олгосон жорын маягт
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Үлдэгдэл
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Тоо</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Дугаар
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  1. Мансууруулах эмийн жорын маягт
                </td>
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
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  2. Сэтгэц нөлөөт эмийн жорын маягт
                </td>
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

export default T6_9;
