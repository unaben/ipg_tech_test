import { Box, Grid } from "@mui/material";
import SearchInput from "~/components/SearchInput";
import CardComp from "~/components/CardComp";
import { Link, useActionData } from "@remix-run/react";
import { useEffect } from "react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getWeatherData } from "~/utils/getWeatherData";
import { useLocalStorage } from "~/hooks/useLocalStorage";

type ActionData = {
  data: Awaited<ReturnType<typeof getWeatherData>>;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    city: formData.get("city"),
  };
  const { city } = { ...data };
  const cityInfo = await getWeatherData(city as string);

  if (!cityInfo || cityInfo.error) {
    throw new Response("Unable to fetch data", { status: 404 });
  }

  return json<ActionData>({ data: cityInfo });
};

const WeatherPage = () => {
  const cityInfo = useActionData() as ActionData;
  const [cityData, setCityData] = useLocalStorage<ActionData[] | undefined>(
    "city",
    []
  );

  useEffect(() => {
    if (cityInfo) setCityData([cityInfo, ...cityData!]);
  }, [cityInfo]);

  return (
    <Box sx={{ padding: ".5em 2em" }}>
      <SearchInput />
      <Grid mt={2} container spacing={1}>
        <CardComp cityData={cityData} setCityData={setCityData} />
      </Grid>
    </Box>
  );
};
export default WeatherPage;

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="error">
      {error ? (
        <p>Oops! something went wrong!</p>
      ) : (
        <p>No matching location found</p>
      )}
      <br />
      <p>
        Back to <Link to="/weather">safety</Link>!
      </p>
    </div>
  );
};
