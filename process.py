from flask import Flask, render_template, url_for, request, jsonify, current_app
import pandas as pd

app = Flask(__name__)




@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process_qtc', methods=['POST', 'GET'])
def process_qt_calculation():
    if request.method == "POST":
        data = request.get_json()

        old_file = pd.read_excel(url_for("static", filename='maurizio_montanari_excel.xlsx', _external=True))
        new_file = pd.DataFrame([data], columns=data.keys())
        file = old_file.append(new_file)
        print(file)
        file.to_excel(current_app.root_path + r'\static\maurizio_montanari_excel.xlsx', index=False)

    results = {'processed': 'true'}
    return jsonify(results)


if __name__ == "__main__":
    app.run()
