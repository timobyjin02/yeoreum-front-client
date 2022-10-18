import { ImageWrapper, Image } from "./../styles/ProfileImage";

interface Props {
  size: number;
  shadow?: number;
  blur?: number;
  src?: string;
}

/**
 * @param {number} props.size 필수사항: 직경
 * @param {number} props.shadow 선택사항: 그림자 길이 (기본값: 2)
 * @param {number} props.blur 선택사항: 그림자 흐린 정도 (기본값: 4)
 * @param {string} props.src 선택사항: 이미지 경로 (기본값: 대체 이미지)
 */
function ProfileImage({ size, shadow = 2, blur = 4, src }: Props) {
  return (
    <ImageWrapper size={size} shadow={shadow} blur={blur}>
      <Image
        size={size * (80 / 100)}
        src={src ? src : "images/default_profile.png"}
      />
    </ImageWrapper>
  );
}

export default ProfileImage;
