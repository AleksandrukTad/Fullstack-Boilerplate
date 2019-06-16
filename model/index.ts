import avatars, { IAvatarsModel } from "./avatars";

export interface IStoreModel {
  avatars: IAvatarsModel;
}

const model: IStoreModel = {
  avatars
};

export default model;
