export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.06),_transparent_60%)] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {children}
    </div>
  );
}


