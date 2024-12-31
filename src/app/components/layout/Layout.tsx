import Footer from "./Footer";
import Header from "./Header";

export default function CommonLayout({children}: {children: React.ReactNode}) {

    const isAuth:boolean = false

    return (
        <div className="min-h-screen bg-white">
            {!isAuth && <Header/>}
            {children}
            {!isAuth && <Footer/>}
        </div>
    )
}