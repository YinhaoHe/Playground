// 解决this指代不明问题 如何改变this的值

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // Bad Approach NEVER USE THIS
    const self = this;
    this.tags.forEach((tag) => {
      console.log(self.title, tag);
    }, this);
  },
};

// Another way to solve that using bind()
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

// 解决this指代不明问题 如何改变this的值

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

// video.showTags();

function playVideo() {
  console.log(this);
}

playVideo.call({ name: "Yinhao" }, 1, 2);
playVideo.apply({ name: "Yinhao" }, [1, 2]);
const fn = playVideo.bind({ name: "Yinhao" });

fn();
// playVideo();
