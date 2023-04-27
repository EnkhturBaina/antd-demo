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
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 12,
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
                  Өөрийн нэр:{" "}
                  <span style={{ marginLeft: 200 }}>Нас: _______</span>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Төрсөн{" "}
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
                  Эмчлэгч эмчийн нэр, гарын үсэг{" "}
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
      </div>{" "}
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={5}>
                  <b>ЭХ БАРИХЫН ТУСГАЙЛСАН ҮЗЛЭГ</b>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_3;
