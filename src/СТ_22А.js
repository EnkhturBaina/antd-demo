import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-22А
function СТ_22А() {
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-22А
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
              ЦУС ЦУСАН БҮТЭЭГДЭХҮҮНИЙ ЗАХИАЛСАН БА ХҮЛЭЭН АВСАН БҮРТГЭЛ
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
                  Эцэг /эх/-ийн нэр, Өөрийн нэр
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Нас хүйс
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Онош
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Цусны АВО болон резус бүлэг
                </td>
                <td colSpan={4} style={styles.centerText}>
                  Захиалсан ЦЦБ-ний
                </td>
                <td colSpan={4} style={styles.centerText}>
                  Хүлээн авсан ЦЦБ-ний
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Эмнэлэгт тасагт хадгалсан хэм
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Эмнэлэгт тасагт хадгалсан хугацаа
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Тээвэрлэлтийн үеийн хэм
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Тээвэрллэсэн хугацаа
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Үнийн дүн төгрөгөөр
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Бүтээгдэхүнн хүлээн авсан ажилтны нэр
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Нэр</td>
                <td style={styles.verticalText}>Цусны АВО болон резус бүлэг</td>
                <td style={styles.verticalText}>Хэмжээ</td>
                <td style={styles.verticalText}>Хугацаа</td>
                <td style={styles.verticalText}>Нэр</td>
                <td style={styles.verticalText}>Цусны АВО болон резус бүлэг</td>
                <td style={styles.verticalText}>Хэмжээ</td>
                <td style={styles.verticalText}>Хугацаа</td>
              </tr>
              {[...Array(19)].map((x, i) => (
                <tr key={i}>
                  {[...Array(19)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Тайлбар: </b>Эмнэлгийн тасаг нэгж дээр хөтлөнө.
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ_22А;
