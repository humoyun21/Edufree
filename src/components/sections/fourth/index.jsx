import "./style.scss";
import { Container } from "@containers";
import FourthPhoto from "@images/fourthphoto.png";

function index() {
    return <section id="gratis">
    <Container>
        <div className=" flex  justify-between items-center pb-[150px] gratis-wrapper">
           <div>
            <p className="font-normal text-[18px]  text-[#232536]">Tentang Kami</p>
             <h1 className="font-semibold py-4 text-[#232536] text-[38px] w-[624px]  ">
             EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
             </h1>
             <p className=" text-[16px] font-mediuml w-[620px] text-[#282938]">
             Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan
             </p>
           </div>
           <img src={FourthPhoto} alt="img" />
        </div>
    </Container>
    </section>
}

export default index;