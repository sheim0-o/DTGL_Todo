# Send to GitHub new commit
read -p "Введите название коммита: " commit_message
git add .
git commit -m "$commit_message"
git push origin main

# Build project
tsc && vite build

# Update docker image
docker build --rm --pull -t dtgl_test_todo .

# To launch the container, type 'docker run --rm -p 3000:5173 dtgl_test_todo' and go to localhost:3000