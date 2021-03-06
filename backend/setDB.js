const questions = [
  { qid: 1, content: "", choice: ["", "", ""] },
  {
    qid: 2,
    content:
      "오늘날 세계 모든 저소득 국가에서 초등학교를 나온 여성은 얼마나 될까?",
    choice: ["20%", "40%", "60%"],
  },
  {
    qid: 3,
    content: "세계 인구의 다수는 어디에 살까?",
    choice: ["저소득 국가", "중간 소득 국가", "고소득 국가"],
  },
  {
    qid: 4,
    content: "지난 20년간 세계 인구에서 극빈층 비율은 어떻게 바뀌었을까?",
    choice: ["거의 두 배로 늘었다", "별 차이 없다", "거의 절반으로 줄었다"],
  },
  {
    qid: 5,
    content: "오늘날 전 세계 평균 기대 수명은?",
    choice: ["50세", "60세", "70세"],
  },
  {
    qid: 6,
    content:
      "오늘날 세계 인구 중 0~15세 인구가 약 20억이다. 유엔이 예상하는 2100년의 0~15세 인구는 몇일까?",
    choice: ["40억", "30억", "20억"],
  },
  {
    qid: 7,
    content:
      "유엔은 2100년까지 세계 인구가 40억명 정도 늘어날 것이라고 예상한다. 주로 어떤 인구층이 늘어날까?",
    choice: ["0 ~ 15세", "15 ~ 74세", "75세 이상"],
  },
  {
    qid: 8,
    content: "지난 100년간 연간 자연재해 사망자 수는 어떻게 변했을까?",
    choice: ["두 배 이상 늘었다", "거의 변화가 없다", "절반 이하로 줄었다"],
  },
  {
    qid: 9,
    content:
      "오늘날 세계 인구는 약 70억이다. 다음 중 대륙별 인구 분포를 가장 정확하게 설명한 걸 고르면?",
    choice: [
      "유럽 10억, 아시아 40억, 아프리카 10억, 아메리카 10억",
      "유럽 10억, 아시아 30억, 아프리카 20억, 아메리카 10억",
      "유럽 10억, 아시아 30억, 아프리카 10억, 아메리카 20억",
    ],
  },
  {
    qid: 10,
    content: "오늘날 전 세계 1세 아동 중 어떤 질병이든 예방접종을 받은 비율은?",
    choice: ["20%", "50%", "80%"],
  },
  {
    qid: 11,
    content:
      "전 세계 30세 남성은 평균 10년간 동안 학교를 다닌다. 같은 나이의 여성은 평균 몇 년간 학교를 다닐까?",
    choice: ["9년", "6년", "3년"],
  },
  {
    qid: 12,
    content:
      "1996년에 호랑이, 대왕판다, 검은코뿔소가 멸종위기종에 등록되었다. 이 셋 중 오늘날 더 위급한 단계의 멸종위기종이 된 종은 몇 종일까?",
    choice: ["2종", "1종", "없다"],
  },
  {
    qid: 13,
    content: "세계 인구 중 어떤 식으로든 전기를 공급받는 비율은?",
    choice: ["20%", "50%", "80%"],
  },
  {
    qid: 14,
    content:
      "세계 기후 전문가들은 앞으로 100년 동안의 평균기온 변화를 어떻게 예상할까?",
    choice: [
      "더 더워질 것이라고 예상한다",
      "그대로일 거라고 예상한다",
      "더 추워질 거라고 예상한다",
    ],
  },
  { qid: 15, content: "", choice: ["", "", ""] },
  { qid: 16, content: "", choice: ["", "", ""] },
];

const answer = [3, 2, 3, 3, 3, 3, 3, 1, 3, 1, 3, 3, 1];

exports.setQuestion = function (Question) {
  questions.map((question) => {
    var newQuestion = new Question(question);
    newQuestion.save(function (error, data) {
      if (error) {
        console.log(error);
      } else {
        console.log(`${question.qid} Saved`);
      }
    });
  });
};

exports.setStatistic = function (Statistic) {
  for (let i = 1; i < 14; i++) {
    var newStatistic = new Statistic({
      number: i,
      answer: answer[i - 1],
      A: 0,
      B: 0,
      C: 0,
    }).save();
  }
};
