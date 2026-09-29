# Evann - Quiz 1 personal website

Static HTML/CSS/JS site for EF234301 WebPro (D), Quiz 1.

## Structure

```
index.html                → /quiz1              (Homepage)
profile/index.html        → /quiz1/profile
hometown/index.html       → /quiz1/hometown
food/index.html           → /quiz1/food
tourist/index.html        → /quiz1/tourist
assets/css/style.css      → shared stylesheet
assets/js/main.js         → mobile nav toggle
assets/img/               → images (see checklist below)
```

## Images to replace

Every image below is currently a placeholder. Drop your own file in
`assets/img/` using the **exact same filename** and it will show up
automatically - no HTML changes needed.

| Filename | Used on | Suggested content |
|---|---|---|
| `profile_photo.png` | Profile | Your photo (portrait, square-ish works best) |
| `hometown_view.jpg` | Hometown | A photo of Saint-Herblain or the Loire/Nantes skyline |
| `food_petit_beurre.jpg` | Local Food | Petit-Beurre LU biscuits |
| `food_gateau_nantais.jpg` | Local Food | Gâteau nantais |
| `tourist_machines.jpg` | Tourist Places | Les Machines de l'île (Grand Éléphant) |
| `tourist_chateau.jpg` | Tourist Places | Château des Ducs de Bretagne |
| `tourist_trentemoult.jpg` | Tourist Places | Trentemoult village |

## Deploying to GitHub Pages

1. Create a repository named **`quiz1`** on GitHub (the repo name becomes
   the URL path, matching the brief's `/quiz1` requirement).
2. Push this folder's contents to the repo's `main` branch:
   ```
   git init
   git add .
   git commit -m "Quiz 1 site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/quiz1.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to
   `Deploy from a branch`, branch `main`, folder `/ (root)`, then save.
4. After a minute, your site is live at:
   ```
   https://<your-username>.github.io/quiz1/
   https://<your-username>.github.io/quiz1/profile/
   https://<your-username>.github.io/quiz1/hometown/
   https://<your-username>.github.io/quiz1/food/
   https://<your-username>.github.io/quiz1/tourist/
   ```
   This matches the required `(Your Domain)/quiz1/...` URL structure,
   with `<your-username>.github.io` as "Your Domain".
