import {
  ComponentResource,
  CustomResourceOptions,
  getStack,
} from "@pulumi/pulumi";
import { ecr } from "@pulumi/aws";

type FmDockerRepoArgs = {
  Name: string;
  Product: string;
};

export class FmDockerRepo extends ComponentResource {
  constructor(args: FmDockerRepoArgs, opts?: CustomResourceOptions) {
    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:FmDockerRepo", resourceName, {}, opts);

    // don't use this stack name from here, use docker tags instead
    // otherwise we'll end with a repository for each environment for docker images
    const stack = getStack();

    const ecrName = `${resourceName}`;

    const ecrRepo = new ecr.Repository(
      args.Name,
      {
        name: ecrName,
        imageScanningConfiguration: {
          scanOnPush: false,
        },
        imageTagMutability: "MUTABLE",
      },
      {
        parent: this,
      }
    );
  }
}
