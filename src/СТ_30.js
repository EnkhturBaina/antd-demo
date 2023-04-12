import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-30
function СТ_30() {
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-30
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЭМНЭЛГИЙН ЗӨӨЛӨН ЭДЛЭЛД ХИЙСЭН ХАЛДВАРГҮЙТГЭЛ, УГААЛГА АРИУТГАЛД
              ХҮЛЭЭН АВЧ, ОЛГОСОН БҮРТГЭЛ
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
                  Огноо
                </td>
                <td colSpan={12} style={styles.centerText}>
                  Угаалганд өгсөн зүйлс нэр
                </td>
                <td colSpan={5} style={styles.centerText}>
                  Дезкамерт өгсөн зөөлөн эдлэлийн нэр
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Хүлээлгэн өгсөн хүний нэр
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Хүлээн авсан хүний нэр гарын үсэг
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Нярайн даавуу</td>
                <td style={styles.verticalText}>Мэс заслын даавуу</td>
                <td style={styles.verticalText}>Их цагаан</td>
                <td style={styles.verticalText}>Мэс заслын өмд цамц</td>
                <td style={styles.verticalText}>Мэс заслын халад</td>
                <td style={styles.verticalText}>Хөнжлийн даавуу</td>
                <td style={styles.verticalText}>Дэвсгэр даавуу</td>
                <td style={styles.verticalText}>Хөнжил</td>
                <td style={styles.verticalText}>Гудас</td>
                <td style={styles.verticalText}>Тюль, хөшиг</td>
                <td style={styles.verticalText}>
                  Эмч ажилчдын халад, өмд, цамц
                </td>
                <td style={styles.verticalText}>Бусад</td>
                <td style={styles.verticalText}>Хөнжил</td>
                <td style={styles.verticalText}>Хувцас</td>
                <td style={styles.verticalText}>Гудас</td>
                <td style={styles.verticalText}>Матрас</td>
                <td style={styles.verticalText}>Бусад</td>
              </tr>
              {[...Array(15)].map((x, i) => (
                <tr key={i}>
                  {[...Array(21)].map((x, j) => (
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

export default СТ_30;
