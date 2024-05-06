import Card from "../components/Card";
import img from "../assets/img/ben.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      img: img,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur sed in incidunt voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus dolor praesentium dicta nam est, voluptatem voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus",
      name: "Onyedika Benjamin",
    },
    {
      img: img,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur sed in incidunt voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus dolor praesentium dicta nam est, voluptatem voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus",
      name: "Onyedika Benjamin",
    },
    {
      img: img,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consectetur sed in incidunt voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus dolor praesentium dicta nam est, voluptatem voluptatibus a debitis recusandae! Impedit pariatur nulla, delectus",
      name: "Onyedika Benjamin",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-1">
      {testimonials.map(({ img, text, name }, i) => (
        <Card key={i} className="p-4 cursor-default">
          <div className="circle">
            <img src={img} alt={name} />
          </div>
          <p>{text}</p>
          <p className="text-right font-medium">{name}</p>
        </Card>
      ))}
    </section>
  );
};

export default Testimonials;
