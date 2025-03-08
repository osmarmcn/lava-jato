import { Acesso } from "../signInUp"
import "./geral.css"


export const Geral = () => {
    return (
        <div className="container-geral">
            <div className="box">
                <div className="box-1">
                <div className="content">
                    <h1>Bem-vindo ao [Nome do Lava Jato]!</h1>
                    <p>Seu carro merece o melhor cuidado. Aqui, oferecemos um serviço rápido, eficiente e de qualidade para deixar seu veículo brilhando como novo.</p>
                    <p>Transforme a aparência do seu carro e sinta a diferença! Agende agora e experimente o melhor lava-jato da cidade.</p>
                </div>

                    <div className="img">
                        {/* <img src="wash_car.svg" alt="" /> */}
                    </div>
                   
                </div>
                <div className="box-2">
                   <Acesso/>
                </div>
            </div>
        
        </div>
    )
}