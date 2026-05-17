
import { questions } from "./Data/questions"
import "./App.css"
import { useState, useEffect } from "react"
import byouDog from "./assets/images/ChuunibyouDog.jpg"
import ufoImg from "./assets/images/ufo.jpg"
import starImg from "./assets/images/starr.png"
import astroS from "./assets/images/astroSt.png"
import fahThumb from "./assets/images/FahFunnamnom.png"
import yaoThumb from "./assets/images/YaoDog.png"
import suemThumb from "./assets/images/SuemDog.png"
import raiThumb from "./assets/images/RaiDog.png"
import baewThumb from "./assets/images/BaewDog.png"
import ooroThumb from "./assets/images/OoroDog.png"
import weirdThumb from "./assets/images/WeirdDog.png"
import dengThumb from "./assets/images/DengDog.png"
import astroSSS from "./assets/images/astroSSS.png"
import spiderThumb from "./assets/images/spiderDog.png"
import byouThumb from "./assets/images/byouuDog.png"
import downloadIcon from "./assets/images/downloadd.png"
import replayIcon from "./assets/images/retryy.png"
import raiDetail from "./assets/images/raiDe.png"
import yaoDetail from "./assets/images/yaoDe.png"
import fahDetail from "./assets/images/fahDe.png"
import weirdDetail from "./assets/images/weirdDe.png"
import spiderDetail from "./assets/images/spiderDeDe.png"
import baewDetail from "./assets/images/baewDe.png"
import suemDetail from "./assets/images/suemDe.png"
import ooroDetail from "./assets/images/ooroDe.png"
import dengDetail from "./assets/images/dengDe.png"
import byouDetail from "./assets/images/byouuuDog.png"


