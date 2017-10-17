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
        self.driver = webdriver.Firefox()
        self.wait = WebDriverWait(self.driver, 10)

    def waitForElement(self, type, name):
        if type == 'id':
            return self.wait.until(EC.visibility_of_element_located((By.ID,
                                                                    name)))
        elif type == 'class':
            return self.wait.until(EC.visibility_of_element_located((By.CLASS_NAME,
                                                            name)))

    def test_pass(self):
        pass

    def test_check_if_main_page_exists(self):
        virtual_page = requests.get('http://localhost:5000')
        self.assertEqual(virtual_page.status_code, 200)

    # TODO: colocar um calendário de verdade!
    def test_if_calendar_is_on_main_page(self):
        self.driver.get('http://localhost:5000')
        calendar = self.driver.find_element_by_id('calendar')
        self.assertEqual(calendar.text, '20/09/1994')

    def tearDown(self):
        # wait a little and close the fake web
        time.sleep(2)
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()
