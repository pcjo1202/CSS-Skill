# CSS skill

언젠가 유용하게 사용 할 수 도 있는 스킬이니까 해놓으면 좋지 않을까?

## 사용한 기술

- React
- styled-components

---

## 1. Context Menu

> 💡 마우스 우클릭 시 나오는 'contextmenu'를 내맘대로 디자인하고 구연함.

### ✦ Skill Idea

- **위치좌표 가져오기**

  - <code>offsetX,Y</code> : **event 대상 객체**에서 상대적 좌표 위치를 반환함
  - <code>ClientX,Y</code> : 브라우저 페이지에서의 보이는 화면 기준으로 좌표의 위치를 반환 (스크롤은 무시하고 왼쪽 상단을 0으로 측정)
  - <code>PageX,Y</code> : ClientX,Y 와 같으나 스크롤까지 포함 계산
  - <code>screenX,Y</code> : 보고있는 모니터 기준으로 좌표를 측정(절대좌표)

- **Element의 크기 가져오기**

  - <code>window.innerWidth/height</code> : 브라우저 안에 나오는 순수한 window의 크기
  - <code>offsetWidth/height</code> : 해당 문서의 크기 (padding, border, scrollbar 포함)

- **화면에서 숨기는 CSS 속성**
  - <code>pointer-events</code> : 이벤트를 사용할 수 있는지 여부를 지정해주는 속성 ('none', 'auto')
  - <code>visibility</code> : Element가 화면에 보여지는지에 대한 속성 ('visible', 'hidden', 'collapse')

### ✦ 순서리스트

1. 전체 문서인 document에 event를 준다.
2. "contextMenu"의 position을 absolute로 지정하여 자유롭게 한다.
3. 마우스 우클릭 시 클릭한 부분의 좌표를 offest으로 받아오고 그것을 기준으로 "contextMenu"의 위치를 표현하고, 화면에 나타나게 한다.
4. "contextMenu"가 화면 밖으로 삐저나갈때를 생각하여 기준선 **(window의 크기 - contextMenu의 크기)**을 잡고, 기준선을 넘어가면 좌표의 위치를 기준선을 넘어간 만큼 이동시켜 조정한다.
