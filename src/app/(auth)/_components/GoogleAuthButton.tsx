import { Button } from "@/src/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Field } from "@/src/components/ui/field";

export function GoogleAuthButton() {
  return (
    <Field>
      <Button variant="outline" type="button" className="w-full cursor-pointer">
        <FcGoogle />
        Đăng nhập bằng Google
      </Button>
    </Field>
  );
}
