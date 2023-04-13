import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-33
function АМ33() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
    generalText: {
      fontSize: 12,
    },
    blankSpaces: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: 5 }}>А1. Эмнэлгийн нэр: </span>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
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
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт АМ-33
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ОСОЛ ГЭМТЛИЙН ТОХИОЛДЛЫГ БҮРТГЭХ ХУУДАС
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            Эцэг /эх/-ийн нэр ______________________ Нэр _______________________
            РД
            <div style={{ display: "flex", marginLeft: 15 }}>
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
          <div style={styles.rowStyle}>
            Хүйс: Эрэгтэй, Эмэгтэй
            <span style={{ marginLeft: 40 }}>Нас _________</span>
          </div>
          <div style={styles.rowStyle}>
            Мэс засал эхэлсэн ____он____сар___өдөр____цаг: _____минут _____,
            дууссан цаг _________минут ____
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын үргэлжилсэн хугацаа________цаг_______минут. Мэс засал
            төлөвлөгөөт, яаралтай /зур/
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын нэр
            _____________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын заалт:
            ___________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэдээгүйжүүлэлтийн хэлбэр ерөнхий: эндотрахеал хошуувч, төвөнхийн
            хошуувч бүсчилсэн: нугасны хөндийн, нугасны гадна хөндийн, нугасны
            гадна хөндийн гуурс
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>Мэс заслын явц:</div>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгчийн байрлал: нуруугаар, липотомийн, трендленбургийн,
            бусад:бичих_____________________
          </div>
          <div style={styles.rowStyle}>Хагалгааны талбай ариутгасан:</div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>Хагалгааны зүслэг /зур/:</div>
          <div style={styles.rowStyle}>
            <div style={{ marginLeft: 100 }}>
              - Хэвлийн өмнөд ханын доод 1/3-ийн дагуу зүслэг
            </div>
            <div style={{ marginLeft: 100 }}>
              - Хэвлийн өмнөд ханын хөндлөн зүслэг
            </div>
            <div style={{ marginLeft: 100 }}>
              - Хэвлийн өмнөд ханын хүйс тойруулсан дагуу зүслэг
            </div>
            <div style={{ marginLeft: 100 }}>
              - Дурангийн жижиг зүслэгүүд
              бичих:______________________________________________
            </div>
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Хэвлийн өмнөд ханыг нээхэд цус тогтоолт хийсэн эсэх: үгүй, хэрэв
            тийм бол аргыг бичих
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Гэдсийг тусгаарласан эсэх: /зур/ Үгүй, Тийм бол
            бичих______________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Наалдац салгасан эсэх: /зур/ Үгүй, Тийм бол
            бичих_________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэс заслаар эд, эрхтэн авсан, зассан тухай тэмдэглэл
            бичих:_______________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Үлдэцийг ямар байдлаар цус тогтоож үлдээсэн тухай тэмдэглэл:
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>Хэвлий хаасан тухай тэмдэглэл:</div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын үед авсан эдийн болон бусад
            шинжилгээ______________________________________________
          </div>
        </div>
      </div>

      <div className="page">
        <div className="subpage">
          <div style={{ height: 80 }}></div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын шархны арчдас авсан эсэх: Тийм, Үгүй /зур/
            _____________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын дараах
            онош:______________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>Мэс засал: цэвэр, бохир</div>
          <div style={styles.rowStyle}>
            Оёдол тавьсан утас
            ____________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын дараах
            эмчилгээ___________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын дараах 2 цагийн дараах үзлэг,
            хяналт_____________________________________________________________________________
          </div>
          {[...Array(14)].map((x, i) => (
            <div style={styles.rowStyle} key={i}>
              ___________________________________________________________________________________________________________________________________
            </div>
          ))}
          <div
            style={{
              ...styles.flexContainer,
              ...{ justifyContent: "flex-start", marginTop: 20 },
            }}
          >
            <div>
              <div style={styles.rowStyle}>Мэс засал хийсэн эмч:</div>
              <div style={styles.rowStyle}>
                1. _____________________________
              </div>
              <div style={styles.rowStyle}>
                2. _____________________________
              </div>
              <div style={styles.rowStyle}>
                3. _____________________________
              </div>
              <div style={styles.rowStyle}>Мэдээгүйжүүлэгч эмч: </div>
              <div style={styles.rowStyle}>
                1. _____________________________
              </div>
            </div>
            <div style={{ marginLeft: 200 }}>
              <div style={styles.rowStyle}>Сувилагч:</div>
              <div style={styles.rowStyle}>
                1. _____________________________
              </div>
              <div style={styles.rowStyle}>
                2. _____________________________
              </div>
              <div style={styles.rowStyle}>
                3. _____________________________
              </div>
              <div style={styles.rowStyle}>Сувилагч: </div>
              <div style={styles.rowStyle}>
                1. _____________________________
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}>
                  Цаг минут
                </td>
                <td style={{ ...styles.centerText, ...{ width: "50%" } }}>
                  Эмчийн тэмдэглэл
                </td>

                <td style={{ ...styles.centerText, ...{ width: "40%" } }}>
                  Авсан арга хэмжээ, тусламж үйлчилгээ
                </td>
              </tr>
              <tr style={{ height: 900 }}>
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
                <td style={{ ...styles.centerText, ...{ width: "10%" } }}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default АМ33;
