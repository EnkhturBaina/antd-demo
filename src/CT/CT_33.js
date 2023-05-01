import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-33
function CT_33() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
      display: "inline-flex",
    },
    generalText: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
      marginTop: 5,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 11,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 11,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 11,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 11,
      padding: 0,
      lineHeight: 1,
      marginTop: 1,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
      fontSize: 11,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block", lineHeight: 1 },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1,
                  }}
                >
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-33
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ ...styles.leftText, ...{ marginTop: 30 } }}>
            Үйлчлүүлэгчийн Эцэг /эх/-ийн нэр_______________________ Өөрийн нэр:
            ________________________
          </div>
          <div style={styles.leftText}>
            Нас___ Хүйс:/зур/ Эрэгтэй, Эмэгтэй
            <span style={{ marginLeft: 300 }}> _____он ______сар_____өдөр</span>
          </div>
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Үргэлжлэх хугацаа /минутаар /</b>
                </td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    <b>{i}</b>
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}>
                  <b>Нийлбэр</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Ухаан санааны байдал /GCS/</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Хүүхэн харааны хэмжээ гэрлийн урвал /L/R/
                </td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Амьсгалын замын чөлөөлсөн байдал
                </td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цусны даралт</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>ЭКГ-д хэм</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цээж шахах</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Дефибрилляторын цахилгаан хүчдэл /кJ/ давталт/
                </td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>FIO2%</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Адреналин 1мг/1мл</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Атропин 1мг/1мл</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Амиодарон 150 мг/3 мл</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>MgSO4 25% /10 мл</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Допамин 200 мг/5 мл * ----амп</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Содийн уусмал 4 % / 100 мл</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Лидокайн 2%/2 мл</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Преднизолан 30мг/1мл</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Дусал тариа</td>
                {[...Array(16)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 20 } }}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>
            Амилуулах тусламжийн тэмдэглэгээ
            _________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            _________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            _________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            _________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            _________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            _________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.leftText}>
            Амилуулах тусламж зогсоосон цаг _______________
            минут______________________________
          </div>
          <div style={styles.leftText}>
            Эмчийн нэр _____________________Сувилагчийн нэр
            _____________________________Туслах_________________________
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_33;
