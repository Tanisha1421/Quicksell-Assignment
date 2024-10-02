# Quicksell-Assignment
# Interactive Kanban Board

## Description
This is an interactive Kanban board application built using **React JS**. It interacts with the API at [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment) to display and manage tickets. The board allows users to group and sort tickets based on various criteria and saves the user's view state even after page reload, ensuring a seamless user experience.

## Features
- **Dynamic Grouping**: 
  - Group tickets by **Status**, **User**, or **Priority**.
  
- **Sorting Options**:
  - Sort tickets by **Priority** (in descending order).
  - Sort tickets by **Title** (in ascending order).

- **Persistent View State**:
  - The application saves the user's selected view (grouping and sorting) even after a page reload.

- **Responsive Design**:
  - The Kanban board adapts to various screen sizes, providing a user-friendly interface across devices.

## API Integration
This project integrates with the API from [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment) to fetch and display ticket data. Each ticket includes fields for **status**, **assigned user**, **priority**, and **title**.

### Priority Levels (Received from API):
- **4 - Urgent**
- **3 - High**
- **2 - Medium**
- **1 - Low**
- **0 - No priority**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tanisha1421/Quicksell-Assignment.git
2. Navigate to the project directory:
   ```bash
   cd kanban-board
3. Install dependencies:
   ```bash
   npm install
4. Run the development server:
   ```bash
   npm start
   
   
