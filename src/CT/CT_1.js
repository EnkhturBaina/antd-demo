import React from "react";
import { Table } from "react-bootstrap";
import CT_1_Hudulguun from "./CT_1_Hudulguun.PNG";
import CT_1_MEDREHUI from "./CT_1_MEDREHUI.PNG";
import CT_1_img from "./CT_1_img.PNG";
import CT_1_NUD_1 from "./CT_1_NUD_1.PNG";
import CT_1_NUD_2 from "./CT_1_NUD_2.PNG";
import CT_1_NUD_3 from "./CT_1_NUD_3.PNG";
import CT_1_NUD_4 from "./CT_1_NUD_4.PNG";
import CT_1_NUD_5 from "./CT_1_NUD_5.PNG";
import CT_1_NUD_6 from "./CT_1_NUD_6.PNG";
import CT_1_DOTOOD_1 from "./CT_1_DOTOOD_1.PNG";
import CT_1_DOTOOD_2 from "./CT_1_DOTOOD_2.PNG";
import CT_1_DOTOOD_3 from "./CT_1_DOTOOD_3.PNG";
import CT_1_DOTOOD_4 from "./CT_1_DOTOOD_4.PNG";
import CT_1_DOTOOD_5 from "./CT_1_DOTOOD_5.PNG";

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
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>МЭДРЭЛИЙН ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Арьс салст</b>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дунд □ Хүндэвтэр □ Хүнд
                  <div style={styles.topText}>□ Маш хүнд</div>
                </td>
                <td style={styles.topText}>
                  □ Саруул □ Бүдгэрсэн
                  <div style={styles.topText}>□ Ухаангүй</div>
                </td>
                <td style={styles.topText}>□ Хэвийн □ Хэвийн бус_________</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Цусны эргэлтийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Судасны цохилт 1 минутанд_____ удаа
                  <div style={styles.topText}>Хүчдэл дүүрэлт______ </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон (зүүн, баруун)</div>
                </td>
                <td style={styles.topText}>
                  <b>Чагналтаар:</b>
                  <div style={styles.topText}>Зүрхний авиа </div>
                  <div style={styles.topText}>
                    □ Тод □ Бүдэг □ Бүдгэвтэр □ Хэм жигд
                  </div>
                  <div style={styles.topText}>□ Жигд бус □ Хэм алдалттай</div>
                  <div style={styles.topText}>
                    АД баруун талд _____/____ Зүүн талд _____/______{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хэвлийн үзлэг:
                  <div style={styles.topText}>
                    □ Өнгөц тэмтрэлтээр □ Гүн тэмтрэлтээр □ Эмзэглэлтэй
                    (байрлал____)
                  </div>
                  <div style={styles.topText}>
                    □ Ердийн □ Зөөлөн гялтан цочрол үгүй □ Гялтан цочролын шинж
                    илэрсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Сонсох чадвахи:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан (баруун, зүүн)
                  </div>
                </td>
                <td style={styles.topText}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  <b>МЭДРЭЛИЙН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Ухаан санааны байдал:
                  <div style={styles.topText}>□ Саруул</div>
                  <div style={styles.topText}>□ Саруул бус: ___________</div>
                  <div style={styles.topText}>□ Баримжаалал алдагдсан:</div>
                  <div style={styles.topText}>□ Цаг хугацааны</div>
                  <div style={styles.topText}>□ Орон зайн</div>
                  <div style={styles.topText}>□ Өөрийн</div>
                  <div style={styles.topText}>
                    <b>GCS: E ___V___ М___ </b>
                  </div>
                </td>
                <td style={styles.topText}>
                  Сэтгэцийн байдал:
                  <div style={styles.topText}>
                    □ Анхаарал:__________________________
                  </div>
                  <div style={styles.topText}>
                    □ Ой тогтоолт:________________________
                  </div>
                  <div style={styles.topText}>
                    □ Тоолох чадвар:______________________
                  </div>
                  <div style={styles.topText}>
                    □ Бүтээх чадвар: ______________________
                  </div>
                  <div style={styles.topText}>
                    □ Сэтгэл хөдлөл: ______________________
                  </div>
                  <div style={styles.topText}>
                    □ Зан төрх: ___________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  Хэл ярианы байдал:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ойлгохын хэлгүйдэл</div>
                  <div style={styles.topText}>□ Ярихын хэлгүйдэл</div>
                  <div style={styles.topText}>□ Нэрлэхийн хэлгүйдэл</div>
                  <div style={styles.topText}>□ Уншихгүйдэл</div>
                  <div style={styles.topText}>□ Бичихгүйдэл</div>
                  <div style={styles.topText}>□ Давтан хэлэх чадвар</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Гавал тархины мэдрэлүүд:</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={4} rowSpan={14}>
                  I:  Хэвийн  Хэвийн бус: Б ___ З ___
                  <div style={styles.topText}>II:</div>
                  <div style={styles.topText}>
                    ХХХ: Б__ З__ (мм){" "}
                    <span style={{ marginLeft: 100 }}>Харах чадал:</span>
                  </div>
                  <div style={styles.topText}>
                    Гэрлийн гурвал:
                    <span style={{ marginLeft: 100 }}>Б: ____ З: ____ </span>
                  </div>
                  <div style={styles.topText}>
                    Шууд: Б___З___
                    <span style={{ marginLeft: 100 }}>Харааны талбай:</span>
                  </div>
                  <div style={styles.topText}>Шууд бус: Б___ З___</div>
                  <div style={styles.topText}>
                    Нүдний уг: _____________________________
                  </div>
                  <div style={styles.topText}>III-IV-VI:</div>
                  <div style={styles.topText}>
                    Птоз: Б___ З___{" "}
                    <span style={{ marginLeft: 100 }}>Нистагм:</span>
                  </div>
                  <div style={styles.topText}>
                    Диплопи:  Эерэг  Сөрөг  Илрээгүй  Илэрсэн
                  </div>
                  <div style={styles.topText}>НХБ:  Хэвийн  Хэвийн бус</div>
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={4}
                >
                  VII:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Нүдний анилт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Духны атираа
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хамар уруулын нугалаа
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={3}
                >
                  VIII:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Сонсгол
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Чих шуугих
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={3}
                >
                  IX, X:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хүүхэн хэлний хазайлт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Залгиурын рефлекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                   Дисфони  Дисфаги
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={3}
                >
                  XI:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Стерноклейдомастойд
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Трапец хэлбэрт булчин
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  V:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  XII:
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэвийн бус бол:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Нүүрний мэдрэхүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хэлний хазайлт
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
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
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td rowSpan={2}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Эвэрлэгийн рефлекс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td rowSpan={2}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хатангиршил/татвалзал
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Зажлуурын булчингийн хүч
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Дизартри/анартри
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Хөдөлгөөний тогтолцоо
                </td>
                <td style={styles.topText} colSpan={4}>
                  Мэдрэхүйн тогтолцоо
                </td>
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.topText, ...{ width: "50%" } }}>
                  <b>
                    Булчингийн хүч{" "}
                    <span style={{ marginLeft: 30 }}> Рефлексүүд</span>
                  </b>
                  <img src={CT_1_Hudulguun} style={{ width: 200 }} />
                  <div style={styles.topText}>
                    <b>Эмгэг рефлекс:</b>  Бөхийх  Гэдийх
                  </div>
                  <div style={styles.topText}>
                    <b>Булчингийн тонус:</b>
                  </div>
                  <div style={styles.topText}> Хэвийн  Ихэссэн  Буурсан</div>
                  <div style={styles.topText}>
                     Хэвийн бус:  БГ  БХ ЗГ ЗХ
                  </div>
                </td>
                <td style={{ ...styles.topText, ...{ width: "25%" } }}>
                  <img src={CT_1_MEDREHUI} style={{ width: 170 }} />
                </td>
                <td style={{ ...styles.topText, ...{ width: "25%" } }}>
                  Өнгөц мэдрэхүй– Өн
                  <div style={styles.topText}>Гүний мэдрэхүй- Г</div>
                  <div style={styles.topText}>Температур - Т</div>
                  <div style={styles.topText}>Өвдөлт- Өв</div>
                  <img src={CT_1_img} style={{ width: 170 }} />
                </td>
              </tr>
            </tbody>
          </Table>{" "}
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  {" "}
                  7. Тэнцвэрийн тогтолцоо
                </td>
                <td colSpan={4} style={styles.leftText}>
                  {" "}
                  7. Тэнцвэрийн тогтолцоо
                </td>
              </tr>
              <tr>
                <td rowSpan={3} colSpan={4}>
                  Зогсох тэнцвэр:  Хэвийн  Хэвийн бус____
                  <div style={styles.topText}>
                    Явах тэнцвэр:  Хэвийн  Хэвийн бус_____
                  </div>
                  <div style={styles.topText}>
                    Шугаман алхалт: Хурдан солигдох хөдөлгөөн:
                  </div>
                  <div style={styles.topText}>
                     Хэвийн  Хэвийн бус  Хэвийн___________
                  </div>
                  <div style={styles.topText}> Дисдиадохокинез</div>
                  <div style={styles.topText}>
                    Ромбергийн сорил: БГ БХ ЗГ ЗХ
                  </div>
                  <div style={styles.topText}> Эерэг  Сөрөг</div>
                </td>
                <td style={styles.topText} colSpan={4}>
                   Дагзны хөшингө:_ хуруу  Кернигийн шинж: Б__ З__
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  9. Ёзоорын хамшинж:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                   Ласегийн шинж: Б_ З _
                  <div style={styles.topText}> Мацкевичийн шинж: Б_ З_</div>
                  <div style={styles.topText}>
                     Сколиоз  Нурууны булчингийн чангарал
                  </div>
                </td>
              </tr>
              <tr>
                <td rowSpan={4} style={styles.leftText}>
                  <div style={styles.topText}> Хэвийн</div>
                  <div style={styles.topText}> Хэвийн бус</div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 200 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Б</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>З</td>
                <td colSpan={4} style={styles.leftText}>
                  10. Вегататив үйлийн байдал
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Өсгий-өвдөг-шилбэний
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td colSpan={4} rowSpan={3} style={styles.leftText}>
                   Хөлрөлт: ___________  Пигментаци:__________
                  <div style={styles.topText}>
                     Вазомотор урвал:_______  Симпаталги:_________
                  </div>
                  <div style={styles.topText}>
                     Тэжээрлийн байдал:_____________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Хуруу-хамрын сорил
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 200 } }}>
                  Дисметри:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}></td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  11. Бусад шинжүүд:
                </td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  12. Байршлын болон клиникийн онош:
                </td>
              </tr>
              <tr>
                <td colSpan={8} style={styles.leftText}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div> 
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>НҮДНИЙ ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Арьс салст</b>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дунд □ Хүндэвтэр □ Хүнд
                  <div style={styles.topText}>□ Маш хүнд</div>
                </td>
                <td style={styles.topText}>
                  □ Саруул □ Бүдгэрсэн
                  <div style={styles.topText}>□ Ухаангүй</div>
                </td>
                <td style={styles.topText}>□ Хэвийн □ Хэвийн бус_________</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Цусны эргэлтийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Судасны цохилт 1 минутанд_____ удаа
                  <div style={styles.topText}>Хүчдэл дүүрэлт______ </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон (зүүн, баруун)</div>
                </td>
                <td style={styles.topText}>
                  <b>Чагналтаар:</b>
                  <div style={styles.topText}>Зүрхний авиа </div>
                  <div style={styles.topText}>
                    □ Тод □ Бүдэг □ Бүдгэвтэр □ Хэм жигд
                  </div>
                  <div style={styles.topText}>□ Жигд бус □ Хэм алдалттай</div>
                  <div style={styles.topText}>
                    АД баруун талд _____/____ Зүүн талд _____/______{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хэвлийн үзлэг:
                  <div style={styles.topText}>
                    □ Өнгөц тэмтрэлтээр □ Гүн тэмтрэлтээр □ Эмзэглэлтэй
                    (байрлал____)
                  </div>
                  <div style={styles.topText}>
                    □ Ердийн □ Зөөлөн гялтан цочрол үгүй □ Гялтан цочролын шинж
                    илэрсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Сонсох чадвахи:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан (баруун, зүүн)
                  </div>
                </td>
                <td style={styles.topText}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  <b>НҮДНИЙ ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          VOD
                        </td>
                        <td
                          style={{ ...styles.leftText, ...{ width: 120 } }}
                        ></td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          ph
                        </td>
                        <td style={styles.leftText}></td>
                      </tr>
                      <tr>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          VOD
                        </td>
                        <td
                          style={{ ...styles.leftText, ...{ width: 120 } }}
                        ></td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          ph
                        </td>
                        <td style={styles.leftText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Өнгө танилт:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Нүдний хөдөлгөөн:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Нулимсны зам:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Зовхи:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Салст:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Склер:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Эвэрлэг:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Өмнөд таславч:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Солонгон бүрхүүл:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Хүүхэн хараа:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
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
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.leftText}>
                          Болор:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Шилэнцэр:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Нүдний уг:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <b>НҮДНИЙ ШИНЖИЛГЭЭ</b>
                </td>
              </tr>
              <tr>
                <td>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.leftText}>
                          Autorefractometer:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Tonometer:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Exophthalmometer:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Schirmer test:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          A scan:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div style={styles.topText}>B scan:</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          CCT:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Gonioscopy:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          OCT (ONH):
                          <div style={styles.topText}>OCT (Macula):</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Humphrey:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          FFA:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          X-ray:
                          <div style={styles.topText}>CT:</div>
                          <div style={styles.topText}>MRI:</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>{" "}
                </td>
                <td style={styles.centerText} colSpan={2}>
                  <b>Арьс салст</b>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дунд □ Хүндэвтэр □ Хүнд
                  <div style={styles.topText}>□ Маш хүнд</div>
                </td>
                <td style={styles.topText}>
                  □ Саруул □ Бүдгэрсэн
                  <div style={styles.topText}>□ Ухаангүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  □ Хэвийн □ Хэвийн бус_________
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={3}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Цусны эргэлтийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Судасны цохилт 1 минутанд_____ удаа
                  <div style={styles.topText}>Хүчдэл дүүрэлт______ </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон (зүүн, баруун)</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b>
                  <div style={styles.topText}>Зүрхний авиа </div>
                  <div style={styles.topText}>
                    □ Тод □ Бүдэг □ Бүдгэвтэр □ Хэм жигд
                  </div>
                  <div style={styles.topText}>□ Жигд бус □ Хэм алдалттай</div>
                  <div style={styles.topText}>
                    АД баруун талд _____/____ Зүүн талд _____/______{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хэвлийн үзлэг:
                  <div style={styles.topText}>
                    □ Өнгөц тэмтрэлтээр □ Гүн тэмтрэлтээр □ Эмзэглэлтэй
                    (байрлал____)
                  </div>
                  <div style={styles.topText}>
                    □ Ердийн □ Зөөлөн гялтан цочрол үгүй □ Гялтан цочролын шинж
                    илэрсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Сонсох чадвахи:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан (баруун, зүүн)
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>ЧИХ ХАМАР ХООЛОЙН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хамрын амьсгал:
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>
                    □ Саадтай /баруун, зүүн, 2 талд адил/
                  </div>
                </td>
                <td style={styles.topText}>
                  Гадна хамрын хэлбэр:
                  <div style={styles.topText}>□ Зөв</div>
                  <div style={styles.topText}>□ Зөв бус</div>
                </td>
                <td style={styles.topText}>
                  Тэмтрэхэд:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хамрын үүдэвч:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Ерөнхий хөндий:
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Саадтай</div>
                </td>
                <td style={styles.topText}>
                  Хамрын таславч:
                  <div style={styles.topText}>□ Муруйлтгүй</div>
                  <div style={styles.topText}>□ Муруйсан</div>
                  <div style={styles.topText}>□ Бусад өөрчлөлттэй</div>
                </td>
                <td style={styles.topText}>
                  <img src={CT_1_NUD_1} width={200} />
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Хамрын салст бүрхүүл:
                  <div style={styles.topText}>□ Ягаан</div>
                  <div style={styles.topText}>□ Улаан ягаан</div>
                  <div style={styles.topText}>□ Хөхөлбий</div>
                  <div style={styles.topText}>□ Цайвар</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  Самалдгууд:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хөөнгө</div>
                  <div style={styles.topText}>□ Бусад өөрчлөлттэй</div>
                  <div style={styles.topText}>Хамрын жим:</div>
                  <div style={styles.topText}>□ Ялгадасгүй</div>
                  <div style={styles.topText}>□ Ялгадастай</div>
                </td>
                <td style={styles.topText}>
                  Ялгадас:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>Эмгэг шинжтэй:</div>
                  <div style={styles.topText}>□ Идээрхэг □ Ногоон</div>
                  <div style={styles.topText}>□ Үнэртэй □ Өтгөн</div>
                  <div style={styles.topText}>□ Бусад өөрчлөлттэй</div>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <img src={CT_1_NUD_2} width="100%" height={100} />
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  Бүсийн лимфийн булчирхайн байдал:
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.leftText}>
                  <b>Баруун, зүүн чих:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Гадна чихний хэлбэр:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Тэмтрэхэд:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
                <td style={styles.topText}>
                  Хөхлөг сэртэн:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хавантай</div>
                </td>
                <td style={styles.topText}>
                  Тэмтрэхэд:
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЧИХ ХАМАР ХООЛОЙН ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <img src={CT_1_NUD_3} width="50%" height={80} />
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Чихний гадна суваг:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>
                    □ Нарийссан (төрөлхийн, олдмол){" "}
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Саадтай</div>
                  <div style={styles.topText}>□ Ялгадасгүй</div>
                  <div style={styles.topText}>
                    □ Ялгадастай: (идээрхэг, үнэртэй, ногоон){" "}
                  </div>
                </td>
                <td style={styles.topText}>
                  Сувгийн хана:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Цүлхийсэн (аль хана)</div>
                </td>
                <td style={styles.centerText}>
                  <img src={CT_1_NUD_4} width="100%" height={80} />
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэнгэргэн хальс:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>□ Бусад</div>
                  <div style={styles.topText}>□ Сувдан саарал</div>
                  <div style={styles.topText}>□ Улаан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Цооролтын байрлал</div>
                  <div style={styles.topText}>□ Цооролтын хэмжээ</div>
                  <div style={styles.topText}>Хэнгэргэн хөндийн салст:</div>
                  <div style={styles.topText}>□ Цайвар ягаан</div>
                  <div style={styles.topText}>□ Улаан</div>
                  <div style={styles.topText}>□ Эмгэг өөрчлөлт</div>
                </td>
                <td style={styles.centerText} colSpan={2}>
                  <img src={CT_1_NUD_5} width="100%" height={100} />
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  Бүсийн лимфийн булчирхайн байдал:
                  ________________________________________________
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хөглүүрийн сорил:
                  <div style={styles.topText}>□ Ринне</div>
                  <div style={styles.topText}>□ Вебер</div>
                  <div style={styles.topText}>□ Желле</div>
                  <div style={styles.topText}>□ Вальсалва</div>
                </td>
                <td style={styles.topText}>
                  Сонсголын бичлэг:
                  <div style={styles.topText}>________________</div>
                  <div style={styles.topText}>________________</div>
                  <div style={styles.topText}>Зэрэг:</div>
                  <div style={styles.topText}>________________</div>
                  <div style={styles.topText}>________________</div>
                </td>
                <td style={styles.topText}>
                  Ам ангайлт:
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Хязгаарлагдсан</div>
                  <div style={styles.topText}>Хүүхэн хэл:</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Зөөлөн тагнай:
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус</div>
                  <div style={styles.topText}>Тагнайн гүйлс:</div>
                  <div style={styles.topText}>□ Хэвийн □ Томорсон</div>
                  <div style={styles.topText}>□ 1-р зэрэг □ 2-р зэрэг</div>
                  <div style={styles.topText}>□ 3-р зэрэг □ Бусад өөрчлөлт</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <img src={CT_1_NUD_6} width="100%" height={100} />
                </td>
                <td style={styles.topText}>
                  Архаг үрэвслийн шинж:
                  <div style={styles.topText}>□ Зак</div>
                  <div style={styles.topText}>□ Гисс</div>
                  <div style={styles.topText}>□ Преображенский</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  Лакуны байдал:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Өргөссөн</div>
                  <div style={styles.topText}>Залгиурын ар хана:</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
                <td style={styles.topText}>
                  Залгиурын хажуу хана:
                  <div style={styles.topText}>□ Хэвийн </div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Шувтан хонхрын байдал:</div>
                  <div style={styles.topText}>□ Хэвийн </div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Төвөнхийн гадна үзлэг:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Тэмтрэхэд:</div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
                <td style={styles.topText}>
                  Нуржигнах:
                  <div style={styles.topText}>□ Чимээтэй</div>
                  <div style={styles.topText}>□ Чимээгүй</div>
                  <div style={styles.topText}>
                    Төвөнхийн шууд бус тольдолтоор:
                  </div>
                  <div style={styles.topText}>Амьсгалын үйл ажиллагаа:</div>
                  <div style={styles.topText}>□ Чөлөөтэй</div>
                  <div style={styles.topText}>□ Саалтай</div>
                </td>
                <td style={styles.topText}>
                  Халхавч мөгөөрс:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Төвөнхийн салст:</div>
                  <div style={styles.topText}>□ Цайвар ягаан</div>
                  <div style={styles.topText}>□ Улаан</div>
                  <div style={styles.topText}>□ Цайвар</div>
                </td>
                <td style={styles.topText}>
                  Утгуур мөгөөрс
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Дууны туслах хөвчүүд:</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>Жинхэнэ хөвч:</div>
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <img src={CT_1_NUD_7} width="100%" height={100} />
                </td>
                <td style={styles.topText}>
                  Дууны өнгө: □ Хэвийн □ Хэвийн бус
                  <div style={styles.topText}>
                    Фонаци хийх үед: (Дууны хөвчүүд бүрэн гадаргуугаар
                    шүргэлцэнэ)
                  </div>
                  <div style={styles.topText}>
                    Дууны хөвчүүдийн үйл ажиллаггааны хямрал:
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Дууны хөвчийн доод зайн байдал: _____
                  <div style={styles.topText}>ЦМХоолой цагираг:</div>
                  <div style={styles.topText}>□ Хэвийн □ Хэвийн бус □ Өнгө</div>
                  <div style={styles.topText}>
                    Бүсийн лимфийн булчирхайн байдал:
                  </div>
                  <div style={styles.topText}>
                    Бусад:______________________________{" "}
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
            <b>АРЬСНЫ ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>{" "}
                </td>
                <td style={styles.centerText} colSpan={2}>
                  <b>Арьс салст</b>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дунд □ Хүндэвтэр □ Хүнд
                  <div style={styles.topText}>□ Маш хүнд</div>
                </td>
                <td style={styles.topText}>
                  □ Саруул □ Бүдгэрсэн
                  <div style={styles.topText}>□ Ухаангүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  □ Хэвийн □ Хэвийн бус_________
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={3}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Цусны эргэлтийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Судасны цохилт 1 минутанд_____ удаа
                  <div style={styles.topText}>Хүчдэл дүүрэлт______ </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон (зүүн, баруун)</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b>
                  <div style={styles.topText}>Зүрхний авиа </div>
                  <div style={styles.topText}>
                    □ Тод □ Бүдэг □ Бүдгэвтэр □ Хэм жигд
                  </div>
                  <div style={styles.topText}>□ Жигд бус □ Хэм алдалттай</div>
                  <div style={styles.topText}>
                    АД баруун талд _____/____ Зүүн талд _____/______{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хэвлийн үзлэг:
                  <div style={styles.topText}>
                    □ Өнгөц тэмтрэлтээр □ Гүн тэмтрэлтээр □ Эмзэглэлтэй
                    (байрлал____)
                  </div>
                  <div style={styles.topText}>
                    □ Ердийн □ Зөөлөн гялтан цочрол үгүй □ Гялтан цочролын шинж
                    илэрсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Сонсох чадвахи:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан (баруун, зүүн)
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Арьс, салст, дайвруудын үзлэг:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Арьсны хүрэлцэх мэдрэхүйн байдал:</b> □ Мэдэрч байна □
                  Мэдрэхгүй байна
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>Арьсны байдал:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Арьсны өнгө:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Улаан цоохор</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Хэвийн бус</div>
                  <div style={styles.topText}>□ Зэвхий саарал</div>
                  <div style={styles.topText}>□ Шар</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Шарангуй</div>
                  <div style={styles.topText}>□ Хүрэн</div>
                  <div style={styles.topText}>□ Харласан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Хөхөрсөн</div>
                  <div style={styles.topText}>□ Цайж алагласан</div>
                  <div style={styles.topText}>□ Хүрэл шиг</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Уян чанар
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>□ Алдагдсан</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Арьсны халуун
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Халуун</div>
                  <div style={styles.topText}>□ Хүйтэн</div>
                </td>
                <td style={styles.topText}>
                  Чийглэг байдал
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Ихэссэн</div>
                  <div style={styles.topText}>□ Багассан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Хэсэг газрын үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={4}>
                  <b>Тууралтын онцлог</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Өнгө: □ Бор
                  <div style={styles.topText}>□ Ягаан □ Хар</div>
                  <div style={styles.topText}>□ Улаан □ Хөх</div>
                  <div style={styles.topText}>□ Цагаан □ Саарал</div>
                  <div style={styles.topText}>□ Цайвар бор □ Шар</div>
                </td>
                <td style={styles.topText}>
                  Хүрээ:
                  <div style={styles.topText}>□ Хил хязгаар нь тод</div>
                  <div style={styles.topText}>
                    □ Тод бус (well defined) (Illdefined)
                  </div>
                </td>
                <td style={styles.topText}>
                  Хэлбэр:
                  <div style={styles.topText}>□ Дугараг</div>
                  <div style={styles.topText}>□ Зууван</div>
                  <div style={styles.topText}>□ Олон талт</div>
                  <div style={styles.topText}>□ Олон цагирагт</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Зоос хэлбэрийн</div>
                  <div style={styles.topText}>□ Могой хэлбэрийн</div>
                  <div style={styles.topText}>□ Шугаман</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Тэмтрэхэд: □ Хатуувтар
                  <div style={styles.topText}>□ Тогтоц нь □ Нягт хатуу</div>
                  <div style={styles.topText}>□ Зөөлөн □ Бамбалзсан</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Даргар</div>
                  <div style={styles.topText}>□ Халуун</div>
                  <div style={styles.topText}>□ Хүйтэн</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Хөдөлгөөнтэй</div>
                  <div style={styles.topText}>□ Хөдөлгөөнгүй</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эмх цэгц, хэв маяг болон тархалт
                  <div style={styles.topText}>
                    Тоо хэмжээ: □ Нэг □ Олон тууралт
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Эмх цэгц: □ Бүлэглэсэн □ Тархсан
                  <div style={styles.topText}>Нягтрал: □ Байгаа □ Байхгүй</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Тархац: Тэлэлт:</td>
                <td style={styles.topText} colSpan={2}>
                  Байрлалт
                </td>
                <td style={styles.topText}>□ Хурууны завсар</td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дангараа
                  <div style={styles.topText}>□ Нэг хэсэг (хэсэгчилсэн)</div>
                  <div style={styles.topText}>□ Хэсэг газрыг хамарсан</div>
                  <div style={styles.topText}>□ Бүх биеэр тархсан</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.topText}>□ 2 талд тэгш</div>
                  <div style={styles.topText}>□ Тэгш бус</div>
                  <div style={styles.topText}>□ Өртсөн хэсэгт </div>
                  <div style={styles.topText}>□ Даралттай хэсэгт</div>
                </td>
                <td style={styles.topText}>
                  □ Энд тэнд
                  <div style={styles.topText}>□ Blaschko-н шугам дагуу</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>АРЬСНЫ ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>{" "}
                </td>
                <td style={styles.centerText} colSpan={2}>
                  <b>Арьс салст</b>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дунд □ Хүндэвтэр □ Хүнд
                  <div style={styles.topText}>□ Маш хүнд</div>
                </td>
                <td style={styles.topText}>
                  □ Саруул □ Бүдгэрсэн
                  <div style={styles.topText}>□ Ухаангүй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  □ Хэвийн □ Хэвийн бус_________
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={3}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Цусны эргэлтийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Судасны цохилт 1 минутанд_____ удаа
                  <div style={styles.topText}>Хүчдэл дүүрэлт______ </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон (зүүн, баруун)</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b>
                  <div style={styles.topText}>Зүрхний авиа </div>
                  <div style={styles.topText}>
                    □ Тод □ Бүдэг □ Бүдгэвтэр □ Хэм жигд
                  </div>
                  <div style={styles.topText}>□ Жигд бус □ Хэм алдалттай</div>
                  <div style={styles.topText}>
                    АД баруун талд _____/____ Зүүн талд _____/______{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хэвлийн үзлэг:
                  <div style={styles.topText}>
                    □ Өнгөц тэмтрэлтээр □ Гүн тэмтрэлтээр □ Эмзэглэлтэй
                    (байрлал____)
                  </div>
                  <div style={styles.topText}>
                    □ Ердийн □ Зөөлөн гялтан цочрол үгүй □ Гялтан цочролын шинж
                    илэрсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Сонсох чадвахи:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан (баруун, зүүн)
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>ДОТООД ШҮҮРЭЛ СУДЛАЛЫН ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <img src={CT_1_DOTOOD_1} width="80%" height={120} />
                </td>
                <td style={styles.topText}>
                  <b>Зовиур:</b>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <b>Бамбайн томролын зэрэг:</b>
                  <div style={styles.topText}>
                    □ 0 зэрэг (Харагдахгүй, тэмтрэгдэхгүй)
                  </div>
                  <div style={styles.topText}>
                    □ 1-р зэрэг (Харагдахгүй, тэмтрэгдэнэ){" "}
                  </div>
                  <div style={styles.topText}>
                    □ 2-р зэрэг (Харагдана, тэмтрэгдэнэ)
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Нүдний бүлтийлт:
                  <div style={styles.topText}>Нүдний шинж:</div>
                  <div style={styles.topText}>□ Крауссийн шинж</div>
                  <div style={styles.topText}>□ Грефийн шинж</div>
                  <div style={styles.topText}>□ Кохерийн шинж </div>
                  <div style={styles.topText}>□ Мебиусийн шинж</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Штельвагийн шинж</div>
                  <div style={styles.topText}>□ Дельримплийн шинж</div>
                  <div style={styles.topText}>□ Еленикийн шинж</div>
                  <div style={styles.topText}>□ Розенбахийн шинж</div>
                  <div style={styles.topText}>□ Боткиний шинж</div>
                  <div style={styles.topText}>□ Жоффруагийн шинж</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Марийн шинж
                  <div style={styles.topText}>
                    ____________________________________________
                  </div>
                  <div style={styles.topText}>Цахилгаан бүхээгний шинж</div>
                  <div style={styles.topText}>
                    ____________________________________________
                  </div>
                  <div style={styles.topText}>
                    Дермографизм (улаан, түргэн тогтвортой)
                  </div>
                  <div style={styles.topText}>
                    ____________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <img src={CT_1_DOTOOD_5} width="80%" height={120} />
                </td>
                <td style={styles.topText} colSpan={2} rowSpan={2}>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.centerText}>Үзүүлэлт</td>
                        <td style={styles.centerText}>Хариу</td>
                        <td style={styles.centerText}>Хэвийн хэмжээ</td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Чөлөөт Т3</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Чөлөөт Т4</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Нийт Т3</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>Нийт Т4</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TSH</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TR-Ab</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TG-Ab</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>TPO-Ab</td>
                        <td style={styles.centerText}></td>
                        <td style={styles.centerText}></td>
                      </tr>
                    </tbody>
                  </Table>
                  <div style={styles.topText}>
                    <b>Бамбайн цөмийн изотоп шинжилгээ:</b>
                    <div style={styles.topText}>
                      ____________________________________________
                    </div>
                    <div style={styles.topText}>
                      <b>Бамбайн эсийн шинжилгээ:</b>
                    </div>
                    <div style={styles.topText}>
                      ____________________________________________
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <img src={CT_1_DOTOOD_2} width="80%" height={120} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>*/}

      <div className="page">
        <div className="subpage">
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  <b>Чихрийн шижингийн үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Чихрийн шижингийн эрсдэлт хүчин зүйлс:</b>
                  <div style={styles.leftText}>□ Тарган удам</div>
                  <div style={styles.leftText}>□ ЧШ-гийн удам</div>
                  <div style={styles.leftText}>□ Жин (хамгийн их)</div>
                  <div style={styles.leftText}>□ Гепатит</div>
                  <div style={styles.leftText}>□ Панкреатит</div>
                  <div style={styles.leftText}>□ Жирэмсний ЧШ</div>
                  <div style={styles.leftText}>□ 4 кг дээш хүүхэд</div>
                  <div style={styles.leftText}>□ Архи</div>
                  <div style={styles.leftText}>□ Тамхи</div>
                  <div style={styles.leftText}>
                    □ Хоолны дэглэм: сайн / дунд / муу
                  </div>
                  <div style={styles.leftText}>
                    □ Хөдөлгөөн: сайн / дунд / муу
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  <b>Оношлогдсон он:</b>
                  <div>&nbsp;</div>
                  <div style={styles.topText}>
                    <b>Хэрэглэдэг эмийн бэлдмэл:</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Бие бялдарын үзүүлэлт: </b>
                  <div style={styles.leftText}>□ Жин_________кг</div>
                  <div style={styles.leftText}>□ Өндөр ________ см</div>
                  <div style={styles.leftText}>
                    □ Биеийн өөхний хэмжээ_____%
                  </div>
                  <div style={{ ...styles.leftText, ...{ marginLeft: 40 } }}>
                    □ (эр&#60;25%; эм&#60;30%)
                  </div>
                  <div style={styles.leftText}>□ Бүсэлхийн тойрог______см</div>
                  <div style={{ ...styles.leftText, ...{ marginLeft: 40 } }}>
                    □ (Aзи - эр&#60;94см; эм&#60;80см)
                  </div>
                  <div style={{ ...styles.leftText, ...{ marginLeft: 40 } }}>
                    □ (Европ - эр&#60;102см; эм&#60;88см)
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  <img src={CT_1_DOTOOD_3} width="80%" height={140} />
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  Биеийн жингийн индекс (БЖИ) ________ кг/м2
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Жингийн дутагдал</td>
                <td style={styles.centerText}>Хэвийн жинтэй</td>
                <td style={styles.centerText}>Жингийн илүүдэл</td>
                <td style={styles.centerText}>Таргалалтын I зэрэг</td>
                <td style={styles.centerText}>Таргалалтын II зэрэг</td>
                <td style={styles.centerText}>Таргалалтын III зэрэг</td>
              </tr>
              <tr>
                <td style={styles.centerText}>&#60;18кг/м2</td>
                <td style={styles.centerText}>18-24.9кг/м2</td>
                <td style={styles.centerText}>25-29.9 кг/м2</td>
                <td style={styles.centerText}>30-34.9 кг/м2 </td>
                <td style={styles.centerText}>35-39.9 кг/м2</td>
                <td style={styles.centerText}>40кг/м2&#60;</td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  <b>Чихрийн шижингийн хяналт</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={6}>
                  <b>Өөрийн хяналт:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Өлөн үеийн глюкоз (&#60;6.0 ммоль/л)
                </td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Хоолны дараах глюкоз (&#60;8.0 ммоль/л)
                </td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  <b>Эмчийн хяналт:</b>
                </td>
                <td style={styles.leftText} colSpan={5}></td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  <b>HbA1C................%</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Эрүүл</td>
                <td style={styles.centerText} colSpan={2}>
                  Сайн
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Дунд
                </td>
                <td style={styles.centerText}>Муу</td>
              </tr>
              <tr>
                <td style={styles.centerText}>4-6%</td>
                <td style={styles.centerText} colSpan={2}>
                  &#60;6.5%
                </td>
                <td style={styles.centerText} colSpan={2}>
                  6.5-7.5%
                </td>
                <td style={styles.centerText}>7.5%&#60;</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Anti- GAD/IA2 ____________________
                </td>
                <td style={styles.topText} colSpan={3}>
                  Глюкозын ачаалалтай сорил:
                  <div style={styles.leftText}>
                    □ Өлөн үеийн глюкоз__________ ммоль/л
                  </div>{" "}
                  <div style={styles.leftText}>
                    □ 2 цагийн дараах глюкоз _________ ммол
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={6}>
                  <b>
                    Чихрийн шижингийн хүндрэл Нүд:
                    _________________________________________________________
                  </b>
                  <div style={styles.leftText}>
                    Зүрх:
                    ___________________________________________________________________________________
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Өөх тосны үзүүлэлтүүд
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Хариу
                </td>
                <td style={styles.centerText} colSpan={2}>
                  Хэвийн хэмжээ
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Холестерол
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 4ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  БНЛП
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 2ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  ИНЛП
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  эр&#60;1.0ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  эм&#60;1.2ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Триглицерид
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 1.7ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  ИНЛП-с бусад
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 3.3ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Холест/ИНЛП
                </td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}>
                  &#60; 5 ммоль/л
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={6}>
                  CRP....................... &#60;5.0мг/л
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
