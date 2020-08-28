// method -> obj
// function -> global (window, global)

// 第一条规则举例
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this);
  },
};

video.stop = function () {
  console.log(this);
};

video.play();
video.stop();

//第二条规则举例
function playVideo() {
  console.log(this);
}

playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}

// 当使用new时 js会自动生成一个空obj 然后将this指向 生成的obj
const v = new Video("b");

// call back function 只是一个普通函数 call back中直接用this 会指向global
video.showTags();
