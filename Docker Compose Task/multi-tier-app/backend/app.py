from flask import Flask, jsonify, request
import psycopg2

app = Flask(__name__)

# Connect to PostgreSQL using 'db' as hostname
def get_db_connection():
    conn = psycopg2.connect(host='db', database='mydatabase', user='postgres', password='password')
    return conn

@app.route('/')
def index():
    return jsonify({"message": "Hello from the Flask API!"})

@app.route('/data', methods=['POST'])
def save_data():
    data = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO mytable (name) VALUES (%s)', (data['name'],))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"status": "success"}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
