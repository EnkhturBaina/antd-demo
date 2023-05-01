import React from "react";
import { Table } from "react-bootstrap";

//маягт 5.6.6
function T5_6_6() {
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
            Байгууллагын нэр ________________________{" "}
            <span style={{ marginLeft: 100 }}>
              {" "}
              ........ оны ...... дугаар улирлын тайлан
            </span>
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>№</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Эм/ эмийн түүхий эдийн нэр, тун хэмжээ
                </td>
                <td style={styles.centerText}>Хэмжих нэгж</td>
                <td style={styles.centerText}>Эхний үлдэгдэл</td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Орлого
                </td>
                <td style={styles.centerText}>Цувралын дугаар</td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Нийлүүлэгчийн нэр
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 30 } }}>
                  Зарлага
                </td>
                <td style={styles.centerText}>Эцсийн үлдэгдэл</td>
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

export default T5_6_6;
