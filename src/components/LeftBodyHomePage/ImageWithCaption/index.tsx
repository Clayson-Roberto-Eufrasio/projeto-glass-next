import Image from "next/image"
import { ImageWithCaptionStyled } from "./styles"

const ImageWithCaption = () => {
  return (
    <ImageWithCaptionStyled>
      <Image src="/images/glass-quadro-homem-mulher.webp" alt="" layout="responsive" width={100} height={100} />
      <figcaption>
        <h3> Google Glass </h3>
        <p>
          Uma nova maneira de ver o mundo
        </p>
      </figcaption>
    </ImageWithCaptionStyled>
  )
}

export default ImageWithCaption