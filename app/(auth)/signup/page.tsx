"use client";
import { signUp } from "@/lib/auth-client";
export default function SignUpRoute() {
  async function handleSignUp(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signUp.email({
      email: email,
      password: password,
      name: name,
    });
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form action={handleSignUp}>
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
