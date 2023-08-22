import React from 'react';
import s from '../styles/Move.module.css'
import Move from '../components/Move';
import logo from '../assets/img/logo.jpg'
const MoveProps = (props) => {
    console.log(props);
    return (
        <div>
            {/* <div className={s.logo}>
            <h1 className={s.text}></h1>
            <img src={logo} alt="" />
            </div> */}
            <p></p>
            {/* <h2>Сюжет</h2> */}
            <p>

            </p>
            {/* <table>
                <tr>
                    <th>Шон Фаріс</th>
                    <td>Джейк Тайлер, проблемний підліток і головний герой</td>
                </tr>
                <tr>
                    <th>Ембер Герд</th>
                    <td>Баха Міллер, обраниця Джейка</td>
                </tr>
                <tr>
                    <th>Кем Жіганде</th>
                    <td>Райан Маккарті, суперник Джейка й антагоніст фільму</td>
                </tr>
                <tr>
                    <th>Джимон Гонсу</th>
                    <td>Жан Рокуа, наставник Макса, який погоджується навчити Джейка</td>
                </tr>
                <tr>
                    <th>Еван Пітерс</th>
                    <td>Макс Куперман, однокласник, який вводить Джейк у світ бойових мистецтв і дружить з ним</td>
                </tr>
                <tr>
                    <th>Вайатт Сміт</th>
                    <td>Чарлі Тайлер, молодший брат Джейка</td>
                </tr>
                <tr>
                    <th>Леслі Гоуп</th>
                    <td>Марго Тайлер, мати Джейка</td>
                </tr>
                <tr>
                    <th>Дрю Сідора</th>
                    <td>Тіффані Вест, подруга Баха, хто любить Макса</td>
                </tr>
                <tr>
                    <th>Зак Майерс</th>
                    <td>Джефф</td>
                </tr>
                <tr>
                    <th>Ніл Браун-молодший </th>
                    <td>Аарон, найкращий друг Райана</td>
                </tr>
            </table> */}
            {/* <h2>Виробництво</h2>
            <p>Зйомки проходили на півдні Орландо, Сенфорді, та Клермоні, штат Флорида. Всі шкільні сцени знімалися в Cypress Creek High School крім футбольної сцени на початку фільму, яка знята в East Ridge High School.

            Сценарист Кріс Хауті нібито надихнув його син, показуючи йому відеозаписи шкільної бійки на YouTube, що сталася в його школі.</p>

            <h2>Музика</h2>
            <ol>
                <li>My Chemical Romance — «Teenagers»</li>
                <li>Soulja Boy / Travis Barker — «Crank Dat Soulja Boy (Travis Barker Remix)»</li>
                <li>Lil Wayne & Chamillionaire— «Rock Star»</li>
                <li>Toby McKeehan & T-Bone — «The Slam»</li>
                <li>The Red Jumpsuit Apparatus — «False Pretense»</li>
                <li>12 Stones — «Anthem For The Underdog»</li>
                <li>The Bravery — «Above And Below»</li>
                <li>TV On The Radio — «Wolf Like Me»</li>
                <li>Rise Against — «Under The Knife»</li>
                <li>Flipsyde — «Someday»</li>
                <li>The Cribs — «Be Safe»</li>
                <li>Mellowdrone — «Orange Marmalade»</li>
                <li>Mutemath — «You Are Mine»</li>
                <li>Каньє Вест — «Stronger»</li>
                <li>The Bravery — «Time Won’t Let Me Go»</li>
                <li>Gym Class Heroes — «It’s OK, But Just This Once!»</li>
                <li>Tiësto — «Tales From The South»</li>
                <li>King Juju — «Outta Control»</li>
                <li>Papa Roach — «…To Be Loved»</li>
            </ol>
            <h2>Критика</h2>
            <p>Ніколи не здавайся дебютував в 2729 кінотеатрах на 3 місці з $8 603 195 в перший уїк-енд. Через 2 тижні в кінотеатрах він отримав $18 890 093, після одного місяця фільм заробив $37 676 991 по всьому світу.

            Фільм зустрінутий негативно критиками, маючи рейтинг 22% на Rotten Tomatoes.</p> */}
            <Move MoveProps={props.MoveProps}/>
        </div>
    );
}

export default MoveProps;
