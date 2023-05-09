from bs4 import BeautifulSoup
import requests
import pandas as pd

url = 'https://www.udistrital.edu.co/programas_pregrado'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Todos los resultados  Pregrados distri

# test = soup.find_all('a', target='_blank')
# print(test)

prg = soup.find_all('h3', class_='encabezados')
# prg = soup.h3

pregrados = list()

# Resultados limitados a 10:

count = 0
for i in prg:
    if count < 10:
        pregrados.append(i.text)
    else:
        break
    count += 1
print(pregrados)

# Data frame pandas
df = pd.DataFrame({'Nombre: ': pregrados}, index=list(range(1, 11)))
print(df)

# El formato de salida se puede mejorar.
