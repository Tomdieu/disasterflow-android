import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{animation:"slide_from_right"}}>
      <Stack.Screen
        name="login/index"
        options={{
          presentation: "modal",
          headerTitle: "Login",
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register/index"
        options={{
          presentation: "modal",
          title: "Register",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
