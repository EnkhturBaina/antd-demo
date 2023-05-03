import React from "react";
import { Table } from "react-bootstrap";
import CT_1_GEMTEL_IMAGE from "./CT_1_GEMTEL_IMAGE.PNG";
import CT_1_GEMTEL_1 from "./CT_1_GEMTEL_1.PNG";
import CT_1_GEMTEL_2 from "./CT_1_GEMTEL_2.PNG";
import CT_1_GEMTEL_HEWLOO from "./CT_1_GEMTEL_HEWLOO.PNG";
//маягт СТ-1
function CT_1_GEMTEL() {
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
                <td style={styles.centerText} colSpan={3}>
                  <b>АНХАН ШАТНЫ ҮЗЛЭГ БОЛОН СЭХЭЭН АМЬДРУУЛАХ</b>
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
                        <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                          А
                        </td>
                        <td style={styles.centerText}>
                          Амьсгалын зам болон хүзүү нуруу
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}></td>
                        <td style={styles.leftText}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              width: 400,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={styles.leftText}>
                                Амьсгалын зам чөлөөтэй
                              </div>
                              <div style={styles.leftText}>Тийм/үгүй</div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={styles.leftText}>
                                Амьсгалж байгаа байдал
                              </div>
                              <div style={styles.leftText}>Тийм/үгүй</div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={styles.leftText}>
                                Эрүү нүүрний гэмтэл
                              </div>
                              <div style={styles.leftText}>Тийм/үгүй</div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={styles.leftText}>
                                Эмчилгээ:
                                <div>&nbsp;</div>
                              </div>
                              <div style={styles.leftText}></div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={styles.leftText}>
                                Хүзүү, нурууны үнэлгээ:
                                <div>&nbsp;</div>
                              </div>
                              <div style={styles.leftText}></div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={styles.leftText}>
                                Хүзүү нурууны хөдөлгөөн хорих:
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                                <div>&nbsp;</div>
                              </div>
                              <div style={styles.leftText}>Тийм/үгүй</div>
                            </div>
                          </div>
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
                        <td style={{ ...styles.topText, ...{ width: 30 } }}>
                          B
                        </td>
                        <td style={styles.topText} colSpan={6}>
                          Амьсгалын болон цээжинд өгөх үнэлгээ
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.topText} rowSpan={4}></td>
                        <td style={styles.topText}>Амьсгал</td>
                        <td style={styles.topText}>Тусламжтай</td>
                        <td style={styles.topText}>Өөрөө</td>
                        <td
                          style={{ ...styles.topText, ...{ width: 30 } }}
                        ></td>
                        <td style={styles.topText}>Амьсгалын аппарат</td>
                        <td style={styles.topText}>Тийм/үгүй</td>
                      </tr>
                      <tr>
                        <td style={styles.topText} colSpan={2}>
                          Цээж рүү нэвтэрсэн гэмтэл
                        </td>
                        <td style={styles.topText}>□ Тийм □ Үгүй</td>
                        <td
                          style={{ ...styles.topText, ...{ width: 30 } }}
                        ></td>
                        <td style={styles.topText} colSpan={2}>
                          Хэмжээ:
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.topText} colSpan={3}>
                          Үзлэг:
                          <img
                            src={CT_1_GEMTEL_IMAGE}
                            width={100}
                            height={70}
                          />
                        </td>
                        <td
                          style={{ ...styles.topText, ...{ width: 30 } }}
                        ></td>
                        <td style={styles.topText} colSpan={2} rowSpan={2}></td>
                      </tr>
                      <tr>
                        <td style={styles.topText} colSpan={3}>
                          Эмчилгээ:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                        <td
                          style={{ ...styles.topText, ...{ width: 30 } }}
                        ></td>
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "70%" }}
            >
              <Table
                bordered
                className="document"
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{ ...styles.topText, ...{ width: 30 } }}
                      rowSpan={10}
                    >
                      C
                    </td>
                    <td style={styles.topText} colSpan={4}>
                      Цусны эргэлт болон гэмтлийн шаталбар /оноо
                    </td>
                    <td
                      style={{ ...styles.topText, ...{ width: 30 } }}
                      rowSpan={10}
                    ></td>
                    <td style={styles.topText} colSpan={2}>
                      Хүндрэл болон чадвар алдалт
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={4}>
                      Анхан шатны үзлэг
                    </td>
                    <td style={styles.topText} colSpan={2}>
                      Глазго-ийн кома
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={4}>
                      Судасны лугшилт
                    </td>
                    <td style={styles.topText} colSpan={2}>
                      шаталбар
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={4}>
                      Цусны даралт
                    </td>
                    <td style={styles.topText} colSpan={2}></td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={4}>
                      Амьсгалын хэмжээ
                    </td>
                    <td style={styles.topText} colSpan={2}>
                      GCS _____ /15
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Амьсгалын байдал</td>
                    <td style={styles.topText}>Хэвийн</td>
                    <td style={styles.topText}>Өнгөц</td>
                    <td style={styles.topText}>Тасалданг</td>
                    <td style={styles.topText} colSpan={2}>
                      Хүүхэн хараа
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Калиллярын дүүрэх хугацаа</td>
                    <td style={styles.topText}>&#60;2 cек</td>
                    <td style={styles.topText}>&#62;2 cек</td>
                    <td style={styles.topText}>байхгүй</td>
                    <td style={styles.topText}>Баруун</td>
                    <td style={styles.topText}>Зүүн</td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={4}>
                      Температур
                    </td>
                    <td style={styles.topText}>Баруун</td>
                    <td style={styles.topText}>Зүүн</td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={4}>
                      Мөчний хэлбэр алдагдсан
                    </td>
                    <td style={styles.topText}>Хариу урвал</td>
                    <td style={styles.topText}>Хариу урвал</td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={4}>
                      Гадагш цус алдалт
                    </td>
                    <td style={styles.topText}></td>
                    <td style={styles.topText}></td>
                  </tr>
                  <tr>
                    <td>
                      <div>&nbsp;</div>
                      <div>&nbsp;</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={8}>
                      ЯТТасагт хийсэн эмчилгээ: □ Тийм □ Үгүй
                    </td>
                  </tr>
                  {[...Array(7)].map((x, i) => (
                    <tr key={i}>
                      <td style={{ ...styles.topText, ...{ width: 30 } }}>
                        &nbsp;
                      </td>
                      <td style={styles.topText} colSpan={4}></td>
                      <td style={{ ...styles.topText, ...{ width: 30 } }}></td>
                      <td style={styles.topText} colSpan={2}></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "28%" }}
            >
              <Table
                bordered
                className="document"
                style={{ marginBottom: 0, marginTop: 0, marginLeft: 10 }}
              >
                <tbody>
                  <tr>
                    <td style={styles.centerText} colSpan={3}>
                      Глазго-ийн ком/шаталбар /оноо/
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ ...styles.verticalText, ...{ width: 30 } }}
                      rowSpan={4}
                    >
                      Нүд нээх
                    </td>
                    <td style={styles.topText}>Аяндаа</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      4
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Ярихад</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      3
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Өвтгөхөд</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      2
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Зүүгээр хатгахад </td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      1
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ ...styles.verticalText, ...{ width: 30 } }}
                      rowSpan={5}
                    >
                      Хэл яриа
                    </td>
                    <td style={styles.topText}>
                      Орон зай хугацааны баримжаатай
                    </td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      5
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Ойлгомжтой гэхдээ будилсан</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      4
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Тохироогүй үг хэлэх</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      3
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Ойлгомжгүй авиа гаргах</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      2
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Ярихгүй, дуу гаргахгүй</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      1
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ ...styles.verticalText, ...{ width: 30 } }}
                      rowSpan={6}
                    >
                      Хөдөлгөөний хариу үйлдэл
                    </td>
                    <td style={styles.topText}>Заавараар хөдөлгөөн хийх</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      6
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>
                      Өвтгөхөд цочруулд хэсэг газрын хөдөлгөөн хийх
                    </td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      5
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Өвтгөхөд татганах хариу өгөх</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      4
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Өвтгөхөд атийх хариу өгөх</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      3
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>Өтгөхөд тэнийх хариу өгөх</td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      2
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>
                      Өвтгөхөд ямар ч хариу өгөхгүй
                    </td>
                    <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                      1
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ ...styles.verticalText, ...{ width: 30 } }}
                      rowSpan={3}
                    >
                      Оноо
                    </td>
                    <td style={styles.topText} colSpan={2}>
                      13-15 хөнгөн
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={2}>
                      9-12 дунд
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText} colSpan={2}>
                      3-8 хүнд
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img src={CT_1_GEMTEL_1} height={500} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={styles.centerText}>
                <b>ХОЁР ДАХЬ ШАТНЫ ҮЗЛЭГ</b>
              </div>
              <Table
                bordered
                className="document"
                style={{
                  marginBottom: 0,
                  marginTop: 0,
                  width: 300,
                }}
              >
                <tbody>
                  <tr>
                    <td style={styles.centerText}>
                      <b>Толгой, нүүр болон хүзүү</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>
                      <div>&nbsp;</div>
                      <div>&nbsp;</div>
                      <div style={styles.topText}>Нүд:</div>
                      <div style={styles.topText}>Чихний хэнгэрэг:</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>
                      <b>Цээж</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>
                      <img src={CT_1_GEMTEL_IMAGE} width={100} height={70} />
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>
                      <b>Хэвлий</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>
                      <img src={CT_1_GEMTEL_HEWLOO} width={100} height={70} />
                      <div style={styles.topText}>Шээсний зам:</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>
                      <b>Аарцаг</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>
                      &nbsp;
                      <div style={styles.topText}>Хярзан</div>
                      <div style={styles.topText}>Шээсний сүв</div>
                      <div style={styles.topText}>Шулуун гэдэсний үзлэг</div>
                      <div style={styles.topText}>Бүдүүн гэдэсний реплекс</div>
                      <div style={styles.topText}>Үтрээний үзлэг</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.centerText}>
                      <b>Нугас, нуруу</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.topText}>&nbsp;</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <img src={CT_1_GEMTEL_2} height={500} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_1_GEMTEL;
