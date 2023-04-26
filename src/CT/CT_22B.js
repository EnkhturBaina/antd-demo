import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-22Б
function CT_22B() {
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-22Б
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
              ЦУСНЫ НӨӨЦ ЗОХИЦУУЛАХ НЭГЖИЙН БҮРТГЭЛ
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
                <td colSpan={4} style={styles.centerText}>
                  Захиалсан ЦЦБ
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Хүчингүй/цу цлагдсан захиалга
                </td>
                <td colSpan={5} style={styles.centerText}>
                  Хүлээн авсан ЦЦБ
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Захиалгын дауу хүлээн аваагүй
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Тээвэрлэлтийн үеийн хэм
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Тээвэрлэсэн хугацаа
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Нэр</td>
                <td style={styles.centerText}>Цусны АВО болон резус бүлэг</td>
                <td style={styles.centerText}>Нэгж</td>
                <td style={styles.centerText}>Хугацаа</td>
                <td style={styles.centerText}>Нэр</td>
                <td style={styles.centerText}>Цусны АВО болон резус бүлэг</td>
                <td style={styles.centerText}>
                  Цуврал савлалт, хүүдийний код, ЦӨК
                </td>
                <td style={styles.centerText}>Нэгж</td>
                <td style={styles.centerText}>Хугацаа</td>
              </tr>
              {[...Array(24)].map((x, i) => (
                <tr key={i}>
                  {[...Array(14)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦУСНЫ НӨӨЦ ЗОХИЦУУЛАХ НЭГЖИЙН БҮРТГЭЛ (СТ-22Б)-ҮРГЭЛЖЛЭЛ
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>ЦЦБ-ийг хүлээн авсан тасаг</td>
                <td style={styles.centerText}>
                  ЦЦБ сэлбүүлэх өвчтний Эцэг /эх/- ийн нэр Нэр /РД/
                </td>
                <td style={styles.centerText}>Нас, хүйс</td>
                <td style={styles.centerText}>Онош</td>
                <td style={styles.centerText}>Заалт</td>
                <td style={styles.centerText}>Цусны АВО болон резус бүлэг</td>
                <td style={styles.centerText}>
                  Хувийн тохироо үзсэн нэгжийн тоо
                </td>
                <td style={styles.centerText}>
                  Бүтээгдэхүүн хүлээн авсан ажилтны нэр
                </td>
                <td style={styles.centerText}>Урвал, хүндрэл</td>
                <td style={styles.centerText}>Актлагдсан ЦЦБ</td>
                <td style={styles.centerText}>Үлдэгдэл нөөц</td>
              </tr>
              {[...Array(24)].map((x, i) => (
                <tr key={i}>
                  {[...Array(11)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
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

export default CT_22B;
