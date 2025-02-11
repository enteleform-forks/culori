---
layout: layouts/default
title: Color Spaces
menu-order: 3
---

This is an overview of the color spaces built into culori, listing their channels and expected ranges.

## A note on terminology

A [color model](https://en.wikipedia.org/wiki/Color_model) is a way to describe colors along certain dimensions. RGB, for example, is a color model: color is expressed as a combination of red, green and blue.

A color model, along with a precise description of how colors in the model are to be interpreted, makes a color _space_. sRGB, Display P3 and ProPhoto RGB are all color spaces that employ the RGB model: they describe colors as combination of red, green, and blue primaries; however, they have different notions of how these red, green, and blue primary colors look.

In some color spaces, such as CIELAB or CIELCh, some channels don't have fixed ranges. For these channels, approximate ranges are obtained by converting all sRGB colors defined by `r, g, b ∈ ℕ ⋂ [0, 255]` to that specific color space. Whenever that's the case, the range is marked with the approximation symbol `≈`.

In addition to the channels listed below, all color spaces also take an optional `alpha` channel with the range `[0, 1]`.

## Built-in color spaces

### The RGB model

The [RGB color model](https://en.wikipedia.org/wiki/RGB_color_model) describes colors as mixtures of red, green, and blue primaries. Culori implements several RGB color spaces, all sharing these channels:

| Channel | Range    | Description   |
| ------- | -------- | ------------- |
| `r`     | `[0, 1]` | Red channel   |
| `g`     | `[0, 1]` | Green channel |
| `b`     | `[0, 1]` | Blue channel  |

#### `rgb`

The [sRGB color space](https://en.wikipedia.org/wiki/SRGB), which most people refer to when talking about RGB colors.

#### `lrgb`

The linear-light form of the sRGB color space.

#### `a98`

The A98 RGB color space, compatible with the [Adobe RGB (1998) color space](https://en.wikipedia.org/wiki/Adobe_RGB_color_space). It's called `a98-rgb` in the CSS Color Level 4 specification.

#### `p3`

The [Display P3 color space](https://en.wikipedia.org/wiki/DCI-P3#Display_P3). It's called `display-p3` in the CSS Color Level 4 specification.

#### `prophoto`

The [ProPhoto RGB color space](https://en.wikipedia.org/wiki/ProPhoto_RGB_color_space). It's called `prophoto-rgb` in the CSS Color Level 4 specification.

#### `rec2020`

The [Rec. 2020 color space](https://en.wikipedia.org/wiki/Rec._2020). It's called `display-p3` in the CSS Color Level 4 specification.

### The HSL/HSV/HSI family

[HSL, HSV, and HSI](https://en.wikipedia.org/wiki/HSL_and_HSV) are alternative representations of the RGB color model, created in an attempt to provide a more intuitive way to specify colors.

The _hue_ is identical across all color models in this family; however, the _saturaton_ is computed differently in each. The saturation in HSL is **not interchangeable** with the saturation from HSV, nor HSI. Achromatic colors (shades of gray) will have an `undefined` hue.

As color spaces, they relate to the [`sRGB` color space](#rgb).

#### `hsl`

The HSL color space.

| Channel | Range      | Description       |
| ------- | ---------- | ----------------- |
| `h`     | `[0, 360)` | Hue               |
| `s`     | `[0, 1]`   | Saturation in HSL |
| `l`     | `[0, 1]`   | Lightness         |

#### `hsv`

The HSV color space.

| Channel | Range      | Description       |
| ------- | ---------- | ----------------- |
| `h`     | `[0, 360)` | Hue               |
| `s`     | `[0, 1]`   | Saturation in HSV |
| `v`     | `[0, 1]`   | Value             |

#### `hsi`

The HSI color space.

| Channel | Range      | Description       |
| ------- | ---------- | ----------------- |
| `h`     | `[0, 360)` | Hue               |
| `s`     | `[0, 1]`   | Saturation in HSI |
| `i`     | `[0, 1]`   | Intensity         |

### HWB

[The HWB color model](https://en.wikipedia.org/wiki/HWB_color_model) was developed by Alvy Ray Smith, who also created the HSV color model. It's meant to be more intuitive for humans to use and faster to compute.

| Channel | Range      | Description |
| ------- | ---------- | ----------- |
| `h`     | `[0, 360)` | Hue         |
| `w`     | `[0, 1]`   | Whiteness   |
| `b`     | `[0, 1]`   | Blackness   |

> Smith, Alvy Ray (1996) — ["HWB — A More Intuitive Hue-Based Color Model"](http://alvyray.com/Papers/CG/HWB_JGTv208.pdf), Journal of Graphics, GPU and Game tools.

### CIELAB

The [CIELAB color space](https://en.wikipedia.org/wiki/CIELAB_color_space), also known as CIE 1976 L\*a\*b\*, in Cartesian (Lab) and cylindrical (LCh) forms.

#### `lab`

The CIELAB color space using the [D50 standard illuminant](https://en.wikipedia.org/wiki/Standard_illuminant) as the reference white, following the [CSS Color Module Level 4 specification](https://drafts.csswg.org/css-color/#lab-colors).

| Channel | Range                 | Description           |
| ------- | --------------------- | --------------------- |
| `l`     | `[0, 100]`            | Lightness             |
| `a`     | `[-79.167, 93.408]`≈  | Green–red component   |
| `b`     | `[-111.859, 93.246]`≈ | Blue–yellow component |

#### `lch`

The CIELCh color space using the D50 standard illuminant.

| Channel | Range           | Description |
| ------- | --------------- | ----------- |
| `l`     | `[0, 100]`      | Lightness   |
| `c`     | `[0, 131.008]`≈ | Chroma      |
| `h`     | `[0, 360)`      | Hue         |

#### `lab65`

CIELAB relative to the D65 standard illuminant.

| Channel | Range                | Description           |
| ------- | -------------------- | --------------------- |
| `l`     | `[0, 100]`           | Lightness             |
| `a`     | `[-86.183, 98.234]`≈ | Green–red component   |
| `b`     | `[-107.86, 94.478]`≈ | Blue–yellow component |

#### `lch65`

CIELCh relative to the D65 standard illuminant.

| Channel | Range           | Description |
| ------- | --------------- | ----------- |
| `l`     | `[0, 100]`      | Lightness   |
| `c`     | `[0, 133.807]`≈ | Chroma      |
| `h`     | `[0, 360)`      | Hue         |

### CIELUV

The [CIELUV color space](https://en.wikipedia.org/wiki/CIELUV) in Cartesian (Luv) and cylindrical (LCh) forms, using the D50 standard illuminant.

CIELuv has an effective Euclidean color difference function:

```js
let deltaE_uv = culori.colorDifferenceEuclidean('luv');
```

#### `luv`

| Channel | Range                 | Description           |
| ------- | --------------------- | --------------------- |
| `l`     | `[0, 100]`            | Lightness             |
| `u`     | `[-84.86, 174.87]`≈   | Green–red component   |
| `v`     | `[-125.744, 87.165]`≈ | Blue–yellow component |

#### `lchuv`

| Channel | Range           | Description |
| ------- | --------------- | ----------- |
| `l`     | `[0, 100]`      | Lightness   |
| `c`     | `[0, 176.609]`≈ | Chroma      |
| `h`     | `[0, 360)`      | Hue         |

### DIN99 Lab / LCh

The [DIN99][din99o] color space "squishes" the CIELAB D65 color space to obtain an [effective color difference](#culoriDifferenceDin99o) metric that can be expressed as a simple Euclidean distance. The latest iteration of the the standard, DIN99o, is available in Cartesian (`dlab`) and plar (`dlch`) form.

> ["Industrial Color Physics"](https://www.springer.com/us/book/9781441911964), Georg A. Klein, Springer (2010)

#### `dlab`

The DIN99o color space in Cartesian form.

| Channel | Range               | Description |
| ------- | ------------------- | ----------- |
| `l`     | `[0, 100]`          | Lightness   |
| `a`     | `[-40.09, 45.5]`≈   |
| `b`     | `[-40.47, 44.344]`≈ |

#### `dlch`

The DIN99o color space in cylindrical form.

| Channel | Range          | Description |
| ------- | -------------- | ----------- |
| `l`     | `[0, 100]`     | Lightness   |
| `c`     | `[0, 51.484]`≈ | Chroma      |
| `h`     | `[0, 360)`     | Hue         |

### Oklab

The [Oklab color space](https://bottosson.github.io/posts/oklab/), in Cartesian (Lab) and cylindrical (LCh) forms. It uses the D65 standard illuminant.

#### `oklab`

The Oklab color space in Cartesian form.

| Channel | Range              | Description           |
| ------- | ------------------ | --------------------- |
| `l`     | `[0, 0.999]`≈      | Lightness             |
| `a`     | `[-0.233, 0.276]`≈ | Green–red component   |
| `b`     | `[-0.311, 0.198]`≈ | Blue–yellow component |

#### `oklch`

The Oklab color space in cylindrical form.

| Channel | Range         | Description |
| ------- | ------------- | ----------- |
| `l`     | `[0, 0.999]`≈ | Lightness   |
| `c`     | `[0, 0.322]`≈ | Chroma      |
| `h`     | `[0, 360)`    | Hue         |

### J<sub>z</sub>a<sub>z</sub>b<sub>z</sub>

The J<sub>z</sub>a<sub>z</sub>b<sub>z</sub> color space, as defined by:

> Muhammad Safdar, Guihua Cui, Youn Jin Kim, and Ming Ronnier Luo, [_"Perceptually uniform color space for image signals including high dynamic range and wide gamut"_](https://doi.org/10.1364/OE.25.015131), Opt. Express 25, 15131-15151 (2017)

#### `jab`

The J<sub>z</sub>a<sub>z</sub>b<sub>z</sub> color space in Cartesian form.

| Channel | Range              | Description           |
| ------- | ------------------ | --------------------- |
| `l`     | `[0, 0.221]`≈      | Lightness             |
| `a`     | `[-0.108, 0.129]`≈ | Green–red component   |
| `b`     | `[-0.185, 0.134]`≈ | Blue–yellow component |

#### `jch`

The J<sub>z</sub>a<sub>z</sub>b<sub>z</sub> color space in cylindrical form.

| Channel | Range         | Description |
| ------- | ------------- | ----------- |
| `l`     | `[0, 0.221]`≈ | Lightness   |
| `c`     | `[0, 0.190]`≈ | Chroma      |
| `h`     | `[0, 360)`    | Hue         |

### YIQ

[YIQ][yiq] is the color space used by the NTSC color TV system. It contains the following channels:

| Channel | Range              | Description                    |
| ------- | ------------------ | ------------------------------ |
| Y       | `[0, 1]`           | Luma                           |
| I       | `[-0.593, 0.593]`≈ | In-phase (orange-blue axis)    |
| Q       | `[-0.520, 0.520]`≈ | Quadrature (green-purple axis) |

### CIE XYZ

The [CIE XYZ color space](https://en.wikipedia.org/wiki/CIE_1931_color_space), also known as the CIE 1931 color space.

#### `xyz`

The CIE XYZ color space in respect to the D50 standard illuminant.

| Channel | Range         | Description |
| ------- | ------------- | ----------- |
| X       | `[0, 0.962]`≈ | ?           |
| Y       | `[0, 0.997]`≈ | ?           |
| Z       | `[0, 0.823]`≈ | ?           |

#### `xyz65`

The CIE XYZ color space in respect to the D65 standard illuminant.

| Channel | Range         | Description |
| ------- | ------------- | ----------- |
| X       | `[0, 0.946]`≈ | ?           |
| Y       | `[0, 0.995]`≈ | ?           |
| Z       | `[0, 1.083]`≈ | ?           |

### Cubehelix

[The Cubehelix color scheme](https://www.mrao.cam.ac.uk/~dag/CUBEHELIX/) was described by Dave Green in this paper:

> Green, D. A., 2011, [_"A colour scheme for the display of astronomical intensity images"_](http://astron-soc.in/bulletin/11June/289392011.pdf), Bulletin of the Astronomical Society of India, 39, 289. ([2011BASI...39..289G](https://ui.adsabs.harvard.edu/#abs/2011BASI...39..289G) at [ADS](https://ui.adsabs.harvard.edu/))

It was expanded into a cylindrical color space by [Mike Bostock](https://en.wikipedia.org/wiki/Mike_Bostock) and [Jason Davies](https://www.jasondavies.com/) in [D3](https://github.com/d3/d3-color).

#### `cubehelix`

The channels in the `cubehelix` color space maintain the conventions from D3, namely:

| Channel | Range         | Description                                                              |
| ------- | ------------- | ------------------------------------------------------------------------ |
| `h`     | `[0, 360)`    | Hue (Based on _start color_ and _rotations_ as defined in Green's paper) |
| `s`     | `[0, 4.6143]` | Saturation (Called _hue_ in op. cit.)                                    |
| `l`     | `[0, 1]`      | Lightness                                                                |

[din99o]: https://de.wikipedia.org/wiki/DIN99-Farbraum
[yiq]: https://en.wikipedia.org/wiki/YIQ
