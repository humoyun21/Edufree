import "./stely.scss";
import { Container } from "@containers";
import { Buuton } from "@ui";
import BgIntro from "@images/bgintro.png";

function index() {
    return <section id="intro" className="bg-[#1C1E53] pt-[92px] pb-[132px] ">
        <Container>
            <div className=" justify-between flex items-center  intro-wrapper">
                <div className="intro-text">
                    <h1 className="text-[42px]  text-[#FFF] font-semibold">
                        Bangun dan Wujudkan Cita <br />Bersama EDUFREE
                    </h1>
                    <p className="text-[#FFF] pt-[32px] text-[16px]  font-normal  pb-[62px]">
                        EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online <br />
                        yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.
                    </p>
                    <div className="flex  gap-2 items-center ">
                        <Buuton titil="Lihat Kursus"/>
                        
                        <a href="#" className="flex items-center gap-2 font-normal  py-[15px] text-white text-[16px]  border-transparent px-5 border  hover:border-white duration-200 rounded-md">Lihat Alur Belajar <i className="bi bi-arrow-right"></i></a>
                    </div>

                </div>
                <img src={BgIntro} alt="img" />
            </div>

        </Container>
    </section>
}

export default index;  