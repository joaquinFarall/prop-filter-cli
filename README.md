# Property Filter CLI

**Property Filter CLI** is a command-line tool developed in TypeScript to manage properties stored in a MongoDB database. It provides functionalities to add, update, delete, and filter properties using various criteria.

## **Requirements**

Before using the CLI, ensure the following dependencies are installed:

- **Node.js**: Version 20 or higher.
- **TypeScript**: Installed globally or configured in the project.
- **MongoDB**: Set up a MongoDB instance locally or remotely.
- **npm**: Used to manage dependencies and scripts.

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/joaquinFarall/prop-filter-cli
   cd prop-filter-cli
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Set up the required environment variables. For example, create a `.env` file with the following content:
   ```
   MONGO_URI=mongodb://localhost:27017/propsdb
   ```

4. Compile the project:
   ```bash
   npm run build
   ```

5. Link the CLI globally to use it anywhere:
   ```bash
   npm link
   ```

6. You can now use the command `prop-filter-cli`.

---

## **Usage**

The CLI offers the following commands:

### **1. `get`**
Retrieve properties from the database based on specified filters.

**Options**:
- `--eq <fields...>`: Filter by equality on multiple fields (e.g., `--eq price=500000 rooms=4`).
- `--lt <fields...>`: Filter by fields less than specified values (e.g., `--lt price=600000 rooms=5`).
- `--gt <fields...>`: Filter by fields greater than specified values (e.g., `--gt price=400000 rooms=3`).
- `--include <value>`: Filter properties that include a specific amenity (e.g., `--include garage`).
- `--match <text>`: Filter properties with descriptions containing specific text (e.g., `--match modern`).
- `--distance <lat,lon,maxDistance>`: Filter properties within a distance from a location (e.g., `--distance 40.730610,-73.935242,5000`).

**Example**:
```bash
prop-filter-cli get --eq price=500000 --lt rooms=5 --include pool
```

---

### **2. `add`**
Add a new property to the database.

**Required Options**:
- `-sf, --squareFootage <squareFootage>`: Property square footage.
- `-l, --lighting <lighting>`: Property lighting.
- `-p, --price <price>`: Property price.
- `-r, --rooms <rooms>`: Number of rooms.
- `-b, --bathrooms <bathrooms>`: Number of bathrooms.
- `-lo, --location <location>`: Location in the format `lat,long`.

**Optional Options**:
- `-d, --description <description>`: Property description.
- `-a, --ammenities <ammenities...>`: List of amenities (e.g., `garage pool`).

**Example**:
```bash
prop-filter-cli add -sf 120 -l bright -p 500000 -r 4 -b 2 -lo 40.730610,-73.935242 -d "Beautiful house" -a garage pool
```

---

### **3. `update`**
Update a property by its ID.

**Options**:
- `-i, --id <id>`: Property ID (required).
- Optional options: Any option used in `add` can be used here to update specific fields.

**Example**:
```bash
prop-filter-cli update -i 12345 -p 550000 -r 5
```

---

### **4. `delete`**
Delete a property by its ID.

**Options**:
- `-i, --id <id>`: Property ID (required).

**Example**:
```bash
prop-filter-cli delete -i 12345
```

---

## **Running Tests**

This project includes unit tests written with **Jest**.

### **Run Tests**
1. Ensure Jest is installed:
   ```bash
   npm install
   ```

2. Execute the tests:
   ```bash
   npm test
   ```

---

## **Updating the CLI**

If you make changes to the source code, follow these steps to update the globally linked CLI:

1. Rebuild the project:
   ```bash
   npm run build
   ```

2. Update the global link:
   ```bash
   npm unlink prop-filter-cli && npm link
   ```

---

## **Uninstalling**

To uninstall the CLI globally:
```bash
npm unlink -g prop-filter-cli
```

---

Enjoy using **Property Filter CLI** to efficiently manage your property data! 🎉