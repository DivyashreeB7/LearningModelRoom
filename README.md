# LearningModelRoom — Machine Learning Virtual Laboratory

A browser-based educational virtual lab with a soft pista-green visual theme.

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a modern browser.

No installation, account, database, or API key is required for the current version.

For a local development server (optional):
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Included
- Responsive top navigation and homepage
- Five experiment manuals: Linear Regression, KNN, K-Means, Decision Tree, Naive Bayes
- Interactive browser-calculated practicals
- Three standalone algorithm simulations
- Five-question selectable MCQ quiz with scoring and explanations
- Browser-local progress tracking using localStorage
- Learning resources and mobile navigation

## Progress and privacy
No sign-in is used. Experiment completion and best quiz score are stored in the current browser using localStorage. This means progress stays on the same browser/device and is not synchronized between devices. Clearing browser site data can erase this progress.

## Important academic note
The Decision Tree and Naive Bayes practicals use small illustrative teaching examples/rules. They are not trained on a real-world dataset and should not be presented as production predictive models. Linear Regression, KNN and K-Means perform calculations on the included sample data.

## Deployment
This is a static website and can be deployed to GitHub Pages, Netlify, or another static hosting service. Deployment configuration is intentionally not shown on the public website.
