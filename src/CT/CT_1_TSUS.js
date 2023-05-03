import React from "react";
import { Table } from "react-bootstrap";
import CT_1_TSUS_1 from "./CT_1_TSUS_1.PNG";
import CT_1_TSUS_2 from "./CT_1_TSUS_2.PNG";
import CT_1_TSUS_3 from "./CT_1_TSUS_3.PNG";
import CT_1_TSUS_4 from "./CT_1_TSUS_4.PNG";
//маягт СТ-1
function CT_1_TSUS() {
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
      padding: 0,
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
      fontSize: 12,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ЦУСНЫ ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>
                </td>
                <td style={styles.centerText}>
                  <b>Арьс салст</b>
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
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа)
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
                    АД баруун талд _____/____ Зүүн талд _____/______
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
                  <b>Цус судлалын эмчийн үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={2}>
                  <img src={CT_1_TSUS_1} width={200} />
                </td>
                <td style={styles.topText} colSpan={2}>
                  Зовиур: ___________________________________________
                  <div style={styles.topText}>
                    _________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Биеийн жин /Кг/:
                  <div style={styles.topText}>Биеийн өндөр /См/:</div>
                  <div style={styles.topText}>Биеийн гадаргуу / м2 /:</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <b>Арьсан дээрх тууралтын хэлбэр:</b>
                  <div style={styles.topText}>□ Цэгчилсэн гүвдрүүт тууралт</div>
                  <div style={styles.topText}>□ Цэврүүт тууралт</div>
                  <div style={styles.topText}>□ Толбон тууралт</div>
                  <div style={styles.topText}>
                    □ Шалбархайт болон тав тогтсон
                  </div>
                  <div style={styles.topText}>□ Сорви</div>
                  <div style={styles.topText}>□ Хөхрөлт</div>
                  <div style={styles.topText}>□ Цус хуралт</div>
                  <div style={styles.topText}>□ Цус харвалт</div>
                  <div style={styles.topText}>□ Холимог тууралт</div>
                  <div style={styles.topText}>□ Тууралтгүй</div>
                </td>
                <td style={styles.topText}>
                  <b>Үсний байдал:</b>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хугарамтгай</div>
                  <div style={styles.topText}>
                    <b>Хумсны байдал:</b>
                  </div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хугарамтгай</div>
                </td>
                <td style={styles.topText}>
                  <img src={CT_1_TSUS_2} width={250} />
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
                <td style={styles.topText}>
                  Хумсны байдал:
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Хугарамтгай</div>
                </td>
                <td style={styles.topText}>
                  Амны хөндий: Хэл/ Өнгө:
                  <div style={styles.topText}>□ Ердийн</div>
                  <div style={styles.topText}>□ Цайвар</div>
                  <div style={styles.topText}>□ Улаан</div>
                  <div style={styles.topText}>□ Ягаан</div>
                </td>
                <td style={styles.topText}>
                  Хөхлөг:
                  <div style={styles.topText}>□ Ердийн</div>
                  <div style={styles.topText}>□ Хатингаршсан</div>
                  <div style={styles.topText}>□ Томорсон</div>
                </td>
                <td style={styles.topText}>
                  Тууралт:
                  <div style={styles.topText}>□ Тууралттай</div>
                  <div style={styles.topText}>□ Шарх</div>
                  <div style={styles.topText}>□ Улайлт</div>
                  <div style={styles.topText}>□ Яр</div>
                  <div style={styles.topText}>□ Газрын зураг</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Бөөрөлзгөнө хэл Өнгө:
                  <div style={styles.topText}>□ Ердийн</div>
                  <div style={styles.topText}>□ Улайсан</div>
                  <div style={styles.topText}>□ Цайсан</div>
                  <div style={styles.topText}>□ Хөхөлбий</div>
                </td>
                <td style={styles.topText}>
                  Шарх:
                  <div style={styles.topText}>□ Шархтай</div>
                  <div style={styles.topText}>□ Шархгүй</div>
                </td>
                <td style={styles.topText}>
                  Буйл: Эмзэглэл
                  <div style={styles.topText}>□ Эмзэглэлгүй</div>
                  <div style={styles.topText}>□ Эмзэглэлтэй</div>
                </td>
                <td style={styles.topText}>
                  Тууралт:
                  <div style={styles.topText}>□ Тууралттай</div>
                  <div style={styles.topText}>□ Тууралтгүй</div>
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
                <td style={styles.topText} colSpan={8}>
                  Тунгалагийн булчирхайн байдал:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.leftText}>
                      Нягт :<div style={styles.leftText}>□ Хатуу</div>
                      <div style={styles.leftText}>□ Зөөлөн</div>
                      <div style={styles.leftText}>Гадаргуу:</div>
                      <div style={styles.leftText}>□ Барзгар</div>
                      <div style={styles.leftText}>□ Гөлгөр</div>
                    </div>
                    <img src={CT_1_TSUS_3} width={100} height={120} />
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хөдөлгөөн:
                  <div style={styles.leftText}>□ Хөдөлгөөнтэй</div>
                  <div style={styles.leftText}>□ Хөдөлгөөнгүй</div>
                  <div style={styles.leftText}>Эмзэглэл:</div>
                  <div style={styles.leftText}>□ Эмзэглэлгүй</div>
                  <div style={styles.leftText}>□ Эмзэглэлтэй</div>
                </td>
                <td style={styles.topText} colSpan={4}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.leftText}>
                      Дэлүүний хэмжээ
                      <div style={styles.leftText}>□ Хэвийн</div>
                      <div style={styles.leftText}>□ 1зэргээр томорсон</div>
                      <div style={styles.leftText}>□ 2 зэргээр томорсон.</div>
                      <div style={styles.leftText}>□ 3 зэргээр томорсон.</div>
                      <div style={styles.leftText}>□ 4 зэргээр томорсон.</div>
                      <div style={styles.leftText}>
                        □ Дэлүү мэс заслаар авагдсан.
                      </div>
                    </div>
                    <img src={CT_1_TSUS_4} width={150} />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={8}>
                  <b>Шинжилгээ:</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Цусны дэлгэрэнгүй шинжилгээ:
                </td>
                <td style={styles.topText} colSpan={4}>
                  Лейкограмм:
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Огноо</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={styles.topText}>огноо</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>WBC</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Blasts</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>PLT</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Basophil</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>RBC</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Eosinophil</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>HGB</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Promyelocyte</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>HCT</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Myelocyte</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>MCV</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Metamyelocyte</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>MCH</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Bands</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>RET</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Neutrophil</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>RET-He</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Lymphocyte</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Monocyte</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={8}>
                  Дүгнэлт:
                  _________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    ___________________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={8}>
                  Миелограмм:
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Огноо</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={5} rowSpan={7}>
                  Дүгнэлт: ______________________________________________
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Бласт</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Бүх нейтрофиль</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Бүх эритриод эс</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Лимфоцит</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Плазмоцит</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Мегакариоцит</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={8}>
                  Цито химийн урвал
                </td>
              </tr>
              <tr>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Эерэг</td>
                <td style={styles.topText}>Сөрөг</td>
                <td style={styles.topText}>Огноо</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText}>MPO</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>APTT</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText}>PAS</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>PT</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText}>DAB</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>INR</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText}>NS</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>TT</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText}>Fibrinogen</td>
                <td style={styles.topText} colSpan={2}></td>
                <td style={styles.topText} colSpan={2}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={8}>
                  Биохими
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Огноо</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
                <td style={styles.topText} colSpan={5} rowSpan={15}>
                  Дүгнэлт: ______________________________________________
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    ________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Нийт билирубин</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Шууд бус билирубин</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Алат</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Асат</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Шүлт Фосфатаза</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>ЛДГ</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Кальци</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Кали</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Креатинин</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Төмөр</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Ферритин</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Төмөр хол/ чадвар</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Витамин В12</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Фолийн хүчил</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
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
                <td style={styles.topText} colSpan={3}>
                  Бактер, вирус, маркерийн шинжилгээ:
                  <div style={styles.topText}>
                    __________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    __________________________________________________________
                  </div>
                </td>
                <td style={{ ...styles.topText, ...{ width: 400 } }}>
                  Дүгнэлт: ______________________________________________
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Шээсэнд:
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Огноо</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={styles.topText} rowSpan={10}>
                  Дүгнэлт: ______________________________________________
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Сахар</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>pH</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Уураг</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Цагаан эс</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Улаан эс</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Хувийн жин</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>гемосидерин</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Бенс-жонс уураг</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Гемоглобин</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Цусанд:
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Огноо</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={styles.topText} rowSpan={3}>
                  Дүгнэлт: ______________________________________________
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Кумбсын шууд урвал</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText}>Кумбсын шууд бус урвал</td>
                <td style={styles.topText}></td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Бусад(PCR, молекул генетик цитогенетик, урсгал цитометр):
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                </td>
                <td style={styles.topText}>
                  Дүгнэлт: ______________________________________________
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={4}>
                  Иммунологи
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Огноо</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={styles.topText} rowSpan={4}>
                  Дүгнэлт: ______________________________________________
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                  <div style={styles.topText}>
                    _______________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>IgG</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>IgM</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
              </tr>
              <tr>
                <td style={styles.topText}>IgA</td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
                <td style={{ ...styles.topText, ...{ width: 70 } }}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1_TSUS;
