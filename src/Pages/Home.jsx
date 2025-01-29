import { Experience } from "../Components/Experience";
import imgoods from "../assets/import.gif";
import Fbank from "../assets/forex.gif";
import customs from "../assets/customs.gif";
import gst from "../assets/gst.gif";
import sourcing from "../assets/sourcing.gif";
import loan from "../assets/loan.gif";
import guide from "../assets/project.gif";
import accounts from "../assets/account.gif";
import { useForm } from "react-hook-form";
import { Facebook, Instagram } from "@mui/icons-material";
import scrap from "../assets/scrap.gif";
import { AnimatedGradientText } from "../Components/AnimatedText";
import { cn } from "../Lib/utils";
import whatsapp from "../assets/whatsapp.png";
import { Navbar } from "../Components/Navbar";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();

  const services = [
    {
      title: "Import & Export",
      description: "We provide import services for all types of goods.",
      img: imgoods,
    },
    {
      title: "Forex Banking",
      description: "We offer comprehensive Forex Banking services",
      img: Fbank,
    },
    {
      title: "Customs",
      description:
        "We provide customs clearance services for all types of goods.",
      img: customs,
    },
    {
      title: "GST",
      description: "We provide GST services .",
      img: gst,
    },
    {
      title: "Sourcing",
      description: "We provide sourcing services for all types of goods.",
      img: sourcing,
    },
    {
      title: "Banking Loan",
      description: "We provide banking loan services.",
      img: loan,
    },
    {
      title: "Project Related Guidance",
      description: "We provide project related guidance services.",
      img: guide,
    },
    {
      title: "Accounting",
      description: "We provide accounting services.",
      img: accounts,
    },
    {
      title: "Scrap Related",
      description: "We provide scrap related services.",
      img: scrap,
    },
  ];
  const handleForm = async (data) => {
    const res = await fetch(
      "https://formie.io/form/c5d55bd1-9e03-44df-b915-e86d8bc25c4a",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 201) {
      alert("Form Submitted Successfully");
      reset();
    }
  };
  return (
    <div className="w-full h-full">
      <Navbar/>
      <a
        href="https://wa.me/919999999999"
        className="fixed right-0 bottom-3 -mt-10 z-[110] w-16 h-16 cursor-pointer"
      >
        <img
          src={whatsapp}
          alt="whatsapp"
          className="fixed right-0 bottom-3 -mt-10 z-[110] w-16 h-16 cursor-pointer"
        />
      </a>

      <section className="bg-black text-center text-white md:text-white px-4 pt-20 pb-40">
        <div className="z-10 flex m-auto w-full justify-center items-start">
          <AnimatedGradientText>
            <h1
              className={cn(
                `inline md:text-6xl  text-sm text-center m-auto font-extrabold gradient-animation bg-gradient-to-r from-[#212121] via-[#424045] to-[#ffffff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              PRISTINE EXIM
            </h1>
          </AnimatedGradientText>
        </div>
        <p className="text-white md:text-white max-w-2xl mx-auto mb-8 text-lg">
          Always Deliver More Than Expected
        </p>
      </section>
      <Experience />
      <section
        id="services"
        className="bg-white relative px-10 py-5 mb-5  z-50"
      >
        <div className="flex flex-col">
          <div className="title w-fit">
            <h1 className="text-black w-fit text-3xl border-b border-gray-300 font-bold tracking-wider">
              Our Services
            </h1>
          </div>
          <div id="services" className="services mt-10">
            <div className="cards flex w-full flex-row flex-wrap gap-5 items-center justify-around">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="card w-full md:w-[40%] border hover:bg-gray-400 hover:text-white duration-300 hover:border-b hover:shadow-2xl hover:border-cyan-300 rounded-3xl px-2 py-3 flex items-center   gap-5"
                >
                  <div className="logo rounded-2xl  w-24 h-24">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="object-cover  w-full h-full rounded-2xl"
                    />
                  </div>
                  <div className="content flex flex-col items-start">
                    <h1 className="text-2xl font-bold">{service.title}</h1>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div id="contact" className="section bg-black relative p-10 text-white">
        <div className="title w-fit">
          <h1 className="text-3xl md:text-5xl text-center md:text-start font-bold tracking-wider">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg  text-center">
            We are always ready to help you.
          </p>
        </div>
        <div className="form mt-4">
          <form onSubmit={handleSubmit(handleForm)}>
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="w-full  py-3 px-6 my-2 border border-gray-300 rounded-2xl"
            />
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full px-6 py-3 my-2 border border-gray-300 rounded-2xl"
            />
            <textarea
              name="query"
              cols="10"
              rows="5"
              placeholder="Query"
              {...register("query")}
              className="w-full p-6 my-2 border border-gray-300 rounded-2xl"
            ></textarea>
            <button className="bg-white text-black px-4 py-3 rounded-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
      <section className=" bg-black text-white">
        <div className="flex flex-col md:gap-10 text-white py-10 px-2 md:p-10">
          <div className="logo h-fit flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="title">
              <h1 className="md:text-5xl text-center md:text-start text-3xl font-bold tracking-wider">
                Pristine Exim
              </h1>
              <p className="text-center text-sm md:text-lg">
                Always Deliver More Than Expected{" "}
              </p>
            </div>
            <div className="legals md:flex ">
              <ul className="flex gap-3 md:gap-5">
                <li>
                  <a href="/terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/refund">Refund Policy</a>
                </li>
              </ul>
            </div>
            <div className="social">
              <ul className="socials text-3xl  flex justify-center md:justify-start gap-5">
                <li>
                  <Instagram />
                </li>
                <li>
                  <Facebook />
                </li>
              </ul>
            </div>
          </div>
          <footer className="text-center mt-5">
            <p className="text-gray-500">
              © 2025 Pristine Exim. All Rights Reserved.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
