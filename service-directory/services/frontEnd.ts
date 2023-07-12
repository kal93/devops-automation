import {
  ComponentResource,
  CustomResourceOptions,
  getStack,
} from "@pulumi/pulumi";
import { s3 } from "@pulumi/aws";
import { FmBucket } from "../resources/bucket";

type FmFrontEndArgs = {
  Name: string;
  Product: string;
};

export class FmFrontEnd extends ComponentResource {
  constructor(args: FmFrontEndArgs, opts?: CustomResourceOptions) {
    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:FmFrontEnd", resourceName, {}, opts);

    // const stack = getStack();

    const source = new FmBucket(
      {
        Name: args.Name,
        Product: args.Product,
        Public: true
      },
      {
        parent: this,
      }
    );

    // const replica = new FmBucket(
    //   {
    //     Name: `${args.Name}-replica`,
    //     Product: args.Product,
    //   },
    //   {
    //     parent: this,
    //   }
    // );
  }
}
