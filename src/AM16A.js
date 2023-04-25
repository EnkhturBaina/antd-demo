import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-16А
function AM16A() {
  const styles = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 16,
    },
    verticalTextCenter: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 16,
      textAlign: "center",
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 20,
      height: 20,
      lineHeight: 1,
      minWidth: 15,
      display: "inline-flex",
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 16,
    },
    rightText: {
      textAlign: "right",
      padding: 0,
      verticalAlign: "middle",
      fontSize: 16,
    },
    centerText: {
      padding: 0,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 16,
    },
    leftTextTable: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 12,
      height: 20,
    },
  };

  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "70%" }}>
              <span
                style={{
                  ...styles.rightText,
                  ...{ textAlign: "right", display: "block", fontSize: 16 },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      ...styles.leftText,
                      ...{ display: "flex", justifyContent: "space-between" },
                    }}
                  >
                    <div style={styles.leftText}>
                      Эмнэлгийн нэр: _____________________
                    </div>
                  </div>
                  <div
                    style={{
                      ...styles.leftText,
                      ...{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 10,
                        fontSize: 16,
                      },
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: 5 }}>Эмнэлгийн код: </span>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                      <div style={styles.rowCells}></div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.rightText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      textAlign: "right",
                    }}
                  >
                    Эрүүл мэндийн бүртгэлийн маягт АМ-16А
                  </span>
                </div>
              </div>
              <div style={{ fontSize: 16, textAlign: "center" }}>
                <b>СОЛИЛЦОХ ХУУДАС А</b>
              </div>
              <div style={{ fontSize: 16, textAlign: "center" }}>
                (зөвлөгөө өгөх газрын)
              </div>
              <div style={styles.leftText}>
                1. Эцэг, /эх/-ийн нэр: _________________________________ Нэр:
                ___________________________________ Нас: ___________{" "}
                <span style={{ marginLeft: 50 }}>
                  2. Цусны бүлэг: ___________
                </span>
              </div>
              <div style={styles.leftText}>
                3. Тогтмол хаяг:
                _______________________________________________________
              </div>
              <div style={styles.leftText}>
                4. Ажил, мэргэжил:
                _______________________________________________________________,
                Ажлын газар:
                _________________________________________________________
              </div>
              <div style={styles.leftText}>
                5. Анх хяналтанд орсон хугацаа: ________________________
                жирэмсний __________ 7 хоног _________ он _______ сар______ өдөр
              </div>
              <div style={styles.leftText}>
                ________________________________________________________________________________________________________________________________________________
              </div>
              <div style={styles.leftText}>
                6. Онцгой хяналтанд орсон хугацаа:
                ________________________________________________________________________________________________
              </div>
              <div style={styles.leftText}>
                7. Амралт олгосон: ____________ он _________ сар ________ өдөр
              </div>
              <div style={styles.leftText}>
                8. Төрөх хугацаа: сүүлийн сарын тэмдгээр: __________ он ________
                сар _______ өдөр
              </div>
              <div style={styles.leftText}>
                9. Өмнөх жирэмслэлт, төрөлт, үр хөндөлт, зулбалтын байдал:
                Жирэмслэлтийн тоо: ________ дутуу төрсөн: ________, зулбасан
                _________
              </div>
              <div style={styles.leftText}>
                үр хөндүүлсэн _________, сүүлчийн жирэмслэлт: __________ онд
                төгссөн.
              </div>
              <Table
                bordered
                className="document"
                style={{ marginBottom: 0, marginTop: 5 }}
              >
                <tbody>
                  <tr>
                    <td style={styles.centerText}>Жирэмслэлтийн тоо</td>
                    <td style={{ ...styles.centerText, ...{ width: 100 } }}>
                      Он
                    </td>
                    <td style={styles.centerText}>Жирэмсний хүндрэл</td>
                    <td style={styles.centerText}>
                      Төрөх болон төрсний дараах хүндрэл
                    </td>
                    <td style={styles.centerText}>
                      Төрсөн хүүхдийн жин, хүйс, одоо амьд эсэх /хүндрэл/
                    </td>
                  </tr>
                  {[...Array(10)].map((x, i) => (
                    <tr key={i}>
                      <td style={{ height: 25 }}></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div style={styles.leftText}>
                10. Өвчилсөн өвчнүүд: А15-A19, А52-A53, A54, вирүст хепатит,
                ангина, кариес, эмэгтэйчүүдийн ба бусад өвчин (зур)
              </div>
              <div style={styles.leftText}>
                Тусгай тэмдэглэл:
                ______________________________________________________________________________________________
              </div>
              <div style={styles.leftText}>
                10. Өвчилсөн өвчнүүд: сүрьеэ, тэмбүү, заг хүйтэн, вируст
                гепатит, ангина, кариес, эмэгтэйчүүдийн ба бусад өвчин (зур)
              </div>
            </div>
            <div
              style={{
                width: "22%",
                display: "flex",
                flexDirection: "row",
                borderLeftStyle: "dashed",
                borderLeftWidth: 2,
                paddingLeft: 10,
              }}
            >
              <div style={styles.verticalTextCenter}>СОЛИЛЦОХ ХУУДАС Б </div>
              <div style={styles.verticalText}>
                1. Төрөх газар, тасгийн нэр:
                ___________________________________________________________________________
              </div>
              <div style={styles.verticalText}>
                2. Эцэг /эх/-ийн нэр: _______________________________________
                Нэр: _____________________________________ Нас: __________
              </div>
              <div style={styles.verticalText}>
                3. Тогтмол хаяг: _______________________
              </div>
              <div style={styles.verticalText}>
                4. Төрсөн: ______________ он ______ сар _____ өдөр _____ цаг 5.
                Төрөхөд хэвтсэн хоног: __________
              </div>
              <div style={styles.verticalText}>
                6. Үндсэн онош, хүндрэлүүд: __________________________________
              </div>
              <div style={styles.verticalText}>
                7. Төрөх үед хийгдсэн мэс ажилбар
                _____________________________________________________
              </div>
              <div style={styles.verticalText}>
                8. Төрөлтийн дараагийн үе:
                ___________________________________________{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "18%",
                display: "flex",
                flexDirection: "row",
                borderRightStyle: "dashed",
                borderRightWidth: 2,
                paddingLeft: 10,
              }}
            >
              <div style={styles.verticalText}>
                9. Төрсний дараах өдөртөө (зур) :гарсан, шилжсэн
              </div>
              <div style={styles.verticalText}>
                10. Гарах үеийн эхийн биеийн байдал
                _____________________________________________
              </div>
              <div style={styles.verticalText}>
                11. Эх, хүүхдэд өгсөн зөвлөгөө: _______________________________
              </div>
              <div style={styles.verticalText}>
                12. Их эмчийн гарын үсэг ________________________________
              </div>
              <div style={styles.verticalText}>
                13. Эмнэлгээс гарсан ___________ он ______ сар_____ өдөр
              </div>
              <div style={styles.verticalText}>СОЛИЛЦОХ</div>
            </div>
            <div style={{ width: "70%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      ...styles.leftText,
                      ...{ height: "32%", width: 100 },
                    }}
                  >
                    Он, сар, өдөр Жир. Хугацаа Биеийн жин
                  </div>
                  <div style={{ ...styles.verticalText, ...{ height: "32%" } }}>
                    Ургийн зүрхний цохилт
                    <div style={{ fontSize: 16 }}>Артерийн даралт </div>
                  </div>
                  <div style={{ ...styles.verticalText, ...{ height: "32%" } }}>
                    Умайн ёроолын өндөр см-ээр
                  </div>
                </div>
                <Table
                  bordered
                  className="document"
                  style={{ marginBottom: 0, marginTop: 5 }}
                >
                  <tbody>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        &nbsp;
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{
                            padding: 0,
                            height: 10,
                            width: 10,
                            fontSize: 12,
                          }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        &nbsp;
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{
                            padding: 0,
                            height: 10,
                            width: 10,
                            textAlign: "center",
                            fontSize: 12,
                          }}
                          key={i}
                        >
                          {i + 5}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        &nbsp;
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        220{" "}
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        200
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        180
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        160
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        150
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        140
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        130
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        120
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        110
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        100
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        90
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        80
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        60
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        &nbsp;
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        40
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        45
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        &nbsp;
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        40
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        35
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        30
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        25
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        20
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td style={styles.leftTextTable} width={25}>
                        10
                      </td>
                      {[...Array(38)].map((x, i) => (
                        <td
                          style={{ padding: 0, height: 10, width: 10 }}
                          key={i}
                        >
                          &nbsp;
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AM16A;
