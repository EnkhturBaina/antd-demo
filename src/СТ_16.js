import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-16
function СТ_16() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    rowStyle: {
      fontSize: 12,
      lineHeight: 1.2,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 40,
      lineHeight: 1,
      fontSize: 12,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            <div style={styles.headerText}>
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны
            </div>
            <div style={styles.headerText}>
              өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </div>
            <div style={{ ...styles.headerText, ...{ fontWeight: "bold" } }}>
              Эрүүл мэндийн бүртгэлийн маягт СТ-16
            </div>
            <div style={styles.headerText}>(өвчний түүхэнд хавсаргана)</div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦУС, ЦУСАН БҮТЭЭГДЭХҮҮН СЭЛБЭСЭН ПРОТОКОЛ
            </span>
          </div>
          <div style={styles.rowStyle}>
            Эмнэлгийн нэр: ____________________________________Тасгийн нэр:
            ____________________________________
          </div>
          <div style={styles.rowStyle}>
            1. Эцэг/эх/-ийн нэр: _________________ Өөрийн нэр:
            ___________________РД:________________Өвчний түүх №_____
          </div>
          <div style={styles.rowStyle}>
            Нас:_______ Хүйс /зур/: Эрэгтэй, Эмэгтэй
          </div>
          <div style={styles.rowStyle}>
            2. Цусны бүлэг /дугуйлна уу/: O &nbsp;&nbsp; A,&nbsp;&nbsp;
            B,&nbsp;&nbsp; AB
            <span style={{ marginLeft: 40 }}>
              Резус фактор RhD /зур/: Эерэг, Сөрөг
            </span>
          </div>
          <div style={styles.rowStyle}>
            3. Цус,цусан бүтээгдэхүүнийг сэлбэх заалт
            _____________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td colSpan={3} rowSpan={2} style={styles.centerText}>
                  ЦЦБ-ий нэр
                </td>
                <td
                  colSpan={4}
                  style={{
                    ...styles.centerText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  1
                </td>
                <td
                  colSpan={4}
                  style={{
                    ...styles.centerText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  2
                </td>
                <td
                  colSpan={4}
                  style={{
                    ...styles.centerText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  3
                </td>
                <td
                  colSpan={4}
                  style={{
                    ...styles.centerText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  4
                </td>
                <td
                  colSpan={4}
                  style={{
                    ...styles.centerText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  5
                </td>
              </tr>
              <tr>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td rowSpan={8} style={styles.verticalText}>
                  Сэлбэх ЦЦБ-ий мэдээлэл
                </td>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Он сар өдөр
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Цуврал-савлалтын №
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Цус өгөлтийн код
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Хүүдийний код
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Бүтээгдэхүүний цусны бүлэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.leftText,
                      ...{ width: "16%", height: 25 },
                    }}
                  >
                    O &nbsp;&nbsp; A,&nbsp;&nbsp; B,&nbsp;&nbsp; AB
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Бүтээгдэхүүний Резус фактор RhD
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.leftText,
                      ...{ width: "16%", height: 25 },
                    }}
                  >
                    Эерэг Сөрөг
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Сэлбэхийн өмнө: ЦЦБ-ий үнэлгээ
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Хувийн тохироо үзсэн хүүдийний гуурсны код
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.centerText}>
                  Хувийн тохироо /зур/
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.leftText,
                      ...{ width: "16%", height: 25 },
                    }}
                  >
                    Тохирсон <br />
                    тохироогүй
                  </td>
                ))}
              </tr>
              <tr>
                <td rowSpan={7} style={styles.verticalText}>
                  Сэлбэлт хийхийн өмнө
                </td>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Цаг минут
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Судасны цохилт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Цусны даралт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Биеийн хэм
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Хүчилтөрөгчийн хангамж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.leftText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Хянасан эмчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.leftText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Сувилагчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Биологийн тохироо тодорхойлсон
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.leftText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  ЦЦБ-ийг сэлбэсэн арга ба хурд
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.leftText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td rowSpan={3} style={styles.centerText}>
                  ЦЦБ-ийг сэлбэсэн хугацаа
                </td>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Огноо
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Эхэлсэн цаг минут
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    ...styles.leftText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Дууссан цаг минут
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    colSpan={4}
                    style={{
                      ...styles.centerText,
                      ...{ width: "16%", height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  rowSpan={7}
                  style={{
                    ...styles.verticalText,
                    ...{},
                  }}
                >
                  Өвчтөний биеийн байдлын хяналт
                </td>
                <td
                  rowSpan={7}
                  style={{
                    ...styles.verticalText,
                    ...{},
                  }}
                >
                  Сэлбэлт хийх явцад
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: "16%", height: 25 },
                  }}
                >
                  Цаг минут
                </td>
                {[...Array(20)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ height: 25 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                {[...Array(21)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ height: 25 },
                    }}
                  >
                    {i == 0 ? "Судасны цохилт" : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(21)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ height: 25 },
                    }}
                  >
                    {i == 0 ? "Цусны даралт" : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(21)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ height: 25 },
                    }}
                  >
                    {i == 0 ? "Биеийн хэм" : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(21)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ height: 25 },
                    }}
                  >
                    {i == 0 ? "Хүчилтөрөгчийн хангамж" : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(21)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ height: 25 },
                    }}
                  >
                    {i == 0 ? "Хянасан эмчийн гарын үсэг" : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(21)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ height: 25 },
                    }}
                  >
                    {i == 0 ? "Сувилагчийн гарын үсэг" : null}
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td rowSpan={24} style={styles.verticalText}>
                  Өвчтөний биеийн байдлын хяналт
                </td>
                <td rowSpan={24} style={styles.verticalText}>
                  Сэлбэлт дууссанаас хойш
                </td>
                <td rowSpan={6} style={styles.verticalText}>
                  1 цагийн дараа
                </td>
                <td colSpan={3} style={styles.leftText}>
                  Судасны цохилт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Цусны даралт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Биеийн хэм
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хүчилтөрөгчийн хангамж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хянасан эмчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Сувилагчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td rowSpan={6} style={styles.verticalText}>
                  2 цагийн дараа
                </td>
                <td colSpan={3} style={styles.leftText}>
                  Судасны цохилт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Цусны даралт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Биеийн хэм
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хүчилтөрөгчийн хангамж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хянасан эмчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Сувилагчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td rowSpan={6} style={styles.verticalText}>
                  3 цагийн дараа
                </td>
                <td colSpan={3} style={styles.leftText}>
                  Судасны цохилт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Цусны даралт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Биеийн хэм
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хүчилтөрөгчийн хангамж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хянасан эмчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Сувилагчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td rowSpan={6} style={styles.verticalText}>
                  24 цагийн дараа
                </td>
                <td colSpan={3} style={styles.leftText}>
                  Судасны цохилт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Цусны даралт
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Биеийн хэм
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хүчилтөрөгчийн хангамж
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Хянасан эмчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Сувилагчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={6} style={styles.leftText}>
                  Сэлбэсэн ЦЦБ-ий хэмжээ /мл/нэгж/
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={6} style={styles.leftText}>
                  Сэлбэлтийн дараах анхны шээсний өнгө ба хэмжээ
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={6} style={styles.leftText}>
                  ЦЦБ сэлбэлттэй холбоотой урвал хүндрэл
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td rowSpan={4} colSpan={3} style={styles.leftText}>
                  ЦЦБ сэлбэлттэй холбоотой урвал хүндрэл илэрсэн
                </td>
                <td rowSpan={3} style={styles.leftText}>
                  тийм
                </td>
                <td colSpan={2} style={styles.leftText}>
                  Хөнгөн
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Хүндэвтэр
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                  Хүнд
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  үгүй
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td rowSpan={5} colSpan={2} style={styles.verticalText}>
                  Үр дүн
                </td>
                <td colSpan={4} style={styles.centerText}>
                  Эмнэл зүй
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={3} rowSpan={4} style={styles.centerText}>
                  Лаборатори: хемоглобин
                </td>
                <td style={styles.centerText}>улаан эс</td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>хематокрит</td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>ялтас эс</td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText}>бусад</td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={6} style={styles.leftText}>
                  Сэлбэлт хийсэн эмчийн нэр
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td colSpan={6} style={styles.leftText}>
                  Сэлбэлт хийсэн эмчийн гарын үсэг
                </td>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.centerText,
                      ...{ width: 80 },
                    }}
                  ></td>
                ))}
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            Тайлбар: Цус, цусан бүтээгдэхүүн сэлбэсэн эмч, сувилагч сэлбэлт хийх
            бүрт хөтөлнө.
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ_16;
