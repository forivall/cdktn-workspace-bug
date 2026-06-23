import * as archive from "@cdktn/provider-archive";
import { App, TerraformStack } from "cdktn";
import type { Construct } from "constructs";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new archive.provider.ArchiveProvider(this, "dummy");
    new archive.file.File(this, "mock", {
      outputPath: "mock.tgz",
      type: "tar.gz",
    });
  }
}

const app = new App();
new MyStack(app, "cdktn-init");
app.synth();
