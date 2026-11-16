const experiments = [
 {id:"linear",n:"01",title:"Linear Regression",category:"Supervised",level:"Beginner",time:"20–25 min",
  description:"Understand how a model learns a straight-line relationship between input and output values.",
  aim:"To implement simple linear regression and study the relationship between an independent variable and a dependent variable.",

theory: `
<h4>Introduction</h4>
<p>Linear Regression is a supervised machine learning algorithm used to predict a continuous numerical value. It identifies the relationship between an independent variable (input) and a dependent variable (output).</p>
<h4>Mathematical Model</h4>
<p>The relationship is represented by the equation:</p>
<p><strong>y = mx + c</strong></p>
<ul>
<li>x represents the input feature.</li>
<li>y represents the predicted output.</li>
<li>m represents the slope of the line.</li>
<li>c represents the intercept.</li>
</ul>
<h4>Working Principle</h4>
<p>The algorithm studies the training observations and finds the best-fit line. It uses the least squares method to minimize the sum of squared differences between actual and predicted values.</p>
<h4>Evaluation</h4>
<p>Mean Squared Error (MSE) measures the average squared prediction error. A smaller MSE generally indicates predictions closer to the actual values.</p>
<h4>Example</h4>
<p>A model can study the relationship between students' study hours and marks to estimate marks for a given number of study hours.</p>
`,
  prerequisites:["Basic algebra and coordinate graphs","Understanding of independent and dependent variables"],
  procedure:["Study the equation y = mx + b and identify the input and target variables.","Use the sample observations provided in the lab or enter your own x and y values.","Run the model to calculate the best-fit line using least squares.","Compare actual values with predicted values and inspect the mean squared error.","Change the data and run the model again to observe how the fitted line changes."],
  outcome:"A fitted regression line, slope, intercept, predictions and mean squared error are produced from the selected dataset.",
  application:"House-price estimation, sales forecasting and trend analysis.",kind:"regression"},
 
  {id:"knn",n:"02",title:"K-Nearest Neighbours",category:"Supervised",level:"Beginner",time:"20–25 min",
  description:"Classify a new observation by examining the labels of its nearest data points.",
  aim:"To implement the K-Nearest Neighbours algorithm and classify an unknown sample using distance-based voting.",
 
theory: `
<h4>Introduction</h4>
<p>K-Nearest Neighbours (KNN) is a supervised machine learning algorithm used mainly for classification. It predicts the class of a new observation by examining nearby labelled observations.</p>
<h4>Distance Calculation</h4>
<p>Euclidean distance is commonly used to measure the distance between two points:</p>
<p><strong>d = √((x₂ − x₁)² + (y₂ − y₁)²)</strong></p>
<h4>Working Principle</h4>
<ul>
<li>Choose the value of k, representing the number of neighbours.</li>
<li>Calculate the distance from the new point to the training points.</li>
<li>Select the k nearest neighbours.</li>
<li>Count the class labels of those neighbours.</li>
<li>Assign the majority class to the new observation.</li>
</ul>
<h4>Importance of k</h4>
<p>A very small k can be sensitive to individual observations, while a larger k considers more neighbours and may produce a smoother decision. The choice of k affects classification results.</p>
<h4>Example</h4>
<p>KNN can classify a new observation into a group by comparing it with previously labelled examples.</p>
`,
  prerequisites:["Basic coordinate geometry","Understanding of labelled training data"],
  procedure:["Observe the labelled training points on the scatter plot.","Choose a value of k, the number of neighbours to consider.","Place a new test point by entering its x and y coordinates.","Run KNN to calculate distances and identify the nearest neighbours.","Observe the predicted class and compare the result for different k values."],
  outcome:"The simulation displays the predicted class, nearest neighbours and the distances used for classification.",
  application:"Pattern recognition, recommendation systems and simple classification tasks.",kind:"knn"},
 
  {id:"kmeans",n:"03",title:"K-Means Clustering",category:"Unsupervised",level:"Intermediate",time:"25–30 min",
  description:"Discover how an unsupervised algorithm groups observations based on similarity.",
  aim:"To group a dataset into k clusters using the K-Means clustering algorithm.",
 
theory: `
<h4>Introduction</h4>
<p>K-Means is an unsupervised machine learning algorithm used to divide data into groups called clusters. It discovers patterns based on similarity without requiring predefined class labels.</p>
<h4>Meaning of Centroid</h4>
<p>A centroid is the centre point of a cluster. It is calculated as the mean position of all observations assigned to that cluster.</p>
<h4>Working Principle</h4>
<ul>
<li>Select the number of clusters, represented by k.</li>
<li>Initialize k centroids.</li>
<li>Assign every observation to its nearest centroid.</li>
<li>Recalculate each centroid using the mean of its assigned observations.</li>
<li>Repeat assignment and updating until the clusters stabilize or the iteration limit is reached.</li>
</ul>
<h4>Objective</h4>
<p>K-Means aims to minimize the within-cluster sum of squared distances between observations and their assigned centroids.</p>
<h4>Example</h4>
<p>Businesses can use clustering to group customers with similar purchasing patterns for analysis and planning.</p>
`,
  prerequisites:["Basic understanding of points and distance","Difference between supervised and unsupervised learning"],
  procedure:["Load the sample two-dimensional dataset shown in the simulation.","Select the number of clusters, k.","Run the clustering process to assign points to their nearest centroids.","Observe how centroid positions change during iterations.","Change k and compare the resulting groups."],
  outcome:"The lab displays cluster assignments, centroid positions and the number of iterations performed.",
  application:"Customer segmentation, grouping documents and exploratory data analysis.",kind:"kmeans"},
 
  {id:"tree",n:"04",title:"Decision Tree Classification",category:"Supervised",level:"Intermediate",time:"25–30 min",
  description:"Explore how a tree of feature-based decisions can classify observations.",
  aim:"To understand decision tree classification through feature-based rules and evaluate predictions on a sample dataset.",
 
theory: `
<h4>Introduction</h4>
<p>A Decision Tree is a supervised machine learning algorithm used for classification and regression. It makes predictions through a sequence of decisions based on input features.</p>
<h4>Structure of a Decision Tree</h4>
<ul>
<li><strong>Root node:</strong> The starting point containing the first decision.</li>
<li><strong>Decision node:</strong> A point where a feature condition is checked.</li>
<li><strong>Branch:</strong> The outcome of a decision.</li>
<li><strong>Leaf node:</strong> The final predicted class or value.</li>
</ul>
<h4>Working Principle</h4>
<p>The algorithm divides observations into smaller groups using feature conditions. Measures such as Gini impurity and information gain can help select useful splits.</p>
<h4>Advantages</h4>
<p>Decision Trees are relatively easy to understand and interpret. Their decision paths can be followed from the root to a leaf.</p>
<h4>Example</h4>
<p>A simple teaching tree can use study hours and attendance conditions to demonstrate how a classification decision is reached.</p>
`,
  prerequisites:["Basic classification concepts","Understanding of features and target labels"],
  procedure:["Review the sample dataset and identify its features and class labels.","Select a feature condition to split the observations.","Follow the branch conditions from the root to a leaf.","Use the built-in sample rule model to classify a new observation.","Inspect the predicted class and the path followed by the observation."],
  outcome:"A rule-based prediction with the decision path and predicted class is displayed.",
  application:"Interpretable decision support, risk classification and rule-based analysis.",kind:"tree"},

  {id:"naive",n:"05",title:"Naive Bayes Classification",category:"Supervised",level:"Intermediate",time:"25–30 min",
  description:"Use Bayes' theorem to estimate class probabilities from observed features.",
  aim:"To apply the Naive Bayes classification principle and predict a class using prior and conditional probabilities.",
  
theory: `
<h4>Introduction</h4>
<p>Naive Bayes is a supervised probabilistic machine learning algorithm based on Bayes' theorem. It predicts a class by calculating the probability that an observation belongs to each possible class.</p>
<h4>Bayes' Theorem</h4>
<p><strong>P(A|B) = P(B|A) × P(A) / P(B)</strong></p>
<ul>
<li>P(A|B) is the posterior probability.</li>
<li>P(B|A) is the likelihood.</li>
<li>P(A) is the prior probability.</li>
<li>P(B) is the evidence.</li>
</ul>
<h4>Naive Assumption</h4>
<p>The algorithm assumes that features are conditionally independent given the class. This simplifies probability calculations, although the assumption may not always hold in real-world data.</p>
<h4>Working Principle</h4>
<ul>
<li>Calculate the prior probability of each class.</li>
<li>Estimate the likelihood of the observed features for each class.</li>
<li>Apply Bayes' theorem to calculate posterior probabilities.</li>
<li>Predict the class with the highest posterior probability.</li>
</ul>
<h4>Example</h4>
<p>Naive Bayes can be used to demonstrate how an email may be classified as spam or not spam based on its features.</p>
`,
  prerequisites:["Basic probability","Understanding of features and class labels"],
  procedure:["Review the class priors and feature likelihoods in the sample.","Select the observed feature values for a new sample.","Calculate the class scores using prior and conditional probabilities.","Normalize the scores to obtain posterior probabilities.","Compare the class probabilities and identify the predicted class."],
  outcome:"Posterior class probabilities and the most likely predicted class are displayed.",
  application:"Spam filtering, document categorization and simple text classification.",kind:"naive"}
];

