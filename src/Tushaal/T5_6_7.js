import React from "react";
import { Table } from "react-bootstrap";

//маягт 5.6.7
function T5_6_7() {
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
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>№</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Эм/ эмийн түүхий эдийн нэр
                </td>
                <td style={styles.verticalText}>Хэмжих нэгж</td>
                <td style={styles.centerText}>Цувралын дугаар</td>
                <td style={styles.centerText}>Устгасан тоо хэмжээ</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Мэргэжлийн хяналтын байгууллагын дүгнэлтийн дугаар
                </td>
                <td style={styles.centerText}>
                  Шийдвэр гаргасан эрхийн актын дугаар, огноо
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Тайлбар
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
              </tr>
              <tr>
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

export default T5_6_7;
