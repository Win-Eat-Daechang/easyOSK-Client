# 이지오스크 easyOSK
easyOSK는 **시각장애인을 위한 간편 키오스크 솔루션**입니다. <br>
앱에서 음성인식으로 매장과 메뉴를 말하면, 키오스크 상에서 메뉴가 바로 선택되는 쿠폰을 발급합니다. <br>
앱을 통해 생성한 쿠폰 바코드를 키오스크 기기에 인식하면, 복잡한 메뉴 선택 과정을 건너뛰고 결제할 수 있습니다. <br>
키오스크 화면 터치가 제한되는 시각장애인은, easyOSK의 음성 인식을 이용해 키오스크를 이용해 결제할 수 있습니다.

## 🚀 Deployment
[여기](https://front-beryl-mu.vercel.app/)서 구현된 easyOSK를 확인할 수 있습니다. <br>
[버커킹] 매장의 [치즈 와퍼 세트] 메뉴로 테스트해 볼 수 있습니다.

## 📲 Demos
### 홈 화면 (매장 선택 화면)
<p>
<img src="https://user-images.githubusercontent.com/50395394/180627760-3f5d39ae-50a5-4c8c-82f6-fad7633a1e02.png" width="400" />
<img src="https://user-images.githubusercontent.com/50395394/180629670-37781f7a-002b-4668-8b28-008b0732d6fb.png"  width="400" />
</p>
홈 화면에서, 마이크 버튼을 누르고 이용할 매장을 말하고 다시 마이크 버튼을 눌러 입력을 종료합니다. <br>
쿠폰 발급이 가능한 매장이 인식되었다면, 자동으로 다음 메뉴 선택 화면으로 넘어갑니다.

### 메뉴 선택 화면
<p>
<img src="https://user-images.githubusercontent.com/50395394/180629609-a86df38c-df01-40ac-bd66-cba0336e180f.png"  width="400" />
<img src="https://user-images.githubusercontent.com/50395394/180629629-70b745fe-6ced-42c8-a8f5-4918953b387d.png" width="400" />
</p>
메뉴 선택 화면에서, 마이크 버튼을 눌러 해당 매장에서 사용할 메뉴를 말합니다. <br>
쿠폰 발급이 가능한 메뉴가 인식되었다면, 자동으로 다음 바코드 출력 화면으로 넘어갑니다.

### 바코드 출력 화면
<p>
<img src="https://user-images.githubusercontent.com/50395394/180630283-5923d2b1-1dd6-43cc-b9ec-1b85ba1cf402.png" width="400" />
</p>
음성인식 두 번으로 사용할 매장의 메뉴에 대한 쿠폰 바코드가 생성되었습니다. <br>
이제 기기에 쿠폰을 인식하기만 하면, 키오스크 상에서 메뉴가 선택되어 결제 직전 단계까지 불러옵니다.

## 👨‍👧‍👦 About Team
easyOSK는 ICT이노베이션스퀘어에서 주최하는 [피우다 프로젝트](http://ictcoc.kr/04_com_n/com02_view.asp?idx=576)의 본선 진출 팀 <우승하고 대창먹자>팀의 산출물입니다. [김현재](https://github.com/itsnowkim), [김채리](https://github.com/chaeri93), [유시원](https://github.com/seewon) 세 명이 개발했습니다.

"사회적 약자(장애인)의 생활개선 및 복지향상 - 의사소통이 어려운 장애인을 위한 자신의 의사나 욕구(필요한 서비스 등)를 원활하게 표현할 수 있는 의사소통 보조 도구 개발"을 주제로, 시각 장애인의 키오스크 사용 보조 도구를 개발했습니다.
