import "./App.css";
import InfoCard from "./components/ui/InfoCard";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import FinishCard from "./components/ui/FinishCard";
import Footer from "./components/ui/Footer";
import {
  getRandomSkandal,
  skandals,
  getLevelFromSessionStorage,
  alertSuccess,
  getSkandalsFromSessionStorage,
} from "./utils";

function App() {
  const [input, setInput] = useState("");
  const [level, setLevel] = useState(1);
  const [skandal, setSkandal] = useState({
    artist: "Кайрат Нуртас",
    level: 1,
    description:
      "Популярный казахстанский певец ... подмочил свою репутацию еще в 2011 года. На видео, появившемся в интернете видно, как ... размахивает ножом и выражается нецензурно. Инцидент произошел в разгар популярности певца. Его даже успели обсудить на одном из казахстанских ток-шоу, где один из гостей пытался оправдать певца тем, что в молодости всем свойственно выпивать и все могут ошибаться.",
  });
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
    if (!getLevelFromSessionStorage()) {
      showDescription();
      window.sessionStorage.setItem("level", "1");
      window.sessionStorage.setItem("skandals", JSON.stringify(skandals));
    } else if (getLevelFromSessionStorage() < 11) {
      setLevel(getLevelFromSessionStorage());
      let arr = JSON.parse(getSkandalsFromSessionStorage());
      setSkandal(
        getRandomSkandal(
          arr.filter((ska: { level: number }) => ska.level === level)
        )
      );
    } else {
      setLevel(getLevelFromSessionStorage());
    }
  }, [level]);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleCheck = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (input === skandal.artist) {
      let l = getLevelFromSessionStorage();
      sessionStorage.setItem("level", (l + 1).toString());
      alertSuccess();
    } else {
      Swal.fire({
        icon: "error",
        title: "Упсс... ваш ответ не верный",
        confirmButtonText: "Попробовать еще раз",
      }).then();
    }
  };

  return (
    <div className="App">
      {level < 11 ? (
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
      ) : (
        <FinishCard />
      )}
      <Footer />
    </div>
  );
}
export default App;
