import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-1,2 Хавсралт 2
function CT1and2_2() {
  const styles = {
    generalText: {
      fontSize: 9,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 3,
      lineHeight: 1.1,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
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
            <b>СМ-1-Хавсралт 11</b>
          </span>
          <div
            style={{
              textAlign: "center",
              marginTop: 5,
              marginBottom: 5,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ЭМЧЛҮҮЛЭГЧИЙН АМИН ҮЗҮҮЛЭЛТИЙГ ХЯНАХ ХУУДАС
            </span>
          </div>
          <div style={styles.centerText}>
            Эмчлүүлэгчийн овог, нэр:
            <span style={{ marginLeft: 100 }}>Өвчний түүх №</span>
            <span style={{ marginLeft: 100 }}>
              Нас: _____ Хүйс: _____ Тасаг: _____ Өрөө: _____
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Огноо
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Хэвтсэн хоног
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Мэс засал хийлгэсний дараах өдөр
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Цаг минут</b>
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>
                  <b>Пульс (P)</b>
                </td>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>
                  <b>Амьсгал (R)</b>
                </td>
                <td style={{ ...styles.centerText, ...{ width: 40 } }}>
                  <b>Халуун (T0C)</b>
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3}>
                  150
                </td>
                <td style={styles.centerText} rowSpan={3}>
                  55
                </td>
                <td style={styles.centerText} rowSpan={3}>
                  40.5
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  140
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  50
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  40
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  130
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  45
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  39.5
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  120
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  40
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  39
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  110
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  35
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  38.5
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  100
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  30
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  38
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  90
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  25
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  37.5
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  80
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  20
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  37
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  70
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  15
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  36.5
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  60
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  10
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  36
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  50
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  5
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  35.5
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} rowSpan={5}>
                  45
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  0
                </td>
                <td style={styles.centerText} rowSpan={5}>
                  35
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.leftText, ...{ width: 15, height: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(4)].map((x, j) => (
                <tr key={j}>
                  {[...Array(20)].map((x, i) => (
                    <td
                      style={{
                        ...styles.leftText,
                        ...{ width: 15, height: 12 },
                      }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Цусны даралт
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Хоол №
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Биеийн жин
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ width: 40 } }}
                  rowSpan={2}
                >
                  Ялгаруулалтын давтамж /хэдэн удаа/
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Өтгөн
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <div>&nbsp;</div>
                  Шээс
                  <div>&nbsp;</div>
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}></td>
                <td style={styles.leftText} colSpan={2}>
                  Өглөөний ээлж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Сувилагчийн гарын</td>
                <td style={styles.leftText} colSpan={2}>
                  Өдрийн ээлж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}></td>
                <td style={styles.leftText} colSpan={2}>
                  Оройн ээлж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={4}></td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT1and2_2;
