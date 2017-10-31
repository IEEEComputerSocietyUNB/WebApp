import time
from django.test import TestCase
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import requests

class TestSelenium(TestCase):

    def setUp(self):
        # create the fake browser
        self.driver = webdriver.Chrome()
        self.wait = WebDriverWait(self.driver, 10)
        self.page = 'http://localhost:8000'

    def waitForElement(self, type, name):
        if type == 'id':
            return self.wait.until(EC.visibility_of_element_located((By.ID,
                                                                    name)))
        elif type == 'class':
            return self.wait.until(EC.visibility_of_element_located((By.CLASS_NAME,
                                                            name)))

    def test_check_if_main_page_exists(self):
        status = requests.get(self.page).status_code
        self.driver.get(self.page)
        self.assertEqual(status, 200)
        self.assertTrue("Computer Society" in self.driver.title)

    def test_check_if_calendar_page_exists(self):
        page = self.page + '/calendar'
        status = requests.get(page).status_code
        self.driver.get(page)
        self.assertEqual(status, 200)

    # TODO: colocar um calendário de verdade!
    # def test_if_calendar_is_on_main_page(self):
    #     self.driver.get('http://localhost:8000')
    #     calendar = self.driver.find_element_by_id('calendar')
    #     self.assertEqual(calendar.text, '20/09/1994')

    def tearDown(self):
        # wait a little and close the fake web
        time.sleep(2)
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()
