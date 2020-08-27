import {
  TitleBlock,
  TextBlock,
  TextColumnsBlock,
  ImageBlock
} from "./classes/blocks";

export const model = [
  new TitleBlock("Test Title", {
    styles: "",
    tag: "h1"
  }),
  new TextBlock(
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam suscipit fugit doloribus illum
  culpa facilis, animi odit necessitatibus nostrum rem reiciendis dolore distinctio placeat laudantium
  assumenda itaque tempora rerum.`,
    {
      styles: ""
    }
  ),
  new TextColumnsBlock(
    [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam suscipit fugit doloribus illum
    culpa facilis, animi odit necessitatibus nostrum rem reiciendis dolore distinctio placeat laudantium
    assumenda itaque tempora rerum.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam suscipit fugit doloribus illum
    culpa facilis, animi odit necessitatibus nostrum rem reiciendis dolore distinctio placeat laudantium
    assumenda itaque tempora rerum.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam suscipit fugit doloribus illum
    culpa facilis, animi odit necessitatibus nostrum rem reiciendis dolore distinctio placeat laudantium
    assumenda itaque tempora rerum.`
    ],
    {
      styles: ""
    }
  ),
  new ImageBlock(
    "https://avatars.mds.yandex.net/get-pdb/1381755/f66e1e95-425b-4e1e-b0ac-5b438127abe2/s375",
    {
      styles: "",
      alt: "image",
      imageStyles: "width: 200px; height: auto"
    }
  )
];
