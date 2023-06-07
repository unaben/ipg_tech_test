import { Box } from "@mui/material";
import type { ActionFunction, V2_MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import LoginComp from "~/components/LoginComp";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  // Add validation
  const isDataInvalid = Boolean(
    userData.username !== "ipgautomotive" && userData.password !== "carmaker"
  );

  if (isDataInvalid) {
    return { message: "Invalid Username & Password" };
  }

  return redirect(`/weather`);
};

export default function Index() {
  return (
    <Box>
      <LoginComp />
    </Box>
  );
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  if (error instanceof Error) {
    return (
      <div className="error">
        <p>{error?.message}</p>
        <br />
        <p>
          Back to <Link to="/">safety</Link>!
        </p>
      </div>
    );
  }
  return <div>Oh no, something went wrong!</div>;
};
