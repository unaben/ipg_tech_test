import { Box, Button, Input, Paper } from "@mui/material";
import { Form, useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";

const SearchInput = () => {
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" && navigation.formData.get("city") !== "";

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          padding: 1,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Form ref={formRef} method="post">
          <Input
            fullWidth
            // width: "60%",
            sx={{ marginRight: ".7rem" }}
            type="text"
            name="city"
            placeholder="Enter city to search...."
            // variant="outlined"
          />
          <Button
            type="submit"
            size="medium"
            sx={{
              color: "white",
              borderRadius: "0%",
              background: "black",
            }}
            variant="contained"
          >
            Search
          </Button>
        </Form>
      </Paper>
    </Box>
  );
};

export default SearchInput;
