import { Field, FieldDescription } from "@/src/components/ui/field";

export default function AuthTerms() {
  return (
    <Field>
      <FieldDescription className="text-center text-[13px]">
        Bằng việc đăng nhập, bạn đồng ý với{" "}
        <a href="#" className="text-primary no-underline!">
          Điều khoản dịch vụ{" "}
        </a>{" "}
        và{" "}
        <a href="#" className="text-primary no-underline!">
          Chính sách bảo mật
        </a>{" "}
        của HShop
      </FieldDescription>
    </Field>
  );
}
