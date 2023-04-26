import React from "react";
import { Table } from "react-bootstrap";

//маягт СМ-3-Хавсралт 13
function CM_3_13() {
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
            <b> СМ-3-Хавсралт 13</b>
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
              ШИНГЭНИЙ БАЛАНС ХЯНАХ ХУУДАС
            </span>
          </div>
          <div style={styles.centerText}>
            Эмчлүүлэгчийн овог, нэр:{" "}
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
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  <b>Огноо</b>
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  colSpan={5}
                >
                  <b>Биед орсон шингэн / ml хэмжих нэгж/</b>
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  colSpan={5}
                >
                  <b>Биеэс гарсан шингэн / ml хэмжих нэгж/</b>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Хэрхэн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Өглөө
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Өдөр
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Орой
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Тус бүрийн хэмжээ
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Хэрхэн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Өглөө
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Өдөр
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Орой
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Тус бүрийн хэмжээ
                </td>
              </tr>
              <tr>
                <td rowSpan={5}></td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Амаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Шээсээр
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Гуурсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Өтгөнөөр
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Судсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Гуурсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Бусад
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Бусад /бөөлжүүлэх/
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  <b>Нийт хэмжээ</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  <b>Нийт хэмжээ</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  colSpan={2}
                >
                  <b>Сувилагчийн гарын үсэг</b>
                </td>
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
                <td rowSpan={5}></td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Амаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Шээсээр
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Гуурсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Өтгөнөөр
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Судсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Гуурсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Бусад
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Бусад /бөөлжүүлэх/
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  <b>Нийт хэмжээ</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  <b>Нийт хэмжээ</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  colSpan={2}
                >
                  <b>Сувилагчийн гарын үсэг</b>
                </td>
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
                <td rowSpan={5}></td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Амаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Шээсээр
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Гуурсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Өтгөнөөр
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Судсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Гуурсаар
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  Бусад
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  Бусад /бөөлжүүлэх/
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 100, height: 35 },
                  }}
                >
                  <b>Нийт хэмжээ</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                  <b>Нийт хэмжээ</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  colSpan={2}
                >
                  <b>Сувилагчийн гарын үсэг</b>
                </td>
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
          <div style={styles.leftText}>
            *Сувилагч энэ хүснэгтийг өөрөө хөтлөх буюу, эмчлүүлэгчийн ар
            гэрийнхэнд хэрхэн хөтлөх тухай мэдлэг олгож, хөтлөх аргыг
            зааварчилна
          </div>
        </div>
      </div>
    </>
  );
}

export default CM_3_13;
