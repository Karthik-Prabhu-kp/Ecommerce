import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Health Supplements",
    image: "https://img.freepik.com/free-vector/fitness-supplements-bottles-composition_1284-23337.jpg?w=900&t=st=1690111668~exp=1690112268~hmac=09a95310690a307f422590bf61cad252387bd4a2ccbdf2b39d3e4eed41b69d19",
    description:
      "literature in the form of prose, especially novels",
  },
  {
    _id: uuid(),
    categoryName: "Fitness Equipment",
    image: "https://img.freepik.com/free-photo/big-dumbbells-white_144627-24207.jpg?w=1380&t=st=1690122176~exp=1690122776~hmac=24101b4f2b61a1b03b93e055df66aa421333511df040c4ae5c88f122c81fa7fc",
    description:
      "Non-fiction is writing that gives information or ",
  },
  {
    _id: uuid(),
    categoryName: "Fitness Gear",
    image: "https://img.freepik.com/free-vector/modern-sport-sneakers-blue-color-with-white-shoelaces-realistic-single-image-white-background-isolated-illustration_1284-31208.jpg?w=826&t=st=1690117658~exp=1690118258~hmac=a47fac03ac86ac0f9dac3f0a566aa98c76779639e8f596313749c9a22d7ee2c8",
    description:
      "Meant to cause discomfort and fear for both ",
  },
];
