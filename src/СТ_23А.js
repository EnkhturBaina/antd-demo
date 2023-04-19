import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-23А
function СТ_23А() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 11,
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    blankSpaces: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
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
    flexContainerTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
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
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 11,
      marginTop: 3,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div></div>
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
                    Эрүүл мэндийн бүртгэлийн маягт СТ-23А
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              ТҮРГЭН ТУСЛАМЖИЙН ДУУДЛАГЫН ХУУДАС №
            </span>
          </div>
          <div style={styles.rowStyle}>
            Дуудлага авсан <span style={{ marginLeft: 50 }}>он</span>
            <span style={{ marginLeft: 50 }}>сар</span>
            <span style={{ marginLeft: 50 }}>өдөр</span>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>
              <b style={{ marginLeft: 30 }}>Дуудлага хүлээн</b>
            </div>
            <div style={styles.rowStyle}>
              <span>Яаралтай</span>
            </div>
          </div>
          <div style={styles.rowStyle}>
            <b style={{ marginLeft: 30 }}>
              авсан хүний нэр _________________________________________
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b style={{ marginLeft: 30 }}>Дуудлага өгсөн</b>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>
              <b style={{ marginLeft: 30 }}>утасны дугаар</b>
            </div>
            <div style={styles.rowStyle}>
              <span>Яаралтай бус</span>
            </div>
          </div>
          <div style={{ borderStyle: "solid", borderWidth: 1 }}></div>
          <div style={styles.rowStyle}>
            Өвчтөний эцэг/эх/-ийн нэр: _________________________________________
            <span style={{ marginLeft: 100 }}>
              Нэр _________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            Нас
            <span style={{ marginLeft: 100 }}>Хүйс</span>
          </div>
          <div style={{ borderStyle: "solid", borderWidth: 1 }}></div>
          <div style={styles.rowStyle}>
            Оршин суугаа
            хаяг___________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Хаягын
            тодотголын__________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Дуудлага өгсөн хүний нэр _________________________________________
            <span style={{ marginLeft: 100 }}>
              ажлын газар _________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>Дуудсан шалтгаан</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Table bordered className="document" style={{ marginBottom: 0 }}>
              <tbody>
                <tr>
                  <td style={styles.centerText}>Үзүүлэлт</td>
                  <td style={styles.centerText}>цаг</td>
                  <td style={styles.centerText}>минут</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Дуудлага авсан</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Дуудлага гарсан</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Хүлээгдсэн</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginBottom: 0, marginLeft: 30 }}
            >
              <tbody>
                <tr>
                  <td style={styles.centerText}>Үзүүлэлт</td>
                  <td style={styles.centerText}>цаг</td>
                  <td style={styles.centerText}>минут</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Айлд очсон</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Эмнэлэг тээвэрлэсэн</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Дуудлага дууссан</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginBottom: 0, marginLeft: 30 }}
            >
              <tbody>
                <tr>
                  <td style={styles.centerText}>Үзүүлэлт</td>
                  <td style={styles.centerText}>цаг</td>
                  <td style={styles.centerText}>цаг</td>
                  <td style={styles.centerText}>минут</td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Нийт зарцуулсан хугацаа</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={styles.rowStyle}>
            <b>Зовиур</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ height: 30 }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Өвчтний түүх:</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ height: 30 }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Өвчтний түүх:</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Биеийн байдал:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Сайн</div>
                  <div style={styles.rowStyle}>□ Дунд</div>
                  <div style={styles.rowStyle}>□ Хүндэвтэр</div>
                  <div style={styles.rowStyle}>□ Хүнд</div>
                  <div style={styles.rowStyle}>□ Маш хүнд</div>
                  <div style={styles.rowStyle}>□ Агональ</div>
                  <div style={styles.rowStyle}>□ Клиник үхэл</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Ухаан санаа:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Саруул</div>
                  <div style={styles.rowStyle}>□ Бүдгэрсэн</div>
                  <div style={styles.rowStyle}>□ Дөжрөн балартах</div>
                  <div style={styles.rowStyle}>□ Ухаангүй комын</div>
                  <div style={styles.rowStyle}>
                    <b>Орчиндоо:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Харьцаатай</div>
                  <div style={styles.rowStyle}>□ Харьцаагүй</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Байрлал:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Идэвхтэй</div>
                  <div style={styles.rowStyle}>□ Идэвхгүй</div>
                  <div style={styles.rowStyle}>□ Хагас суугаа</div>
                  <div style={styles.rowStyle}>□ Саруул</div>
                  <div style={styles.rowStyle}>
                    <b>Үг яриа:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Ойлгомжгүй</div>
                  <div style={styles.rowStyle}>□ Огт ярихгүй</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Биеийн галбир:</b>
                    <span style={{ marginLeft: 40 }}>□ Улайсан</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Хэвийн
                    <span style={{ marginLeft: 75 }}>□ Толботой</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Туранхай
                    <span style={{ marginLeft: 65 }}>□ Тууралттай</span>
                  </div>
                  <div style={styles.rowStyle}>
                    <b>Нүүр царай:</b>
                    <span style={{ marginLeft: 58 }}>□ Х өөнгө</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Ердийн
                    <span style={{ marginLeft: 75 }}>□ Цэлхэгэр</span>
                  </div>
                  <div style={styles.rowStyle}>□ Цайвар</div>
                  <div style={styles.rowStyle}>□ Цонхигор</div>
                  <div style={styles.rowStyle}>□ Хөхөрсөн</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Арьсны уян хатан чанар:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Ердийн</div>
                  <div style={styles.rowStyle}>□ Сул</div>
                  <div style={styles.rowStyle}>□ Халуун</div>
                  <div style={styles.rowStyle}>□ Хүйтэн</div>
                  <div style={styles.rowStyle}>
                    <b>Арьсны чийглэг байдал:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Чийглэг</div>
                  <div style={styles.rowStyle}>□ Ердийн</div>
                  <div style={styles.rowStyle}>□ Хуурай</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Захын тунгалгийн булчирхай:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэнэ</div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэхгүй</div>
                  <div style={styles.rowStyle}>
                    <b>Хүчилтөрөгчийн хангамж:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    _________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    <b>Мэдрэлийн үзлэг: </b>
                  </div>
                  <div style={styles.rowStyle}>Хүзүүний хөшингө (-) (+)</div>
                  <div style={styles.rowStyle}>
                    <b>Хүүхэн хараа:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэвийн</div>
                  <div style={styles.rowStyle}>□ Нарийссан</div>
                  <div style={styles.rowStyle}>□ Өргөссөн</div>
                  <div style={styles.rowStyle}>Гэрлийн урвал:(-) (+)</div>
                  <div style={styles.rowStyle}>Эвэрлэгийн рефлекс:(-) (+)</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Таталт:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Хэсгийн</div>
                  <div style={styles.rowStyle}>□ Нэлэнхүйдээ</div>
                  <div style={styles.rowStyle}>□ Тасралтгүй</div>
                  <div style={styles.rowStyle}>□ Хүчдэлийн</div>
                  <div style={styles.rowStyle}>□ Чичирхийлсэн</div>
                  <div style={styles.rowStyle}>
                    <b>Булчингийн хүчдэл:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Ердийн
                    <span style={{ marginLeft: 25 }}>□ Сул</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Атони
                    <span style={{ marginLeft: 30 }}>□ Чангарсан</span>
                  </div>
                  <div style={styles.rowStyle}>Симптомууд:</div>
                  <div style={styles.rowStyle}>Мэнэнгийн шинж:</div>
                  <div style={styles.rowStyle}>□ Симптом кернига (-) (+)</div>
                  <div style={styles.rowStyle}>□ Брудзинский(-) (+)</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Зүрх судасны эрхтэн тогтолцоо:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    <b>Зүрхний авиа:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Тод
                    <span style={{ marginLeft: 20 }}>□ Бүдэг</span>
                    <span style={{ marginLeft: 20 }}>□ Акценттай</span>
                  </div>
                  <div style={styles.rowStyle}>□ Шуугиантай</div>
                  <div style={styles.rowStyle}>
                    Судасны цохилтын тоо _______
                  </div>
                  <div style={styles.rowStyle}>
                    □ Жигд
                    <span style={{ marginLeft: 20 }}>□ Жигд бус</span>
                    <span style={{ marginLeft: 20 }}>□ Булгилсан</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Сул
                    <span style={{ marginLeft: 20 }}>□ Тэмтрэгдэнэ</span>
                  </div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэхгүй</div>
                  <div style={styles.rowStyle}>Экг-д:</div>
                  <div style={styles.rowStyle}>
                    Р___РQ___QS___QRS__ST___T___QT ___
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Артерийн даралт:</b>
                  </div>
                  <div style={styles.rowStyle}>D____S_____ </div>
                  <div style={styles.rowStyle}>Давтан үзэхэд D</div>
                  <div style={styles.rowStyle}>______S_______ </div>
                  <div style={styles.rowStyle}>Амьсгалын эрхтэн тогтолцоо:</div>
                  <div style={styles.rowStyle}>Амьсгалын тоо:</div>
                  <div style={styles.rowStyle}>1 минутанд ___</div>
                  <div style={styles.rowStyle}>
                    <b>Амьсгал:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Ердийн<span style={{ marginLeft: 20 }}>□ Өнгөц</span>
                    <span style={{ marginLeft: 20 }}>□ Гүн</span>
                  </div>
                  <div style={styles.rowStyle}>Амьсгал:</div>
                  <div style={styles.rowStyle}>□ Цээжний</div>
                  <div style={styles.rowStyle}>□ Хүзүүний туслах</div>
                  <div style={styles.rowStyle}>булчингууд оролцоно</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Амьсгалын зам:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Чөлөөтэй
                    <span style={{ marginLeft: 20 }}>□ Хэл унасан</span>
                  </div>
                  <div style={styles.rowStyle}>□ Эрүүгүй</div>
                  <div style={styles.rowStyle}>□ Амны хөндийд бөөлжистэй</div>
                  <div style={styles.rowStyle}>
                    □ Салсттай<span style={{ marginLeft: 20 }}>□ Цустай</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Гулгилт
                    <span style={{ marginLeft: 25 }}>□ Бөглөрөлттэй</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Амьсгаадалт гаргалтын авалтын
                  </div>
                  <div style={styles.rowStyle}>□ Холимог</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Цээжний хэнхэрцэг эмзэглэлтэй: (-) (+) :</b>
                  </div>
                  <div style={styles.rowStyle}>Хэлбэр өөрчлөгдсөн:(-) (+)</div>
                  <div style={styles.rowStyle}>Уушиг: тогшилтоор:</div>
                  <div style={styles.rowStyle}>
                    □ Хэнгэргэн<span style={{ marginLeft: 25 }}>□ Дүлий</span>
                  </div>
                  <div style={styles.rowStyle}>□ Дууны доргион(-) (+)</div>
                  <div style={styles.rowStyle}>Чагналтаар:</div>
                  <div style={styles.rowStyle}>
                    □ Цулцангийн<span style={{ marginLeft: 25 }}>□ Ширүүн</span>
                  </div>
                  <div style={styles.rowStyle}>□ Гуурсан хоолойн</div>
                  <div style={styles.rowStyle}>□ Суларсан амьсгалтай</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    <b>Хэржигнүүр:</b>
                  </div>
                  <div style={styles.rowStyle}>□ Сонсогдоно</div>
                  <div style={styles.rowStyle}>□ Сонсогдохгүй</div>
                  <div style={styles.rowStyle}>□ Хяхтнасан</div>
                  <div style={styles.rowStyle}>
                    Гялтангийн шүргэлцэх чимээ:(-) (+)
                  </div>
                  <div style={styles.rowStyle}>Хөөмий гүйлсэн булчирхай:</div>
                  <div style={styles.rowStyle}>
                    □ Хэл<span style={{ marginLeft: 25 }}>□ Чийглэг</span>
                  </div>
                  <div style={styles.rowStyle}>
                    □ Хуурай<span style={{ marginLeft: 25 }}>□ Өнгөртэй</span>
                  </div>
                  <div style={styles.rowStyle}>□ Өнгөргүй</div>
                </td>
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
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>Элэг дэлүү:</div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэнэ</div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэхгүй</div>
                  <div style={styles.rowStyle}>□ Эмзэглэлтэй</div>
                  <div style={styles.rowStyle}>□ Эмзэглэлгүй</div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>Мэс засал хийлгэсэн эсэх:</div>
                  <div style={styles.rowStyle}>
                    □ Үгүй
                    <span style={{ marginLeft: 20 }}>□ Тийм</span>
                  </div>
                  <div style={styles.rowStyle}>
                    Төрөх эмэгтэйчүүд: УЗЦ: _______ (-) (+)
                  </div>
                  <div style={styles.rowStyle}>Ургийн байрлал:</div>
                  <div style={styles.rowStyle}>
                    □ Дагуу<span style={{ marginLeft: 20 }}>□ Хөндлөн</span>
                  </div>
                </td>
                <td style={styles.leftText}>
                  <div style={styles.rowStyle}>
                    Умай: <span style={{ marginLeft: 25 }}>□ Тонустай</span>
                    <span style={{ marginLeft: 25 }}>□ Тонусгүй</span>
                    <span style={{ marginLeft: 25 }}>□ Тэмтрэгдэнэ</span>
                  </div>
                  <div style={styles.rowStyle}>□ Тэмтрэгдэхгүй</div>
                  <div style={styles.rowStyle}>
                    Ургийн толгой:
                    <span style={{ marginLeft: 25 }}>□ Аарцагт</span>
                    <span style={{ marginLeft: 25 }}>□ Суугаагүй</span>
                  </div>
                  <div style={styles.rowStyle}>
                    Үтрээнээс гарсан ялгадас:
                    <span style={{ marginLeft: 25 }}>□ Цус</span>
                    <span style={{ marginLeft: 25 }}>□ Ялгадас</span>
                  </div>
                  <div style={styles.rowStyle}>
                    Умайн цус алдалт: хэмжээ______________(-) (+)
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Урьдчилсан онош:</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ height: 30 }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Нэмэлт тэмдэглэл:</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ height: 40 }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Очихоос өмнө тусламж: аваагүй, авсан, хэрэглэсэн эм, тариа</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ height: 30 }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Үзүүлсэн тусламж:</b>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Table
              bordered
              className="document"
              style={{ marginBottom: 0, width: 400 }}
            >
              <tbody>
                <tr>
                  <td style={styles.leftText}>Зүрхний цахилгаан бичлэг</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Шарх цэгцэлсэн</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Ариун боолт/тампонад/</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Чангалуур тавьсан</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Чиг</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>
                    Зүрх судасны сэхээн амьдруулалт
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Хүчилтөрөгч өгсөн</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Сахар тодорхойлох </td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Захын судсанд O₂ тодорхойлох</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Интубаци</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Цахилгаан сорилт (AED)</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginBottom: 0, marginLeft: 50 }}
            >
              <tbody>
                <tr>
                  <td style={styles.centerText} colSpan={2}>
                    Үзүүлэлт
                  </td>
                  <td style={styles.centerText} colSpan={2}>
                    Анхны үзлэгээр
                  </td>
                  <td style={styles.centerText}>Арга хэмжээ</td>
                </tr>
                <tr>
                  <td style={styles.centerText} rowSpan={2}>
                    Цусны
                  </td>
                  <td style={styles.centerText}>Зүүн</td>
                  <td style={styles.leftText} colSpan={2}></td>
                  <td style={styles.leftText}></td>
                </tr>
                <tr>
                  <td style={styles.centerText}>Баруун</td>
                  <td style={styles.leftText} colSpan={2}></td>
                  <td style={styles.leftText}></td>
                </tr>
                <tr>
                  <td style={styles.centerText} colSpan={2}>
                    Зүрхний цохилтын тоо
                  </td>
                  <td style={styles.leftText} colSpan={2}></td>
                  <td style={styles.leftText}></td>
                </tr>
                <tr>
                  <td style={styles.centerText} colSpan={2}>
                    Амьсгалын тоо
                  </td>
                  <td style={styles.leftText}></td>
                  <td style={styles.leftText}></td>
                  <td style={styles.leftText}></td>
                </tr>
                <tr>
                  <td style={styles.centerText} colSpan={2}>
                    Биеийн халуун
                  </td>
                  <td style={styles.leftText}></td>
                  <td style={styles.leftText}></td>
                  <td style={styles.leftText}></td>
                </tr>
                <tr>
                  <td style={styles.centerText} colSpan={2}>
                    Хүчил төрөгчийн
                  </td>
                  <td style={styles.leftText}></td>
                  <td style={styles.leftText}></td>
                  <td style={styles.leftText}></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div style={styles.rowStyle}>
            <b>Хийсэн эмчилгээ:</b>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ height: 40 }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>
              Өвчтөнг тээвэрлэхдээ: хөлөөр, сандалд, өргөж, дамнуурга, бусад
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>Дуудлагын төрөл: ______________________________</b>
          </div>
          <div style={styles.rowStyle}>Хэвтүүлсэн,</div>
          <div style={styles.rowStyle}>
            Эмнэлэгт очсон огноо: цаг_________________________________минут
          </div>
          <div style={styles.rowStyle}>
            Хүлээн авсан эмчийн _________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Дуудлагын үр дүн:</b>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Table
              bordered
              className="document"
              style={{ marginBottom: 0, width: 400 }}
            >
              <tbody>
                <tr>
                  <td style={styles.leftText}>Замд нас барсан</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Хаяг олдоогүй</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Өөрсдөө эмнэлэг явсан</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Дуудлага буцаасан</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Үзлэгээс татгалзсан</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Table
              bordered
              className="document"
              style={{ marginBottom: 0, marginLeft: 100 }}
            >
              <tbody>
                <tr>
                  <td style={styles.leftText}>Гэртээ төрсөн</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Эмч очихоос өмнө нас барсан</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Эмнэлэгт хүргэсэн</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Тусгай бригадад шилжүүлсэн</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={styles.leftText}>Архитай холбоотой</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            ___________________________________________________________________________________________________________
          </div>
          <div>
            ___________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Эмнэлгийн хүлээн авахад</b>
          </div>
          <div>
            ___________________________________________________________________________________________________________
          </div>
          <div>
            ___________________________________________________________________________________________________________
          </div>
          <div>
            ___________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Онош
            ____________________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>өвчтэй учир хэвтүүлэв.</div>
          <div style={styles.rowStyle}>Картын дугаар</div>
          <div style={styles.rowStyle}>Огноо</div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText} rowSpan={2}>
                  <b>Өвчтөний эцсийн онош:</b>
                </td>
                <td style={styles.centerText}>ӨОУА код</td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <div style={{ height: 50 }}></div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            Эмчийн __________________________________________________________
            Сувилагчийн нэр
            __________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Жолоочын нэр:
            __________________________________________________________ Ээлжийн
            ахлагчийн _______________________________________________________
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ_23А;
