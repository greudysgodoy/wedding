type ImageSource = string | ImageMetadata;
export interface ImageProps {
  src: ImageSource; // URL de la imagen
  alt: string; // Descripción de la imagen
  caption: string; // Texto para mostrar sobre la imagen
  width?: number; // Ancho de la imagen
  height?: number; // Alto de la imagen
}

