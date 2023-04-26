import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-22В
function CT_22V() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    rowStyle: {
      fontSize: 12,
      lineHeight: 1.2,
      marginTop: 15,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
    },
  };
  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-22В
            </div>
          </div>
          <div style={styles.rowStyle}>
            Эмнэлгийн нэр _____________________________
          </div>
          <div style={styles.rowStyle}>
            Тасгийн нэр ________________________________
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦУС, ЦУСАН БҮТЭЭГДЭХҮҮНИЙ ХЭРЭГЛЭЭНИЙ БҮРТГЭЛ
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td rowSpan={2} style={styles.centerText}>
                  №
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Он сар өдөр
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  ЦЦБ-ний нэр
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  ЦЦБ-ий хэмжээ
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Нөөц
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Өвчтөний овог нэр
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  ЦЦБ сэлбэх заалт
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Онош
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Мэс заслын нэр
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Сэлбэх ЦЦБ нэр
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  ЦЦБ хэмжээ
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Хувийн тохироо үзсэн нэгжийн тоо
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Сэлбэсэн нэгжийн тоо
                </td>
                <td colSpan={8} style={styles.centerText}>
                  Цусны АВО, RhD бүлгээр
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>О, RhD+</td>
                <td style={styles.centerText}>A, RhD+</td>
                <td style={styles.centerText}>B, RhD+</td>
                <td style={styles.centerText}>AB, Rh+</td>
                <td style={styles.centerText}>O, RhD–</td>
                <td style={styles.centerText}>A, RhD-</td>
                <td style={styles.centerText}>B, RhD–</td>
                <td style={styles.centerText}>AB, RhD–</td>
              </tr>
              {[...Array(3)].map((x, i) => (
                <tr key={i}>
                  {[...Array(21)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Тайлбар: </b>Эмнэлгийн тасаг, нэгж дээр хөтөлнө.
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_22V;
