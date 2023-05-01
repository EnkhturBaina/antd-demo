import React from "react";
import { Table } from "react-bootstrap";

//маягт  СТ-3 Хавсралт 3

function CT3_3() {
  const styles = {
    leftText: {
      verticalAlign: "middle",
      fontSize: 11,
      padding: 0,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 11,
      padding: 0,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 11,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={styles.leftText}>
                Тасгийн нэр ..............................
              </div>
              <div style={styles.leftText}>
                Эхийн нэр ................................
              </div>
              <div style={styles.leftText}>
                Түүхийн дугаар .........................
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <span style={{ fontSize: 12 }}>
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <span style={{ fontSize: 12 }}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ -3 Хавсралт-3
              </span>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: 15,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ТӨРӨХИЙН ӨМНӨХ ЭХЭД ҮЗҮҮЛЭХ ТУСЛАМЖ ҮЙЛЧИЛГЭЭНИЙ ХУУДАС
            </span>
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                  colSpan={2}
                  rowSpan={2}
                >
                  №
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 250 } }}
                  rowSpan={2}
                >
                  Хяналтын үзүүлэлт
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 150 } }}
                  colSpan={10}
                >
                  Огноо, цаг
                </td>
              </tr>
              <tr>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={8} width={30}>
                  Амин үзүүлэлт
                </td>
                <td style={styles.centerText} width={30}>
                  1
                </td>
                <td style={styles.leftText}>Хүлээн авсан цаг , минут</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  2
                </td>
                <td style={styles.leftText}>Зовиур</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  3
                </td>
                <td style={styles.leftText}>Артерийн даралтыг 2 гарт</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  4
                </td>
                <td style={styles.leftText}>Биеийн халуун</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  5
                </td>
                <td style={styles.leftText}>Судасны лугшилтын тоо</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  6
                </td>
                <td style={styles.leftText}>Амьсгалын тоо</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  7
                </td>
                <td style={styles.leftText}>Хялгасан судасны эргэн дүүрэлт</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  8
                </td>
                <td style={styles.leftText}>Ургийн зүрхний цохилт</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={11} width={30}>
                  Эх барихуйн тусламж
                </td>
                <td style={styles.centerText} width={30}>
                  9
                </td>
                <td style={styles.leftText}>Ургийн хөдөлгөөн</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  10
                </td>
                <td style={styles.leftText}>Умайн базлалтын хяналт</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  11
                </td>
                <td style={styles.leftText}>Монитор бичлэг (CTG)</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  12
                </td>
                <td style={styles.leftText}>Мизопростолын хяналт</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  13
                </td>
                <td style={styles.leftText}>Ус гарсан цаг, өнгө</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  14
                </td>
                <td style={styles.leftText}>
                  Эхийн гадна бэлэг эрхтэн ариутгасан, үтрээнд угаалга хийлт
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  15
                </td>
                <td style={styles.leftText}>Хаван</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  16
                </td>
                <td style={styles.leftText}>Шээсний гарц</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  17
                </td>
                <td style={styles.leftText}>Хүчилтөрөгч</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  18
                </td>
                <td style={styles.leftText}></td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  19
                </td>
                <td style={styles.leftText}></td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={4} width={30}>
                  Зөвөлгөө
                </td>
                <td style={styles.centerText} width={30}>
                  20
                </td>
                <td style={styles.leftText}>Зөв амьсгалах арга</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  21
                </td>
                <td style={styles.leftText}>Эхийн зөв байрлал</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  22
                </td>
                <td style={styles.leftText}>Эрүүл ахуй</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  23
                </td>
                <td style={styles.leftText}>Жирэмсний аюултай шинж</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={5} width={30}>
                  Сувилгаа
                </td>
                <td style={styles.centerText} width={30}>
                  24
                </td>
                <td style={styles.leftText}>Хөл өндөрлөх</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  25
                </td>
                <td style={styles.leftText}>Хэвтрийн дэглэм</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  26
                </td>
                <td style={styles.leftText}>Клизм тавих</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  27
                </td>
                <td style={styles.leftText}>Хүйтэн жин</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  28
                </td>
                <td style={styles.leftText}></td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={5} width={30}>
                  Бусад
                </td>
                <td style={styles.centerText} width={30}>
                  29
                </td>
                <td style={styles.leftText}>Чанд авиан шинжилгээ</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  30
                </td>
                <td style={styles.leftText}>Шинжилгээ өгөлт</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  31
                </td>
                <td style={styles.leftText}>Эмч дуудсан цаг</td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}>
                  &nbsp;
                </td>
                <td style={styles.leftText}></td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.centerText} width={30}></td>
                <td style={styles.leftText}>
                  <div>&nbsp;</div>Хянасан эх баригч нарын үсэг<div>&nbsp;</div>
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={{ width: 100 }} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT3_3;
