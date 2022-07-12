import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const InfoCard = ({ text, level }) => {
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
          Вы прошли игру!
        </Typography>
      </CardContent>
    </Card>
  );
};
export default InfoCard;
