import { images } from "./mocks";
import { fakeApi } from "./helpers";

export const loadImagesApi = async () => await fakeApi(images);
export const deleteImagesApi = async (image) => await fakeApi(image);
