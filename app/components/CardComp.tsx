import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
  Box,
  Grid,
} from "@mui/material";
import type { FC } from "react";
import type { IWeather } from "~/model/interface";

type INotelistProps = {
  cityData: IWeather[] | undefined;
  setCityData: React.Dispatch<React.SetStateAction<IWeather[] | undefined>>;
};

const MediaCard: FC<INotelistProps> = ({ cityData, setCityData }) => {
  const handleDelete = (name: string) => {
    setCityData(cityData?.filter((data) => data?.data.location?.name !== name));
  };
  return (
    <>
      {cityData !== undefined &&
        cityData?.slice(0, 5).map((data: IWeather, index: number) => {
          return (
            <Grid key={index} item xs={12} sm={4} md={3}>
              <Box>
                <Card
                  sx={{
                    maxWidth: 345,
                    bgcolor: "#2d3f1b",
                    color: "white",
                    borderRadius: "0%",
                    padding: "1em",
                  }}
                >
                  <Box>
                    <CardMedia
                      sx={{
                        borderRadius: "100%",
                        maxWidth: "50px",
                        minHeight: "50px",
                        objectFit: "cover",
                      }}
                      image={data?.data.current?.condition?.icon}
                      title={data?.data.location?.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        {data?.data.location?.name}
                      </Typography>
                      <Typography gutterBottom variant="h6" color="white">
                        {data?.data.current?.condition?.text}
                      </Typography>
                      <Typography gutterBottom variant="body2" color="white">
                        Temperature: {data?.data.current?.temp_c} &#8451;
                      </Typography>
                      <Typography gutterBottom variant="body2" color="white">
                        Humidity: {data?.data.current?.humidity}%
                      </Typography>
                      <Typography variant="body2" color="white">
                        Precipitation: {data?.data.current?.precip_mm}%
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        onClick={() => handleDelete(data?.data.location?.name)}
                        variant="outlined"
                        size="large"
                        sx={{
                          border: "1px solid white",
                          color: "white",
                          borderRadius: "0%",
                          width: "40%",
                        }}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Box>
            </Grid>
          );
        })}
    </>
  );
};
export default MediaCard;
