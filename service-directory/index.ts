import { FmBucket } from "./resources/bucket";
import { FmFrontEnd } from "./services/frontEnd";
import { FmBackEnd } from "./services/backEnd";

// const buckets: string[] = ["example-1", "example-2", "example-3"];

// for (const bucket of buckets) {
//   new FmBucket({
//     Name: bucket,
//     Product: "devops-course",
//   });
// }

function main() {
  new FmFrontEnd({
    Name: "example-kal",
    Product: "devops-course-kal",
  });

  new FmBackEnd({
    Name: "example-kal",
    Product: "devops-course-kal",
  });
}

main();
