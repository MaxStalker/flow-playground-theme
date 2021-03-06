import React, { useState } from "react";
import styled from "styled-components";
import { GreenButton, GreyButton } from "./Buttons/BasicButton";
import { ButtonIcon, Spinner } from "./Icons";
import EditCommit from "./EditCommit";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dedede;
`;

export const BoxContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

export const TwoItems = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 16px;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  box-sizing: border-box;
`;

export const BlueText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  padding: 12px;
  p {
    margin: 0;
  }
  svg {
    fill: blue;
    margin-right: 5px;
  }
`;

export const Label = styled.p`
  margin: 0;
  margin-bottom: 5px;
  width: 100%;
  font-size: 14px;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type || "text"
}))`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #a5a5a5;
  margin-bottom: ${({ mb = 0 }) => mb};
`;

export const InputBlock = styled.div`
  width: 100%;
  margin-bottom: ${({ mb = "10px" }) => mb};

  &:last-child {
    margin-bottom: 20px;
  }
`;

const NewCommit = props => {
  const [mode, selectMode] = useState("NEW");

  const reset = () => {
    selectMode("NEW");
  };

  const showEdit = () => {
    selectMode("EDIT");
  };

  const showProcessing = () => {
    selectMode("PROCESSING");
  };

  const newCommit = () => {
    return (
      <BoxContainer>
        <GreenButton onClick={showEdit}>
          <ButtonIcon name="new-file" mr="8px" />
          New Commit
        </GreenButton>
      </BoxContainer>
    );
  };

  const processing = () => {
    return (
      <BoxContainer onClick={reset}>
        <BlueText>
          <Spinner />
          <p>Processing your commit...</p>
        </BlueText>
      </BoxContainer>
    );
  };

  return (
    <Container>
      {mode === "NEW" && newCommit()}
      {mode === "EDIT" && <EditCommit actions={[reset, showProcessing]} />}
      {mode === "PROCESSING" && processing()}
    </Container>
  );
};

export default NewCommit;
