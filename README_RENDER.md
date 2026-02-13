# Deploying this app to Render

Quick steps to deploy the Flask app located in `VDay/Valentine_app` on Render.

Prerequisites:
- A GitHub repository containing this `VDay` folder (or any Git remote).
- A Render account (https://render.com).

Recommended Render setup (connect GitHub):

1. Create a GitHub repo and push this project (see commands below).
2. In Render, click **New → Web Service** and connect your GitHub repo.
3. Select the branch (e.g. `main`) and set:
   - **Root**: `/` (project root where `Procfile` and `requirements.txt` live)
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn -w 4 -b 0.0.0.0:$PORT Valentine_app.app:app`
   - **Environment**: Python (choose a 3.x matching `requirements.txt`)
4. Review and create the service. Render will build and start the app.

Alternative: deploy using the provided `Dockerfile` by choosing **Web Service → Docker** and letting Render build from the `Dockerfile`.

Local push commands (run from repository root):

```bash
cd VDay
git init
git add .
git commit -m "Initial: Flask app + deployment files"
git branch -M main
git remote add origin <YOUR_GIT_REMOTE_URL>
git push -u origin main
```

After pushing, connect the repo in Render and trigger a deploy.

Files of interest:
- [requirements.txt](requirements.txt)
- [Procfile](Procfile)
- [Dockerfile](Dockerfile)
