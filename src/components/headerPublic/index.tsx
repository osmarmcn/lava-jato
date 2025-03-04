import { ThemeToggle } from "../darkLigth"
import "./HeaderPublic.css"


export const HeaderPublic = () => {
    return (
        <header className="container-header">
            <div className="box">
                <div className="box-title">
                    <h1>Lava Jato</h1>
                </div>
                <div className="box-theme">
                    <ThemeToggle/>
                </div>
            </div>
            
        </header>
    )
}