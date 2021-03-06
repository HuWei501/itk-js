title: Image
---

An `itk/Image` is the N-dimensional image data structure for *itk.js*. It is a
JavaScript object with the following properties:

**imageType**: The [ImageType](./ImageType.html) for this image.
**name**: An optional name, a `String`, that describes this image.
**origin**: An Array with length *dimension* that describes the location of the center of the lower left pixel in physical units.
**spacing**: An Array with length *dimension* that describes the spacing between pixel in physical units.
**direction**: A *dimension* by *dimension* Matrix that describes the orientation of the image at its *origin*.  The orientation of each axis are the orthonormal columns.
**size**: An Array with length *dimension* that contains the number of pixels along dimension.
**data**: A [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) containing the pixel buffer data.

For more information, see [the description](https://itk.org/ITKSoftwareGuide/html/Book1/ITKSoftwareGuide-Book1ch4.html#x38-490004.1) of an `itk::Image` in the ITK Software Guide.
