import billMahoney from "../assets/photo1.png";
import sabaCabrera from "../assets/photo2.png";
import shaeLe from "../assets/photo3.png";
import skylahLu from "../assets/photo4.png";
import griffRichards from "../assets/photo5.png";
import stanJohn from "../assets/photo6.png";

const team = [
  {
    fullName: "Bill Mahoney",
    title: "Product owner",
    imageUrl: billMahoney,
  },
  {
    fullName: "Saba Cabrera",
    title: "Art director",
    imageUrl: sabaCabrera,
  },
  {
    fullName: "Shae Le",
    title: "Tech Lead",
    imageUrl: shaeLe,
  },
  {
    fullName: "Skylah Lu",
    title: "UX Designer",
    imageUrl: skylahLu,
  },
  {
    fullName: "Griff Richards",
    title: "Developer",
    imageUrl: griffRichards,
  },
  {
    fullName: "Stan John",
    title: "Developer",
    imageUrl: stanJohn,
  },
];

const Team = () => (
  <ul className="translate-y-col grid grid-cols-2 gap-x-7 gap-y-16 max-[320px]:grid-cols-1 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-32">
    {team.map((member, index) => (
      <li key={index} className="mx-auto">
        <div className="flex">
          <img
            src={member.imageUrl}
            alt={member.fullName}
            className="max-w-[8.67rem] md:max-w-[14.875rem]"
          />
          <span
            className="ml-[0.3925rem] font-pt-serif text-[0.625rem] uppercase leading-[0.8125rem] md:ml-2.5 md:text-xs md:leading-[0.8125rem]"
            style={{ writingMode: "vertical-rl" }}
          >
            {member.title}
          </span>
        </div>
        <span className="mt-[0.625rem] inline-block font-poppins text-sm font-semibold leading-[1.3125rem] md:text-lg md:leading-[1.6875rem]">
          {member.fullName}
        </span>
      </li>
    ))}
  </ul>
);

export default Team;
