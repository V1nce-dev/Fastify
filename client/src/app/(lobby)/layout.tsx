import NavBar from "@/components/nav/nav";

interface LobbyLayoutProps {
    children: React.ReactNode;
}

export default function LobbyLayout({ children }: LobbyLayoutProps) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
}
