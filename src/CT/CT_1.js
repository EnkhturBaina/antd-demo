import React from "react";
import { Table } from "react-bootstrap";
import CT_1_DOTOOD from "./CT_1_DOTOOD";
import CT_1_MEDREL from "./CT_1_MEDREL";
import CT_1_NUD from "./CT_1_NUD";
import CT_1_CHIX_HAMAR from "./CT_1_CHIX_HAMAR";
import CT_1_ARIS from "./CT_1_ARIS";
import CT_1_DOTOR from "./CT_1_DOTOR";
import CT_1_GEMTEL from "./CT_1_GEMTEL";
import CT_1_ULAMJLALT from "./CT_1_ULAMJLALT";
import CT_1_EMEGTEICHUUD from "./CT_1_EMEGTEICHUUD";
import CT_1_TSUS from "./CT_1_TSUS";
import CT_1_SETGETS from "./CT_1_SETGETS";

//маягт СТ-1
function CT_1() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 12,
      paddingLeft: 5,
    },
    centerText: {
      padding: 0,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      paddingLeft: 0,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 12,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 12,
      padding: 0,
      lineHeight: 1,
      marginTop: 5,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 10,
      textAlign: "center",
    },
  };
  return (
    <>
      {/* <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-1
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ӨВЧНИЙ ТҮҮХ №
            </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  rowSpan={4}
                  colSpan={2}
                >
                  Эмнэлгийн нэр, лого
                </td>
                <td style={styles.leftText} colSpan={3}>
                  РД
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  НДД №
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Өвчний түүх нээсэн ______ он ____ сар ____ өдөр ____ цаг ____
                  мин
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Тасгийн нэр
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  colSpan={2}
                >
                  Эцэг /эх/-ийн нэр
                </td>
                <td style={styles.leftText} colSpan={3}>
                  Өөрийн нэр:
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Төрсөн
                  <div style={styles.leftText}>
                    ______ он ____ сар ____ өдөр
                  </div>
                  <div style={styles.leftText}>Нас:____ </div>
                </td>
                <td style={styles.topText}>
                  Хүйс:
                  <div style={styles.leftText}> Эрэгтэй</div>
                  <div style={styles.leftText}> Эмэгтэй</div>
                </td>
                <td style={styles.topText}>
                  Гэрлэлтийн байдал:
                  <div style={styles.leftText}> Огт гэрлээгүй</div>
                  <div style={styles.leftText}> Батлуулсан гэр бүлтэй</div>
                  <div style={styles.leftText}> Батлуулаагүй гэр бүлтэй</div>
                  <div style={styles.leftText}> Тусгаарласан</div>
                  <div style={styles.leftText}> Цуцалсан  Бэлбэсэн</div>
                </td>
                <td style={styles.topText}>
                  Боловсрол:
                  <div style={styles.leftText}>
                     Боловсролгүй &nbsp;  Бага
                  </div>
                  <div style={styles.leftText}> Суурь боловсрол</div>
                  <div style={styles.leftText}> Бүрэн дунд</div>
                  <div style={styles.leftText}>
                     Мэргэжлийн болон техникийн
                  </div>
                  <div style={styles.leftText}>
                     Дипломын &nbsp;  Бакалавр
                  </div>
                  <div style={styles.leftText}> Магистр &nbsp;  Доктор</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Тогтмол хаяг:
                  <div>Аймаг/хот: __________________________________</div>
                  <div style={styles.topText}>
                    Сум/дүүрэг: ______________ Баг/хороо __________________
                  </div>
                  <div>
                    Гудамж/Байшин: ___________________________тоот___________
                  </div>
                </td>
                <td style={styles.topText}>
                  Ажлын газар, албан тушаал:
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>Мэргэжил:</div>
                  <div style={styles.leftText}>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  Цусны бүлэг: ____
                  <div style={styles.leftText}>
                    Баталгаажуулсан хүний нэр гарын үсэг:__________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Яаралтай үед холбоо барих
                  <div style={styles.leftText}>
                    Өөрийн утас: _________________
                  </div>
                  <div style={styles.leftText}>
                    Ар гэрийн утас:_______________
                  </div>
                  <div style={styles.leftText}>
                    _____________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  Төлбөрийн төрөл:
                  <div style={styles.leftText}> Төр хариуцсан</div>
                  <div style={styles.leftText}> 15%</div>
                  <div style={styles.leftText}> 10%</div>
                  <div style={styles.leftText}> Өвчтөн хариуцсан</div>
                </td>
                <td style={styles.topText}>
                  Доод шатлалаас илгээсэн эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Харшлын анамнез:
                  <div style={styles.leftText}> Эмийн бодис</div>
                  <div style={styles.leftText}> Хоол хүнс</div>
                  <div style={styles.leftText}> Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>
                    Хэвтэх үеийн онош <div>&nbsp;</div>
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>
                    Үндсэн онош <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}>ӨОУА код</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>
                    Дагалдах онош <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>
                    Хүндрэл <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>
                    Үйлдлийн онош (Мэс засал, мэс ажилбар) <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}>ҮОУА-9</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>
                    Уламжлалтын онош
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                  </b>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Өвчний төгсгөл:
                  <div style={styles.leftText}> Эдгэрсэн</div>
                  <div style={styles.leftText}> Сайжирсан</div>
                  <div style={styles.leftText}> Хэвэндээ</div>
                  <div style={styles.leftText}> Нас барсан</div>
                </td>
                <td style={styles.topText}>
                  Эмнэлгээс
                  <div style={styles.leftText}> Гарсан</div>
                  <div style={styles.leftText}> Шилжсэн</div>
                  <div style={styles.leftText}> Нас барсан</div>
                </td>
                <td style={styles.centerText}>
                  он сар өдөр
                  <div style={styles.leftText}>______/ ____/ ____</div>
                  <div style={styles.leftText}>______/ ____/ ____</div>
                  <div style={styles.leftText}>______/ ____/ ____</div>
                </td>
                <td style={styles.topText}>
                  Ор хоног
                  <div style={styles.leftText}>________ хоног</div>
                  <div style={styles.leftText}>________ цаг</div>
                </td>
                <td style={styles.topText}>
                  Эмчилгээний зардал:
                  <div style={styles.leftText}>________________ ₮</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Эмчлэгч эмчийн нэр, гарын үсэг</td>
                <td style={styles.topText} colSpan={4}>
                  Хянасан эмчийн нэр, гарын үсэг (Эмчилгээ эрхэлсэн орлогч,
                  тасгийн эрхлэгч, эмчилгээний чанарын менежер, бусад) /зур/
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Үзлэг эхэлсэн:_______ он ________сар ________ өдөр ________
                  цаг ________ минут
                  <div style={styles.topText}>ХЧТА-ын ____ хоног</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Өндөр (см) _____
                  <div style={styles.topText}>Жин (кг) _____</div>
                  <div style={styles.topText}>
                    Биеийн жингийн индекс (кг/м2) _____
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Цусны даралт (ммуб)
                  <div style={styles.topText}> Систолын даралт _____</div>
                  <div style={styles.topText}> Диастолын даралт _____</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div> */}
      {/* <CT_1_DOTOR />
      <CT_1_MEDREL />
      <CT_1_NUD />
      <CT_1_CHIX_HAMAR />
      <CT_1_ARIS />
      <CT_1_DOTOOD /> 
      <CT_1_GEMTEL />
      <CT_1_ULAMJLALT />
      <CT_1_EMEGTEICHUUD />
      <CT_1_TSUS /> */}
      <CT_1_SETGETS />
    </>
  );
}

export default CT_1;