function App() {


  const revealTexts = [
  "👽",
  "ฮ่าๆๆๆ ตัวตนเจ้าเผยออกมาแล้ว",
  "ข้าจะเปิดเผยชะตาของเจ้า..."
]
  const [step, setStep] = useState(0)

  const [storyIndex, setStoryIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [scores, setScores] = useState({
  red: 0,
  blue: 0,
  purple: 0,
  yellow: 0,
  neptune: 0,
  pink: 0,
  mint: 0,
  orange: 0,
  black: 0,
  rainbow: 0
})

const [isLocked, setIsLocked] = useState(false)

  const [showHint, setShowHint] = useState(false)

  const [result, setResult] = useState("")
  const [selectedDog, setSelectedDog] = useState(null)

  const storyTexts = [
  "คุณกำลังเดินเล่นอยู่ในป่ากลางดึก",
  "“อ๊ะ อะไรลอยอยู่บนฟ้าน่ะ”",
  "วืด...."
]
const [showNextBtn, setShowNextBtn] = useState(false)

useEffect(() => {
  if (step !== 1) return

  if (storyIndex === storyTexts.length - 1) {
    const timer = setTimeout(() => {
      setShowNextBtn(true)
    }, 1600) // 💜 1 วิ

    return () => clearTimeout(timer)
  } else {
    setShowNextBtn(false)
  }
}, [storyIndex, step])
 useEffect(() => {
  if (step !== 1) return

  const timer = setInterval(() => {
    setStoryIndex(prev => {
      if (prev < storyTexts.length - 1) {
        return prev + 1
      } else {
        clearInterval(timer)
        return prev
      }
    })
  }, 5000) // 💥 ทุก 6 วิ

  return () => clearInterval(timer)
}, [step])

  const question = questions[currentQuestion]

const resultMap = {
  red: {
    name: "หมาไฟ",

    image: raiDetail,
    thumb: raiThumb,
    detailImage: raiDetail,

    desc: "มองหน้าทำไม อยากมีเรื่องหรอ มาดวลกันปะ"
  },

  blue: {
    name: "หมาฟ้าฟันน้ำนม",

    image: fahDetail,
    thumb: fahThumb,
    detailImage: fahDetail,

    desc: "มาเล่นกันเถอะ! วันนี้เธอเหนื่อยไหม เดี๋ยวเราแบ่งขนมให้น้า"
  },

  purple: {
    name: "หมาเบียว",

    image: byouDetail,
    thumb: byouThumb,
    detailImage: byouDetail,

    desc: "ความมืดมิดในอนันตจักรวาล... กำลังร่ำร้องเรียกหาข้าอยู่"
  },

  yellow: {
    name: "หมาเด้ง",

    image: dengDetail,
    thumb: dengThumb,
    detailImage: dengDetail,

    desc: "ทุกคนฟังทางนี้! แผนการพร้อมแล้ว เดินตามตูดฉันมาเลย!"
  },

  neptune: {
    name: "หมาซึมต๋อย",

    image: suemDetail,
    thumb: suemThumb,
    detailImage: suemDetail,

    desc: "เฮ้อ... โลกนี้มันช่างกว้างใหญ่ ฉันก็ตัวเล็กแค่นี้เองนะ"
  },

  pink: {
    name: "หมาแบ๊ว",

    image: baewDetail,
    thumb: baewThumb,
    detailImage: baewDetail,

    desc: "งื้อออ อุ้มเค้าหน่อยสิ ถ้าไม่มีเธอ เค้าต้องเหงาตายแน่เลย"
  },

  mint: {
    name: "หมาแหวกหญ้า",

    image: weirdDetail,
    thumb: weirdThumb,
    detailImage: weirdDetail,

    desc: "การเดินตามรอยเท้าคนอื่นมันน่าเบื่อ ฉันจะหาทางของฉันเอง"
  },

  orange: {
    name: "หมายาววววว",

    image: yaoDetail,
    thumb: yaoThumb,
    detailImage: yaoDetail,

    desc: "หึ่มม ฉันได้กลิ่นแปลกๆ ต้องไปสำรวจหน่อยแล้ว"
  },

  black: {
    name: "หมางมุม",

    image: spiderDetail,
    thumb: spiderThumb,
    detailImage: spiderDetail,

    desc: "อย่า... อย่าเข้ามาใกล้ฉันเลย ฉันต้องการความสงบ"
  },

  rainbow: {
    name: "หมาอ้อร้อ",

    image: ooroDetail,
    thumb: ooroThumb,
    detailImage: ooroDetail,

    desc: "ว้าววว! น่าสนุกจัง ไปปาร์ตี้กันเถอะเจ้าหมาาาา!"
  }
}

function calculateResult(scores) {
  const entries = Object.entries(scores)

  entries.sort((a, b) => b[1] - a[1])

  const max = entries[0][1]

  const topCandidates = entries.filter(([_, v]) => v === max)

  const keys = topCandidates.map(([k]) => k)

  // 🔴 special rules
  if (keys.includes("red") && keys.includes("yellow")) return "yellow"
  if (keys.includes("blue") && keys.includes("pink")) return "pink"
  if (keys.includes("purple") && keys.includes("mint")) return "mint"
  if (keys.includes("orange") && keys.includes("yellow")) return "orange"
  if (keys.includes("black") && keys.includes("neptune")) return "black"

  // fallback tie-break
  return keys.sort()[0]
}

function SpaceStar() {
  return (
    <img
      src={astroS}
      alt="astroS"
      className="space-orb"
    />
  )
}

function SpaceStar4() {
  return (
    <img
      src={astroS}
      alt="astrooS"
      className="space-orb4"
    />
  )
}

function SpaceStar2() {
  return (
    <img
      src={astroSSS}
      alt="astroSS"
      className="space-orb2"
    />
  )
}

function SpaceStar3() {
  return (
    <img
      src={astroSSS}
      alt="astroSSS"
      className="space-orb3"
    />
  )
}

function resetGame() {
  setStep(0)
  setStoryIndex(0)
  setCurrentQuestion(0)
  setResult("")

  setScores({
    red: 0,
    blue: 0,
    purple: 0,
    yellow: 0,
    neptune: 0,
    pink: 0,
    mint: 0,
    orange: 0,
    black: 0,
    rainbow: 0
  })
}



 function handleAnswer(scoreObj) {
  if (isLocked) return
  setIsLocked(true)

  setScores(prev => {
    const updated = { ...prev }

    Object.keys(scoreObj).forEach(key => {
      updated[key] += scoreObj[key]
    })

    const next = currentQuestion + 1

    if (next >= questions.length) {
      const final = calculateResult(updated)
      setResult(final)
      setStep(6)
    } else {
      setCurrentQuestion(next)
    }

    return updated
  })

  // ปลดล็อกหลัง render นิดนึง
  setTimeout(() => setIsLocked(false), 100)
}

function downloadImage(url, filename = "result.png") {
  const link = document.createElement("a")

  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob)

      link.href = blobUrl
      link.download = filename

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(blobUrl)
    })
}

  
  const [showStar, setShowStar] = useState(true)

