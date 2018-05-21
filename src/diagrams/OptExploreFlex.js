// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import OptExplore from "./OptExploreFlex.html";
import RegReview from "./RegReview.html";

new RegReview({target: document.querySelector("#optexploreflex")});

/*
var configs = {
  OptExplore: {
    configurable: ["neurons", "learning_rate", ["jitter", "otpimizer"], ["pyramid", "color"]],
    icon_var_values: {jitter: 1, optimizer: 0, pyramid: 1, color: 0},
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

var article = document.querySelector('dt-article');
for (var name in configs){
  var div = document.createElement('div');
  var app = new OptExplore({target: div});
  div.app = app;
  app.load_spritemap(name, configs[name])
  article.appendChild(div);
  article.appendChild(document.createElement("br"));
}
*/
