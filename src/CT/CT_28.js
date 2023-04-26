import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-28
function CT_28() {
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
      padding: 5,
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
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-28
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ТУСГАЙ ХОГ ХАЯГДЛЫН УСТГАЛЫН БҮРТГЭЛ
            </span>
          </div>
          <div style={styles.flexContainer}>
            <div>Тасаг ___________________________</div>
            <div>______ он _____ сар ____ өдөр</div>
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
                  Хог ачиж тээвэрлэсэн он сар өдөр
                </td>
                <td colSpan={5} style={styles.centerText}>
                  Хог хаягдлын жин /кг/
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Хог хаягдал хүлээлгэн өгсөн хүний нэр гарын үсэг
                </td>
                <td colSpan={2} style={styles.centerText}>
                  Хогны тээвэрлэлт, устгалын байгууллага
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Шар ууттай хог</td>
                <td style={styles.centerText}>Улаан ууттай хог</td>
                <td style={styles.centerText}>Аюулгүй хайрцаг</td>
                <td style={styles.centerText}>Хүрэн ууттай хог</td>
                <td style={styles.centerText}>Бусад хог</td>
                <td style={styles.centerText}>
                  Нэр, тээврийн хэрэгслийн дугаар
                </td>
                <td style={styles.centerText}>Гарын үсэг</td>
              </tr>
              {[...Array(24)].map((x, i) => (
                <tr key={i}>
                  {[...Array(10)].map((x, j) => (
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

export default CT_28;