useEffect(() => {
  const interval = setInterval(() => {
    setShowStar(false)

    setTimeout(() => {
      setShowStar(true)
    }, 100) // รีสตาร์ท animation
  }, 20000) // ทุก 20 วิ

  return () => clearInterval(interval)
}, [])
  


  // =========================
  // 🌟 STEP 0: START PAGE
  // =========================
  if (step === 0) {
  return (
    <div className="container light">

<SpaceStar />
<SpaceStar2 />

      <img
  src={starImg}
  alt="starr"
  className="floating-star"
/>

        {showStar && <div className="star" />}

  <h1 className="center-title">
  <span className="sub-title">หากคุณเป็น</span>

  <br />

  {"หมานุดต่างดาว".split("").map((ch, i) => (
    <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
      {ch}
    </span>
  ))}

  
</h1>

<p className="mini-desc">
  แบบทดสอบบุคลิกภาพอย่างไม่จริงจัง by หมากิฟ และ หมาเกรซ
</p>
      <div className="dog-face">

        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        

        <div className="nose-wrapper">

          <button
            className="nose-btn"
            onClick={() => setStep(1)}
          >
            <span>เริ่ม</span>
          </button>

          <div className="tongue"></div>

        </div>

      </div>

    </div>
  )
}
  // =========================
  // 📖 STEP 1: STORY
  // =========================
  if (step === 1) {
  return (
    <div
      className="container dark "
      onClick={() => {
        if (storyIndex < storyTexts.length - 1) {
          setStoryIndex(prev => prev + 1)
        }
      }}
      
    >
       <SpaceStar3 />
      <SpaceStar4 />

      <div className="card story-card">

        {storyTexts
          .slice(0, storyIndex + 1)
          .map((text, i) => (
            <p key={i} className="story-text">
              {text}
            </p>
          ))}

        {/* 💜 ปุ่มจะโผล่เมื่อข้อความครบ */}
        {showNextBtn && (
  <button
    className="main-btn1"
    onClick={(e) => {
      e.stopPropagation()
      setStep(2)
    }}
  >
    ....
  </button>
)}

      </div>

    </div>
  )
}

  // =========================
  // 🛸 STEP 2: UFO SCENE
  // =========================
