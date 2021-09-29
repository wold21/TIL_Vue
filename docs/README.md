---
home: false
---
<template>
  <div>
    <div class="titleContainer">
      <h1>난 오늘도
        <br>구글 없인 못살아
      </h1>
      <div class="infoContainer">
        <div class="name">Tazo's TIL</div>
            <div style="text-align: right">
                <p><a href="https://github.com/wold21" target="_blank">GitHub</a></p>
                <p><a href="https://companion-tazo.tistory.com/" target="_blank">Blog</a></p>
                <p><a href="https://www.youtube.com/channel/UC_Cpl1AhDkTdVe2jia5pNwQ" target="_blank">Youtube</a></p>
            </div>
      </div>
    </div>
  </div>
</template>

<style>

@font-face {
    font-family: 'SLEIGothicTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SLEIGothicTTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.infoContainer {
  text-align: right;
}
h1 {
  font-family: "SLEIGothicTTF", cursive;
  font-weight: 380;
  border-bottom: 8px solid #5485ce;
  word-break: keep-all;
  font-size: 4rem;
  margin-bottom:3px;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}
@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }
  .name {
    font-size: 1.7rem;
  }
}
@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>
