from urllib.parse import quote_plus 
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import random

chromedriver = "./chromedriver.exe"
url = "http://localhost:3000/"

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome(chromedriver, options=options)

driver.get(url)
for i in range(100):
    driver.find_element(By.CLASS_NAME, "button").click()
    for i in range(13):
        time.sleep(0.5)
        choice = driver.find_elements(By.CLASS_NAME, "question-choice")
        random.choice(choice).click()
    driver.refresh()