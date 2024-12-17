# unity-on-react-test
유니티 화면을 리액트에서 띄워주며 상호간 이벤트 전달 하게 하는 프로젝트

https://ccsforever.github.io/
통해서 결과물 확인 가능

# 사용법
node, npm 또는 yarn 설치 필요

yarn install
필요한 모듈 설치됨

yarn start
localhost:3000 등으로 로컬 개발환경

yarn build
build 디렉토리에 정적파일들 생성

# 기능 설명
유니티 기능
키보드 A 입력시 회전
키보드 상하좌우 입력시 문자 up, down, left, right 변경
마우스 좌클릭 회전 속도 +5(react 이벤트 발생 - 속도 update)
마우스 우클릭 회전 속도 -5(react 이벤트 발생 - 속도 update)

리액트 기능(하단 버튼)
회전 유무 변경(unity event 전달, 현재 unity state 랑 싱크가 되지는 않음)
+/- 버튼은 변경하고 싶은 속도 조절
apply 회전 속도 적용(unity event 전달 - 속도 업데이트)

# reference
react to unity
https://bloodstrawberry.tistory.com/1140
unity to react
https://bloodstrawberry.tistory.com/1137