export interface Image {
  src: string; // URL de la imagen
  alt: string; // Descripción de la imagen
  caption: string; // Texto para mostrar sobre la imagen
}

export interface Props {
  images: Image[]; // Lista de imágenes para el carrusel
}
