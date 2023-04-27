import React from "react";
import { Table } from "react-bootstrap";

//маягт СМ-1-Хавсралт 11
function CM_1_11() {
  const styles = {
    generalText: {
      fontSize: 9,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 10,
      padding: 0,
      paddingLeft: 3,
      lineHeight: 1.1,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 9,
      padding: 0,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 3,
      rotate: "180deg",
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 9,
      textAlign: "center",
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            <b>СМ-1-Хавсралт 11</b>
          </span>
          <div
            style={{
              textAlign: "center",
              marginTop: 5,
              marginBottom: 5,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ШИНГЭНИЙ БАЛАНС ХЯНАХ ХУУДАС
            </span>
          </div>
          <div style={styles.centerText}>
            Эмчлүүлэгчийн овог, нэр:
            <span style={{ marginLeft: 100 }}>Өвчний түүх №</span>
            <span style={{ marginLeft: 100 }}>
              Нас: _____ Хүйс: _____ Тасаг: _____ Өрөө: _____
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText} rowSpan={2} colSpan={2}>
                  <b>Ангилал</b>
                </td>
                <td style={styles.centerText} colSpan={3}>
                  Огноо /цаг/
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i} rowSpan={2}></td>
                ))}
                <td
                  style={{ ...styles.centerText, ...{ width: 150 } }}
                  rowSpan={2}
                >
                  Сувилгааны асуудал - #
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  Үнэлгээ
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.verticalText, ...{ width: 25 } }}
                  rowSpan={80}
                >
                  ӨДӨР ТУТМЫН ҮНЭЛГЭЭ
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 25 } }}
                  rowSpan={21}
                >
                  1. Амьсгал/ Зүрх судас
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 70 } }}
                  rowSpan={5}
                >
                  Амьсгалалт
                </td>
                <td style={{ ...styles.leftText, ...{ width: 70 } }}>Жигд</td>
                <td style={{ ...styles.leftText, ...{ width: 70 } }}></td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.leftText} rowSpan={21}>
                  <div style={styles.leftText}>
                    #1. Амьсгалах хэв маягийн өөрчлөлт
                  </div>
                  <div style={styles.leftText}>#2. Хийн солилцоо алдагдсан</div>
                  <div style={styles.leftText}>
                    #3. Амьсгалын замын цэвэршилт алдагдсан
                  </div>
                  <div style={styles.leftText}>#4. Хөдөлгөөний алдагдал</div>
                  <div style={styles.leftText}>#5. Ядаргаа </div>
                  <div style={styles.leftText}>#7. Шокын эрдсэл</div>
                  <div style={styles.leftText}>
                    #8. Захын мэдрэлийн үйл ажиллагаа алдагдах эрсдэл
                  </div>
                  <div style={styles.leftText}>#9. Нойр хулжих</div>
                  <div style={styles.leftText}>#10. Нойргүйдэл</div>
                  <div style={styles.leftText}>
                    #11. Хөдөлгөөн муудсан (ор, биеийн, шилжих,тэргэнцэр)
                  </div>
                  <div style={styles.leftText}>#12. Тамиргүйдэх</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={4}>
                  Жигд бус
                </td>
                <td style={styles.leftText}>Өнгөц</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Гүн</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Тоо олширсон</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Тоо цөөрсөн</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3}>
                  Чимээ
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2}>
                  Хэвийн бус
                </td>
                <td style={styles.leftText}>Сул</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Тод</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3}>
                  Ханиалгалт
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Үгүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Цэргүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Цэртэй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={6}>
                  Хаван
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хавангүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={5}>
                  Хавантай
                </td>
                <td style={styles.leftText}>Бүх биеэр</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Нүүрэнд</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Зовхинд</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Хэвлийд</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Шилбэнд</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2} rowSpan={2}>
                  Хялгасан судасны дахин дүүрэлт
                </td>
                <td style={styles.leftText}>2 секундээс бага</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>2 секундээс удаан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={2}>
                  Зүрхний хэм
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Жигд
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хэм алдагдсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={16}>
                  2. Хоол боловсруулалт
                </td>
                <td style={styles.centerText} rowSpan={3}>
                  Хооллолт
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Амаар
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
                <td style={styles.leftText} rowSpan={16}>
                  <div style={styles.leftText}>
                    #13. Амны салст бүрхүүл гэмтсэн
                  </div>
                  <div style={styles.leftText}>
                    #14. Хоол тэжээлийн тэнцвэр алдагдал: Бие махбодид
                    шаардлагатай хэмжээнээс их
                  </div>
                  <div style={styles.leftText}>
                    #15. Хоол тэжээлийн тэнцвэр алдагдал: Бие махбодид
                    шаардлагатай хэмжээнээс бага
                  </div>
                  <div style={styles.leftText}>
                    #16. Залгих чадварын алдагдал
                  </div>
                  <div style={styles.leftText}>#17. Бөглөрөх эрсдэл</div>
                  <div style={styles.leftText}>#18. Бөөлжис цутгах</div>
                  <div style={styles.leftText}>#19. Шингэний хэмжээ ихсэлт</div>
                  <div style={styles.leftText}>#20. Шингэний дутагдал</div>
                  <div style={styles.leftText}>#21. Өтгөн хаталт</div>
                  <div style={styles.leftText}>#22. Суулгалт</div>
                  <div style={styles.leftText}>
                    #23. Агаарын солилцооны алдагдал
                  </div>
                  <div style={styles.leftText}>
                    #24. Цусан дахь сахарын хэмжээ
                  </div>
                  <div style={styles.leftText}>тогтворгүйжих эрсдэл</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Гуурсаар
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Бусад замаар (судсаар ..........)
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2}>
                  Хоолны дэглэм
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хоол хориогүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хоол хориотой
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={4}>
                  Хоолны дуршил
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Өөрчлөлттэй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Огиулалттай
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Бөөлжүүлнэ
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3}>
                  Хэвлий
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Цэрдийсэн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хонхойж татагдсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={4}>
                  Өтгөн
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хатуу
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Шингэн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Өнгө өөрчлөгдсөн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={11}>
                  3. Шээс ялгаруулалт
                </td>
                <td style={styles.centerText} rowSpan={11}>
                  Шээс
                </td>
                <td style={styles.leftText} rowSpan={3}>
                  Шээсний гарц
                </td>
                <td style={styles.leftText}>Хэвийн</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
                <td style={styles.leftText} rowSpan={11}>
                  <div style={styles.leftText}>#25. Шээс алдалт</div>
                  <div style={styles.leftText}>#26. Шээс хаагдсан</div>
                  <div style={styles.leftText}>
                    #27. Шээс ялгаруулалт саатсан
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Ихэссэн</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Багассан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={4}>
                  Зовиур
                </td>
                <td style={styles.leftText}>Өвдөлттэй*</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Дүлэлттэй</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Тасалдсан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Задгайрсан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2}>
                  Өнгө, үнэр
                </td>
                <td style={styles.leftText}>Өөрчлөлтгүй</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Өөрчлөлттэй</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Шээлгүүргүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Шээлгүүртэй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={20}>
                  4. Арьс
                </td>
                <td style={styles.centerText} rowSpan={8}>
                  Арьсны байдал
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
                <td style={styles.leftText} rowSpan={20}>
                  <div style={styles.leftText}>#28. Цус алдах эрсдэл</div>
                  <div style={styles.leftText}>#29. Халдварын эрсдэл</div>
                  <div style={styles.leftText}>
                    #30. Арьсны бүрэн бүтэн байдал алдагдсан
                  </div>
                  <div style={styles.leftText}>
                    #31. Эдийн бүрэн бүтэн байдал алдагдсан
                  </div>
                  <div style={styles.leftText}>
                    #32. Тодосгогч бодисонд харшлах эрсдэлтэй
                  </div>
                  <div style={styles.leftText}>#33. Халуурах</div>
                  <div style={styles.leftText}>#34. Халуун буурах</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={7}>
                  Өөрчлөлттэй*
                </td>
                <td style={styles.leftText}>Улайсан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Хавдсан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Зүсэгдсэн</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Шүүс гарсан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Идээлсэн</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Тууралттай</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Цооролттой</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={6}>
                  Арьсны эрүүл ахуй
                </td>
                <td style={styles.leftText} rowSpan={2}>
                  Бүх биеийн угаалга хийх
                </td>
                <td style={styles.leftText}>Шаардлагагүй</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Шаардлагатай</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2}>
                  Хэсэгчилсэн угаалга хийх
                </td>
                <td style={styles.leftText}>Шаардлагагүй</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Шаардлагатай</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2}>
                  Ор цэвэрлэх
                </td>
                <td style={styles.leftText}>Шаардлагагүй</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Шаардлагатай</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3}>
                  Мэс заслын шарх
                </td>
                <td style={styles.leftText} rowSpan={2}>
                  Боолт
                </td>
                <td style={styles.leftText}>Цэвэр</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Бохир</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Гуурстай
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={3} colSpan={2}>
                  Уян зүү тавьсан хэсэг
                </td>
                <td style={styles.leftText}>Хэвийн</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Улайсан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>Хавдсан</td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={12}>
                  5. Мэдрэл, сэтгэхүйн байдал
                </td>
                <td style={styles.centerText} rowSpan={4}>
                  Ухаан санааны байдал
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
                <td style={styles.leftText} rowSpan={12}>
                  <div style={styles.leftText}>
                    #35. Будилуу болох (цочмог, архаг)
                  </div>
                  <div style={styles.leftText}>#36. Ой санамж муудсан</div>
                  <div style={styles.leftText}>#37. Ярих чадвар саатсан</div>
                  <div style={styles.leftText}>
                    #38. Тархины дасан зохицох чадвар буурсан
                  </div>
                  <div style={styles.leftText}>#39. Өвдөлт</div>
                  <div style={styles.leftText}>#40. Сэтгэл түгших</div>
                  <div style={styles.leftText}>#41. Айдас</div>
                  <div style={styles.leftText}>#42. Гашуудах </div>
                  <div style={styles.leftText}>#43. Итгэл алдарсан </div>
                  <div style={styles.leftText}>#44. Ганцаардах эрсдэл</div>
                  <div style={styles.leftText}>
                    #45. Өөрийгөө зөв үнэлж чадахгүй болсон
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  <tr>
                    <td style={styles.leftText} colSpan={2}>
                      Хэвийн
                    </td>
                    {[...Array(8)].map((x, i) => (
                      <td style={styles.centerText} key={i}></td>
                    ))}
                  </tr>
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Сэтгэл түгшсэн байдалтай
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Ухаангүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={3}>
                  Орчиндоо (бусадтай)
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Харьцаатай
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Сул
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Харьцаагүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2}>
                  Өвдөлт
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Өвдөлтгүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Өвдөлттэй*
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={3}>
                  Үе мөчний хөдөлгөөн
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хязгаардлагдмал
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Үений хавдалттай
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="page">
        <div className="subpage">
          <div style={{ fontSize: 9, textAlign: "right" }}>
            <b>Ар тал</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 10 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={14}>
                  <b>ӨДӨР ТУТМЫН СУВИЛГАА</b>
                </td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ width: 50, height: 15 } }}
                ></td>
                <td style={styles.leftText} colSpan={2}></td>
                <td style={styles.leftText} colSpan={2}></td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 150 } }}></td>
              </tr>
              <tr>
                <td
                  rowSpan={36}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  6. ӨДӨР ТУТМЫН СУВИЛГАА
                </td>
                <td
                  style={{ ...styles.leftText, ...{ width: 100 } }}
                  rowSpan={2}
                  colSpan={2}
                >
                  Уян зүү
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Тавьсан/сольсон
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.leftText} rowSpan={31}>
                  <div style={styles.leftText}>
                    #46. ЭМБ-ын мэдлэг олгох шаардлагатай
                  </div>
                  <div style={styles.leftText}>
                    #47. Хувийн эрүүл мэндээ зохицуулах чадваргүй болсон
                  </div>
                  <div style={styles.leftText}>#48. Мэдлэгийн дутагдал</div>
                  <div style={styles.leftText}>
                    #49. Өөрийгөө асрах чадваргүй болсон(усанд орох, хувцаслах,
                    хооллох, бие засах)
                  </div>
                  <div style={styles.leftText}>#50. Алхах чадвар алдагдсан</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Бэхэлгээ хийсэн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2} colSpan={2}>
                  Гуурсны арчилгаа
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хийх шаардлагагүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хийгдсэн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={3} colSpan={2}>
                  Бургуй хийсэн
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Цэвэрлэх бургуй/ тосон
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Эмчилгээний бургуй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хий гаргах гуурс
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={6} colSpan={2}>
                  Хэсэгчилсэн асаргаа
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Халуун жин тавьсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хүйтэн жин тавьсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Халуун бигнүүр тавьсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хүйтэн бигнүүр тавьсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Гич тавьсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Бумба тавьсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2} colSpan={2}>
                  ЭМБ/Зөвлөгөө өгөх
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Өөрт нь зөвлөгөө өгсөн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Гэр бүлд нь зөвлөгөө өгсөн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2} colSpan={2}>
                  Нөхөн сэргээх
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Дасгал хөдөлгөөн хийлгэсэн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Иллэг массаж хийсэн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={2} colSpan={2}>
                  Байрлал
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Сольсон /цаг/
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Солих шаардлагагүй
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ width: 30 } }}
                  rowSpan={7}
                >
                  Ариун цэвэр
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Цагаан хэрэглэл сольсон
                </td>

                <td
                  rowSpan={8}
                  style={{ ...styles.leftText, ...{ width: 70 } }}
                >
                  СУ (сувилагч) Ө (эмчлүүлэгч өөрөө) СА (сахиур)
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Үс угаасан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Үс самнасан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Сахал хуссан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хувцас сольсон
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Хөл гарын хумс авсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Амны хөндий, шүд угаасан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  Хооллосон
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={4} colSpan={2}>
                  Аюулгүй байдал
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Онцгой анхаарах тэмдэг
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Унаж бэртэхээс сэргийлэх
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Орны хашлага
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Тэргэнцэр, таяг
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={5} colSpan={2}>
                  Нэмэлт
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Шинжилгээнд авч явсан
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.topText} rowSpan={5}>
                  Тусгай тэмдэглэл:
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Өрөө тасаг, шилжүүлсэн
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ height: 13 } }}
                  colSpan={2}
                ></td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ height: 13 } }}
                  colSpan={2}
                ></td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ height: 13 } }}
                  colSpan={2}
                ></td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3} rowSpan={6}>
                  7. Сувилгааны асуудал - #
                </td>
                <td style={styles.leftText} colSpan={2}>
                  1. Амьсгал/Зүрх судас
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.topText} rowSpan={6}>
                  Тусгай тэмдэглэл:
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  2.Хоол боловсруулах
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  3.Шээс ялгаруулалт
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  4.Арьс
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  5.Мэдрэл, сэтгэхүйн байдал
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  6.Өдөр тутмын сувилгаа
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3} rowSpan={2}>
                  8. Үнэлгээ хийсэн сувилагч
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Огноо/цаг
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.topText} rowSpan={4}>
                  Тусгай тэмдэглэл:
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Нэр /товчлохгүй/
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3} rowSpan={2}>
                  9. Үнэлгээг давтан хийх хугацаа, нийт давтамжийн талаар ахлах
                  сувилагчийн тэмдэглэл
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Огноо/цаг
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Нэр /товчлохгүй/
                </td>
                {[...Array(8)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 22 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>Хуудсыг хөтлөх заавар:</div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 60 } }}>
                  <b>Тэмдэглэгээ</b>
                </td>
                <td style={{ ...styles.leftText, ...{ width: 20 } }}></td>
                <td style={styles.centerText} colSpan={2}>
                  <b>Хөтлөх заавар</b>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3}>
                  *Ү* хэсэгт дараах гурван тэмдэглэгээнээс хамаарахыг тавина:
                </td>
                <td style={{ ...styles.centerText, ...{ width: 20 } }}>√</td>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>Тийм</td>
                <td style={styles.leftText}>
                  Тийм* гэж үнэлсэн асуудал бүрийг сувилгааны төлөвлөгөөнд
                  оруулна. Ангилал бүрээс нэг асуудалтай бол тэрхүү асуудал
                  бүрээр эмчлүүлэгчийн зовиурыг багасгах сувилгааны ажлын
                  төлөвлөлтийг СТ-3 хуудсанд тэмдэглэж хэрэгжүүлж, дүгнэнэ
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 20 } }}>Х</td>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>Үгүй</td>
                <td style={styles.leftText}>
                  Үгүй* бол сувилгааны төлөвлөгөөнд орох асуудал биш гэж үзэх
                  тул сувилгааны төлөвлөгөөнд энэ чиглэлээр хийх ажил
                  төлөвлөгдөхгүй гэж ойлгоно.
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 20 } }}>⁄</td>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>
                  Хамаарахгүй
                </td>
                <td style={styles.leftText}>
                  Тухайн үнэлгээний асуулт эмчлүүлэгчид хамаарахгүй бол бол тэр
                  бүлгийг бүхэлд нь (/)ташуу зураас татан хамаатуулахгүй орхиж
                  болно.
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  *#*
                </td>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>
                  Асуудлын дугаар
                </td>
                <td style={styles.leftText}>
                  Тухайн бүлэг асуудлыг үнэлж, түүний ард буй сувилгааны
                  асуудлаас тохирох нэг асуудлыг сонгон авч *Сувилгааны асуудал*
                  ангилалын арын тохирох хүснэгтэнд тэмдэглэнэ. Ж-нь:
                  Ханиалгалт, цэртэй гэж үнэлсэн бол “Амьсгалын замын цэвэршилт
                  алдагдсан” гэсэн асуудлыг сонгон “ #3 “ тэмдгийг тохирох
                  нүдэнд тавина.
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3} colSpan={2}>
                  Эмчлүүлэгчийн ариун цэврийн хэсгийг дараах
                </td>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>СУ</td>
                <td style={styles.leftText}>Сувилагч хийсэн</td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>Ө</td>
                <td style={styles.leftText}>Эмчлүүлэгч өөрөө хийсэн</td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 50 } }}>СА</td>
                <td style={styles.leftText}>Сахиур хийсэн</td>
              </tr>
              <tr>
                <td style={styles.centerText} rowSpan={3} colSpan={2}>
                  -*-
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Өвдөлттэй бол өвдөлт үнэлэх хуудсыг сонгомолоор авч тухайн
                  эмчлүүлэгчид хэрэглэнэ
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Арьсны байдал өөрчлөлттэй гэж үнэлвэл цооролтын удирдамжийг
                  /нэрийг магадлах/ баримтлан сувилах төлөвлөгөөг боловсруулна.{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Шингэний балансыг үнэлэх хуудсыг сонгомолоор авч тухайн
                  эмчлүүлэгчид хэрэглэнэ
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Саарал хүснэгт
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Хэвийн үзүүлэлтийг тодруулав.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CM_1_11;
