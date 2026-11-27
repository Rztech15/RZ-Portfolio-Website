# Muhammad Ramzan Portfolio

Personal portfolio of Muhammad Ramzan. Where Mathematics Meets Technology.

Live site: https://rztech15.github.io/RZ-Portfolio-Website/

## Files

| File or folder | Purpose |
| --- | --- |
| `index.html` | The whole site (HTML, CSS and JavaScript in one file) |
| `assistant.js` | The portfolio chatbot. Edit the `KB` text to change answers |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `profile pic.jpeg` | Hero photo |
| `*-logo.png` | Project logos: `rz-ai-logo.png`, `stockflow-logo.png`, `finsight-logo.png` |
| `screenshots/` | Project screenshots: `finsight.png`, `data-agent.png`, `stockflow.png`, `skillbridge.png`, `rz-commerce.png` |
| Certificate images | `FICPFIST-2026(1).jpeg`, `FICPFIST-2026(2).jpeg`, `BZU Appreciation.jpeg`, `Code Meet.jpeg`, `CS50 Learning Milestone.jpg`, `Alison Learning Milestone.jpg` |
| `Muhammad_Ramzan_CV.pdf` | CV download |

Any image that is missing is hidden automatically, so the page never shows a broken picture.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish on GitHub Pages

```
git add .
git commit -m "Update portfolio"
git push
```

In the repository go to Settings, then Pages, and choose the main branch. The site updates a minute after each push.

## Third party services

- Three.js (3D hero) and Google Fonts load from a CDN
- The contact form opens the visitor's email app with the message filled in