const quizQuestions=[
 {q:"Which type of output is usually predicted by Linear Regression?",o:["A continuous numerical value","A cluster number only","A text label only","A yes/no class only"],a:0,e:"Linear Regression models a continuous target, such as price, temperature or sales."},
 {q:"K-Nearest Neighbours makes a prediction using:",o:["A fixed decision tree","The labels of nearby training samples","Only the mean of all features","Randomly selected classes"],a:1,e:"KNN finds the k closest training examples and uses their labels for classification."},
 {q:"K-Means is mainly used for:",o:["Regression","Supervised classification","Unsupervised clustering","Text translation"],a:2,e:"K-Means groups observations without requiring predefined class labels."},
 {q:"What does a leaf node represent in a classification decision tree?",o:["A dataset file","A predicted class or outcome","A distance measure","A training epoch"],a:1,e:"A leaf is the terminal node that provides the model's output."},
 {q:"Naive Bayes is based on:",o:["Bayes' theorem","Gradient descent only","Euclidean geometry only","Sorting algorithms"],a:0,e:"Naive Bayes applies Bayes' theorem with a conditional-independence assumption."}
];
const STORAGE="algofern-progress-v1";
let progress=loadProgress(), activeFilter="All", currentExperiment=null, currentSim="regression";
function loadProgress(){try{return JSON.parse(localStorage.getItem(STORAGE))||{completed:[],bestQuiz:null,attempts:0}}catch{return {completed:[],bestQuiz:null,attempts:0}}}
function saveProgress(){localStorage.setItem(STORAGE,JSON.stringify(progress));updateProgress()}
function updateProgress(){
 const done=progress.completed.length, pct=Math.round(done/experiments.length*100);
 document.getElementById("statCompleted").textContent=done;
 document.getElementById("statQuiz").textContent=progress.bestQuiz===null?"—":progress.bestQuiz+"%";
 document.getElementById("progressText").textContent=`${done} of ${experiments.length} completed`;
 document.getElementById("progressPercent").textContent=pct+"%";
 document.getElementById("progressBar").style.width=pct+"%";
}
function renderExperiments(){
 const list=experiments.filter(e=>activeFilter==="All"||e.category===activeFilter);
 document.getElementById("experimentCount").textContent=list.length+" experiments";
 document.getElementById("experimentGrid").innerHTML=list.map(e=>`
 <article class="experiment-card"><div class="experiment-card-top"><span class="experiment-number">EXPERIMENT ${e.n}</span><span class="level ${e.level==="Intermediate"?"intermediate":""}">${e.level}</span></div>
 <h3>${e.title}</h3><p>${e.description}</p><div class="experiment-meta"><span>◷ ${e.time}</span><span>${e.category} learning</span></div>
 <button data-open-exp="${e.id}">${progress.completed.includes(e.id)?"✓ Completed · View practical":"View practical guide →"}</button></article>`).join("");
 document.querySelectorAll("[data-open-exp]").forEach(b=>b.addEventListener("click",()=>openExperiment(b.dataset.openExp)));
}
document.getElementById("experimentFilters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll(".filter-pill").forEach(x=>x.classList.toggle("selected",x===b));renderExperiments()});
function showPage(pageId) {
  document.querySelectorAll("main > .page-section").forEach(section => {
    section.classList.remove("active-page");
  });

  const page = document.getElementById(pageId);
  if (page) page.classList.add("active-page");

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${pageId}`
    );
  });

  document.getElementById("topNav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openExperiment(id) {
  currentExperiment = experiments.find(e => e.id === id);
  if (!currentExperiment) return;

  const e = currentExperiment;

  document.getElementById("experimentDetail").innerHTML = `
    <div class="detail-head">
      <div class="eyebrow">EXPERIMENT ${e.n} · ${e.category.toUpperCase()} LEARNING</div>
      <h1>${e.title}</h1>
      <p>${e.description}</p>
      <div class="detail-badges">
        <span>${e.level}</span>
        <span>${e.time}</span>
        <span>Interactive practical</span>
      </div>
    </div>

    <div class="detail-columns">
      <div>
        <div class="manual-card"><h3>1. Aim</h3><p>${e.aim}</p></div>
        <div class="manual-card">
           <h3>2. Theory</h3>
          <div class="theory-content">${e.theory}</div>
        </div>
        <div class="manual-card">
          <h3>3. Prerequisites</h3>
          <ul>${e.prerequisites.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
      </div>

      <div>
        <div class="manual-card">
          <h3>4. Procedure</h3>
          <ol>${e.procedure.map(x => `<li>${x}</li>`).join("")}</ol>
        </div>
        <div class="manual-card">
          <h3>5. Expected Outcome</h3><p>${e.outcome}</p>
          <h3>6. Real-world Applications</h3><p>${e.application}</p>
        </div>
      </div>

      <div class="lab-card">
        <div class="eyebrow">VIRTUAL EXPERIMENT WORKBENCH</div>
        <h2>7. Perform the Experiment</h2>
        <p class="muted small">
          Select your dataset and model, review the configuration,
          and run the experiment.
        </p>

        ${renderLabControls(e)}

        <h3>8. Results</h3>
        <div id="experimentOutput" class="result-box">
          Select your options and run the experiment to see results.
        </div>

        <h3 class="visual-heading">9. Graphs and Visualizations</h3>
        <div id="experimentPlot" class="plot-wrap hidden">
          <canvas id="experimentCanvas" width="800" height="300"></canvas>
        </div>
        <div id="visualExplanation" class="result-box">
          The visualization and its explanation will appear here after running.
        </div>

        <h3>10. Observation and Conclusion</h3>
        <div id="experimentConclusion" class="result-box">
          Your observation and conclusion will appear after the experiment.
        </div>

        <div class="completion-row">
          <span class="muted small">You can repeat this practical anytime.</span>
          <div>
             <button class="complete-button" id="completeExperiment">
                ${progress.completed.includes(e.id) ? "✓ Completed" : "Mark as completed"}
             </button>
             <button class="complete-button" id="resetExperiment">↻ Reset</button>
          </div>
        </div>
      </div>
    </div>
  `;

  showPage("experiment-detail");

  document.getElementById("runExperiment").addEventListener("click", () => {
    runExperiment(e);
  });

  document.getElementById("resetExperiment").addEventListener("click", () => {
  progress.completed = progress.completed.filter(id => id !== e.id);
  saveProgress();
  renderExperiments();
  openExperiment(e.id);
  });

  document.getElementById("completeExperiment").addEventListener("click", () => {
  if (!progress.completed.includes(e.id)) {
    progress.completed.push(e.id);
    saveProgress();
    renderExperiments();
  }
  document.getElementById("completeExperiment").textContent = "✓ Completed";
});

  history.replaceState(null, "", "#experiment-detail");
}
document.getElementById("backToExperiments").addEventListener("click", () => {
  currentExperiment = null;
  history.replaceState(null, "", "#experiments");
  showPage("experiments");
});


function renderLabControls(e) {
  const datasets = {
    linear: {
      name: "Student Study Hours and Marks",
      headers: ["Study Hours", "Marks"],
      rows: [[1,35],[2,40],[3,50],[4,55],[5,65],[6,75]],
      source: "Built-in educational sample"
    },
    knn: {
      name: "Student Performance Groups",
      headers: ["Feature X", "Feature Y", "Class"],
      rows: knnPoints().map(p => [p.x,p.y,p.c]),
      source: "Built-in classification sample"
    },
    kmeans: {
      name: "Sample Customer Groups",
      headers: ["Feature X", "Feature Y"],
      rows: clusterPoints().map(p => [p.x,p.y]),
      source: "Built-in clustering sample"
    },
    tree: {
      name: "Student Performance",
      headers: ["Study Hours", "Attendance (%)", "Outcome"],
      rows: [[2,60,"Support"],[3,65,"Support"],[4,75,"Pass"],[5,80,"Pass"],[6,90,"Pass"]],
      source: "Built-in educational sample"
    },
    naive: {
      name: "Sample Email Messages",
      headers: ["Contains Offer Keyword", "Known Sender", "Class"],
      rows: [["Yes","No","Spam"],["Yes","Yes","Spam"],["No","Yes","Not Spam"],["No","No","Not Spam"]],
      source: "Built-in text classification sample"
    }
  };

  const d = datasets[e.kind];

  const table = `
    <div class="dataset-heading">
      <strong>${d.name}</strong>
      <span class="muted small">${d.rows.length} sample records</span>
    </div>
    <div class="dataset-table-wrap">
      <table class="dataset-table">
        <thead><tr>${d.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>
          ${d.rows.map(row =>
            `<tr>${row.map(v => `<td>${v}</td>`).join("")}</tr>`
          ).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted small">Dataset type: ${d.source}. These are the exact sample records used by this practical.</p>
    <a href="https://archive.ics.uci.edu/datasets"
       target="_blank" rel="noopener noreferrer" class="text-link">
       Explore public ML datasets at UCI ↗
    </a>
  `;

  let controls = "";

  if (e.kind === "knn") {
    controls = `
      <div class="control-group">
        <label>Number of neighbours (k)</label>
        <input id="knnK" type="number" min="1" max="7" value="3">
      </div>
      <div class="control-group">
        <label>Test point X</label>
        <input id="knnX" type="number" value="5">
      </div>
      <div class="control-group">
        <label>Test point Y</label>
        <input id="knnY" type="number" value="5">
      </div>`;
  } else if (e.kind === "kmeans") {
    controls = `
      <div class="control-group">
        <label>Number of clusters (k)</label>
        <select id="kmK">
          <option value="2">2</option>
          <option value="3" selected>3</option>
          <option value="4">4</option>
        </select>
      </div>`;
  } else if (e.kind === "tree") {
    controls = `
      <div class="control-group">
        <label>Study hours</label>
        <input id="treeHours" type="number" min="0" max="12" value="5">
      </div>
      <div class="control-group">
        <label>Attendance (%)</label>
        <input id="treeAttendance" type="number" min="0" max="100" value="80">
      </div>`;
  } else if (e.kind === "naive") {
    controls = `
      <div class="control-group">
        <label>Contains offer keyword?</label>
        <select id="nbKeyword">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div class="control-group">
        <label>Known sender?</label>
        <select id="nbSender">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>`;
  }

  const modelNames = {
    linear: "Linear Regression",
    knn: "K-Nearest Neighbours",
    kmeans: "K-Means Clustering",
    tree: "Decision Tree",
    naive: "Naive Bayes"
  };

  return `
    <div class="dataset-panel">
      <h3>Dataset Preview</h3>
      ${table}
    </div>

    <div class="lab-controls">
      <div class="control-group">
        <label>Selected model</label>
        <input value="${modelNames[e.kind]}" readonly>
      </div>
      ${controls}
      <button class="run-button" id="runExperiment" type="button">
        Run Experiment
      </button>
    </div>
  `;
}

function runExperiment(e) {
  const out = document.getElementById("experimentOutput");
  const plot = document.getElementById("experimentPlot");
  const visual = document.getElementById("visualExplanation");
  const conclusion = document.getElementById("experimentConclusion");

  try {
    if (e.kind === "regression") {
      const pts = [[1,35],[2,40],[3,50],[4,55],[5,65],[6,75]];
      const fit = linearFit(pts);
      const prediction = fit.m * 7 + fit.b;
      const mse = pts.reduce(
        (s,p) => s + (p[1] - (fit.m*p[0] + fit.b)) ** 2, 0
      ) / pts.length;

      out.innerHTML = `
        <strong>Experiment completed successfully.</strong><br>
        Best-fit equation: y = ${fit.m.toFixed(2)}x + ${fit.b.toFixed(2)}<br>
        Predicted marks for 7 study hours: ${prediction.toFixed(2)}<br>
        Mean Squared Error: ${mse.toFixed(2)}
      `;

      plot.classList.remove("hidden");
      drawPlot("experimentCanvas", pts, fit);

      visual.textContent =
        "The graph displays the six dataset observations and the best-fit regression line.";
      conclusion.textContent =
        "The model shows a positive relationship between study hours and marks in this sample. The prediction is an estimate, not a guaranteed student result.";

    } else if (e.kind === "knn") {
      const k = Math.max(1, Math.min(7,
        Number(document.getElementById("knnK").value) || 3
      ));
      const x = Number(document.getElementById("knnX").value);
      const y = Number(document.getElementById("knnY").value);

      const pts = knnPoints()
        .map(p => ({...p, d: Math.hypot(p.x-x,p.y-y)}))
        .sort((a,b) => a.d-b.d);

      const near = pts.slice(0,k);
      const a = near.filter(p => p.c === "A").length;
      const b = near.filter(p => p.c === "B").length;
      const winner = a >= b ? "A" : "B";

      out.innerHTML = `
        <strong>Predicted class: ${winner}</strong><br>
        Neighbours considered: ${k}<br>
        Class A votes: ${a}<br>
        Class B votes: ${b}<br>
        Nearest distances: ${near.map(p => p.d.toFixed(2)).join(", ")}
      `;

      plot.classList.remove("hidden");
      drawScatter("experimentCanvas", knnPoints(), {x,y,near});

      visual.textContent =
        "The scatter plot shows the training points and the new test point. Nearby points determine the majority vote.";
      conclusion.textContent =
        `The test point was assigned to Class ${winner} because that class received the most votes among its ${k} nearest neighbours.`;

    } else if (e.kind === "kmeans") {
      const k = Number(document.getElementById("kmK").value);
      const pts = clusterPoints();
      const res = kmeans(pts,k);

      out.innerHTML = `
        <strong>Clustering completed successfully.</strong><br>
        Number of clusters: ${k}<br>
        Iterations: ${res.iterations}<br>
        ${res.centroids.map((c,i) =>
          `Cluster ${i+1}: ${res.groups[i].length} observations; centroid (${c.x.toFixed(2)}, ${c.y.toFixed(2)})`
        ).join("<br>")}
      `;

      plot.classList.remove("hidden");
      drawClusters("experimentCanvas",pts,res);

      visual.textContent =
        "Each coloured group represents a cluster. The outlined squares represent the final cluster centroids.";
      conclusion.textContent =
        `The algorithm grouped ${pts.length} observations into ${k} clusters based on their distances from the centroids.`;

      

    } else if (e.kind === "tree") {
      const h = Number(document.getElementById("treeHours").value);
      const a = Number(document.getElementById("treeAttendance").value);
      const pass = h >= 4 && a >= 70;

      out.innerHTML = `
        <strong>Predicted outcome: ${pass ? "Likely to pass" : "Needs additional support"}</strong><br>
        Study hours: ${h}<br>
        Attendance: ${a}%<br>
        Decision path: ${h >= 4 ? "Study hours ≥ 4" : "Study hours < 4"}
        → ${a >= 70 ? "Attendance ≥ 70%" : "Attendance < 70%"}
      `;

      plot.classList.remove("hidden");
      drawBars("experimentCanvas", ["Study hours","Attendance"], [h,a],
        "Student input values");

      visual.textContent =
        "The bars display the two input features used by the sample decision rule.";
      conclusion.textContent =
        "The sample rule checks study hours and attendance to produce a classification. This is an illustrative rule-based demonstration, not a trained decision tree.";

    } else if (e.kind === "naive") {
      const kw = document.getElementById("nbKeyword").value === "yes";
      const sender = document.getElementById("nbSender").value === "yes";

      const likelihood = kw ? (sender ? .8 : .65) : (sender ? .25 : .08);
      const spam = .4 * likelihood;
      const ham = .6 * (kw ? (sender ? .15 : .35) : (sender ? .75 : .92));
      const total = spam + ham;
      const ps = spam / total;
      const ph = ham / total;

      out.innerHTML = `
        <strong>Predicted class: ${ps > ph ? "Spam" : "Not Spam"}</strong><br>
        Spam probability: ${(ps*100).toFixed(1)}%<br>
        Not Spam probability: ${(ph*100).toFixed(1)}%
      `;

      plot.classList.remove("hidden");
      drawBars("experimentCanvas", ["Spam","Not Spam"],
        [ps*100,ph*100], "Posterior probabilities (%)");

      visual.textContent =
        "The bars compare the estimated posterior probabilities of the two classes.";
      conclusion.textContent =
        `The sample probability calculation favours ${ps > ph ? "Spam" : "Not Spam"}. The likelihood values are illustrative teaching values, not probabilities trained from a full email dataset.`;
    }
  } catch (error) {
    out.innerHTML = `<strong>Experiment could not run.</strong><br>${error.message}`;
    console.error(error);
  }
}


function linearFit(pts){const n=pts.length,sx=pts.reduce((s,p)=>s+p[0],0),sy=pts.reduce((s,p)=>s+p[1],0),sxy=pts.reduce((s,p)=>s+p[0]*p[1],0),sx2=pts.reduce((s,p)=>s+p[0]*p[0],0),m=(n*sxy-sx*sy)/(n*sx2-sx*sx);return {m,b:(sy-m*sx)/n}}
function knnPoints(){return [{x:1,y:2,c:"A"},{x:2,y:3,c:"A"},{x:2,y:1,c:"A"},{x:3,y:4,c:"A"},{x:8,y:8,c:"B"},{x:9,y:7,c:"B"},{x:7,y:9,c:"B"},{x:8,y:6,c:"B"}]}
function clusterPoints(){return [{x:1,y:2},{x:2,y:1},{x:2,y:3},{x:3,y:2},{x:7,y:7},{x:8,y:6},{x:8,y:8},{x:9,y:7},{x:4,y:8},{x:5,y:9},{x:4,y:7},{x:5,y:8}]}
function kmeans(pts,k){let cs=pts.slice(0,k).map(p=>({...p})),groups=[],iterations=0;for(;iterations<30;iterations++){groups=pts.map(()=>0);pts.forEach((p,i)=>{let best=0,dist=Infinity;cs.forEach((c,j)=>{let d=Math.hypot(p.x-c.x,p.y-c.y);if(d<dist){dist=d;best=j}});groups[i]=best});let next=cs.map((c,j)=>{let g=pts.filter((p,i)=>groups[i]===j);return g.length?{x:g.reduce((s,p)=>s+p.x,0)/g.length,y:g.reduce((s,p)=>s+p.y,0)/g.length}:c});let stable=next.every((c,i)=>Math.hypot(c.x-cs[i].x,c.y-cs[i].y)<.001);cs=next;if(stable)break}return {centroids:cs,groups:cs.map((_,j)=>pts.filter((p,i)=>groups[i]===j)),assignments:groups,iterations:iterations+1}}
function setupCanvas(id){const c=document.getElementById(id),ctx=c.getContext("2d");ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle="#fbfcf9";ctx.fillRect(0,0,c.width,c.height);ctx.strokeStyle="#e4ebe0";ctx.lineWidth=1;for(let x=40;x<780;x+=80){ctx.beginPath();ctx.moveTo(x,15);ctx.lineTo(x,275);ctx.stroke()}for(let y=25;y<280;y+=50){ctx.beginPath();ctx.moveTo(35,y);ctx.lineTo(780,y);ctx.stroke()}return {c,ctx}}
function drawPlot(id,pts,fit){const {ctx}=setupCanvas(id),X=x=>45+x*105,Y=y=>260-y*27;ctx.strokeStyle="#527a50";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(X(.5),Y(fit.m*.5+fit.b));ctx.lineTo(X(6.8),Y(fit.m*6.8+fit.b));ctx.stroke();pts.forEach(p=>{ctx.fillStyle="#8aab7e";ctx.beginPath();ctx.arc(X(p[0]),Y(p[1]),6,0,Math.PI*2);ctx.fill()});ctx.fillStyle="#435340";ctx.font="12px sans-serif";ctx.fillText("Input feature (x)",340,296)}
function drawScatter(id,pts,test){const {ctx}=setupCanvas(id),X=x=>40+x*70,Y=y=>270-y*25;pts.forEach(p=>{ctx.fillStyle=p.c==="A"?"#789b70":"#b39a6e";ctx.beginPath();ctx.arc(X(p.x),Y(p.y),7,0,7);ctx.fill()});ctx.strokeStyle="#263d2a";ctx.lineWidth=3;ctx.beginPath();ctx.arc(X(test.x),Y(test.y),11,0,7);ctx.stroke();ctx.fillStyle="#253b29";ctx.font="12px sans-serif";ctx.fillText("Test point",X(test.x)+14,Y(test.y)-8)}
function drawClusters(id,pts,res){const {ctx}=setupCanvas(id),colors=["#668b60","#b39a6e","#8c7aa6","#739aa0"];const X=x=>40+x*70,Y=y=>270-y*25;pts.forEach((p,i)=>{ctx.fillStyle=colors[res.assignments[i]%colors.length];ctx.beginPath();ctx.arc(X(p.x),Y(p.y),7,0,7);ctx.fill()});res.centroids.forEach((p,i)=>{ctx.strokeStyle=colors[i%colors.length];ctx.lineWidth=3;ctx.strokeRect(X(p.x)-9,Y(p.y)-9,18,18)})}
  function drawBars(id, labels, values, heading) {
  const {ctx} = setupCanvas(id);

  ctx.fillStyle = "#435340";
  ctx.font = "bold 15px sans-serif";
  ctx.fillText(heading, 40, 25);

  const max = Math.max(100, ...values);
  const barWidth = 110;
  const gap = 100;

  labels.forEach((label,i) => {
    const x = 170 + i * (barWidth + gap);
    const height = (values[i] / max) * 170;

    ctx.fillStyle = i === 0 ? "#789b70" : "#b39a6e";
    ctx.fillRect(x, 235-height, barWidth, height);

    ctx.fillStyle = "#253b29";
    ctx.font = "13px sans-serif";
    ctx.fillText(label, x, 260);
    ctx.fillText(values[i].toFixed(1), x+25, 220-height);
  });
}
function renderSimulation(){
 const panel=document.getElementById("simulationPanel");
 if(currentSim==="regression")panel.innerHTML=`<div class="eyebrow">SIMULATION 01</div><h2>Linear regression playground</h2><p>Linear regression finds a line that best represents the relationship between input and output values. The least-squares method chooses the line with the smallest sum of squared residuals.</p><div class="sim-instructions"><strong>How to use:</strong> Select a sample dataset and click Run model. Compare the fitted line, equation and error value. Try another dataset to see how the relationship changes.</div><div class="lab-controls"><div class="control-group"><label>Sample dataset</label><select id="simRegData"><option value="1">Positive relationship</option><option value="2">Noisy positive relationship</option><option value="3">Negative relationship</option></select></div><button class="run-button" id="runSim">Run model</button></div><div class="plot-wrap"><canvas id="simCanvas" width="800" height="300"></canvas></div><div class="sim-output" id="simOutput">Run the model to see its output.</div>`;
 if(currentSim==="knn")panel.innerHTML=`<div class="eyebrow">SIMULATION 02</div><h2>K-nearest neighbours playground</h2><p>KNN classifies a new point by looking at the labels of its nearest training examples. The value of k controls how many neighbours vote.</p><div class="sim-instructions"><strong>How to use:</strong> Choose k and a test point location. Run the classifier and inspect the nearest neighbours and their class votes.</div><div class="lab-controls"><div class="control-group"><label>Neighbours (k)</label><input id="simK" type="number" min="1" max="7" value="3"></div><div class="control-group"><label>Point X</label><input id="simX" type="number" min="0" max="10" value="5"></div><div class="control-group"><label>Point Y</label><input id="simY" type="number" min="0" max="10" value="5"></div><button class="run-button" id="runSim">Classify</button></div><div class="plot-wrap"><canvas id="simCanvas" width="800" height="300"></canvas></div><div class="sim-output" id="simOutput">Run the classifier to see its output.</div>`;
 if(currentSim==="kmeans")panel.innerHTML=`<div class="eyebrow">SIMULATION 03</div><h2>K-means clustering playground</h2><p>K-Means groups points into clusters. It repeatedly assigns each point to its nearest centroid and updates the centroid to the mean position of its assigned points.</p><div class="sim-instructions"><strong>How to use:</strong> Select the number of clusters and run the algorithm. The coloured dots show cluster membership; outlined squares show final centroids.</div><div class="lab-controls"><div class="control-group"><label>Number of clusters (k)</label><select id="simKmK"><option>2</option><option selected>3</option><option>4</option></select></div><button class="run-button" id="runSim">Run clustering</button></div><div class="plot-wrap"><canvas id="simCanvas" width="800" height="300"></canvas></div><div class="sim-output" id="simOutput">Run clustering to see the final groups.</div>`;
 document.getElementById("runSim").addEventListener("click",runSimulation);
}
function runSimulation(){
 const out=document.getElementById("simOutput");
 if(currentSim==="regression"){const type=Number(document.getElementById("simRegData").value),sets=[[[1,2],[2,3],[3,5],[4,4],[5,7],[6,8]],[[1,3],[2,5],[3,4],[4,7],[5,6],[6,8]],[[1,9],[2,8],[3,7],[4,6],[5,5],[6,3]]],pts=sets[type-1],fit=linearFit(pts),mse=pts.reduce((s,p)=>s+(p[1]-(fit.m*p[0]+fit.b))**2,0)/pts.length;drawPlot("simCanvas",pts,fit);out.innerHTML=`<strong>Model fitted.</strong> Equation: y = ${fit.m.toFixed(3)}x + ${fit.b.toFixed(3)}. Mean squared error: ${mse.toFixed(3)}. Predicted y at x = 7: ${(fit.m*7+fit.b).toFixed(2)}.`}
 if(currentSim==="knn"){const k=Math.max(1,Math.min(7,Number(document.getElementById("simK").value)||3)),x=Number(document.getElementById("simX").value),y=Number(document.getElementById("simY").value),pts=knnPoints().map(p=>({...p,d:Math.hypot(p.x-x,p.y-y)})).sort((a,b)=>a.d-b.d),near=pts.slice(0,k),a=near.filter(p=>p.c==="A").length,b=near.filter(p=>p.c==="B").length,w=a>=b?"A":"B";drawScatter("simCanvas",knnPoints(),{x,y,near});out.innerHTML=`<strong>Predicted class: ${w}</strong>. Class A votes: ${a}; Class B votes: ${b}. Neighbour distances: ${near.map(p=>p.d.toFixed(2)).join(", ")}.`}
 if(currentSim==="kmeans"){const k=Number(document.getElementById("simKmK").value),pts=clusterPoints(),res=kmeans(pts,k);drawClusters("simCanvas",pts,res);out.innerHTML=`<strong>Clustering completed in ${res.iterations} iterations.</strong> ${res.groups.map((g,i)=>`Cluster ${i+1}: ${g.length} observations`).join(" · ")}.`}
}
document.getElementById("simulationList").addEventListener("click",e=>{const b=e.target.closest("[data-sim]");if(!b)return;currentSim=b.dataset.sim;document.querySelectorAll(".simulation-choice").forEach(x=>x.classList.toggle("selected",x===b));renderSimulation()});
function renderQuiz(){document.getElementById("quizShell").innerHTML=`<div class="quiz-top"><div><strong>Machine Learning Fundamentals</strong><div class="muted small">5 questions · Select one answer per question</div></div><span class="level">Practice quiz</span></div><div class="quiz-progress"><span id="quizProgress"></span></div><form id="quizForm">${quizQuestions.map((q,i)=>`<div class="question-card"><h3>${i+1}. ${q.q}</h3>${q.o.map((o,j)=>`<label class="option-label"><input type="radio" name="q${i}" value="${j}"><span>${o}</span></label>`).join("")}</div>`).join("")}<button class="run-button quiz-submit" type="submit">Submit answers</button></form><div id="quizResult"></div>`;document.querySelectorAll('#quizForm input').forEach(x=>x.addEventListener("change",()=>{const n=document.querySelectorAll('#quizForm input:checked').length;document.getElementById("quizProgress").style.width=(n/quizQuestions.length*100)+"%"}));document.getElementById("quizForm").addEventListener("submit",submitQuiz)}
function submitQuiz(ev){ev.preventDefault();const data=new FormData(ev.target);let score=0;quizQuestions.forEach((q,i)=>{if(Number(data.get("q"+i))===q.a)score++});const pct=Math.round(score/quizQuestions.length*100);progress.attempts++;progress.bestQuiz=progress.bestQuiz===null?pct:Math.max(progress.bestQuiz,pct);saveProgress();document.getElementById("quizResult").innerHTML=`<div class="quiz-feedback"><h3>Your score: ${score}/${quizQuestions.length} (${pct}%)</h3><p>${pct>=80?"Excellent understanding.":pct>=60?"Good work. Review the explanations below.":"Keep practising. Review the concepts and try again."}</p>${quizQuestions.map((q,i)=>`<p class="${Number(data.get("q"+i))===q.a?"right":"wrong"}"><strong>Q${i+1}: ${Number(data.get("q"+i))===q.a?"Correct":"Review"}.</strong> ${q.e}</p>`).join("")}<button class="complete-button" id="retryQuiz">Try again</button></div>`;document.getElementById("retryQuiz").onclick=renderQuiz}
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("topNav").classList.toggle("open"));


function handleNavigation() {
  const pageId = location.hash.replace("#", "") || "home";

  const allowedPages = ["home", "experiments", "simulations", "quiz"];

  if (pageId === "experiment-detail" && currentExperiment) {
    showPage("experiment-detail");
  } else if (allowedPages.includes(pageId)) {
    showPage(pageId);
  } else {
    showPage("home");
  }
}

window.addEventListener("hashchange", handleNavigation);

document.getElementById("year").textContent=new Date().getFullYear();

renderExperiments();
renderSimulation();
renderQuiz();
updateProgress();

handleNavigation();