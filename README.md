# Wedding Resitry

<br />



## ABOUT

<div align='center'>
    <h2> Wedding Resitry</h2>
    <p>결혼하는사람이 네이버 쇼핑에서 원하는 물품을 url을 통해 등록할 수 있으며 결혼을 축하해주는 사람이 물품의 가격을 후원하고 결혼식 참석 여부를 체크할 수 있습니다.</p>
    <p>또한 물품 뿐만이 아니라 결혼하는사람의 웨딩사진 또한 볼 수 있고 관리자 페이지를 통해 다양한 정보를 확인할 수 있습니다.</p>
    <br />    
</div>

## TEAM

<div align='center'>
<table> 
  <tbody>
    <tr>            
       <td align="center"><a href="https://github.com/rondido"><img src="https://avatars.githubusercontent.com/u/55516901?v=4" width="100px;" alt=""/><br /><sub><b>박진현</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/YunHeeW"><img src="https://avatars.githubusercontent.com/u/105530169?v=4" width="100px;" alt=""/><br /><sub><b>원윤희</b></sub></a><br /></td>            
    </tr>
  </tbody>
</table>
</div>

<br />

## 기술 스택

- Development

  ![React](https://img.shields.io/badge/Create--React--App-5.0.1-20232A?logo=react)
  ![react-router-dom](https://img.shields.io/badge/react--router-6.14.1-CA4245?logo=reactRouter)
  ![styled-components](https://img.shields.io/badge/styled--components%2Fcss-1.12.0-28A745?logo=styled-components)
  ![axios](https://img.shields.io/badge/axios-1.4.0-%23671DDF?logo=axios&logoColor=%23671DDF)
  ![Recoil]((https://img.shields.io/badge/Recoil-0.7.7-%1E90FF?logo=Recoil))

## 폴더 구조

```
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂containers
 ┣ 📂hooks
 ┣ 📂mocks
 ┣ 📂pages
 ┣ 📂state
 ┣ 📂tokens
 ┣ 📂utils
 ┣ App.jsx
 ┣ Main.jsx

```

## 실행 방법

```bash
yarn run dev
# or
yarn run build

```

## 디자인
---

https://www.figma.com/file/SOfzSbhZvdaFUsZ0j7LYvR/wedding-registry?node-id=501%3A2962&t=tSYXjYRKPVBnvgc0-0



## Work flow
---

https://whimsical.com/wedding-AXkPY3swAd2tK6g4pmPmAr



## 일정관리
---

- Jira를 이용하여 현재 팀원들에 대한 일정을 관리

https://jink060806.atlassian.net/jira/software/projects/WEDPRO/boards/6

## 회의록
---

https://shell-barnacle-687.notion.site/TEAM-A-67efc05b8c2244ad8e438f22da89423e

## 서비스 소개
---

### 기능
---

<br />

### 페이지
---

우리 프로젝트 페이지 보여주기


## 회고
---

- Rondido

1. 항상 리팩토링과 유지보수성에 대해 고민하고 있었지만  어느샌가 기능 구현에 급급하여 리팩토링을 나중에 하자라는 생각을 가지게 되었다. 실제 현업에서 '과연 기능 구현(모든 프로젝트 기능 구현이 끝난 후)을 다 끝낸 후 리팩토링을 할 시간이 주어질까?' 라고 고민 했을때 나의 답은 아니라고 말할 수 있다. 그렇기 때문에 1개의 기능을 완성할 때마다 바로바로 리팩토링을 해야한다고 느꼈다.

2. 현재 나의 코드를 보면 api 통신을 할때 JWT 인증을 위해 token 값을 보내줘야 하는대 Page 폴더에서 tokens폴더에 있는 getAccessToken()이라는 함수를 통해 모든 Page에서 호출하여 props로 전달. 그렇다면 모든 페이지에서 호출하는것이 아니라 httpClient단에서 호출하면 모든 페이지에서 호출할 필요가 없지 않을까라는 결과를 도출

리팩토링 한 코드 올리기
   

3. Recoil을 사용하기 위해 라이브러리를 사용할 수 있었지만 왜 사용하지 않았나?
  1. 우선 기본적인 React hooks조차 제대로 활용하지 못한 생각이 들었다.
  2. 현재 나의 기준에서 props drilling이 심한 편이 아니라고 생각했고 무작정 Recoil을 사용한다면 그것 또한 낭비라고 생각이 들었다.
  3. 상태 자체를 전역적으로 관리해야할 경우에는 Recoil사용하여 상태를 관리하였다.
  4. 추후 리팩토링 과정에서 props drilling이 심할 경우 Recoil로 바꿀 것이다.


리팩토링 진행,ts 추가





