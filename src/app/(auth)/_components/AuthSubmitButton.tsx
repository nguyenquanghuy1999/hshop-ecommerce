import { Button } from "@/src/components/ui/button";
import { Field } from "@/src/components/ui/field";

type AuthSubmitButtonProps = {
  children: React.ReactNode;
};

export function AuthSubmitButton({ children }: AuthSubmitButtonProps) {
  return (
    <Field>
      <Button type="submit" className="w-full cursor-pointer">
        {children}
      </Button>
    </Field>
  );
}
