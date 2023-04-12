import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-18
function СТ_18() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    boldText: {
      fontWeight: "bold",
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 10,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={{ padding: 50 }}>
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
                Эрүүл мэндийн бүртгэлийн маягт СТ-18
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                ЦУСНЫ АЛБАНД ШИНЖИЛГЭЭНИЙ СОРЬЦ ХҮРГҮҮЛЭХ МАЯГТ
              </span>
            </div>
            <div style={styles.rowStyle}>
              <b>Эмнэлгийн нэр/тасаг :</b>{" "}
              _______________________________________________________________
            </div>
            <div style={styles.rowStyle}>
              <b>Эмчлүүлэгчийн эцэг /эх/-ийн нэр</b>
              _______________________________
              <b>Өвчний түүхийн №</b>__________________
            </div>
            <div style={styles.rowStyle}>
              <b>Эмчлүүлэгчийн нэр </b>______________________ <b>Нас</b>
              ______________________<b>Хүйс</b>
              ______________________
            </div>
            <div style={styles.rowStyle}>
              <b>Регистрийн дугаар</b>____________________________
            </div>
            <div style={styles.rowStyle}>
              <b>Үндсэн онош</b>
              _____________________________________________________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
              ____________________________________________________________________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
              <b>Цусны сорьц авсан</b>
              _____он____сар___өдөр___цаг___минут
            </div>
            <div style={styles.rowStyle}>
              <b>Цусны сорьц авсан ажилтны нэр, гарын үсэг</b>
              ......................................................
            </div>
            <div style={styles.rowStyle}>
              <b>Ямар шинжилгээ хийлгэх:</b>
            </div>
            <div style={styles.rowStyle}>
              <b>Кумбсын урвал /зур/:</b>
              <span style={{ marginLeft: 40 }}>Шууд, Шууд бус</span>
            </div>
            <div style={styles.flexContainer}>
              <div>
                <div style={styles.boldText}>Эргэлзээтэй бүлэг:</div>
              </div>
              <div style={{ marginRight: 50 }}>
                <div style={{ ...styles.leftText, ...{ height: 20 } }}>АВО</div>
                <div style={{ ...styles.leftText, ...{ height: 20 } }}>
                  Резус
                </div>
                <div style={{ ...styles.leftText, ...{ height: 20 } }}>
                  Бусад
                </div>
                <div style={{ ...styles.leftText, ...{ height: 20 } }}>
                  Анти-Д титр
                </div>
                <div style={{ ...styles.leftText, ...{ height: 20 } }}>
                  Хувийн тохироо
                </div>
                <div style={{ ...styles.leftText, ...{ height: 20 } }}>
                  Эсрэг бие илрүүлэх
                </div>
              </div>
              <div>
                <Table
                  bordered
                  className="document"
                  style={{ marginBottom: 0 }}
                >
                  <tbody>
                    <tr>
                      <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td style={{ ...styles.centerText, ...{ width: 80 } }}>
                        &nbsp;
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div style={styles.rowStyle}>
              <b>Эмчлэгч эмчийн нэр, гарын үсэг:</b>
              ________________________________________________
            </div>
            <div style={styles.rowStyle}>
              <b>Сорьцыг хүлээлгэн өгсөн ажилтны нэр:</b>
              ___________________________________________
            </div>
            <div style={styles.rowStyle}>
              <b>Сорьцыг хүлээн авсан:</b>
              __________ он ______ сар ______ өдөр _____ цаг ____ минут
            </div>
            <div style={styles.rowStyle}>
              <b>Сорьцыг буцаасан шалтгаан:</b>
              _____________________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
              _______________________________________________________________________________________________________________
            </div>
            <div style={styles.rowStyle}>
              <b>Сорьцыг шалган хүлээж авсан ажилтны нэр, гарын үсэг:</b>
              ____________________________________
            </div>
            <div style={styles.rowStyle}>
              <b>
                Тайлбар: Эмнэлгийн тасаг нэгжид сувилагч, тусгай мэргэжилтэн авч
                бөглөн цусны албанд илгээнэ.
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ_18;
