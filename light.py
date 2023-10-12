import requests

# Replace with your Shelly Plug S IP address and port (usually 80)
shelly_ip = "your_shelly_ip"
shelly_port = 80

# Define the URL for controlling the plug
shelly_url = f"http://{shelly_ip}:{shelly_port}"

# Send an HTTP GET request to turn the plug on
response = requests.get(f"{shelly_url}/relay/on")

# Send an HTTP GET request to turn the plug off
response = requests.get(f"{shelly_url}/relay/off")

# You can also query the status of the plug
status_response = requests.get(f"{shelly_url}/relay")

print(status_response.json())