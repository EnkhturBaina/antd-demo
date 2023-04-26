import React from "react";
import { Table } from "react-bootstrap";

//маягт СМ-2-Хавсралт 12
function CM_2_12() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            <b>СМ-2-Хавсралт 12</b>
          </span>
          <div
            style={{
              textAlign: "center",
              marginTop: 15,
              marginBottom: 15,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              СУВИЛГААНЫ ТЭМДЭГЛЭЛ
            </span>
          </div>
          <div style={styles.centerText}>
            Эмчлүүлэгчийн нэр:
            <span style={{ marginLeft: 100 }}>Өвчний түүх №</span>
            <span style={{ marginLeft: 100 }}>
              Нас: _____ Хүйс: _____ Тасаг: _____ Өрөө: _____
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 60 } }}>
                  Огноо / цаг
                </td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                  Асуудлын дугаар #
                </td>
                <td style={styles.centerText}>Сувилах төлөвлөгөө</td>
                <td style={{ ...styles.centerText, ...{ width: 200 } }}>
                  Хэрэгжүүлэлт/Дүгнэлт
                </td>
              </tr>
              {[...Array(4)].map((x, i) => (
                <>
                  <tr>
                    <td style={{ height: 200 }} rowSpan={2}></td>
                    <td style={styles.leftText} rowSpan={2}></td>
                    <td style={styles.leftText} rowSpan={2}></td>
                    <td style={styles.leftText}></td>
                  </tr>
                  <tr>
                    <td style={{ ...styles.leftText, ...{ height: 40 } }}>
                      <b>Сувилагчийн нэр:</b>
                      <div>&nbsp;</div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CM_2_12;
