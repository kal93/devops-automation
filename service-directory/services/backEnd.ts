import {
  ComponentResource,
  CustomResourceOptions,
  getStack,
} from "@pulumi/pulumi";
import { FmBucket } from "../resources/bucket";
import { FmDockerRepo } from "../resources/ecr";

type FmBackEndArgs = {
  Name: string;
  Product: string;
};

export class FmBackEnd extends ComponentResource {
  constructor(args: FmBackEndArgs, opts?: CustomResourceOptions) {
    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:FmBackEnd", resourceName, {}, opts);

    new FmDockerRepo({
      Name: args.Name,
      Product: args.Product,
    },
    
    {
        parent: this
    });
  }
}
