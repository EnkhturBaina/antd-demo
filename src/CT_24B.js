import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-24Б
function CT_24B() {
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-24Б
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
              <td rowSpan={2} style={textStyle.centerText}>
                №
              </td>
              <td colSpan={12} style={textStyle.centerText}>
                Тусламж
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Дуудлага
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                дундаж/км/
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Дуудлаганд зарцуулагдсан дундаж хугацаа
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Бүх явсан км
              </td>
              <td rowSpan={2} style={textStyle.verticalText}>
                Давтан дуудлага
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Нэн яаралтай
              </td>
              <td colSpan={4} style={textStyle.centerText}>
                Хүлээгдэл
              </td>
              <td colSpan={4} style={textStyle.centerText}>
                Дуудлага аваад айлд очсон
              </td>
              <td colSpan={2} style={textStyle.centerText}>
                Хүйс
              </td>
              <td colSpan={8} style={textStyle.centerText}>
                Насны ангилал
              </td>
            </tr>
            <tr>
              <td style={textStyle.verticalText}>ЗСА сэхээн амьдруулалт</td>
              <td style={textStyle.verticalText}>Шархны а/цэгцэлгээ</td>
              <td style={textStyle.verticalText}>Боолт</td>
              <td style={textStyle.verticalText}>Чиг</td>
              <td style={textStyle.verticalText}>Хүчилтөрөгч өгсөн</td>
              <td style={textStyle.verticalText}>Шингэн залгасан</td>
              <td style={textStyle.verticalText}>Судас тариа</td>
              <td style={textStyle.verticalText}>Бусад тариа</td>
              <td style={textStyle.verticalText}>Зүрхний цахилгаан бичлэг</td>
              <td style={textStyle.verticalText}>Цээж х/хөндийн хатгалт</td>
              <td style={textStyle.verticalText}>Эмнэлэгт хүргэсэн</td>
              <td style={textStyle.verticalText}>Бусад хэлбэрийн</td>
              <td style={textStyle.verticalText}>Холбоогоор авсан</td>
              <td style={textStyle.verticalText}>70км-аас дээш</td>
              <td style={textStyle.verticalText}>Бүгд</td>
              <td style={textStyle.verticalText}>Үүнээс 20мин-д очсон</td>
              <td style={textStyle.verticalText}>0-10 минутын дотор</td>
              <td style={textStyle.verticalText}>11-20 минутын дотор</td>
              <td style={textStyle.verticalText}>21-30 минутын дотор</td>
              <td style={textStyle.verticalText}>31 минутаас дээш</td>
              <td style={textStyle.verticalText}>0-20 минутын дотор</td>
              <td style={textStyle.verticalText}>21-40 минутын дотор</td>
              <td style={textStyle.verticalText}>41-60 минутын дотор</td>
              <td style={textStyle.verticalText}>1 цагаас дээш</td>
              <td style={textStyle.verticalText}>Эрэгтэй</td>
              <td style={textStyle.verticalText}>Эмэгтэй</td>
              <td style={textStyle.verticalText}>0-14 нас</td>
              <td style={textStyle.verticalText}>15-19 нас</td>
              <td style={textStyle.verticalText}>20-29 нас</td>
              <td style={textStyle.verticalText}>30-39 нас</td>
              <td style={textStyle.verticalText}>40-49 нас</td>
              <td style={textStyle.verticalText}>50-59 нас</td>
              <td style={textStyle.verticalText}>60-69 нас</td>
              <td style={textStyle.verticalText}>69 -өөс дээш</td>
            </tr>
            {[...Array(24)].map((x, j) => (
              <tr key={j}>
                {[...Array(39)].map((x, i) => (
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

export default CT_24B;
