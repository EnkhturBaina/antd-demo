import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-19А
function CT_19A() {
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
      lineHeight: 1.2,
      marginTop: 5,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
      marginLeft: 50,
      marginRight: 50,
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-19А
            </div>
          </div>
          <div style={styles.boldText}>Эмнэлгийн нэр:____________________</div>
          <div style={styles.boldText}>Тасгийн нэр:______________________</div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦУС, ЦУСАН БҮТЭЭГДЭХҮҮН СЭЛБЭЛТТЭЙ ХОЛБООТОЙ УРВАЛ, ХҮНДРЭЛИЙГ
              БҮРТГЭН МЭДЭЭЛЭХ МАЯГТ
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>
              1. Эцэг /эх/-ийн нэр: ............................................
              <span style={{ marginLeft: 30 }}>
                Өөрийн нэр:
                ......................................................................
              </span>
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              2. Нас: ..............
              <span style={{ marginLeft: 30 }}>
                Хүйс /зур/: Эрэгтэй, Эмэгтэй
              </span>
              <span style={{ marginLeft: 30 }}>3. Өвчний түүх №_____</span>
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              4. Цусны бүлэг /зур/:
              <span style={{ marginLeft: 20 }}>О </span>
              <span style={{ marginLeft: 20 }}>А</span>
              <span style={{ marginLeft: 20 }}>В</span>
              <span style={{ marginLeft: 20 }}>АВ</span>
              <span style={{ marginLeft: 100 }}>Резус фактор RhD /зур/:</span>
              <span style={{ marginLeft: 50 }}>Эерэг </span>
              <span style={{ marginLeft: 50 }}>Сөрөг</span>
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              5. Цус, цусан бүтээгдэхүүнийг сэлбэх заалт:
              ..................................................................................................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              .................................................................................................................................................................................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              6. Бүлэг тодорхойлсон ажилтны нэр:
              ............................................................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>7. Хувийн тохироо /зур/: Тохирсон, Тохироогүй</b>
          </div>
          <div style={styles.rowStyle}>
            <b>8. Биологийн тохироо /зур/: Тохирсон, Тохироогүй</b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              9. Сэлбэсэн цус, цусан бүтээгдэхүүний нэр төрөл:
              .................................Хэмжээ:
              ..........................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              10. Сэлбэсэн цус, цусан бүтээгдэхүүний АВО, резус бүлэг:
              ...................Цуврал, савлалтын дугаар:
              ........................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              11. Донорын цус өгөлтийн
              код....................................................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              12. Цус, цусан бүтээгдэхүүнийг эмнэлэгт хүлээн авч хадгалсан
              хугацаа: ......сар.......өдөр......цаг......минут
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              13. Цус, цусан бүтээгдэхүүнийг эмнэлэгт хүлээн авч хадгалсан
              нөхцөл /зур/:
            </b>
          </div>
          <div style={styles.flexContainer}>
            <div>
              <div>Хөргөгчинд +2 - +6С</div>
              <div>Хөлдөөгчинд -25С буюу түүнээс илүү хүйтэнд</div>
            </div>
            <div>
              <div>Сэгсрэгчинд +22 - +24С</div>
              <div>Тасалгааны хэмд</div>
            </div>
          </div>
          <div style={styles.rowStyle}>
            <b>
              14. Урвал хүндрэл эхэлсэн: .
              ......сар.......өдөр......цаг......минут
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              15. Урвал, хүндрэлийн төрөл:
              ................................................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              16. Сэлбэлтийг зогсоосон
              хугацаа:......сар.......өдөр......цаг......минут
            </b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>Илэрсэн шинж тэмдэг</td>
                <td style={styles.centerText}>Эрт илэрсэн</td>
                <td style={styles.centerText}>Хожуу илэрсэн</td>
                <td style={styles.centerText}>Илэрсэн шинж тэмдэг</td>
                <td style={styles.centerText}>Эрт илэрсэн</td>
                <td style={styles.centerText}>Хожуу илэрсэн</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Чичрүүдэс хүрэх</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Цустай шээх</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Дотор муухайрах, бөөлжих </td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Нүд бүлцийх</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Цээжний араар өвдөх</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Даралт ихсэх</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Халуурах</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Даралт буурах</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Судасны лугшилт удаашрах</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Шарлах</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зүрхний цохилт түргэсэх</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Шоконд орох</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Таталдах</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>Тууралт гарах</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зүү хатгасан газар өвдөх</td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}>
                  Шээс багасах буюу огт гарахгүй болох
                </td>
                <td style={styles.leftText}></td>
                <td style={styles.leftText}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>
              17. Авсан арга хэмжээ:
              ________________________________________________
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              _______________________________________________________________________________
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              _______________________________________________________________________________
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              18. Өвчтөнд сэлбэсэн цус цусан бүтээгдэхүүний үлдэгдлийг илгээсэн:
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b style={{ marginLeft: 50 }}>
              Эмчийн эцэг/эх/-ийн нэр, өөрийн нэр:
              .......................................................Гарын үсэг:
              .....................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              19. Үлдэгдэл ЦЦБ-ийг хүлээн авсан:
              ......сар.......өдөр......цаг......минут
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              20. Үлдэгдэл ЦЦБ-ийг хүлээн авсан ажилтны нэр:
              ................................Гарын үсэг:
              ..............................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>Тайлбар:</b>
          </div>
          <div style={styles.rowStyle}>
            1. Сэлбэлт хийхийн өмнө хувийн тохироо тодорхойлсон ийлдсийн
            үлдэгдэл
          </div>
          <div style={styles.rowStyle}>
            2. Сэлбэлт хийсэн протоколын хуулбар
          </div>
          <div style={styles.rowStyle}>
            3. Урвал өгсөн өвчтөнд сэлбэлт хийсний эсрэг талын гараас
            шинжилгээний сорьц уусмалгүй хуруу шилэнд
          </div>
          <div style={styles.rowStyle}>
            7мл, ЭДТА бүхий хуруу шилэнд 7мл-ийг тус тус авч, цусны албаны
            лабораторид яаралтай хүргүүлнэ
          </div>
          <div style={styles.rowStyle}>
            4. Цус, цусан бүтээгдэхүүний сэлбэлт хийсэн эмч ноцтой урвал хүндрэл
            илэрсэн тохиолдолд хөтөлнө.
          </div>
          <div style={styles.rowStyle}>
            <b>
              Тайлбар: Сэлбэлт хийсэн эмч, сувилагч бөглөж цусны нөөц зохицуулах
              нэгж, цусын салбар төвд тус тус илгээнэ
            </b>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_19A;
