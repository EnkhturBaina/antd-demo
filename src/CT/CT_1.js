import React from "react";
import { Table } from "react-bootstrap";

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
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={5}>
                  <b>ДОТРЫН ЭМЧИЙН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Харж ажиглах:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хамрын амьсгал чөлөөтэй эсэх:
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                  <div style={styles.topText}>Хөхрөлт байгаа эсэх: </div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                  <div style={styles.topText}>Тийм бол:</div>
                  <div style={styles.topText}>□ Төвийн □ Захын</div>
                </td>
                <td style={styles.topText}>
                  Амьсгалд туслах булчингууд оролцож байгаа эсэх:
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                  <div style={styles.topText}>
                    Амьсгалын тоо 1 минутанд____удаа
                  </div>
                  <div style={styles.topText}>□ Хэм жигд</div>
                  <div style={styles.topText}>□ Жигд бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 110 } }}>
                  Цээжний хэлбэр:
                  <div style={styles.topText}>□ Зөв</div>
                  <div style={styles.topText}>□ Эмгэг</div>
                  <div style={styles.topText}>Амьсгалын хэлбэр:</div>
                  <div style={styles.topText}>□ Цээжний</div>
                  <div style={styles.topText}>□ Хэвлийн</div>
                  <div style={styles.topText}>□ Холимог</div>
                </td>
                <td style={styles.topText}>
                  Цээжний 2 талд амьсгалд жигд оролцох байдал:
                  <div style={styles.topText}>□ Жигд (баруун\зүүн тал) </div>
                  <div style={styles.topText}>□ Хоцорно</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Тэмтрэлт:</b>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <b>Тогшилт:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эмзэглэлтэй эсэх:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>(________)</div>
                  <div style={styles.topText}>Уян чанар:</div>
                  <div style={styles.topText}>□ Хэвийн □ Буурсан</div>
                </td>
                <td style={styles.topText}>
                  Дууны доргион:
                  <div style={styles.topText}>□ Хэвийн Суларсан</div>
                  <div style={styles.topText}>□ Тодорхойлогдохгүй</div>
                  <div style={styles.topText}>□ Хүчтэй болсон</div>
                </td>
                <td style={styles.topText}>
                  Тогшилтын дуу:
                  <div style={styles.topText}>□ 2 талд ижил</div>
                  <div style={styles.topText}>□ Ижил бус</div>
                </td>
                <td style={styles.topText}>
                  Хэсэгт тогшилтын дуу:
                  <div style={styles.topText}>□ Бүдгэрсэн</div>
                  <div style={styles.topText}>□ Тодорсон</div>
                  <div style={styles.topText}>□ Дүлий болсон;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Чагналт</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Амьсгал 2 талд:
                  <div style={styles.topText}>□ Ижил</div>
                  <div style={styles.topText}>
                    □ Ижил бус (_________хэсэгт);
                  </div>
                  <div style={styles.topText}>Эмгэг амьсгалтай:</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                  <div style={styles.topText}>
                    Тийм бол: (цулцангийн суларсан, цулцангийн ширүүссэн,
                    гуурсан хоолойн эмгэг, стенозын, амьсгал сонсогдохгүй){" "}
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Нэмэлт шуугиантай эсэх:
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                  <div style={styles.topText}>
                    Тийм бол: (нойтон хэржигнүүр, шажигнуур, хуурай хэржигнүүр,
                    гялтангийн шүргэлцэх чимээ ______________хэсэгт)
                  </div>
                  <div style={styles.topText}>Бронхофони</div>
                  <div style={styles.topText}>□ хэвийн</div>
                  <div style={styles.topText}>□ Тодорсон</div>
                  <div style={styles.topText}>
                    □ Суларсан ( ___________________ хэсэгт)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Зүрх судасны тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <b>Зүрх судасны эрсдэлт хүчин зүйлс:</b>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <b>Ажиглалт</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <div style={styles.topText}>□ Зохисгүй хооллолт</div>
                  <div style={styles.topText}>□ Хөдөлгөөний хомсдол</div>
                  <div style={styles.topText}>□ Стресс</div>
                  <div style={styles.topText}>□ Таргалалт</div>
                  <div style={styles.topText}>□ Тамхидалт</div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <div style={styles.topText}>□ Архины зохисгүй хэрэглээ</div>
                  <div style={styles.topText}>□ Удамшил</div>
                  <div style={styles.topText}>□ Артерийн гипертензи</div>
                  <div style={styles.topText}>□ Гиперхолестеринеми</div>
                  <div style={styles.topText}>□ Чихрийн шижин</div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={styles.topText}>Арьсны хөхрөлттэй эсэх:</div>
                      <div style={styles.topText}> Тийм □ Үгүй</div>
                      <div style={styles.topText}>Гүрээний венийн лугшилт:</div>
                      <div style={styles.topText}>□ Ажиглагдахгүй</div>
                      <div style={styles.topText}>
                        □ Ажиглагдана (хүчтэй, дунд, сул)
                      </div>
                    </div>
                    <div>
                      <div style={styles.topText}>Захын хавантай эсэх:</div>
                      <div style={styles.topText}>□ Тийм □ Үгүй</div>
                      <div style={styles.topText}>Зүрхний оройн түлхэлт:</div>
                      <div style={styles.topText}>□ Ажиглагдана</div>
                      <div style={styles.topText}>□ Ажиглагдахгүй</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>Тэмтрэлтээр</b>
                </td>
                <td style={styles.leftText}>
                  <b>Тогшилтоор</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Зүрхний оройн түлхэлт Байрлал:
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус</div>
                  <div style={styles.topText}>
                    Хүч: □ Дунд зэрэг □ Хүчтэй □ Сул
                  </div>
                  <div style={styles.topText}>Шууны артерийн лугшилт</div>
                  <div style={styles.topText}>Хэмнэл: □ Жигд □ Жигд бус</div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <div style={styles.topText}>Давтамж: _______ /мин</div>
                  <div style={styles.topText}>Хүчдэл:</div>
                  <div style={styles.topText}>□ Дунд зэрэг □ Их □ Бага</div>
                  <div style={styles.topText}>Дүүрэлт: □ Дунд зэрэг □ Сул</div>
                  <div style={styles.topText}>2 талд ижил эсэх:</div>
                  <div style={styles.topText}>□ Ижил □ Ижил бус</div>
                </td>
                <td style={styles.leftText}>
                  Зүрхний ( харьцангуй) хил хязгаар:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>
                    □ Томорсон (дээд, баруун, зүүн хил )
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  <b>Чагналтаар</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <div style={styles.topText}>Зүрхний авиа:</div>
                  <div style={styles.topText}>Хэмнэл: □ Жигд □ Жигд бус</div>
                  <div style={styles.topText}>Давтамж: _______ /мин</div>
                  <div style={styles.topText}>
                    I авиа: □ Тод; □ Бүдгэвтэр (I, IV цэгт);
                  </div>
                  <div style={styles.topText}>
                    □ Бүдэг( I, IV ); □ Чангарсан (I, IV цэгт)
                  </div>
                  <div style={styles.topText}>
                    II авиа: □ Тод; □ Бүдэг (II, III, V цэгт);
                  </div>
                  <div style={styles.topText}>□ Өргөгдсөн (II, III цэгт)</div>
                  <div style={styles.topText}>
                    III авиа: □ Сонсогдоно; □ Сонсогдохгүй
                  </div>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <div style={styles.topText}>□ Шуугиангүй □ Шуугиантай</div>
                  <div style={styles.topText}>
                    Байрлал: I; II; III; IV; V цэг
                  </div>
                  <div style={styles.topText}>
                    Систолын (I, II, III, IV, V цэгт)
                  </div>
                  <div style={styles.topText}>
                    Диастолын (I, II, III, IV, V цэгт)
                  </div>
                  <div style={styles.topText}>
                    □ Үл дамжина □ Дамжина_________________
                  </div>
                  <div style={styles.topText}>
                    Хүч: □ Сул ; □ Дунд зэрэг; □ Хүчтэй
                  </div>
                  <div style={styles.topText}>
                    Перикардын шүргэлцэх чимээ бий эсэх:
                  </div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
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
                <td style={styles.topText} colSpan={5}>
                  <b>Хоол боловсруулах эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Харж ажиглах: </b>
                </td>
                <td style={styles.topText}>
                  <b>Өнгөц тэмтрэлтээр:</b>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор</b>
                </td>
                <td style={styles.topText}>
                  <b>Чагналтаар</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хэл өнгөртэй эсэх:
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Арьс, салст–чийглэг</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Өнгө ______________</div>
                  <div style={styles.topText}>Хэвлийн – хэм</div>
                  <div style={styles.topText}>□ Жигд □ Жигд бус</div>
                  <div style={styles.topText}>Хэлбэр __________________</div>
                </td>
                <td style={styles.topText}>
                  Хэвлий эмзэглэлтэй эсэх
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>
                    Булчингийн чангарал байгаа эсэх:
                  </div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Хэвлийн хэнгэрэгэн чимээ:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>Ихэссэн хэсэгт тогшилтын дуу</div>
                  <div style={styles.topText}>□ Бүдгэрсэн</div>
                  <div style={styles.topText}>□ Тодорсон</div>
                  <div style={styles.topText}>□ Дүлий болсон</div>
                </td>
                <td style={styles.topText}>
                  Гэдэсний гүрвэлзэх хөдөлгөөн:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Дүлий</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Гүнзгий тэмтрэлтээр:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Тахир гэдэс – байрлал
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>Тогтоц</div>
                  <div style={styles.topText}>□ Хатуу □ Зөөлөн</div>
                  <div style={styles.topText}>Хөдөлгөөн</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Өгсөх болон уруудах гэдэс: - Байрлал
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>Тогтоц</div>
                  <div style={styles.topText}>□ Хатуу □ Зөөлөн</div>
                  <div style={styles.topText}>Хөдөлгөөн</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Хөндлөн гэдэс: Байрлал
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>Тогтоц</div>
                  <div style={styles.topText}>□ Хатуу □ Зөөлөн</div>
                  <div style={styles.topText}>Хөдөлгөөн</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Цутгалан гэдэс: - Байрлал
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>Тогтоц</div>
                  <div style={styles.topText}>□ Хатуу □ Зөөлөн</div>
                  <div style={styles.topText}>Хөдөлгөөн</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Элэг цөс, дэлүү</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Элэгний шинж тэмдгүүд:
                  <div style={styles.topText}>□ Мэдрэл сульдал</div>
                  <div style={styles.topText}>□ Биж хам шинж</div>
                  <div style={styles.topText}>□ Иммуни-үрэвслийн шинж</div>
                  <div style={styles.topText}>□ Өвдөх хам шинж:</div>
                  <div style={styles.topText}>Хүч________ Хугацаа ____</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Шарлах хам шинж</div>
                  <div style={styles.topText}>□ Загатналт</div>
                  <div style={styles.topText}>□ Цусархаг хам шинж</div>
                  <div style={styles.topText}>□ Элэгний их шинж</div>
                  <div style={styles.topText}>□ Элэгний бага шинж</div>
                </td>
                <td style={styles.topText}>
                  Элэгний хэмжээ тэмтрэлтээр:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон</div>
                  <div style={styles.topText}>(Баруун, зүүн дэлбэн, зур)</div>
                </td>
                <td style={styles.topText}>
                  Дэлүүний хэмжээ тэмтрэлтээр:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон</div>
                  <div style={styles.topText}>
                    (I, II, III, IV зэрэг, дугуйл)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Шээс бэлгийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хоногийн шээсний гарц:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>□ Багассан</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 100 } }}>
                  Шээсний өнгө:
                  <div style={styles.topText}>□ Сүрлэн шар</div>
                  <div style={styles.topText}>□ Улаан шар</div>
                  <div style={styles.topText}>□ Өнгөгүй</div>
                  <div style={styles.topText}>□ Тундастай</div>
                  <div style={styles.topText}>□ Тундасгүй</div>
                </td>
                <td style={styles.topText}>
                  Шөнө шээдэг эсэх:
                  <div style={styles.topText}>□ Тийм, тоо_____</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Шээс тасалддаг эсэх:</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                  <div style={styles.topText}>Дутуу шээдэг эсэх</div>
                  <div style={styles.topText}>□ Тийм □ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Дүлж шээдэг эсэх:
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                  <div style={styles.topText}>Шээхэд давсгаар өвддөг эсэх:</div>
                  <div style={styles.topText}>□ Тийм</div>
                  <div style={styles.topText}>□ Үгүй</div>
                </td>
                <td style={styles.topText}>
                  Бөөр тэмтрэлтээр:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>(Баруун, зүүн)</div>
                  <div style={styles.topText}>Пастернацкий</div>
                  <div style={styles.topText}>□ Баруун ______</div>
                  <div style={styles.topText}>□ Зүүн ______</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Үнэрлэх мэдрэмж:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан □ Ялгахгүй
                  </div>
                  <div style={styles.topText}>Сонсголын мэдрэмж:</div>
                  <div style={styles.topText}>□ Хэвийн □ Ихэссэн □ Буурсан</div>
                </td>
                <td style={styles.topText}>
                  Нүүрний 2 тал:
                  <div style={styles.topText}>□ Ижил</div>
                  <div style={styles.topText}>□ Ижил бус</div>
                  <div style={styles.topText}>Рефлексүүд:</div>
                  <div style={styles.topText}>□ Хадгалагдана</div>
                  <div style={styles.topText}>□ Хадгалагдаагүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Мэдрэхүй:
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      <div style={styles.topText}>Өнгөц</div>
                      <div style={styles.topText}>□ Хэвийн</div>
                      <div style={styles.topText}>□ Ихэссэн</div>
                      <div style={styles.topText}>□ Буурсан</div>
                    </div>
                    <div>
                      <div style={styles.topText}>Гүн</div>
                      <div style={styles.topText}>□ Хэвийн</div>
                      <div style={styles.topText}>□ Ихэссэн</div>
                      <div style={styles.topText}>□ Буурсан</div>
                    </div>
                    <div>
                      <div style={styles.topText}>Хэт мэдрэгшил</div>
                      <div style={styles.topText}>□ Хэвийн</div>
                      <div style={styles.topText}>□ Ихэссэн</div>
                      <div style={styles.topText}>□ Буурсан</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Сэтгэцийн байдал:
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={5}>
                  Бусад: (Арьс, үе мөч, тунгалагийн тогтолцоо)
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1;
