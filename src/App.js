import "./App.css";
import InfoCard from "./components/InfoCard";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();
function App() {
  const [input, setInput] = useState("");
  const [skandal, setSkandal] = useState("");
  const skandals = [
    {
      artist: "Кайрат Нуртас",
      level: 1,
      description:
        "Популярный казахстанский певец ... подмочил свою репутацию еще в 2011 года. На видео, появившемся в интернете видно, как ... размахивает ножом и выражается нецензурно. Инцидент произошел в разгар популярности певца. Его даже успели обсудить на одном из казахстанских ток-шоу, где один из гостей пытался оправдать певца тем, что в молодости всем свойственно выпивать и все могут ошибаться.",
    },
    {
      artist: "Кайрат Нуртас",
      level: 2,
      description: `В августе 2020 года известный казахстанский артист ... оказался замешан в эпизоде с дракой с охранником отеля в Актау. Мать артиста подтвердила, что потасовка действительно была, но ... только "защищал себя" и в конфликте не виноват.`,
    },
    {
      artist: "Бейбит Корган",
      level: 3,
      description:
        "В 2010 году КМС по рукопашному бою Айдар Даутов заявил, что его жестоко избил известный казахстанский певец ... . Как утверждает спортсмен, конфликт начался с перепалки в самолете Атырау-Алматы, а после приземления спор перерос в массовую драку. Айдар сказал, что на него налетела толпа незнакомых парней, среди которых и был знаменитый певец. Вскоре все казахстанские телеканалы показали сюжет с избитым спортсменом и «скандальной» звездой. Однако сам же ... поведал другую историю: все было в точности наоборот и своими действиями Даутров пытался подпортить репутацию артиста. Поклонники ... казалось бы забыли эту историю, однако неожиданно разразился новый скандал с участием их кумира.",
    },
    {
      artist: "Ернар Айдар",
      level: 4,
      description:
        "Певец ... в первой половине 2021 года оказался причастен к безвыигрышной лотерее. Певец рассказал, что его использовали, втеревшись в доверие, — по его словам, за рекламу лотереи ему пообещали шесть миллионов тенге, даже не торгуясь. Организаторы в итоге заработали почти 200 млн тенге, тогда как обманутый ... и его сотоварищи оказались, можно сказать, один на один с разъяренными участниками лотереи.",
    },
    {
      artist: "Дильназ Ахмадиева",
      level: 6,
      description:
        "В 2015 году ... в своем Instagram сначала назвала своих фанатов тупыми, а затем извинилась, сообщив, что оскорбила лишь тех, кто писал язвительные комментарии в ее адрес. Не все поклонники творчества певицы, однако, остались довольны извинениями. Критиковать певицу начали из-за фото в чересчур откровенном наряде.",
    },
    {
      artist: "Жолбарыс Сейфуллин",
      level: 5,
      description: `Летом 2020 года музыкант ... тоже оказался в центре внимания пользователей соцсетей — он нецензурно выражался в магазине и требовал продавца "выйти и разобраться". Продавец резонно замечает, что находится на работе, чем еще больше распаляет музыканта.`,
    },
    {
      artist: "Сиви Махмуди",
      level: 7,
      description:
        "Не так давно казахстанская певица ... стала ресторатором. На день рождения имениннице родители преподнесли в качестве подарка лаундж бар «Sivi», который находится в здании жилого дома. Как рассказывает дива в одном из интервью, подарок ей подготовили за 15 дней. Пытаясь успеть к назначенной дате, дарители совсем забыли соблюсти санитарные предписания и прочие нормы. Жертвами халатного отношения стали соседи. Громкая музыка, посторонние запахи и амбре от кальяна стали частыми обитателями в их квартирах. Соседи не безуспешно пытаются бороться с произволом вот уже третий месяц, направляя жалобы в разные инстанции. Те в свою очередь регистрируют нарушения и выписывают штрафы.",
    },
    {
      artist: "Жадыра Кутпанова",
      level: 10,
      description:
        "В 2014 году бывшая участница группы «Дауыс International» ... была задержана за езду в состоянии алкогольного опьянения. Девушка вела себя вызывающе и наотрез отказалась предъявить документы на авто гаишникам. На допросе в здания УВД Бостандыкского района ... порвала брюки полицейскому и укусила за руку его коллегу. Позже артистка была лишена водительских прав сроком на три года.",
    },
    {
      artist: "Кайрат Тунтеков",
      level: 9,
      description:
        "В 2013 году певец ... , разъезжая по городу на своей «сороковке» без прав и документов, столкнулся с автомашиной Toyota Land Cruiser 100. В результате аварии пострадала женщина. Суд приговорил певца к 40 суткам лишения свободы и обязал выплатить денежную компенсацию. Однако пострадавшая своих миллионов так и не получила, виновник был объявлен в розыск за неисполнение решения суда. Служители Фемиды наложили арест на банковские счета ... и запретили ему покидать бескрайние просторы родины до тех пор, пока он не выплатит долг в размере $55 тыс. долларов.",
    },
    {
      artist: "Молдир Ауелбекова",
      level: 8,
      description: `В ноябре 2015 года бурно обсуждался конфликт между скандально известной Есентаевой и экс-участницей группы КешYou ... . Причиной скандала стало высказывание ... в одном из интервью: "Я знаю, что у меня есть враги, которые мне мешают". После этих слов Баян опубликовала пост в своем Instagram-аккаунте, где требовала разъяснений у ... .`,
    },
  ];
  const getRandomSkandal = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };
  const alertSuccess = () => {
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Правильно!",
      showConfirmButton: false,
      timer: 1500,
    });
    jsConfetti.addConfetti({
      confettiRadius: 6,
      confettiNumber: 600,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const [level, setLevel] = useState("0");
  const getLevel = () => {
    return window.sessionStorage.getItem("level");
  };
  const showDescription = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "info",
      title: `"Кто в скандале?" - выводиться один из скандалов, вы должны угадать кто участвовал в этом скандале.`,
    });
  };
  useEffect(() => {
    if (!window.sessionStorage.getItem("level")) {
      window.sessionStorage.setItem("level", "1");
      window.sessionStorage.setItem("skandals", JSON.stringify(skandals));
      showDescription();
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else if (parseInt(window.sessionStorage.getItem("level")) < 11) {
      setLevel(getLevel());
      let arr = JSON.parse(window.sessionStorage.getItem("skandals"));
      setSkandal(
        getRandomSkandal(arr.filter((ska) => ska.level == parseInt(level)))
      );
    } else {
    }
  }, [level]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleCheck = (e) => {
    e.preventDefault();
    if (input === skandal.artist) {
      let l = sessionStorage.getItem("level");
      sessionStorage.setItem("level", parseInt(l) + 1);
      alertSuccess();
    } else {
      Swal.fire({
        icon: "error",
        title: "Упсс... ваш ответ не верный",
        confirmButtonText: "Попробовать еще раз",
      });
    }
  };

  return (
    <div className="App">
      {parseInt(level) < 11 ? (
        <>
          <InfoCard text={skandal.description} level={level}></InfoCard>
          <div className="input-check">
            <TextField
              id="filled-basic"
              label="Например: Ернар Айдар"
              variant="filled"
              sx={{
                "& > :not(style)": {
                  mt: 3,
                  mb: 3,
                  width: "15em",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: 18,
                },
              }}
              onChange={(e) => handleChange(e)}
            />
            <Button
              variant="contained"
              onClick={(e) => handleCheck(e)}
              sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
            >
              Проверить
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
}
export default App;
