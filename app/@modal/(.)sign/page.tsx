import AuthForm from "@/components/share/authForm";

export default function LoginModal() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-sky-500/50 flex flex-col justify-center items-center">
        <AuthForm />
      </div>
    </>
  );
}
