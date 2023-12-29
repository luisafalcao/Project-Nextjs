import LoginForm from "@/app/lib/ui/login-form";

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center">
            <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4">
                <LoginForm />
            </div>
        </main>
    )
}