import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-10Б
function CT_10B() {
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
                Эрүүл мэндийн бүртгэлийн маягт СТ-10Б
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
              ЭС, ЭД, ЭРХТЭН ШИЛЖҮҮЛЭН СУУЛГАХ ЭМЧИЛГЭЭНИЙ АНХАН ШАТНЫ
              БҮРТГЭЛИЙН МАЯГТ
            </span>
          </div>
          <div style={styles.centerText}>
            <b>Донорын мэдээлэл</b>
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
                <td colSpan={3} rowSpan={2} style={styles.topText}>
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
                <td rowSpan={2} colSpan={2} style={styles.topText}>
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
                <td style={styles.topText} colSpan={2}>
                  Ажлын газар, албан тушаал
                  <div>&nbsp;</div>
                  <div>Мэргэжил</div>
                  <div>&nbsp;</div>
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
                <td style={styles.topText} colSpan={3}>
                  <b>Дагалдах онош:</b>
                  <div style={{ height: 60 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Реципиенттэй ураг төрлийн холбоотой эсэх:
                  <div style={styles.rowStyle}>฀ Тийм</div>
                  <div style={styles.rowStyle}>฀ Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Ямар эс, эд, эрхтэн өгөхөөр /авахаар/ шийдвэрлэсэн</b>
                  <div style={{ height: 40 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Донорын төрөл:
                  <div style={styles.rowStyle}>
                    ฀ Төрөл садангийн амьд донор
                  </div>
                  <div style={styles.rowStyle}>฀ Тархины үхэлтэй донор</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Тархины үхэлтэй донор бол өмнө нь донор болохыг зөвшөөрч гарын
                  үсэг зурсан эсэх:
                  <div style={styles.rowStyle}>฀ Тийм</div>
                  <div style={styles.rowStyle}>฀ Үгүй</div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Ар гэрээс зөвшөөрөл авсан эсэх:
                  <div style={styles.rowStyle}>฀ Тийм</div>
                  <div style={styles.rowStyle}>฀ Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Мэс заслын үед авсан биопси шинжилгээний хариу
                  <div style={{ height: 40 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Мэс заслын үед авч хадгалсан зүйлс
                  <div style={{ height: 40 }}></div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Мэс заслын үед авсан биопси шинжилгээний хариу
                  <div style={{ height: 40 }}></div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Эмчлэгч эмчийн нар, гарын үсэг
                  <div style={{ height: 40 }}></div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  Тасгийн эрхлэгч, дарга
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

export default CT_10B;
