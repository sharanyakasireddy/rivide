import { Stack } from 'expo-router';  // Import the Stack component from expo-router

export default function App() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Start Page' }} />   {/* StartPage */}
      <Stack.Screen name="signin" options={{ title: 'Sign In' }} />    {/* SignIn */}
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />    {/* SignUp */}
      <Stack.Screen name="booking-ride" options={{ title: 'Booking Ride' }} />  {/* BookingRide */}
    </Stack>
  );
}
