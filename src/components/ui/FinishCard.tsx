import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const FinishCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 1000, marginTop: 5, marginLeft: 4, marginRight: 4 }}>
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            fontSize: 16,
            marginTop: 2,
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          Поздравляю! Вы прошли игру! Спасибо за прохождение!
        </Typography>
      </CardContent>
    </Card>
  );
};
export default FinishCard;
