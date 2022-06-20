import { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addPost } from "../../redux/modules/post";
const PostForm = () => {
  const [showForm, setshowForm] = useState(true);
  const dispatch = useDispatch();
  const contentRef = useRef();
  const [category, setCategory] = useState();

  // useEffect(() => {
  //   dispatch(__loadPost());
  // }, [dispatch]);
  const addPost = () => {
    dispatch(
      __addPost({
        content: contentRef.current.value,
        category: category,
      })
    );
    setshowForm(false);
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      {showForm ? (
        <ModalWrap>
          <Modal>
            <ModalTitle>글 남기기</ModalTitle>
            <Button>X</Button>
            <ModalP>
              응원·의견·체험리뷰를 남겨주세요
              <br />
              메이커의 답변이 필요한 문의 글은 '메이커에게 문의하기'를 이용해야
              답변을 받을 수 있습니다.
            </ModalP>
            <form>
              <ModalLabel htmlFor="posttype1">
                <ModalInput
                  id="posttype1"
                  type="radio"
                  name="post"
                  value={"응원"}
                  onChange={handleChange}
                />
                <ModalInputText>응원 </ModalInputText>메이커를 응원하고 싶어요.
              </ModalLabel>
              <ModalLabel htmlFor="posttype2">
                <ModalInput
                  id="posttype2"
                  type="radio"
                  name="post"
                  value={"의견"}
                  onChange={handleChange}
                />
                <ModalInputText>의견 </ModalInputText>프로젝트에 대한 의견을
                남기고 싶어요.
              </ModalLabel>
              <ModalLabel htmlFor="posttype3">
                <ModalInput
                  id="posttype3"
                  type="radio"
                  name="post"
                  value={"체험 리뷰"}
                  onChange={handleChange}
                />
                <ModalInputText>체험 리뷰 </ModalInputText>오프라인 체험 리뷰를
                남기고 싶어요.
              </ModalLabel>
            </form>
            <label>
              <ModalTextArea
                placeholder="메이커에게 응원·의견·체험 리뷰 메세지를 남겨주세요."
                ref={contentRef}
              />
            </label>
            <RedBox>
              최근 메이커 또는 제3자에 대한 허위사실 유포, 비방 목적의 댓글로
              인해 당사자간 법적분쟁이 발생한 사례가 증가하고 있습니다. 악의적
              댓글 작성자는 명예훼손, 모욕 등으로 법적 책임을 부담하게 될 수
              있다는 점을 유의하여 주시기 바랍니다.
            </RedBox>
            <div>
              <h2>게시물 이용안내</h2>
              <ModalListWrap>
                <ModalList>
                  1. 1.본 프로젝트와 무관한 글, 광고성, 욕설, 비방, 도배 등의
                  글은 예고 없이 삭제 등 조치가 취해질 수 있으며, 해당 내용으로
                  인해 메이커, 서포터, 제3자에게 피해가 발생되지 않도록
                  유의하시기 바랍니다.
                </ModalList>
                <ModalList>
                  2. 2.리워드 관련 문의 및 배송 문의는 '메이커에게 문의하기'를
                  통해 정확한 답변을 받을 수 있습니다.
                </ModalList>
                <ModalList>
                  3. 3.서포터님의 연락처, 성명, 이메일 등의 소중한 개인정보는
                  절대 남기지 마세요.
                </ModalList>
                <ModalList>
                  4. 4.체험 리뷰는 반드시 펀딩을 위해 진행된 오프라인
                  전시(체험)에 참여한 후 작성하세요.
                </ModalList>
              </ModalListWrap>
              <ModalListText>
                ⋅체험 리뷰 등록 시, 프로필 닉네임과 내용이 공개되며, 서비스 내
                콘텐츠에 활용됩니다.
              </ModalListText>
            </div>
            <ButtonFlex>
              <PostButton type="submit" onClick={addPost}>
                등록
              </PostButton>
            </ButtonFlex>
          </Modal>
        </ModalWrap>
      ) : null}
    </>
  );
};

export default PostForm;
const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;
const Modal = styled.div`
  padding: 45px 38px;
  height: auto;
  max-width: 720px;
  background-color: #fff;
  margin: 5% auto;
  position: relative;
`;
const ModalTitle = styled.h2`
  line-height: 36px;
  font-size: 28px;
  font-weight: 700;
  margin: 26px 0;
  letter-spacing: -0.6px;
  color: rgba(0, 0, 0, 0.84);
`;
const Button = styled.button`
  position: absolute;
  top: 45px;
  right: 38px;
  background-color: transparent;
  border: 0;
  font-size: 22px;
`;
const ModalP = styled.p`
  margin-bottom: 20px;
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.84);
  font-size: 15px;
  font-weight: 400;
`;
const ModalLabel = styled.label`
  border-color: #00c4c4;
  background: #00c4c4;
  color: #fff;
  display: inline-block;
  margin-right: 10px;
  border-radius: 24px;
  cursor: pointer;
  padding: 0 16px;
  height: 45px;
  line-height: 45px;
  box-sizing: border-box;
  font-size: 12px;
  margin-bottom: 10px;
  font-weight: 700;
`;
const ModalInputText = styled.span`
  font-size: 15px;
  margin: 0 10px;
`;
const ModalInput = styled.input`
  border-color: #00c4c4;
  background-color: #fff;
  width: 14px;
  height: 14px;
`;
const ModalTextArea = styled.textarea`
  height: 242px;
  padding: 20px;
  font-size: 15px;
  font-weight: 400;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
  width: 100%;
  color: rgba(0, 0, 0, 0.84);
  display: block;
  line-height: inherit;
`;
const RedBox = styled.div`
  color: #f66;
  margin: 24px auto;
  border: 0;
  background-color: hsla(0, 100%, 70%, 0.1);
  padding: 16px;
  line-height: 1.38;
  font-size: 13px;
  font-weight: bold;
`;
const ModalList = styled.li`
  line-height: 28px;
  letter-spacing: -0.3px;
  font-weight: normal;
  font-style: normal;
  position: relative;
  line-height: 1.54;
  font-size: 13px;
  line-height: 28px;
  color: #676363;
`;
const ModalListText = styled.p`
  text-align: center;
  font-size: 13px;
  line-height: 1.54;
`;
const PostButton = styled.button`
  border: 0;
  background-color: #00c4c4;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  padding: 15px 25px;
  border-radius: 3px;
  margin-top: 20px;
`;
const ButtonFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ModalListWrap = styled.ul`
  padding: 20px 10px;
`;