if (step === 2) {
  return (
    <div className="container dark ">

       <SpaceStar3 />
      <SpaceStar4 />
      <div className="card story-card">

        <div className="ufo-scene">

          <img
            src={ufoImg}
            alt="ufo"
            className="ufo-image"
          />

          <p className="story-text">
            กำลังถูกดูดขึ้นยาน...
          </p>

        </div>

        <button className="main-btn" onClick={() => setStep(3)}>
          อ๊ากกกก อะไรเนี่ย
        </button>

      </div>

    </div>
  )
}

  // =========================
  // 👽 STEP 3: ALIEN DOG
  // =========================
  if (step === 3) {
    return (
      <div className="container dark ">

         <SpaceStar3 />
      <SpaceStar4 />

        <div className="card result-card">

          <div className="alien-img">
            👽
          </div>

          <p className="reveal-text">
            
ฮ่าๆๆ เจ้ามนุษย์บ๊องเอ๊ย เจ้าจงมาเป็นลูกสมุนข้าซะ ชาวหมาอย่างพวกข้าจะเป็นใหญ่ในใต้หล้า
          </p>

          <button className="main-btn" onClick={() => setStep(4)}>
            หมา??!!
          </button>

        </div>

      </div>
    )
  }

  // =========================
  // 🧪 STEP 4: READY QUIZ
  // =========================
  if (step === 4) {
    return (
      <div className="container dark">

         <SpaceStar3 />
      <SpaceStar4 />

        <div className="card result-card">

          <p className="reveal-text">
            
ไหนดูสิ้ว่าเจ้าจะกลายเป็นหมานุดต่างดาวแบบไหน
          </p>

          <button className="main-btn" onClick={() => setStep(5)}>
            ทดสอบ
          </button>

        </div>

      </div>
    )
  }

  // =========================
  // 🧠 STEP 5: QUIZ
  // =========================
 if (step === 5) {
  return (
    <div className="container dark center-wrap">

      <SpaceStar3 />
      <SpaceStar4 />

      <div className="card">

        {/* 💜 PROGRESS BAR */}
        <div className="progress-wrapper">
          <div
            className="progress-bar"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          />
        </div>

        <h2 className="question-count">
          ข้อ {currentQuestion + 1} / {questions.length}
        </h2>

        <h3 className="question">
          {question.question}
        </h3>

        <div className="answers">

          {question.options.map((opt, i) => (
           <button
  className="answer-btn"
  disabled={isLocked}
  onClick={() => handleAnswer(opt.score)}
>
              {opt.text}
            </button>
          ))}

        </div>

      </div>

    </div>
  )
}

  // =========================
  // 🎯 RESULT
  // =========================
 if (step === 6) {
  return (
    <div
      className="container dark center-wrap"
      onClick={() => {
        if (storyIndex < revealTexts.length - 1) {
          setStoryIndex(storyIndex + 1)
        }
      }}
    >
      <SpaceStar2 />
      <SpaceStar />
      <div className="card story-card">

        {revealTexts
          .slice(0, storyIndex + 1)
          .map((text, i) => (
            <p key={i} className="story-text">
              {text}
            </p>
          ))}

        {storyIndex === revealTexts.length - 1 && (
          <button
            className="main-btn"
            onClick={() => setStep(7)}
          >
            จงเป็นหมาซะ!
          </button>
        )}

      </div>

    </div>
  )
}

if (step === 7) {
  const data = resultMap[result]

  return (
    <div className="container dark center-wrap">

      <SpaceStar />
      <SpaceStar2 />

      <div className="result-only">

        {/* ผลลัพธ์ตัวเอง */}
        <img
          src={data.image}
          className="result-full-image"
          alt="result"
        />

        

      

       <button
  className="main-btn"
  onClick={() =>
    downloadImage(data.image, `${data.name}.png`)
  }
>
  <img
    src={downloadIcon}
    alt="download"
    className="btn-icon"
  />

  ดาวน์โหลดรูป
</button>

<button
  className="main-btn"
  onClick={resetGame}
>
  <img
    src={replayIcon}
    alt="replay"
    className="btn-icon"
  />

  เล่นอีกครั้ง
</button>


      </div>

      {/* 👇 อยู่ล่างสุด */}
      <div className="all-results">

  <h2 className="all-title">
    หมานุดต่างดาวตัวอื่นๆ
  </h2>

  <div className="dog-grid">

    {Object.entries(resultMap).map(([key, dog]) => (

      <div
        className="dog-card"
        key={key}
        onClick={() => setSelectedDog(dog)}
      >

        <img
          src={dog.thumb}
          alt={dog.name}
          className="dog-card-img"
        />

        <h3>{dog.name}</h3>

      </div>

    ))}

  </div>

</div>
{selectedDog && (

  <div
    className="popup-overlay"
    onClick={() => setSelectedDog(null)}
  >

    <div
      className="popup-card"
      onClick={(e) => e.stopPropagation()}
    >

      <img
        src={selectedDog.image}
        alt={selectedDog.name}
        className="popup-img"
      />

      <h2>{selectedDog.name}</h2>

      <p className="popup-desc">
        {selectedDog.desc}
      </p>

    </div>

  </div>

)}
<p className="mini-credit">
  หมากิฟ และ หมาเกรซ ขอขอบคุณที่มาเล่นกันคร้าบ บ บ
</p>

    </div>
  )
}
 
}

export default App