import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "Sky Auto Body & Collision Repair" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
