import styled from '@emotion/styled';
import { useRef } from 'react';

interface ImageProp {
  src?: string;
  size: number;
}

function ProfileImage({ src, size }: ImageProp) {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageError = () => {
    if (imageRef.current) {
      imageRef.current.src = '/anonymous.png';
    }
  };

  return (
    <ImageWrapper size={size}>
      <Image
        ref={imageRef}
        onError={handleImageError}
        alt="default image"
        src={'img/profile.png'}
      ></Image>
    </ImageWrapper>
  );
}

export default ProfileImage;

const ImageWrapper = styled.div<{
  size: number;
}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
