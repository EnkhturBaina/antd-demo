import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-24А
function СТ_24А() {
  const textStyle = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 11,
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-24А
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ТҮРГЭН ТУСЛАМЖИЙН ЭМЧИЙН АЖЛЫН ТООЦООНЫ ХУУДАС /Насанд хүрэгчдийн/
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
              <td colSpan={4} style={textStyle.centerText}>
                Бүх дуудлага
              </td>
              <td rowSpan={3} style={textStyle.verticalText}>
                Давтан дуудлага
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Төрөлт
              </td>
              <td colSpan={8} style={textStyle.centerText}>
                Осол гэмтэл
              </td>
              <td colSpan={23} style={textStyle.centerText}>
                Гэнэт өвчлөл
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
                төрөх
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Осол, гэмтэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гэнэтийн өвчлөл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бүгд
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Үүнээс гэртээ
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Үйлдвэрийн
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Зам тээврийн
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гудамжны
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Спортын
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Амиа хорлосон
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусдад хорлогдсон
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Архины хордлого
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Зүрхний бах
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Зүрхний шигдээс
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Тархины цус харвалт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Цусны даралт ихсэх
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Холецистит
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хоол шингээх эрхтний бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Мухар олгой
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гэдэсний түгжрэл
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Перитонит
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Ход/ гэдэсний хямрал
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хоолны хордлого
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Умайн цус алдалт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хамрын цус алдалт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бусад эрхтний цус алдалт
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Цочмог хатгаа
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Гуурсан хоолойн багтраа
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Амьсгалын замын цочмог халдвар
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Шээс бэлэг эрхтний бусад
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Халдварт өвчин
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Хорт хавдар
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Эпилепси
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Сэтгэцийн өвчин
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
            {[...Array(23)].map((x, j) => (
              <tr key={j}>
                {[...Array(46)].map((x, i) => (
                  <td
                    style={{
                      ...textStyle.centerText,
                      ...{ height: 10, width: 15, padding: 0 },
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

export default СТ_24А;
