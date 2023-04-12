import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-31
function СТ_31() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
    },
    rowText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 10,
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-31
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              АРИУТГАЛД БАГАЖ МАТЕРИАЛ ХҮЛЭЭН АВЧ ОЛГОСОН БҮРТГЭЛ
            </span>
          </div>

          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td rowSpan={3} style={styles.centerText}>
                  Огноо
                </td>
                <td rowSpan={3} style={styles.centerText}>
                  Тасгийн нэр
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Хүлээн авсан багажны тоо
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Угаалгын чанарт хяналт тавьсан багажны тоо (+/-)
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Багаж хэрэгсэл хүлээлгэн өгсөн хүний гарын үсэг
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Багаж хэрэгсэл хүлээн авсан ариутгагчийн гарын үсэг
                </td>
                <td colSpan={4} style={styles.centerText}>
                  Угаалгын хугацаа
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Хатаасан хугацаа
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Ариутгасан хугацаа
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Багаж хэрэгсэл хүлээн авсан ариутгагчийн гарын үсэг
                </td>
                <td rowSpan={3} style={styles.verticalText}>
                  Багаж хэрэгсэл хүлээлгэн өгсөн хүний гарын үсэг
                </td>
              </tr>
              <tr>
                <td rowSpan={2} style={styles.verticalText}>
                  I дамжлага
                </td>
                <td colSpan={2} style={styles.centerText}>
                  II дамжлага
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  III дамжлага
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Уусмалд хийсэн</td>
                <td style={styles.verticalText}>Уусмалаас гаргасан</td>
              </tr>
              {[...Array(14)].map((x, i) => (
                <tr key={i}>
                  {[...Array(14)].map((x, j) => (
                    <td style={styles.rowText}>&nbsp;</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default СТ_31;
