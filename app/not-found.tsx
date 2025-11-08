import { NotFound as NotFoundComponent } from "@/components/ui/not-found";

export default function NotFoundPage() {
  // Render the project's NotFound UI so Next uses it for missing routes
  return <NotFoundComponent />;
}
