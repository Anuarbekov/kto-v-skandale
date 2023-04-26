import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
interface InfoCardProps {
  text: string;
  level: number;
}
const InfoCard: React.FC<InfoCardProps> = ({ text, level }) => {
  return (
    <Card sx={{ maxWidth: 1000, marginTop: 3, marginLeft: 4, marginRight: 4 }}>
      <CardContent>
        <Divider
          sx={{
            marginTop: 1,
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Ваш уровень: {level}
        </Divider>
        <Typography
          variant="body2"
          sx={{
            fontSize: 16,
            marginTop: 2,
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default InfoCard;
