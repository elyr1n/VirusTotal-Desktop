import requests

url = "https://www.virustotal.com/api/v3/files/upload_url"

files = {"file": ("123.png", open("123.png", "rb"), "image/png")}
headers = {
    "accept": "application/json",
    "x-apikey": "9635abea9b6e9e63e6bac5756972d89279265d09b69a8162503a11e5e26060c5",
}

get_url = requests.get(url, headers=headers)
data = get_url.json()["data"]

get_id = requests.post(
    data,
    files=files,
    headers=headers,
)

id = get_id.json()["data"]["id"]

get_result = requests.get(
    f"https://www.virustotal.com/api/v3/analyses/{id}",
    headers=headers,
)

print(get_result.json())
