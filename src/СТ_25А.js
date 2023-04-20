import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-25А
function СТ_25А() {
  const textStyle = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 11,
      maxHeight: 150,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 11,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      width: 25,
      height: 25,
    },
  };
  return (
    <div className="page-landscape">
      <div className="subpage-landscape">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span style={{ fontSize: 11 }}>
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
            </span>
            <span style={{ fontSize: 11 }}>
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <span style={{ fontWeight: "bold", fontSize: 11 }}>
              Эрүүл мэндийн бүртгэлийн маягт СТ-25А
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ТҮРГЭН ТУСЛАМЖИЙН ЭМЧИЙН АЖЛЫН ТООЦООНЫ ХУУДАС /Хүүхдийн/
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: 11 }}>Эмчийн нэр: </span>
          </div>
        </div>
        <Table bordered className="document">
          <tbody>
            <tr>
              <td rowSpan={3} style={textStyle.centerText}>
                №
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Сар, өдөр
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Ажилласан цаг
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Бүх дуудлага
              </td>
              <td colSpan={8} style={textStyle.centerText}>
                Осол гэмтлийн дуудлага
              </td>
              <td colSpan={5} style={textStyle.centerText}>
                Нярайн эмгэг
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Мэдрэлийн эмгэг
              </td>
              <td colSpan={8} style={textStyle.centerText}>
                Амьсгалын замын эмгэг
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Хоол боловсруулах замын эмгэг
              </td>
              <td colSpan={3} style={textStyle.centerText}>
                Мэс заслын эмгэг
              </td>
              <td rowSpan={3} style={textStyle.centerText}>
                Зүрх судасны эмгэг
              </td>
              <td rowSpan={3} style={textStyle.centerText}>
                Бөөр шээс дамжуулах замын эмгэг
              </td>
              <td rowSpan={3} style={textStyle.centerText}>
                Арьс харшил
              </td>
              <td rowSpan={3} style={textStyle.centerText}>
                Халдварт
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Бүх нас баралт
              </td>
              <td colSpan={4} style={textStyle.centerText}>
                Үүнээс
              </td>
            </tr>
            <tr>
              <td rowSpan={2} style={textStyle.verticalText}>
                Үр,дүнгүй
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Осол, гэмтэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гэнэтийн өвчлөл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Угарын хийн хордлого
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Эмийн бодисын хордлого
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хоолны хордлого
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Химийн бодисын хордлого
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Түлэгдэлт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Ахуйн осол
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Зам тээврийн
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гипербилирубеними
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Тархины хүчилтөрөгчийн дутмагшил
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Маш хүнд өвчин
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Нянгийн хэсэг газрын халдвар
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Таталтын хам шинж
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Амьсгалын замын цочмог халдвар
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гүйлсэн булчирхайн үрэвсэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хамрын үрэвсэл ба чихний үрэвсэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Төвөнхийн цочмог бачуурал
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Цагаан мөгөөрсөн хоолой ба гуурсан хоолойн үрэвсэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Цагаан мөгөөрсөн хоолой болон гуурсан хоолойн бөгрөглт үрэвсэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Уушигны хатгалгаа
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Суулгалт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Ходоод гэдэсний хямрал
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хэвлийн хурц үрэвсэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Мухар олгойн үрэвсэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Осол
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Гэнэтийн өвчлөл
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>Тусламж авсан</td>
              <td style={textStyle.verticalText}>
                Эмч очихоос өмнө нас барсан
              </td>
              <td style={textStyle.verticalText}>
                Эмч очихоос өмнө нас барсан
              </td>
              <td style={textStyle.verticalText}>Тусламж авсан</td>
            </tr>
            {[...Array(17)].map((x, j) => (
              <tr key={j}>
                {[...Array(44)].map((x, i) => (
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 15, width: 15, padding: 2 },
                    }}
                    key={i}
                  >
                    {i == 0 ? j + 1 : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default СТ_25А;
