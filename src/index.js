import GoogleNetExamples  from "./diagrams/GoogleNetExamples.html";
import ImageArray         from "./diagrams/ImageArray.html";
import OptExplore         from "./diagrams/OptExplore.html";
import OptExplore2        from "./diagrams/OptExplore2.html";
import OptExploreFlex     from "./diagrams/OptExploreFlex.html";
import GradArtifacts      from "./diagrams/GradArtifacts.html";
import RegReview          from "./diagrams/RegReview.html";
import OptAndExamples     from "./diagrams/OptAndExamples.html";
import LinearCombinations from "./diagrams/LinearCombinations.html";

// const figure = document.querySelector("d-figure#last-figure");
// figure.addEventListener("ready", function() {
//   const initTag = figure.querySelector("span");
//   initTag.textContent = "ready"
//   console.log('ready')
// });
new LinearCombinations({target: document.querySelector("#linear-combinations")});

new GoogleNetExamples({target: document.querySelector("#googlenet-examples")});

new RegReview({target: document.querySelector("#feature-vis-history")});

const figure = document.getElementById("optimization-and-examples");
figure.addEventListener("ready", function() {
  console.log('init opt and examples...')
  new OptAndExamples({target: document.querySelector("#optimization-and-examples")});
  console.log('inited opt and examples')
});


new ImageArray({target: document.querySelector("#steepest-descent"),
data: {
  src_class: "steepst-dir-sprite",
  icon_src_class: "steepst-dir-sprite",
  icon_x: 0,
  label_func: n => [
    "<strong>Image</strong>",
    "<strong>L<sup>∞</sup> metric</strong><br> steepest direction <d-footnote>used in adverserial work</d-footnote>",
    "<strong>L<sup>2</sup> metric</strong><br> steepest direction <d-footnote>normal gradient</d-footnote>",
    "<strong>spatially decorelated space</strong> steepest direction ",
    "<strong>fully decorelated space</strong> steepest direction "
    ][n],
  n_images: 5,
  n_icons: 16,
  sprite_size: 224, 
  size: 180,
  icon_scale: 1,
  hover_scale: 1,
  selected: 14
}});

/*new OptExplore({target: document.querySelector("#opt-explore"),
  data: {
    size: 215
  }});*/
//new OptExplore2({target: document.querySelector("#opt-explore2")});

new GradArtifacts({target: document.querySelector("#frequency-artifacts")});

var OptExploreFlex_configs = {
  OptExploreNaive: {
    configurable: ["neurons", "learning_rate"],
    icon_var_values: {jitter: 1, optimizer: 0, pyramid: 1, color: 0},
    var_values: {jitter: 0, optimizer: 0, learning_rate: 2, pyramid: 0, color: 0},
    explain_text: "Even if you carefully tune learning rate, you'll get noise. "
  },
  OptExplore: {
    configurable: ["neurons", "learning_rate", ["jitter", "otpimizer"], ["pyramid", "color"]],
    icon_var_values: {jitter: 1, optimizer: 0, pyramid: 1, color: 0},
    var_values: {jitter: 1, optimizer: 0, learning_rate: 2, pyramid: 1, color: 0},
  },
  TransformExplore: {
    configurable: ["neurons", "jitter", "random_rotate", "random_scale"],
    icon_var_values: {jitter: 2, random_rotate: 0, random_scale: 0}
  },
  PenalizeFreq: {
    configurable: ["neurons", "L1", "L2", "total_variation"],
    var_values: {L1: 0, L2: 0, total_variation: 2},
    icon_var_values: {L1: 0, L2: 0, total_variation: 2}
  }
};




var app = new OptExploreFlex({target: document.querySelector("#optimize-naive")});
app.load_spritemap("OptExplore", OptExploreFlex_configs["OptExploreNaive"])

var app = new OptExploreFlex({target: document.querySelector("#opt-explore2")});
app.load_spritemap("OptExplore", OptExploreFlex_configs["OptExplore"])


var app = new OptExploreFlex({target: document.querySelector("#regularizer-playground-robust")});
app.load_spritemap("TransformExplore", OptExploreFlex_configs["TransformExplore"])

var app = new OptExploreFlex({target: document.querySelector("#regularizer-playground-freq")});
app.load_spritemap("PenalizeFreq", OptExploreFlex_configs["PenalizeFreq"])
