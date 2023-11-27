# Freelance Market

This project, "Freelance Market," utilizes Django as its backend technology, while the frontend technology is yet to be determined. The application will implement a hybrid approach for its API, incorporating both GraphQL and REST.

## Installation

### Prerequisites

- Python (version >= 3.9)
- pip (Python package manager)
- Virtual environment (optional but recommended)

### Clone Repository

```bash
git clone https://github.com/H1ako/freelance_market
cd freelance_market
```

### Backend Setup

#### Create Virtual Environment (Optional)

```bash
python -m venv venv
# Activate the virtual environment
# For Windows
venv\Scripts\activate
# For macOS/Linux
source venv/bin/activate
```

#### Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

#### Database Migration

```bash
python manage.py makemigrations
python manage.py migrate
```

#### Run Development Server

```bash
python manage.py runserver
```

## Usage

Access the application in your web browser at `http://localhost:8000/` after starting the server.

## Technologies Used

- Django (Backend)
- [Frontend technology] (To be determined)
- GraphQL
- REST

## Contributing

Contributions are welcome!.

## License

This project is licensed under the [MIT License].