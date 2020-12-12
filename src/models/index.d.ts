import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class WebsiteModel {
  readonly id: string;
  readonly string?: string;
  readonly int?: number;
  constructor(init: ModelInit<WebsiteModel>);
  static copyOf(source: WebsiteModel, mutator: (draft: MutableModel<WebsiteModel>) => MutableModel<WebsiteModel> | void): WebsiteModel;
}