import Header from "./Header";

export default function CommonLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="min-h-screen bg-white">
            <Header/>
            {children}
        </div>
    )
}