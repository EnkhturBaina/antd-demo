import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-7
function CT_7() {
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
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
      marginTop: 5,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 11,
    },
    centerText: {
      padding: 0,
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
      marginTop: 5,
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
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-7
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              НЯРАЙН ТҮҮХ №
            </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  rowSpan={2}
                  colSpan={2}
                >
                  Эмнэлгийн нэр, лого
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Нярайн түүхийн №
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Нярайн түүх нээсэн он ______ сар ____ өдөр ____
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>ЭХИЙН МЭДЭЭЛЭЛ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Эцэг /эх/-ийн нэр:</td>
                <td style={styles.topText}>Нас:</td>
                <td style={styles.topText}>Тээлтийн хугацаа (7х) [ &nbsp; ]</td>
                <td style={styles.topText}>
                  Хэд дэх жирэмслэлт _______
                  <div style={styles.leftText}>Хэд дэх төрөлт _______</div>
                  <div style={styles.leftText}>Хэд дэх хүүхэд _______</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.leftText}>Тогтмол хаяг:</div>
                  <div style={styles.leftText}>
                    Аймаг/хот: __________________________________
                  </div>
                  <div style={styles.leftText}>
                    Сум/дүүрэг: ________________ Баг/хороо ________________
                  </div>
                  <div style={styles.leftText}>
                    Гудамж/Байшин: _________________ тоот___________
                  </div>
                </td>

                <td style={styles.topText}>
                  <b>Эхийн боловсрол:</b>
                  <div style={styles.leftText}>
                     Боловсролгүй
                    <span style={{ marginLeft: 30 }}> Бага</span>
                  </div>
                  <div style={styles.leftText}> Бүрэн дунд</div>
                  <div style={styles.leftText}>
                     Мэргэжлийн болон техникийн
                  </div>
                  <div style={styles.leftText}>
                     Дипломын
                    <span style={{ marginLeft: 30 }}> Бакалавр</span>
                  </div>
                  <div style={styles.leftText}>
                     Магистр
                    <span style={{ marginLeft: 30 }}> Доктор</span>
                  </div>
                  <div style={styles.leftText}>Ажлын газар, албан</div>
                  <div style={styles.leftText}>тушаал _________________ </div>
                  <div style={styles.leftText}>Мэргэжил: _________________</div>
                </td>
                <td style={styles.topText}>
                  <b>Эцгийн боловсрол:</b>
                  <div style={styles.leftText}>
                     Боловсролгүй
                    <span style={{ marginLeft: 30 }}> Бага</span>
                  </div>
                  <div style={styles.leftText}> Бүрэн дунд</div>
                  <div style={styles.leftText}>
                     Мэргэжлийн болон техникийн
                  </div>
                  <div style={styles.leftText}>
                     Дипломын
                    <span style={{ marginLeft: 30 }}> Бакалавр</span>
                  </div>
                  <div style={styles.leftText}>
                     Магистр
                    <span style={{ marginLeft: 30 }}> Доктор</span>
                  </div>
                  <div style={styles.leftText}>Ажлын газар, албан</div>
                  <div style={styles.leftText}>тушаал _________________ </div>
                  <div style={styles.leftText}>Мэргэжил: _________________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>НЯРАЙН МЭДЭЭЛЭЛ</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  Төрсөн <br />
                  он ______ сар ____ өдөр ____
                </td>
                <td style={styles.leftText}>
                  Хүйс <span style={{ marginLeft: 50 }}>Ихэр эсэх</span>
                  <div style={styles.leftText}>
                     Эрэгтэй <span style={{ marginLeft: 30 }}> Тийм</span>
                  </div>
                  <div style={styles.leftText}>
                     Эмэгтэй <span style={{ marginLeft: 30 }}> Үгүй</span>
                  </div>
                </td>
                <td style={styles.leftText}>
                   Амьд <span style={{ marginLeft: 20 }}> Амьгүй</span>
                  <div style={styles.leftText}>
                     Гүйцэд <span style={{ marginLeft: 10 }}> Дутуу</span>
                  </div>
                  <div style={styles.leftText}>
                     Бүтэлттэй
                    <span style={{ marginLeft: 10 }}> Бүтэлтгүй</span>
                  </div>
                </td>
                <td style={styles.leftText}>
                  Хүйг тасалсан
                  <div style={styles.leftText}> Хавчаараар</div>
                  <div style={styles.leftText}> Боолтоор</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>Апгарын үнэлгээ</td>
                <td style={styles.centerText}>1 минут</td>
                <td style={styles.centerText}>5 минут</td>
                <td style={styles.centerText}>10 минут</td>
                <td style={styles.topText} rowSpan={6}>
                  Төрөх үеийн жин _____ гр
                  <div style={styles.leftText}>Өндөр ____ см</div>
                </td>
                <td style={styles.topText} rowSpan={6}>
                  Толгойн тойрог ____ см
                  <div style={styles.leftText}>Цээжний тойрог ____см</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Арьсны өнгө</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зүрхний цохилт, пульс</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Булчингийн хүчдэл</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Амьсгал</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Рефлекс</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  Нярайд сэхээн амьдруулалт хийсэн эсэх:  Тийм
                  <span style={{ marginLeft: 5 }}> Үгүй</span>
                  <div style={styles.leftText}>
                    Амьсгалын замыг чөлөөлсөн эсэх:
                    <span style={{ marginLeft: 5 }}>  Тийм  Үгүй</span>
                  </div>
                  <div style={styles.leftText}>Амьсгалуулсан эсэх:</div>
                  <div style={styles.leftText}>
                     Эерэг даралтаар амьсгалуулсан
                  </div>
                  <div style={styles.leftText}>
                     Мөгөөрсөн хоолойд гуурс тавигдсан
                  </div>
                  <div style={styles.leftText}>
                    Зүрхний иллэг хийсэн эсэх:
                    <span style={{ marginLeft: 5 }}>  Тийм  Үгүй</span>
                  </div>
                  <div style={styles.leftText}>
                    Эмийн эмчилгээ хийсэн эсэх:
                    <span style={{ marginLeft: 5 }}>  Тийм  Үгүй</span>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Нярайн асаргаа сувилгаа:
                  <div style={styles.leftText}>
                    Дулаан алдалтаас сэргийлэх арга хэмжээ
                  </div>
                  <div style={styles.leftText}>
                    авагдсан эсэх:
                    <span style={{ marginLeft: 5 }}>  Тийм  Үгүй</span>
                  </div>
                  <div style={styles.leftText}>
                    Биеийн халуун: Төрсний дараа ________
                  </div>
                  <div style={styles.leftText}>
                    <span style={{ marginLeft: 90 }}>
                      2 цагийн дараа ________
                    </span>
                  </div>
                  <div style={styles.leftText}>
                    Хөхөө амласан эсэх:
                    <span style={{ marginLeft: 5 }}>
                       Тийм Хугацаа __  Үгүй
                    </span>
                  </div>
                  <div style={styles.leftText}>
                    Нүдэнд эм дусаасан эсэх:
                    <span style={{ marginLeft: 5 }}>  Тийм  Үгүй</span>
                  </div>
                  <div style={styles.leftText}>
                    К-аминдэм хийсэн хугацаа: ________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={6} style={styles.centerText}>
                  <b>Дархлаажуулалт</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Вакцины нэр</td>
                <td style={styles.centerText}>Он,сар,өдөр</td>
                <td style={styles.centerText}>Тун</td>
                <td style={styles.centerText}>Серийн №</td>
                <td style={styles.centerText}>Урвал (±)</td>
                <td style={styles.centerText}>Гарын үсэг</td>
              </tr>
              <tr>
                <td style={styles.centerText}>&nbsp;</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>&nbsp;</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>&nbsp;</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.centerText}>Иммуноглобулин</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Үндсэн онош</b>
                </td>
                <td style={styles.centerText}>
                  ӨОУА-10 <br />
                  он.... сар...өдөр
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Хүндрэл</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Дагалдах онош</b>
                </td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Үйлдлийн онош</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>ҮОУА-9</td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Өвчний төгсгөл:
                  <div style={styles.leftText}> Эдгэрсэн</div>
                  <div style={styles.leftText}> Сайжирсан</div>
                  <div style={styles.leftText}> Хэвэндээ</div>
                  <div style={styles.leftText}> Дордсон</div>
                  <div style={styles.leftText}> Нас барсан</div>
                </td>
                <td style={styles.topText}>
                  Эмнэлгээс:
                  <div style={styles.leftText}> Гарсан</div>
                  <div style={styles.leftText}> Шилжсэн</div>
                  <div style={styles.leftText}> Нас барсан</div>
                </td>
                <td style={styles.centerText} colSpan={2}>
                  он сар өдөр
                  <div style={styles.centerText}>_____ / _____ / _____</div>
                  <div style={styles.centerText}>_____ / _____ / _____</div>
                  <div style={styles.centerText}>_____ / _____ / _____</div>
                </td>
                <td style={styles.centerText}>
                  Ор хоног
                  <div style={styles.centerText}>_____ хоног</div>
                  <div style={styles.centerText}>_____ цаг</div>
                </td>
                <td style={styles.topText}>
                  Эмчилгээний зардал:
                  <div style={styles.leftText}>_______________ (₮)</div>
                  <div style={styles.leftText}>Зөвлөгөө өгсөн:</div>
                  <div style={styles.leftText}>□ Тийм</div>
                  <div style={styles.leftText}>□ Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  Гарах үеийн биеийн байдал:
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Эмчлэгч эмчийн нэр, гарын үсэг
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хянасан эмчийн нэр, гарын үсэг (Тасгийн эрхлэгч,
                  <div style={styles.leftText}>
                    эмчилгээний чанарын менежер, бусад) /зур/
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Биеийн ерөнхий байдал:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хөдөлгөөний идэвхи:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Арьс салст:
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Булчингийн хүчдэл:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Физиологийн рефлекс
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Ясны тогтолцоо: (толгой, яс, заадсууд, зулай)
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эгэм, түнхний хөдөлгөөн, үенүүд
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Стигм гаж хөгжил байгаа эсэх
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Амьсгалын тоо
                  <div>&nbsp;</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 500 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Зүрхний цохилт
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэвлий, хүй
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Элэг, дэлүү
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Бэлэг эрхтэн
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Баас
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Шээс
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Мэс ажилбар хийгдсэн эсэх:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Төрөх үеийн онош
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хүндрэлийн онош:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хүндрэлийн үед авсан арга хэмжээ
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Нярай эмчийн нэр:
                  <span style={{ marginLeft: 200 }}>Гарын үсэг</span>
                  <div style={styles.leftText}>
                    Нярайн сувилагчийн нэр:
                    <span style={{ marginLeft: 168 }}>Гарын үсэг</span>
                    <span style={{ marginLeft: 150 }}>
                      он ________ сар _____ өдөр _____
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ӨДРИЙН ТЭМДЭГЛЭЛ</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Үзсэн он, сар, өдөр
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  Биеийн халуун
                </td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}>Өглөө</td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText}>Орой</td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хүүхдийн биеийн байдал
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хөдөлгөөний идэвх
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Уйлах дуу
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хүүхдийн байрлал
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Булчингийн хүчдэл
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Физиологийн рефлекс:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хөхөх
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Залгих
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Уруулын
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Ам ангайх
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Тулгуурын
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Гишгэлтийн
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Мариа
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Саа саажилт
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Зулайн хэмжээ, байдал
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Кефалогематом, төрлөгийн хавдар
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Арьс
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Зүрх:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Зүрхний цохилтын тоо
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Зүрхний шуугиан
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={7}>
                  Амьсгал:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Амьсгалын хэм
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Амьсгалын тоо 1 минутанд
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хүй
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хэвлий
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Элэг
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Шээсний хэмжээ, өнгө
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Баасны байдал
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Аюултай шинж илэрч байгаа эсэх (дурьдах)
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  АЭмчийн гарын үсэг
                </td>
                {[...Array(6)].map((x, i) => (
                  <td style={styles.topText} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText}>Сар, өдөр</td>
                <td style={{ ...styles.centerText, ...{ width: 350 } }}>
                  Үзлэгийн тэмдэглэл
                </td>
                <td style={styles.centerText}>
                  Хоол, эмчилгээ, сувилгааны заалт
                </td>
              </tr>
              <tr>
                <td style={{ height: 700 }}></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <div style={{ marginLeft: 100 }}>
            <div
              style={{ ...styles.leftText, ...{ marginTop: 10, fontSize: 12 } }}
            >
              Гарах үеийн
              дүгнэлт:________________________________________________________________________________
            </div>
            <div
              style={{ ...styles.leftText, ...{ marginTop: 10, fontSize: 12 } }}
            >
              Гарах үеийн байдал:
              ________________________________________________________________________________
            </div>
            <div
              style={{ ...styles.leftText, ...{ marginTop: 10, fontSize: 12 } }}
            >
              Эмчийн зөвлөгөө:
              __________________________________________________________________________________
            </div>
            <div
              style={{ ...styles.leftText, ...{ marginTop: 10, fontSize: 12 } }}
            >
              Эмчлэгч эмч:
              _______________________________________________________________________________________
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_7;
