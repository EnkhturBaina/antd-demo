import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-29
function СТ_29() {
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
      lineHeight: 1,
      fontSize: 12,
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-29
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ТУСГАЙ ХОГ ХАЯГДЛЫН БҮРТГЭЛ
            </span>
          </div>
          <div style={{ fontSize: 12 }}>Он _____ сар____</div>

          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>№</td>
                <td style={styles.centerText}>
                  Хог хаягдлын ангилал Он сар өдөр
                </td>
                <td style={styles.verticalText}>
                  Халдварын зэрэглэл өндөнртэй хог хаягдал
                </td>
                <td style={styles.verticalText}>Халдвартай хог хаягдал</td>
                <td style={styles.verticalText}>
                  Хурц үзүүртэй ирмэгтэй хог хаягдал
                </td>
                <td style={styles.verticalText}>Эмгэг хог хаягдал</td>
                <td style={styles.verticalText}>
                  Эм, химийн бодис, эсэд хортой хог хаягдал
                </td>
                <td style={styles.verticalText}>Даралтат сав</td>
                <td style={styles.verticalText}>Цацраг идэвхит хог хаягдал</td>
                <td style={styles.verticalText}>Хүнд металлын хог хаягдал</td>
                <td style={styles.verticalText}>
                  Дахин боловсруулах хог хаягдал
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 100 } }}>
                  Хог хаягдал хүлээлгэн өгсөн хүний гарын үсэг
                </td>
                <td style={{ ...styles.verticalText, ...{ width: 100 } }}>
                  Хог хаягдал хүлээн авсан хүний нэр гарын үсэг
                </td>
              </tr>
              {[...Array(31)].map((x, i) => (
                <tr key={i}>
                  {[...Array(13)].map((x, j) => (
                    <td style={styles.rowText}>
                      {j == 0 ? <>{i + 1} </> : <>&nbsp;</>}
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

export default СТ_29;
