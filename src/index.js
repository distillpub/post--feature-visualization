import GoogleNetExamples     from "./diagrams/GoogleNetExamples.html";
import ImageArray            from "./diagrams/ImageArray.html";
import OptExplore            from "./diagrams/OptExplore.html";
import OptExplore2           from "./diagrams/OptExplore2.html";
import OptExploreFlex        from "./diagrams/OptExploreFlex.html";
import GradArtifacts         from "./diagrams/GradArtifacts.html";
import RegReview             from "./diagrams/RegReview.html";
import OptAndExamples        from "./diagrams/OptAndExamples.html";
import LinearCombinations    from "./diagrams/LinearCombinations.html";
import OptProgress           from "./diagrams/OptProgress.html";
import ExamplesOptComparison from "./diagrams/ExamplesOptComparison.html";
import RandomExamplesOpt     from "./diagrams/RandomExamplesOpt.html";



// load GoogleNetExamples immediately

new GoogleNetExamples({target: document.getElementById("googlenet-examples")});

// sprite driven figures

{
  const figure = document.getElementById("example-optimization-comparison");
  figure.addEventListener("ready", function() {
    new ExamplesOptComparison({target: figure});
  });
}

{
  const figure = document.getElementById("random-optimization-and-examples");
  figure.addEventListener("ready", function() {
    new RandomExamplesOpt({target: figure});
  });
}

{
  const figure = document.getElementById("opt-progress")
  figure.addEventListener("ready", function() {
    new OptProgress({target: figure});
  });
}

{
  const figure = document.getElementById("linear-combinations")
  figure.addEventListener("ready", function() {
    new LinearCombinations({target: figure});
  });
}

{
  const figure = document.getElementById("feature-vis-history")
  figure.addEventListener("ready", function() {
    new RegReview({target: figure});
  });
}

{
  const figure = document.getElementById("optimization-and-examples");
  figure.addEventListener("ready", function() {
    new OptAndExamples({target: figure});
  });
}

{
  const figure = document.getElementById("frequency-artifacts");
  figure.addEventListener("ready", function() {
    new GradArtifacts({target: figure});
  });
}

// image arrays

{
  const figure = document.getElementById("steepest-descent");
  figure.addEventListener("ready", function() {
    new ImageArray({target: figure,
      data: {
        src_class: "steepst-dir-sprite",
        icon_src_class: "steepst-dir-sprite",
        icon_x: 0,
        label_func: (n, i) => [
          "<strong>Image</strong>",
          "<strong>L<sup>∞</sup> metric</strong><br> steepest direction <d-footnote>used in adverserial work</d-footnote>",
          "<strong>L<sup>2</sup> metric</strong> (= normal gradient)<br> steepest direction <d-footnote>normal gradient</d-footnote>",
          "<strong>spatially decorelated space</strong><br> steepest direction ",
          "<strong>fully decorelated space</strong><br> steepest direction "
          ][n],
        n_images: 5,
        n_icons: 16,
        sprite_size: 224, 
        size: 180,
        icon_scale: 1,
        hover_scale: 1,
        selected: 14,
        backwards: true
      }
    });
  });
}

{
  const figure = document.getElementById("interpolation");
  figure.addEventListener("ready", function() {
    new ImageArray({target: figure,
    data: {
      src_class: "interpolation-sprite",
      icon_src_class: "interpolation-sprite",
      icon_x: 0,
      label_func: (n, i) => {
        if (n == 0) {
          return [
            "Layer 4a, Unit 476",
            "Layer 4a, Unit 476",
            "Layer 4a, Unit 460",
            "Layer 4b, Unit 475",
            "Layer 4c, Unit 369",
            "Layer 4d, Unit 503",
            "Layer 4d, Unit 503",
            "Layer 5a, Unit 810",
            "Layer 5a, Unit 810",
          ][i];
        } else if (n == 5) {
          return [
            "Layer 4a, Unit 455",
            "Layer 4a, Unit 460",
            "Layer 4a, Unit 501",
            "Layer 4a, Unit 476",
            "Layer 4a, Unit 476",
            "Layer 5a, Unit 791",
            "Layer 5a, Unit 810",
            "Layer 5a, Unit 200",
            "Layer 5a, Unit 791",
          ][i];
        } else {
          return "";
        }
      },
      n_images: 6,
      n_icons: 9,
      sprite_size: 128, 
      size: 128,
      icon_scale: 1,
      hover_scale: 1,
      selected: 1,
      backwards: false
    }});
  });
}

// optimization explore widgets

const OptExploreFlex_configs = {
  OptExploreNaive: {
    configurable: ["neurons", "learning_rate"],
    icon_var_values: { default_transforms: 1, pyramid: 1, color: 0},
    var_values: { default_transforms: 0, learning_rate: 3, pyramid: 0, color: 0},
    explain_text: "Even if you carefully tune learning rate, you'll get noise.",
    config: require('../static/images/OptExplore.json')
  },
  OptExplore: {
    configurable: ["neurons", "learning_rate", ["pyramid", "color"], "default_transforms"],
    icon_var_values: {default_transforms: 1, pyramid: 1, color: 0},
    var_values: {default_transforms: 1, learning_rate: 2, pyramid: 1, color: 1},
    config: require('../static/images/OptExplore.json')
  },
  TransformExplore: {
    configurable: ["neurons", "jitter", "random_rotate", "random_scale"],
    icon_var_values: {jitter: 3, random_rotate: 2, random_scale: 2},
    var_values: {jitter: 3, random_rotate: 2, random_scale: 2},
    config: require('../static/images/TransformExplore.json')
  },
  PenalizeFreq: {
    configurable: ["neurons", "l1", "tv", "blur"],
    var_values: {l1: 1, tv: 3, blur: 3},
    icon_var_values: {l1: 1, tv: 3, blur: 3},
    config: require('../static/images/PenalizeFreq.json')
  }
};

console.log(OptExploreFlex_configs)
{
  const figure = document.getElementById("optimize-naive");
  figure.addEventListener("ready", function() {
    const app = new OptExploreFlex({target: figure});
    app.load_spritemap("OptExplore", OptExploreFlex_configs.OptExploreNaive)
  });
}

{
  const figure = document.getElementById("opt-explore2");
  figure.addEventListener("ready", function() {
    const app = new OptExploreFlex({target: figure});
    app.load_spritemap("OptExplore", OptExploreFlex_configs.OptExplore)
  });
}

{
  const figure = document.getElementById("regularizer-playground-robust");
  figure.addEventListener("ready", function() {
    const app = new OptExploreFlex({target: figure});
    app.load_spritemap("TransformExplore", OptExploreFlex_configs.TransformExplore)
  });
}

{
  const figure = document.getElementById("regularizer-playground-freq");
  figure.addEventListener("ready", function() {
    const app = new OptExploreFlex({target: figure});
    app.load_spritemap("PenalizeFreq", OptExploreFlex_configs.PenalizeFreq)
  });
}
