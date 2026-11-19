import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { ReactNode } from "react";
type AuthCardProps = {
  title: string;
  children: ReactNode;
};
export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
