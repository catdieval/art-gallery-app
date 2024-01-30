import { Wrapper } from "../Wrapper.js";
import { ImageContainer } from "../ImageContainer.js";
import { StyledImage } from "../StyledImage.js";
import FavoriteButton from "../FavoriteButton/index.js";
import styled from "styled-components";
import CommentForm from "../CommentForm/index.js";
import Comments from "../Comments/index.js";
// import useState from "react";

const BackButton = styled.button`
  background-color: purple;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const List = styled.ul`
  margin: 1.5rem 0 3rem;
  li {
    line-height: 1.5;
  }
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  onBack,
  addComment,
  comments,
}) {
  // const [comment, setComment] = useState("");

  const handleCommentSubmit = (comment) => {
    addComment(comment);
  };

  return (
    <>
      <Wrapper>
        <BackButton type="button" onClick={onBack}>
          &laquo; Go back
        </BackButton>
        <h2>{title}</h2>
        <ImageContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <StyledImage
            src={image}
            sizes="100vw"
            width={580}
            height={580}
            alt={`${artist}: ${title}`}
            priority
          />
        </ImageContainer>
        <List>
          <li>Artist: {artist}</li>
          <li>Year: {year}</li>
          <li>Genre: {genre}</li>
        </List>
        {comments && <Comments comments={comments} />}
        <CommentForm
          onSubmitComment={handleCommentSubmit}
          addComment={addComment}
        />
      </Wrapper>
    </>
  );
}
