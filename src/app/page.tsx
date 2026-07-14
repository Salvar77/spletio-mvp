import { redirect } from "next/navigation";

export default function Home() {
  // Ponieważ jesteśmy w aplikacji, która jest cała panelem, domyślna strona / przenosi nas prosto do /dashboard
  redirect("/dashboard");
}
