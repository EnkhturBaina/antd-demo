import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-3
function CT_3() {
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
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-3
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ТӨРӨЛТИЙН ТҮҮХ №
            </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  style={{ ...styles.topText, ...{ width: 200 } }}
                  rowSpan={4}
                >
                  Эмнэлгийн нэр, лого
                </td>
                <td style={styles.leftText} colSpan={3}>
                  РД
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  ЭМД №
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Төрөлтийн түүх нээсэн: ______ он ____ сар ____ өдөр ____ цаг
                  ____ мин
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Тасгийн нэр
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Эцэг /эх/-ийн нэр
                </td>
                <td style={styles.leftText} colSpan={3}>
                  Өөрийн нэр:
                  <span style={{ marginLeft: 200 }}>Нас: _______</span>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Төрсөн
                  <div style={styles.leftText}>
                    ______ он ____ сар ____ өдөр
                  </div>
                </td>
                <td style={styles.topText}>
                  Гэрлэлтийн байдал:
                  <div style={styles.leftText}> Огт гэрлээгүй</div>
                  <div style={styles.leftText}> Батлуулсан гэр бүлтэй</div>
                  <div style={styles.leftText}> Батлуулаагүй гэр бүлтэй</div>
                  <div style={styles.leftText}> Тусгаарласан</div>
                  <div style={styles.leftText}> Цуцалсан</div>
                  <div style={styles.leftText}> Бэлбэсэн</div>
                </td>
                <td style={styles.topText}>
                  Цусны бүлэг
                  <div>&nbsp;</div>
                  <div style={styles.topText}>Резус хүчин зүйл</div>
                </td>
                <td style={styles.topText} rowSpan={2}>
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
                  Ажлын газар, албан тушаал:
                  ____________________________________________
                  <div style={styles.topText}>
                    Мэргэжил:
                    _______________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Тогтмол хаяг:</b> Аймаг/хот:
                  __________________________________
                  <div>&nbsp;</div>
                  <div style={styles.topText}>
                    Сум/дүүрэг: _________________________________ Баг/хороо
                    __________________________________
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    Гудамж/Байшин: ___________________________тоот___________
                  </div>
                </td>
                <td style={styles.topText}>
                  <b>Эмчийн хяналтанд байсан эсэх:</b>
                  <div style={styles.leftText}> Өрх, сумын эмч</div>
                  <div style={styles.leftText}>
                     Эх барих эмэгтэйчүүдийн эмч
                  </div>
                  <div style={styles.leftText}> Бусад мэргэжлийн эмч</div>
                  <div style={styles.leftText}> Хяналтанд ороогүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3} rowSpan={2}>
                  Анх хяналтанд орсон хугацаа (7х): _______
                  <div style={styles.topText}>
                    Хяналтын эмчид сүүлийн удаа үзүүлсэн: ______ он ____ сар
                    ____ өдөр
                  </div>
                  <div style={styles.topText}>
                    Хэдэн удаа үзүүлсэн: _____
                    <span style={{ marginLeft: 20 }}>
                      Хяналт хийсэн эмнэлгийн нэр:________________________
                    </span>
                  </div>
                  <div style={styles.topText}>
                    <span style={{ marginLeft: 150 }}>
                      Хянасан эмчийн нэр: __________________________________
                    </span>
                  </div>
                </td>
                <td style={styles.topText}>
                  Солилцох хуудастай эсэх:
                  <div style={styles.leftText}> Тийм</div>
                  <div style={styles.leftText}> Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Дээд шатлалд шилжүүлсэн эсэх
                  <div style={styles.topText}>
                     Тийм <span style={{ marginLeft: 20 }}> Үгүй</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Холбоо барих хүний нэр: ___________________________
                  <div>&nbsp;</div>
                  <div style={styles.topText}>Утас: _____________________</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Мэдээлэл авах хүний нэр, утас:
                  <div style={styles.topText}>
                    1.__________________________________
                  </div>
                  <div style={styles.topText}>
                    2.__________________________________
                  </div>
                  <div style={styles.topText}>
                    3.__________________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  Төлбөрийн төрөл:
                  <div style={styles.leftText}> Төр хариуцсан</div>
                  <div style={styles.leftText}> Өвчтөн хариуцсан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>ОНОШ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Хэвтэх үеийн онош</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>ӨОУА-10</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Үндсэн онош</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Хүндрэл</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Дагалдах онош</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Үйлдлийн онош(Мэс засал, мэс ажилбар)</b>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>ҮОУА-9</td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Эмнэлэгт амаржсан:</b> _______ он _____ сар _____ өдөр
                  _____ цаг _____ минут
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төрөхөөс:
                  <div style={styles.topText}> Суурь</div>
                  <div style={styles.topText}> Суурь</div>
                  <div style={styles.topText}> Суурь</div>
                </td>
                <td style={styles.topText}>
                  он сар өдөр
                  <div style={styles.topText}>_______/_____/_____</div>
                  <div style={styles.topText}>_______/_____/_____</div>
                  <div style={styles.topText}>_______/_____/_____</div>
                </td>
                <td style={styles.topText}>
                  Ор хоног
                  <div style={styles.topText}>_______ хоног</div>
                  <div style={styles.topText}>_______ цаг</div>
                </td>
                <td style={styles.topText}>Эмчилгээний зардал (₮):</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эмчлэгч эмчийн нэр, гарын үсэг
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хянасан эмчийн нэр, гарын үсэг (Тасгийн эрхлэгч, эмчилгээний
                  чанарын менежер, бусад) /зур/<div>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ХҮЛЭЭН АВСАН ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <div style={styles.leftText}>
            Үзлэг хийсэн ______ он _____ сар ____ өдөр ___ цаг____ минут
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>АСУУМЖ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Урьд өвчилсөн өвчнүүд:</b>
                  <div style={styles.topText}>
                     Сүрьеэ
                    <span style={{ marginLeft: 30 }}> Вирүст гепатит</span>
                  </div>
                  <div style={styles.topText}>
                     Тэмбүү
                    <span style={{ marginLeft: 30 }}> Ангина</span>
                  </div>
                  <div style={styles.topText}>
                     Заг хүйтэн
                    <span style={{ marginLeft: 30 }}> Шүд хорхойтох</span>
                  </div>
                  <div style={styles.topText}>
                    Бусад:<div>&nbsp;</div>
                  </div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  <b>Биений юм:</b>
                  <div style={styles.topText}>Анх ирсэн нас ______</div>
                  <div style={styles.topText}>Мөчлөг _____ хоног</div>
                  <div style={styles.topText}>
                    Үргэлжлэх хугацаа _____ хоног
                  </div>
                  <div style={styles.topText}>Сүүлийн юм ирсэн хугацаа:</div>
                  <div style={styles.topText}>______ он ____ сар ____ өдөр</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 150 } }}>
                  <b>Харшлын асуумж</b>
                  <div style={styles.topText}> Эм тариа</div>
                  <div style={styles.topText}> Ахуйн хэрэглээ</div>
                  <div style={styles.topText}>Бусад:</div>
                  <div style={styles.topText}>
                    <b>Хорт зуршил</b>
                  </div>
                  <div style={styles.topText}>
                     Архи <span style={{ marginLeft: 30 }}> Тамхи</span>
                  </div>
                  <div style={styles.topText}> Мансууруулах бодис</div>
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.topText}>
                  <b>Тархвар судлалын асуумж /сүүлийн 1 сард/: </b>1. Гадаад
                  оронд зорчсон эсэх:  Тийм
                  <span style={{ marginLeft: 30 }}> Үгүй</span>
                  <div style={styles.topText}>
                    2. Тууралтат өвчтэй хүнтэй хамт байсан эсэх:  Тийм
                    <span style={{ marginLeft: 30 }}> Үгүй</span>
                  </div>
                  <div style={styles.topText}>
                    3. Дархлаажуулалтанд хамрагдсан эсэх:  Тийм
                    <span style={{ marginLeft: 30 }}> Үгүй</span>
                  </div>
                  <div style={styles.topText}>
                    4. Халдварт өвчтэй хүнтэй хавьталтай эсэх:  Тийм
                    <span style={{ marginLeft: 30 }}> Үгүй</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.topText}>
                  <b>Урьд хийлгэсэн мэс засал:</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Жирэмсний тээлтийн нас: _______
                </td>
                <td colSpan={2} style={styles.topText}>
                  Сүүлийн төрөлт хоорондын зай: ________
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.topText}>
                  <b>Өмнөх жирэмслэлтийн талаарх мэдээлэл:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Он</td>
                <td style={styles.centerText}>Жирэмслэлтийн төгсгөл</td>
                <td style={styles.centerText}>
                  Төрөх болон төрсний дараах хүндрэл
                </td>
                <td style={styles.centerText}>
                  Төрсөн хүүхдийн жин, нас, хүйс, одоо амьд эсэх /хүндрэл/
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ height: 100 } }}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.topText}>
                  <b>Одоогийн жирэмсний явц:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.topText}>
                  <b>Зовиур:</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал </b>
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>
                </td>
                <td style={styles.centerText}>
                  <b>Арьс салст</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.leftText}>
                   Дунд
                  <span style={{ marginLeft: 30 }}> Хүндэвтэр</span>
                  <span style={{ marginLeft: 30 }}> Хүнд</span>
                  <div style={styles.topText}> Маш хүнд</div>
                </td>
                <td style={styles.leftText}>
                   Саруул
                  <span style={{ marginLeft: 30 }}> Балартсан</span>
                  <div style={styles.topText}> Ухаангүй</div>
                </td>
                <td style={styles.leftText}>
                   Хэвийн
                  <div style={styles.topText}> Хэвийн бус_________</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Амьсгал
                  <div style={styles.topText}>1 минутанд _______удаа</div>
                </td>
                <td colSpan={3} style={styles.leftText}>
                  <b>Чагналтаар амьсгал: </b>
                  <div style={styles.topText}>
                     цулцангийн
                    <span style={{ marginLeft: 30 }}> Гуурсан хоолойн</span>
                    <span style={{ marginLeft: 30 }}> Хэржигнүүртэй</span>
                    <span style={{ marginLeft: 30 }}>
                       Сулавтар (баруун, зүүн )
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Судасны лугшилт 1 хоромд _____ удаа
                  <div style={styles.topText}>хүчдэл дүүрэлт____ </div>
                </td>
                <td style={styles.leftText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил хязгаар</div>
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Томорсон</div>
                </td>
                <td colSpan={2} style={styles.leftText}>
                  <b>Чагналтаар зүрхний авиа:</b>
                  <div style={styles.topText}>
                     Тод
                    <span style={{ marginLeft: 30 }}> Бүдэг</span>
                    <span style={{ marginLeft: 30 }}> Бүдгэвтэр</span>
                    <span style={{ marginLeft: 30 }}> Шуугиантай</span>
                  </div>
                  <div style={styles.topText}>
                     Хэм жигд
                    <span style={{ marginLeft: 30 }}> Хэм алдалттай</span>
                  </div>
                  <div style={styles.topText}>
                    А/Д баруун _____ мм МУБ ____ зүүн ______ мм МУБ
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Хэл:</b>
                  <div style={styles.topText}>
                     Ердийн
                    <span style={{ marginLeft: 30 }}> Хуурай</span>
                    <span style={{ marginLeft: 30 }}> Өнгөртэй</span>
                    <span style={{ marginLeft: 30 }}> Өнгө</span>
                  </div>
                </td>
                <td colSpan={3} style={styles.leftText}>
                  <b>Хэвлийн үзлэг:</b>
                  <div style={styles.topText}>
                    Өнгөц тэмтрэлтээр:
                    <span style={{ marginLeft: 30 }}> Эмзэглэлгүй</span>
                    <span style={{ marginLeft: 30 }}> Эмзэглэлтэй</span>
                  </div>
                  <div style={styles.topText}>
                    Гүн тэмтрэлтээр:
                    <span style={{ marginLeft: 30 }}> Эмзэглэлгүй</span>
                    <span style={{ marginLeft: 30 }}> Эмзэглэлтэй</span>
                  </div>
                  <div style={styles.topText}>
                     Гялтан цочролын шинжгүй
                    <span style={{ marginLeft: 30 }}>
                       Гялтан цочролын шинж илэрсэн
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <b>Сонсох чадвахи:</b>
                  <div style={styles.topText}>
                     Хэвийн
                    <span style={{ marginLeft: 30 }}>
                       Буурсан (баруун, зүүн)
                    </span>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <b>Рефлексүүд:</b>
                  <div style={styles.topText}>
                     Хэвийн
                    <span style={{ marginLeft: 30 }}> Буурсан</span>
                    <span style={{ marginLeft: 30 }}> Ихэссэн</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  Сэтгэцийн
                  байдал:________________________________________________________________________
                  <div>&nbsp;</div>
                  <div style={styles.topText}>
                    Бусад
                    өөрчлөлт:_________________________________________________________________________
                  </div>
                  <div>&nbsp;</div>
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
                <td style={styles.centerText} colSpan={5}>
                  <b>ЭХ БАРИХЫН ТУСГАЙЛСАН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Төрөх хугацаа:</b> ______ он _____ сар _____ өдөр
                  <div style={styles.topText}>
                    Сүүлийн биений юм _____/_____/______
                  </div>
                  <div style={styles.topText}>
                    Анхны үзлэгээр _____/_____/______
                  </div>
                  <div style={styles.topText}>
                    ЭХО шинжилгээгээр _____/_____/______
                  </div>
                </td>
                <td style={styles.topText}>
                  Биеийн өндөр _____ см
                  <div style={styles.topText}>Биеийн жин _____ кг</div>
                  <div style={styles.topText}>Умайн өндөр _____ см</div>
                  <div style={styles.topText}>Хэвлийн тойрог _____ см</div>
                  <div style={styles.topText}>Индекс Соловьев _____ см</div>
                </td>
                <td style={styles.topText}>
                  Ургийн байрлал:
                  <div style={styles.topText}>Нуруулалт</div>
                  <div style={styles.topText}>
                     Дагуу
                    <span style={{ marginLeft: 33 }}> I</span>
                  </div>
                  <div style={styles.topText}>
                     Ташуу
                    <span style={{ marginLeft: 30 }}> II</span>
                  </div>
                  <div style={styles.topText}> Хөндлөн</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Аарцгийн хэмжээсүүд: Dis sp _____ Dis cr _____ Dis tr _____
                  Con ext _____ Con vera _____
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Түрүүлсэн хэсэг:
                  <div style={styles.topText}> Толгой</div>
                  <div style={styles.topText}>
                     Өгзөг <span style={{ marginLeft: 30 }}> Хөл</span>
                  </div>
                  <div style={styles.topText}> Тодорхойгүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Ургийн толгойн тавилт
                  <div style={styles.topText}>
                     5/5<span style={{ marginLeft: 30 }}> 4/5</span>
                  </div>
                  <div style={styles.topText}>
                     3/5<span style={{ marginLeft: 30 }}> 2/5</span>
                  </div>
                  <div style={styles.topText}> 1/5</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Умайн базлалтын байдал:
                  <span style={{ marginLeft: 30 }}> Жигд</span>
                  <span style={{ marginLeft: 30 }}> Жигд бус</span>
                  <div style={styles.topText}>
                    Жигд базлалт эхэлсэн ….. цаг ….. мин
                  </div>
                  <div style={styles.topText}>Хоорондын зай _____ хором</div>
                  <div style={styles.topText}>Үргэлжлэх хугацаа _____ сек</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} rowSpan={4}>
                  Ургийн зүрхний цохилт
                  <div style={styles.topText}>(I хүүхэд)</div>
                  <div style={styles.topText}>(II хүүхэд)</div>
                  <div style={styles.topText}>(III хүүхэд)</div>
                </td>
                <td style={styles.centerText}>Хаана</td>
                <td style={styles.centerText}>1 хоромд</td>
                <td style={styles.centerText}>Сонсогдох байдал</td>
                <td style={styles.centerText}>Ургийн урьдчилсан жин</td>
              </tr>
              <tr>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>
                   Тод
                  <span style={{ marginLeft: 30 }}> Бүдэг</span>
                  <span style={{ marginLeft: 30 }}> Сонсогдохгүй</span>
                  <div style={styles.topText}>
                     Жигд
                    <span style={{ marginLeft: 30 }}> Жигд бус</span>
                  </div>
                </td>
                <td style={styles.centerText}>______________ грамм</td>
              </tr>
              <tr>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>
                   Тод
                  <span style={{ marginLeft: 30 }}> Бүдэг</span>
                  <span style={{ marginLeft: 30 }}> Сонсогдохгүй</span>
                  <div style={styles.topText}>
                     Жигд
                    <span style={{ marginLeft: 30 }}> Жигд бус</span>
                  </div>
                </td>
                <td style={styles.centerText}>______________ грамм</td>
              </tr>
              <tr>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>
                   Тод
                  <span style={{ marginLeft: 30 }}> Бүдэг</span>
                  <span style={{ marginLeft: 30 }}> Сонсогдохгүй</span>
                  <div style={styles.topText}>
                     Жигд
                    <span style={{ marginLeft: 30 }}> Жигд бус</span>
                  </div>
                </td>
                <td style={styles.centerText}>______________ грамм</td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>ҮТРЭЭН ҮЗЛЭГ:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>ТОЛИНЫ ҮЗЛЭГ:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Гадна бэлэг эрхтний хөгжил:</b>
                  <div style={styles.topText}>
                     Зөв
                    <span style={{ marginLeft: 30 }}>
                       Дутуу Өөрчлөлт---------
                    </span>
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <b>Үтрээ:</b>
                  <div style={styles.topText}>
                     Уужим
                    <span style={{ marginLeft: 30 }}>
                       Бачуу Өөрчлөлт---------
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Умайн хүзүүний нээлт _____ см урт _____см</b>
                  <div style={styles.topText}>
                    Бишоп үнэлгээ: нийт оноо ____/____/____
                  </div>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.centerText} rowSpan={2}>
                          Умайн хүзүүний байдал
                        </td>
                        <td style={styles.centerText} colSpan={4}>
                          Үнэлгээ
                        </td>
                      </tr>
                      <tr>
                        <td style={{ ...styles.centerText, ...{ width: 85 } }}>
                          0
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 85 } }}>
                          1
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 85 } }}>
                          2
                        </td>
                        <td style={{ ...styles.centerText, ...{ width: 85 } }}>
                          3
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Умайн хүзүүний нээлт</td>
                        <td style={styles.centerText}>Хаалттай</td>
                        <td style={styles.centerText}>1-2 см</td>
                        <td style={styles.centerText}>3-4 см</td>
                        <td style={styles.centerText}>5 см-ээс дээш</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Умайн хүзүүний урт</td>
                        <td style={styles.centerText}>4 см-ээс дээш</td>
                        <td style={styles.centerText}>3-4 см</td>
                        <td style={styles.centerText}>1-2 см</td>
                        <td style={styles.centerText}>1 см-ээс бага</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Зөөлөрсөн байдал </td>
                        <td style={styles.centerText}>Хатуу</td>
                        <td style={styles.centerText}>Дунд зэрэг</td>
                        <td style={styles.centerText}>Зөөлөн</td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Байрлал</td>
                        <td style={styles.centerText}>Арагшаа</td>
                        <td style={styles.centerText}>Голлох</td>
                        <td style={styles.centerText}>Урагшаа</td>
                        <td style={styles.centerText}></td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
                <td style={styles.leftText}>
                  <b>Ураг орчмын шингэний бүрхүүл:</b>
                  <div style={styles.topText}>
                     Бүтэн цүлхийсэн, цүлхийгээгүй
                  </div>
                  <div style={styles.topText}> Хагарсан</div>
                  <div style={styles.topText}> Эргэлзээтэй</div>

                  <div style={styles.topText}>
                    <b>Ураг орчмын шингэний бүрхүүл:</b>
                  </div>
                  <div style={styles.topText}> Тунгалаг  Ногоон  Цустай</div>
                  <div style={styles.topText}> Шар</div>
                  <div style={styles.topText}>Бусад:</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Ургийн толгой бага аарцгийн хөндийн орох, өргөн, нарийн, гарах
                  хэсгийн хавтгайд ( зур)
                  <div style={styles.topText}>
                    Суман заадасын байрлал  Хөндлөн  Ташуу баруун, зүүн (зур)
                     Шулуун
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Эмэгтэйн бага аарцгийн хөндийн онцлог:
                  <div style={styles.topText}>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={5}>
                  <b>КЛИНИКИЙН УРЬДЧИЛСАН ОНОШ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Үндсэн онош</b>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Хүндрэл</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Дагалдах онош</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Төрөлт удирдах төлөвлөгөө</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>Хийгдэх шинжилгээ</b>
                  <div style={styles.topText}>
                     ЦЕШ
                    <span style={{ marginLeft: 20 }}> ШЕШ</span>
                    <span style={{ marginLeft: 20 }}> Рентген</span>
                  </div>
                  <div style={styles.topText}>
                     Биохими /билирубин, альбумин, нийт уураг, АСАТ, АЛАТ, ЛДГ,
                    сахар, шүлтлэг фосфотаза/
                  </div>
                  <div style={styles.topText}>
                     Коагулограм
                    <span style={{ marginLeft: 20 }}> Мазок</span>
                  </div>
                  <div style={styles.topText}> Бактериологи</div>
                  <div style={styles.topText}> Хэт авиан шинжилгээ</div>
                </td>
                <td style={styles.topText}>
                  <b>Яаралтай хийгдэх эмчилгээ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Эмчийн гарын үсэг .......................................
                  <span style={{ marginLeft: 50 }}>
                    Эх баригчийн гарын үсэг
                    ..............................................
                  </span>
                  <div style={styles.centerText}>
                    _____ он ____ сар ____ өдөр
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
            <b>ТӨРЛӨГИЙН ЯВЦ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>
                    I хүүхэд төрсөн хугацаа: _______ он ____ сар ____ өдөр
                    ....... цаг ............ мин
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төрлөгийн хэлбэр
                  <div style={styles.topText}> Өөрөө</div>
                  <div style={styles.topText}> Хавчуураар</div>
                  <div style={styles.topText}> Кесар хагалгаагаар</div>
                  <div style={styles.topText}> Вакум</div>
                </td>
                <td style={styles.topText}>
                  Төрөхдөө:
                  <div style={styles.topText}>
                     Толгой
                    <span style={{ marginLeft: 20 }}> Өгзөг</span>
                  </div>
                  <div style={styles.topText}> Хөл</div>
                  <div style={styles.topText}> Бүтэлттэй</div>
                  <div style={styles.topText}> Бүтэлтгүй</div>
                </td>
                <td style={styles.topText}>
                  Хүүхэд:
                  <div style={styles.topText}> Амьд</div>
                  <div style={styles.topText}> Амьгүй</div>
                  <div style={styles.topText}>Хүүхэд:</div>
                  <div style={styles.topText}> Эрэгтэй</div>
                  <div style={styles.topText}> Эмэгтэй</div>
                </td>
                <td style={styles.topText}>
                  Апгар оноо
                  <div>&nbsp;</div>
                  <div style={styles.topText}>Хүйн урт</div>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  Төрөх үеийн:
                  <div style={styles.topText}>Жин ________ грамм</div>
                  <div style={styles.topText}>Өндөр ________ см</div>
                  <div style={styles.topText}>Толгойн бүслүүр ________ см</div>
                  <div style={styles.topText}>Мөрний бүслүүр ________ см</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>
                    II хүүхэд төрсөн хугацаа: _______ он ____ сар ____ өдөр
                    ....... цаг ............ мин
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төрлөгийн хэлбэр
                  <div style={styles.topText}> Өөрөө</div>
                  <div style={styles.topText}> Хавчуураар</div>
                  <div style={styles.topText}> Кесар хагалгаагаар</div>
                  <div style={styles.topText}> Вакум</div>
                </td>
                <td style={styles.topText}>
                  Төрөхдөө:
                  <div style={styles.topText}>
                     Толгой
                    <span style={{ marginLeft: 20 }}> Өгзөг</span>
                  </div>
                  <div style={styles.topText}> Хөл</div>
                  <div style={styles.topText}> Бүтэлттэй</div>
                  <div style={styles.topText}> Бүтэлтгүй</div>
                </td>
                <td style={styles.topText}>
                  Хүүхэд:
                  <div style={styles.topText}> Амьд</div>
                  <div style={styles.topText}> Амьгүй</div>
                  <div style={styles.topText}>Хүүхэд:</div>
                  <div style={styles.topText}> Эрэгтэй</div>
                  <div style={styles.topText}> Эмэгтэй</div>
                </td>
                <td style={styles.topText}>
                  Апгар оноо
                  <div>&nbsp;</div>
                  <div style={styles.topText}>Хүйн урт</div>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  Төрөх үеийн:
                  <div style={styles.topText}>Жин ________ грамм</div>
                  <div style={styles.topText}>Өндөр ________ см</div>
                  <div style={styles.topText}>Толгойн бүслүүр ________ см</div>
                  <div style={styles.topText}>Мөрний бүслүүр ________ см</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>
                    III хүүхэд төрсөн хугацаа: _______ он ____ сар ____ өдөр
                    ....... цаг ............ мин
                  </b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төрлөгийн хэлбэр
                  <div style={styles.topText}> Өөрөө</div>
                  <div style={styles.topText}> Хавчуураар</div>
                  <div style={styles.topText}> Кесар хагалгаагаар</div>
                  <div style={styles.topText}> Вакум</div>
                </td>
                <td style={styles.topText}>
                  Төрөхдөө:
                  <div style={styles.topText}>
                     Толгой
                    <span style={{ marginLeft: 20 }}> Өгзөг</span>
                  </div>
                  <div style={styles.topText}> Хөл</div>
                  <div style={styles.topText}> Бүтэлттэй</div>
                  <div style={styles.topText}> Бүтэлтгүй</div>
                </td>
                <td style={styles.topText}>
                  Хүүхэд:
                  <div style={styles.topText}> Амьд</div>
                  <div style={styles.topText}> Амьгүй</div>
                  <div style={styles.topText}>Хүүхэд:</div>
                  <div style={styles.topText}> Эрэгтэй</div>
                  <div style={styles.topText}> Эмэгтэй</div>
                </td>
                <td style={styles.topText}>
                  Апгар оноо
                  <div>&nbsp;</div>
                  <div style={styles.topText}>Хүйн урт</div>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  Төрөх үеийн:
                  <div style={styles.topText}>Жин ________ грамм</div>
                  <div style={styles.topText}>Өндөр ________ см</div>
                  <div style={styles.topText}>Толгойн бүслүүр ________ см</div>
                  <div style={styles.topText}>Мөрний бүслүүр ________ см</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Хойтхын үе:</b>
                  <div style={styles.topText}> Хүлээж удирдсан</div>
                  <div style={styles.topText}> Идэвхтэй удирдсан</div>
                  <div style={styles.topText}> Гардаж авсан</div>
                  <div style={styles.topText}>
                    <b>Төрсний дараах эрт үе:</b>
                  </div>
                  <div style={styles.topText}>
                     Умайн хөндийг гараар шалгасан
                  </div>
                  <div style={styles.topText}>Бусад эмчилгээ:</div>
                </td>
                <td style={styles.topText}>
                  <b>Ихэс:</b>
                  <div style={styles.topText}> Бүтэн</div>
                  <div style={styles.topText}> Эргэлзээтэй</div>
                  <div style={styles.topText}> Бүтэн биш</div>
                  <div style={styles.topText}>Жин ________ грамм</div>
                  <div style={styles.topText}>Зузаан ________ см</div>
                  <div style={styles.topText}>Диаметр ________ см</div>
                  <div style={styles.topText}>Хүйн бэхлэлт:</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Хярзан:</b>
                  <div style={styles.topText}>
                     Бүтэн
                    <span style={{ marginLeft: 20 }}> Эпизиотоми</span>
                  </div>
                  <div style={styles.topText}>
                     Перинеотоми
                    <span style={{ marginLeft: 20 }}> Урагдсан</span>
                  </div>
                  <div style={styles.topText}>
                    Урагдлын зэрэг: I , II, III, IV
                  </div>
                  <div style={styles.topText}>Умайн хүзүү урагдсан эсэх:</div>
                  <div style={styles.topText}>
                     Тийм
                    <span style={{ marginLeft: 20 }}> Үгүй</span>
                  </div>
                  <div style={styles.topText}>
                    Умайн хүзүүний урагдлын зэрэг:
                  </div>
                  <div style={styles.topText}>I , II, III, IV</div>
                  <div style={styles.topText}>
                    Үтрээний урагдал:  Тийм  Үгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Алдсан цусны хэмжээ ________ мл
                </td>
                <td style={styles.topText} colSpan={3}>
                  <b>Төрлөг явагдсан хугацаа:</b> _________ цаг
                  <div style={styles.topText}>
                    I үе _________ II үе _________ III үе _________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Төрөх үеийн онош</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Хүндрэлийн онош</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Хийгдсэн мэс ажилбар</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Хүндрэлийн үед авсан арга хэмжээ</b>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Төрөлт удирдсан эмчийн гарын үсэг:
                  ......................................
                  <div>&nbsp;</div>
                  <div style={styles.topText}>
                    Эх баригч эмчийн гарын үсэг
                    ......................................................
                  </div>
                  <div>&nbsp;</div>
                  <div style={styles.centerText}>
                    ______ он ____ сар ____ өдөр ____ цаг ____ мин
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
            <b>ТӨРСНИЙ ДАРААХ ҮЕИЙН БАЙДАЛ</b>
          </div>
          <div style={styles.rowStyle}>
            <b>а/ Төрсний дараах эрт үеийн</b>
          </div>
          <div style={styles.rowStyle}>Зовиур</div>
          <div style={styles.rowStyle}>
            ________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>Ерөнхий биеийн байдал</div>
          <div style={styles.rowStyle}>
            ________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Арьс салст _________________ АД баруун гарт _________/_________ зүүн
            гарт _________/_________Судасны цохилт /1 мин/_______
          </div>
          <div style={styles.rowStyle}>
            Хярзангийн орчинд /зур/: эмзэглэлтэй, үгүй
          </div>
          <div style={styles.rowStyle}>
            Төрсний дараах тасагт /зур/: шилжүүлсэн, үгүй
          </div>
          <div style={styles.rowStyle}>
            Эмчилгээ, шинжилгээний заалт:
            _____________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Эмч: ________________________________ _____________ цаг
            ________________ минут
          </div>
          <div style={styles.rowStyle}>
            <b>б/ Төрсний дараах үеийн эмчилгээ, үйлчилгээ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>Үзлэгийн сар, өдөр</td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Төрсний дараах өдөр</b>
                </td>
                <td style={styles.centerText}>
                  <b>1</b>
                </td>
                <td style={styles.centerText}>
                  <b>2</b>
                </td>
                <td style={styles.centerText}>
                  <b>3</b>
                </td>
                <td style={styles.centerText}>
                  <b>4</b>
                </td>
                <td style={styles.centerText}>
                  <b>5</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Эхийн биеийн ерөнхий байдал</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зовиур</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Арьс салстын өнгө</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Артерийн даралт</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Судасны цохилт</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зүрх судас</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Амьсгалын тоо</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хөх</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хэвлий</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div>&nbsp;</div>Умай<div>&nbsp;</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шавхрага</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div>&nbsp;</div>Хярзангийн шарх<div>&nbsp;</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шээс</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Өтгөн</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  Эмчилгээ, үйлчилгээ, сувилгаа
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Эмчийн гарын үсэг</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  Үзлэг хийсэн өдөр, цаг минут
                </td>
                <td style={styles.centerText}>ҮЗЛЭГИЙН ТЭМДЭГЛЭЛ</td>
                <td style={{ ...styles.centerText, ...{ width: 150 } }}>
                  ЭМЧИЛГЭЭ, ХООЛ, СУВИЛГААНЫ ЗААЛТ
                </td>
              </tr>
              <tr>
                <td style={{ height: 900 }}></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ПАРТОГРАММ</b>
          </div>
          <div style={{ marginLeft: 70 }}>
            <div style={styles.leftText}>
              Базлалт
              эхэлсэн_________он_________сар_________өдөр_________цаг_________минут
            </div>
            <div style={styles.leftText}>
              Ус гарсан
              _________он_________сар_________өдөр_________цаг_________минут
            </div>
            <div style={styles.leftText}>Усны шинж байдал:</div>
            <div style={styles.leftText}>
              Төрөхийн өмнөх
              онош:_________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              ___________________________________________________________________________________________________
            </div>
            <div style={styles.leftText}>
              Дүлэлт эхэлсэн________цаг________минут
            </div>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    ...styles.leftText,
                    ...{ fontSize: 10, width: 120 },
                  }}
                  colSpan={2}
                >
                  Хугацаа
                </td>
                {[...Array(24)].map((x, i) => (
                  <td style={styles.centerText} colSpan={2} key={i}>
                    {i + 1}
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 70 },
                  }}
                  rowSpan={9}
                >
                  Ургийн зүрхний цохилт (1 мин)
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  180
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  170
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  160
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  150
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  140
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  130
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  120
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  110
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ fontSize: 10, width: 20 },
                  }}
                >
                  100
                </td>
                {[...Array(48)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 12 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    ...styles.leftText,
                    ...{ fontSize: 10, width: 115 },
                  }}
                >
                  Ураг орчмын шингэн
                </td>
                {[...Array(48)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ fontSize: 10 } }}>
                  Толгойн хэлбэржилт
                </td>
                {[...Array(48)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    ...styles.verticalText,
                    ...{ fontSize: 10, width: 100 },
                  }}
                >
                  Умайн хүзүүний нээгдэлт (см)
                  <div style={styles.leftText}>Х-ээр тэмдэглэнэ</div>
                  <div style={styles.leftText}>Ургийн толгойн давших</div>
                  <div style={styles.leftText}>хөдөлгөөн 0-оор тэмдэглэнэ</div>
                </td>
                {[...Array(24)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ТӨРСНИЙ ДАРААХ ҮЕИЙН БАЙДАЛ</b>
          </div>
          <div style={styles.rowStyle}>
            <b>а/ Төрсний дараах эрт үеийн</b>
          </div>
          <div style={styles.rowStyle}>Зовиур</div>
          <div style={styles.rowStyle}>
            ________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>Ерөнхий биеийн байдал</div>
          <div style={styles.rowStyle}>
            ________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Арьс салст _________________ АД баруун гарт _________/_________ зүүн
            гарт _________/_________Судасны цохилт /1 мин/_______
          </div>
          <div style={styles.rowStyle}>
            Хярзангийн орчинд /зур/: эмзэглэлтэй, үгүй
          </div>
          <div style={styles.rowStyle}>
            Төрсний дараах тасагт /зур/: шилжүүлсэн, үгүй
          </div>
          <div style={styles.rowStyle}>
            Эмчилгээ, шинжилгээний заалт:
            _____________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Эмч: ________________________________ _____________ цаг
            ________________ минут
          </div>
          <div style={styles.rowStyle}>
            <b>б/ Төрсний дараах үеийн эмчилгээ, үйлчилгээ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>Үзлэгийн сар, өдөр</td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Төрсний дараах өдөр</b>
                </td>
                <td style={styles.centerText}>
                  <b>1</b>
                </td>
                <td style={styles.centerText}>
                  <b>2</b>
                </td>
                <td style={styles.centerText}>
                  <b>3</b>
                </td>
                <td style={styles.centerText}>
                  <b>4</b>
                </td>
                <td style={styles.centerText}>
                  <b>5</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Эхийн биеийн ерөнхий байдал</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зовиур</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Арьс салстын өнгө</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Артерийн даралт</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Судасны цохилт</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Зүрх судас</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Амьсгалын тоо</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хөх</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хэвлий</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div>&nbsp;</div>Умай<div>&nbsp;</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шавхрага</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div>&nbsp;</div>Хярзангийн шарх<div>&nbsp;</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Шээс</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Өтгөн</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  Эмчилгээ, үйлчилгээ, сувилгаа
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Эмчийн гарын үсэг</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_3;
