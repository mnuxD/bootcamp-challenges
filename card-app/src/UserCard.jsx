import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./App.css";

const UserCard = ({ name, photo, rating, description }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            // src="https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg"
            src={photo}
            sx={{ width: 200, height: 200 }}
            style={{ border: "4px white solid", outline: "4px #833CA3 solid" }}
          />

          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginTop: "20px", color: "#833CA3" }}
          >
            {" "}
            {name}
          </Typography>
          <Rating
            style={{ color: "#833CA3" }}
            name="read-only"
            value={rating}
            readOnly
          />
          <Typography style={{ textAlign: "center" }}>
            {description}{" "}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="large">
            Learn More
          </Button>
          <Button variant="contained" size="large">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserCard;
