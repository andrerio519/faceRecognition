import pandas as pd

# Baca file Excel
df = pd.read_excel('data.xlsx')

# Konversi dataframe menjadi JSON
json_data = df.to_json(orient='records')

# Simpan JSON ke dalam file
with open('data.json', 'w') as json_file:
    json_file.write(json_data)
