import React from "react";
import { Table } from "react-bootstrap";
//маягт СТ-1
function CT_1_ULAMJLALT() {
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
      fontSize: 12,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>ГЭМТЛИЙН ЭМЧИЙН ҮЗЛЭГ</b>
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
                <td style={styles.topText} colSpan={3}>
                  <b>Өвөрчлөл: </b>
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
                <td style={styles.leftText} colSpan={3}>
                  □ Хий{" "}
                  <span style={{ marginLeft: 100 }}>
                    □ Хий бадган хавсарсан
                  </span>
                  <div style={styles.topText}>
                    □ Шар
                    <span style={{ marginLeft: 100 }}>
                      □ Шар бадган хавсарсан
                    </span>
                  </div>
                  <div style={styles.topText}>
                    □ Бадган
                    <span style={{ marginLeft: 88 }}>
                      □ Хий, шар, бадган хурсан
                    </span>
                  </div>
                  <div style={styles.topText}>□ Хий шар хавсарсан</div>
                </td>
                <td style={styles.leftText}>
                  Цог сүлд:
                  <div style={styles.leftText}>□ Сайн</div>
                  <div style={styles.leftText}>□ Дунд</div>
                  <div style={styles.leftText}>□ Буурсан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}>
                  <b>Хий</b>
                </td>
                <td style={styles.centerText}>
                  <b>Шар</b>
                </td>
                <td style={styles.centerText}>
                  <b>Бадган</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Үзэх шинжилгээ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Нүүр царай</td>
                <td style={styles.topText}>
                  □ Хий
                  <div style={styles.topText}>
                    □ Бор хүрэн хар, хөхөлбөр өнгөтэй
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Зөөлөн чийглэг хөлс ихтэй, тослог
                  <div style={styles.topText}>
                    □ Улаа бутарсан шар, шаргал өнгөтэй
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>□ Сэлхэрсэн</div>
                  <div style={styles.topText}>□ Цайвар өнгөтэй</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>

              <tr>
                <td style={styles.topText}>Нүд</td>
                <td style={styles.topText}>
                  □ Цагаан нүд хөхөлбөр
                  <div style={styles.topText}>□ Харц тогтворгүй</div>
                  <div style={styles.topText}>□ Олон анивчина</div>
                  <div style={styles.topText}>□ Нулимс гоожно</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цагаан нүд улаан, шар, шаргал
                  <div style={styles.topText}>□ Махан ургацагтай</div>
                  <div style={styles.topText}>□ Харц ширүүн</div>
                  <div style={styles.topText}>□ Шар ус, нуух гоожно</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цагаан нүд цагаан, цайвар
                  <div style={styles.topText}>□ Өөхөн ургацагтай</div>
                  <div style={styles.topText}>□ Харц дөлгөөн</div>
                  <div style={styles.topText}>□ Зовхи сэлхэрнэ</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Чих</td>
                <td style={styles.topText}>
                  □ Хөхөлбөр өнгөтэй
                  <div style={styles.topText}>□ Шуугина загатнана</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Улаан шар өнгөтэй
                  <div style={styles.topText}>□ Шар ус өгрий булаг гоожно</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цагаан өнгөтэй
                  <div style={styles.topText}>□ Хулхи ихтэй</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Хамар</td>
                <td style={styles.topText}>
                  □ Хөхөлбөр өнгөтэй
                  <div style={styles.topText}>□ Хамар битүүрэх</div>
                  <div style={styles.topText}>□ Үнэр мэдрэхгүй болох</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Хамар улайх, цус гарах, хуурайших
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.topText}>
                    □ Хамраас ялгадас гарах, хамрын үзүүр цайх{" "}
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Уруул</td>
                <td style={styles.topText}>
                  □ Хөхөлбөр өнгөтэй
                  <div style={styles.topText}>□ Муруйна</div>
                  <div style={styles.topText}>□ Чичирч таталдана</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Улбар шаргал өнгөтэй
                  <div style={styles.topText}>□ Хатаж хуурайшина хагарна</div>
                  <div style={styles.topText}>□ Цус гарна</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цайвар өнгөтэй
                  <div style={styles.topText}>□ Өнгөртэй, өрөмтэй</div>
                  <div style={styles.topText}>□ Ялбарна, шүүс гоожино</div>
                  <div style={styles.topText}>□ Бусад</div>
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
                <td style={{ ...styles.topText, ...{ width: 70 } }}>Хэл</td>
                <td style={styles.topText}>
                  □ Улаан, хөхөлбөр, ягаан өнгөтэй
                  <div style={styles.topText}>□ Хуурай ширүүн</div>
                  <div style={styles.topText}>□ Өнгөргүй</div>
                  <div style={styles.topText}>□ Хийн гүвдрүүтэй</div>
                  <div style={styles.topText}>
                    □ Хөшүүн охор богино үзүүр нарийн, хэл чулчирна хэлгийрнэ
                    таталдана
                  </div>
                  <div style={styles.topText}>□ Эхүүн амтагдана</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Улаавтар өнгөтэй
                  <div style={styles.topText}>
                    □ Нимгэн зузаан шаргал шар өнгөртэй
                  </div>
                  <div style={styles.topText}>□ Улаан бэржрүү гүвдрүүтэй</div>
                  <div style={styles.topText}>□ Хар толбо зураастай</div>
                  <div style={styles.topText}>□ Давслаг гашуун амтагдана</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цайвар ягаан өнгөтэй
                  <div style={styles.topText}>□ Том</div>
                  <div style={styles.topText}>□ Чийглэг зөөлөн</div>
                  <div style={styles.topText}>
                    □ Нимгэн зузаан цайвар өнгөртэй, зах ирмэгээрээ шүдний
                    оромтой
                  </div>
                  <div style={styles.topText}>□ Ам заваарна</div>
                  <div style={styles.topText}>□ Амтлаг амтагдана</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Баас</td>
                <td style={styles.topText}>
                  □ Шингэн<div style={styles.topText}>□ Хөөс ихтэй</div>
                  <div style={styles.topText}>□ Хоргослож хатна</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Шар өнгөтэй
                  <div style={styles.topText}>□ Цус өгрийн хольцтой</div>
                  <div style={styles.topText}>□ Өмхий үнэртэй</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цайвар шаргал өнгөтэй
                  <div style={styles.topText}>
                    □ Эс шингэсэн идээ ундаа салсын хольцтой
                  </div>
                  <div style={styles.topText}>□ Наалдамтгай</div>
                  <div style={styles.topText}>□ Исгэлэн үнэртэй</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Шээс</td>
                <td style={styles.topText}>
                  □ Хөхөлбөр өнгөтэй
                  <div style={styles.topText}>□ Ус адил тунгалаг</div>
                  <div style={styles.topText}>□ Үнэр уур багатай</div>
                  <div style={styles.topText}>
                    □ Хөөс том, дуутай хагарч арилна
                  </div>
                  <div style={styles.topText}>
                    □ Дээрээ бутарсан нарийн ширхэглэг язмагтай
                  </div>
                  <div style={styles.topText}>
                    □ Хувирсаны сүүлд хөхөлбөр өнгөтэй, тунгалаг
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Шар, улбар шар, улаан өнгөтэй
                  <div style={styles.topText}>
                    □ Үнэр уур ихтэй, уур нь удаан арилна
                  </div>
                  <div style={styles.topText}>
                    □ Хөөс нь жижиг түргэн арилна
                  </div>
                  <div style={styles.topText}>□ Зузаан өрөмтэй</div>
                  <div style={styles.topText}>
                    □ Дундаа хөвсөн зузаан бөөгнөрсөн язмагтай
                  </div>
                  <div style={styles.topText}>
                    □ Хувирсаны сүүлд шар улбар хүрэн өнгөтэй өтгөн
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цайвар шар өнгөтэй
                  <div style={styles.topText}>□ Үнэр уур багатай</div>
                  <div style={styles.topText}>
                    □ Хөөс нь жижиг удаан арилна, савны хананд наалдана
                  </div>
                  <div style={styles.topText}>
                    □ Доороо нарийн бөөгнөрсөн тунасан язмагтай
                  </div>
                  <div style={styles.topText}>
                    □ Хувирсаны сүүлд цайвар шар өнгөтэй, шингэн
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Хөлс</td>
                <td style={styles.topText}>
                  □ Бага хэмжээтэй<div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Их хэмжээтэй, үнэрлэг
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Дунд зэрэг
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Үс</td>
                <td style={styles.topText}>
                  □ Бор хар өнгөтэй<div style={styles.topText}>□ Хар</div>
                  <div style={styles.topText}>□ Хуурай</div>
                  <div style={styles.topText}>□ Буржгар</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Шаравтар
                  <div style={styles.topText}>□ Тослог</div>
                  <div style={styles.topText}>
                    □ Зөөлөн улаан, эрт бууралтсан
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Бараан, гялалзсан
                  <div style={styles.topText}>□ Тослог</div>
                  <div style={styles.topText}>□ Даахирсан</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Шүд</td>
                <td style={styles.topText}>
                  □ Дорсгор иржгэр<div style={styles.topText}>□ Том</div>
                  <div style={styles.topText}>□ Эцэнхий буйлтай</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Шарласан
                  <div style={styles.topText}>□ Тослог</div>
                  <div style={styles.topText}>□ Зөөлөн буйлтай</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цагаан
                  <div style={styles.topText}>□ Хатуу</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Хумс</td>
                <td style={styles.topText}>
                  □ Хөхрөх<div style={styles.topText}>□ Хувхайрах</div>
                  <div style={styles.topText}>□ Зузаарах</div>
                  <div style={styles.topText}>□ Хатуу болох</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Шарлах
                  <div style={styles.topText}>□ Харавтар зураас тогтох</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Цайх
                  <div style={styles.topText}>
                    □ Цагаан толбо, дусал адил бусаар гарах
                  </div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td colSpan={4} style={styles.centerText}>
                  Хүрэлцэх шинжилгээ
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={4}>
                  Бэлчир орон
                </td>
                <td style={styles.centerText} colSpan={3}>
                  Өврийн бэлчир
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Хар цагааны завсар
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Гэдэсний дээд
                  <div style={styles.topText}>□ Гэдэсний доод</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Аюулхайн
                  <div style={styles.topText}>□ Галын илч буурсан</div>
                  <div style={styles.topText}>□ Бэтгийн</div>
                  <div style={styles.topText}>□ Давсагны</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  Арын бэлчир
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Th1 – Хий
                  <div style={styles.topText}>□ Th6 – Амин судас</div>
                  <div style={styles.topText}>□ Th7 – Зүрх</div>
                  <div style={styles.topText}>□ L4 - Олгой</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Th2 – Шар
                  <div style={styles.topText}>□ Th9 – Элэг</div>
                  <div style={styles.topText}>□ Th10 – Цөс</div>
                  <div style={styles.topText}>□ L5 – Гэдэс</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Th3 – Бадган
                  <div style={styles.topText}>□ Th11 – Дэлүү</div>
                  <div style={styles.topText}>□ Th12 – Ходоод</div>
                  <div style={styles.topText}>□ S1 – Давсаг</div>
                  <div style={styles.topText}>□ Бусад</div>
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
                <td style={styles.topText}>Хаван, хавдар</td>
                <td style={styles.topText}>
                  □ Хуурай<div style={styles.topText}>□ Ширүүн</div>
                  <div style={styles.topText}>□ Хүйтэн</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Зөөлөн
                  <div style={styles.topText}>□ Тослог</div>
                  <div style={styles.topText}>□ Бүлээн, халуун</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Өөхлөг
                  <div style={styles.topText}>□ Тослог</div>
                  <div style={styles.topText}>□ Хүйтэн</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  Асуух шинжилгээ
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Өлсөх</td>
                <td style={styles.topText}>
                  □ Тогтмол бус
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Их
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Бага
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Ундаасах</td>
                <td style={styles.topText}>
                  □ Тогтмол бус
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Их
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Бага
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Нойр</td>
                <td style={styles.topText}>
                  □ Өнгөц сэрэмтгий
                  <div style={styles.topText}>□ Ширүүн</div>
                  <div style={styles.topText}>□ Их зүүдлэнэ, хар дарна</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Шөнө унтаж чадахгүй
                  <div style={styles.topText}>□ Өдөр нойр их хүрнэ</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Нойр их
                  <div style={styles.topText}>□ Алжааж нойрмоглоно</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Яриа</td>
                <td style={styles.topText}>
                  □ Түргэн<div style={styles.topText}>□ Олон үглэнэ</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Хурц ширүүн, түрэмгий
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Удаан алгуур
                  <div style={styles.topText}>□ Үг дуу цөөн</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Галбир</td>
                <td style={styles.topText}>
                  □ Туранхай
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Дунд зэрэг
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Тарган
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Биеийн идэвхи</td>
                <td style={styles.topText}>
                  □ Хөдөлгөөн түргэн
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Дунд зэрэг
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Хөдөлгөөн удаан
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Оюуны идэвхи</td>
                <td style={styles.topText}>
                  □ Санаж сэдсэн, идэвхитэй
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Түрэмгий ухаалаг
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Амгалан, удаан
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Мөн чанар</td>
                <td style={styles.topText}>
                  □ Дан
                  <div style={styles.topText}>□ Хавсарсан</div>
                  <div style={styles.topText}>□ Хурсан</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Дан
                  <div style={styles.topText}>□ Хавсарсан</div>
                  <div style={styles.topText}>□ Хурсан</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
                <td style={styles.topText}>
                  □ Дан
                  <div style={styles.topText}>□ Хавсарсан</div>
                  <div style={styles.topText}>□ Хурсан</div>
                  <div style={styles.topText}>□ Бусад</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Судас</td>
                <td style={styles.topText} colSpan={3}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>УАУ-ны онош /код/ </td>
                <td style={styles.topText} colSpan={3}>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Эмчилгээний зарчим</td>
                <td style={styles.topText} colSpan={3}>
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
    </>
  );
}

export default CT_1_ULAMJLALT;
