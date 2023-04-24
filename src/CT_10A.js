import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-10А
function CT_10A() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
    },
    leftBold: {
      fontWeight: "bold",
      fontSize: 12,
      marginTop: 10,
    },
    rowStyle: {
      fontSize: 12,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 12,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
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
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 14 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ-10А
              </span>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: 15,
              marginBottom: 15,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЭС, ЭД, ЭРХТЭН ШИЛЖҮҮЛЭН СУУЛГАХ ЭМЧИЛГЭЭНИЙ БҮРТГЭЛИЙН МАЯГТ
            </span>
          </div>
          <div style={styles.centerText}>
            <b>Реципиентийн мэдээлэл</b>
          </div>
          <div>&nbsp;</div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 150 } }}>
                  <b>Эцэг /эхийн/ нэр:</b>
                </td>
                <td style={{ ...styles.topText, ...{ width: 150 } }}>
                  <b>Өөрийн нэр:</b>
                </td>
                <td style={{ ...styles.topText, ...{ width: 50 } }}>Нас___ </td>
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>
                  <b>Хүйс:</b>
                  <div style={styles.rowStyle}> Эр</div>
                  <div style={styles.rowStyle}> Эм</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}>
                  <b>Регистрийн дугаар:</b>
                  <div style={styles.rowStyle}>_________________</div>
                </td>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  colSpan={2}
                >
                  <b>Тогтмол хаяг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төрсөн ......он сар.....өдөр.....
                </td>
                <td style={styles.topText}>
                  <b>Гэрлэлтийн байдал:</b>
                  <div style={styles.rowStyle}> Огт гэрлээгүй</div>
                  <div style={styles.rowStyle}> Батлуулсан гэр бүлтэй</div>
                  <div style={styles.rowStyle}> Батлуулаагүй гэр бүлтэй</div>
                  <div style={styles.rowStyle}> Тусгаарласан</div>
                  <div style={styles.rowStyle}> Цуцалсан</div>
                  <div style={styles.rowStyle}> Бэлбэсэн</div>
                </td>
                <td colSpan={3} style={styles.topText}>
                  <div style={styles.rowStyle}>
                    Үндсэн захиргаа.........................
                  </div>
                  <div style={styles.rowStyle}>
                    Аймаг/хот...................................
                  </div>
                  <div style={styles.rowStyle}>
                    Сум/дүүрэг.................................
                  </div>
                  <div style={styles.rowStyle}>
                    Утас................................................
                  </div>
                  <div style={styles.rowStyle}>Шаардлагатай үед холбоо</div>
                  <div style={styles.rowStyle}>
                    барих хүний нэр, утас, болох
                  </div>
                  <div style={styles.rowStyle}>
                    .......................................................
                  </div>
                  <div style={styles.rowStyle}>
                    .......................................................
                  </div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  <div style={styles.rowStyle}>
                    Биеийн жин......................
                  </div>
                  <div style={styles.rowStyle}>
                    Биеийн өндөр..................
                  </div>
                  <div style={styles.rowStyle}>
                    Цусны бүлэг......................
                  </div>
                  <div style={styles.rowStyle}>
                    Эдийн тохироо.................
                  </div>
                  <div style={styles.rowStyle}>
                    Вирусын маркер..............
                  </div>
                  <div style={styles.rowStyle}>
                    Бусад.....................................
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Ажлын газар, албан тушаал
                  ___________________________________________________________________________________________________
                  <div>&nbsp;</div>
                  <div>
                    Мэргэжил
                    ______________________________________________________________________________________________________________________
                  </div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хүлээх жагсаалтанд анх бүртгэгдсэн:
                  <div style={styles.topText}>
                    он _______ сар ____ өдөр ____
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хүлээх жагсаалтанд бүртгэгдэж хүлээсэн хугацаа:
                  <div style={styles.topText}>
                    __________________________________
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хүлээх жагсаалтанд байх хугацаанд хяналтанд байсан эмнэлгийн
                  нэр:
                  <div style={styles.topText}>
                    __________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Эс, эд, эрхтэн шилжүүлэн суулгах мэс засал хийлгэхээр
                  сонгогдсон байдал
                  <div style={styles.topText}>฀ Эд нийцэл тохирсон</div>
                  <div style={styles.topText}>฀ Цусны бүлэг тохирсон</div>
                  <div style={styles.topText}>฀ Яаралтай журмаар</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  Үндсэн онош
                  <div style={{ height: 60 }}></div>
                </td>
                <td style={styles.topText}>ӨОУА</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Дагалдах онош:
                  <div style={{ height: 20 }}></div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Хүндрэлийн онош:
                  <div style={{ height: 10 }}></div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Ямар эрхтэн шилжүүлэн суулгахаар төлөвлөсөн:
                  <div style={{ height: 30 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Хийх мэс заслын нэр:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Мэс засал хийсэн ______он ____сар ____өдөр
                  <div style={{ height: 20 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Мэс заслын хүндрэл бий эсэх:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Мэс заслын дараах онош:
                  <div style={{ height: 30 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Эмнэлгээс гарсан ______он ____сар ____өдөр
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Эмнэлгээс гарах үеийн мэдээлэл:
                  <div style={{ height: 40 }}></div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Эмчлэгч эмчийн нар, гарын үсэг ________________________
                  <div style={{ height: 40 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Тасгийн эрхлэгч, дарга _________________________
                  <div style={styles.topText}>
                    он _______ сар ____ өдөр ____
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_10A;
