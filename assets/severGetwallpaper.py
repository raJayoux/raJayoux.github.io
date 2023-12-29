# Import the modules
import requests
import json
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime

# Define the function to get the Bing wallpaper
def getbingwallpaper():
    # Get request to the API endPoint
    response = requests.get("https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-US")
    data = response.json()
    wallpaper_url = data["url"]
    filename = wallpaper_url.split("/")[-1]
    # Download the image and save it to a folder
    image = requests.get(wallpaper_url)
    with open("assets/img/background-no-text.png", "wb") as f:
        f.write(image.content)
    print("Wallpaper downloaded: " + filename)

# Create a scheduler object
scheduler = BackgroundScheduler()

# Add a job to the scheduler with an interval trigger and a next run time
scheduler.add_job(getbingwallpaper, "interval", hours=24, next_run_time=datetime.now())

# Start the scheduler
scheduler.start()

# Keep the program running
while True:
    pass